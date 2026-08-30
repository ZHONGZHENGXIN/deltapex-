import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react';
import * as OpenCC from 'opencc-js';

export type LanguageMode = 'zh-CN' | 'zh-TW';

interface LanguageContextType {
  language: LanguageMode;
  setLanguage: (lang: LanguageMode) => void;
  toggleLanguage: () => void;
  t: (text: string) => string;
  isTraditional: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'zh-CN',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (text: string) => text,
  isTraditional: false,
});

// Initialize OpenCC converters (pure JavaScript, bundled dictionaries)
const converterToTraditional = OpenCC.Converter({ from: 'cn', to: 'tw' });
const converterToSimplified = OpenCC.Converter({ from: 'tw', to: 'cn' });

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageMode>(() => {
    try {
      const saved = localStorage.getItem('deltapex_lang');
      if (saved === 'zh-TW' || saved === 'zh-CN') {
        return saved;
      }
      // Check browser default language preference
      if (typeof navigator !== 'undefined' && navigator.languages) {
        const hasTraditional = navigator.languages.some(
          l => l.toLowerCase().includes('hant') || l.toLowerCase() === 'zh-tw' || l.toLowerCase() === 'zh-hk'
        );
        if (hasTraditional) return 'zh-TW';
      }
    } catch {
      // fallback
    }
    return 'zh-CN';
  });

  const isTraditional = language === 'zh-TW';

  const setLanguage = useCallback((lang: LanguageMode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('deltapex_lang', lang);
    } catch (e) {
      console.warn('Unable to save language preference', e);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'zh-CN' ? 'zh-TW' : 'zh-CN');
  }, [language, setLanguage]);

  // Translation helper function for pure strings
  const t = useCallback((text: string): string => {
    if (!text || typeof text !== 'string') return text;
    if (language === 'zh-TW') {
      return converterToTraditional(text);
    } else {
      return converterToSimplified(text);
    }
  }, [language]);

  // Global DOM converter engine: ensures EVERY text node, title, placeholder, and dynamic element switches seamlessly
  useEffect(() => {
    // 1. Update HTML lang tag
    document.documentElement.lang = isTraditional ? 'zh-Hant' : 'zh-Hans';

    // 2. Update document title
    if (document.title) {
      document.title = isTraditional ? converterToTraditional(document.title) : converterToSimplified(document.title);
    }

    const currentConverter = isTraditional ? converterToTraditional : converterToSimplified;

    // Helper: Convert a single text node
    const convertTextNode = (node: Node) => {
      const text = node.nodeValue;
      if (text && text.trim().length > 0 && /[\u4e00-\u9fa5]/.test(text)) {
        const converted = currentConverter(text);
        if (converted !== text) {
          node.nodeValue = converted;
        }
      }
    };

    // Helper: Convert common attributes on an element
    const convertAttributes = (el: Element) => {
      const attrs = ['placeholder', 'title', 'aria-label', 'alt'];
      attrs.forEach(attr => {
        const val = el.getAttribute(attr);
        if (val && /[\u4e00-\u9fa5]/.test(val)) {
          const converted = currentConverter(val);
          if (converted !== val) {
            el.setAttribute(attr, converted);
          }
        }
      });
    };

    // Recursive full DOM scan
    const convertAllDOM = (root: Node = document.body) => {
      if (!root) return;
      
      const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            const parent = node.parentElement;
            if (parent && (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE' || parent.classList.contains('no-translate'))) {
              return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      );

      let currentNode = walker.nextNode();
      while (currentNode) {
        convertTextNode(currentNode);
        currentNode = walker.nextNode();
      }

      // Convert attributes on elements
      const elements = (root as Element).querySelectorAll ? (root as Element).querySelectorAll('*') : [];
      elements.forEach(el => convertAttributes(el));
    };

    // Perform initial DOM conversion
    convertAllDOM();

    // Set up MutationObserver to automatically convert dynamically rendered content (modals, dropdowns, route views, etc.)
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;
    const observer = new MutationObserver((mutations) => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        mutations.forEach(mutation => {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
              if (node.nodeType === Node.TEXT_NODE) {
                convertTextNode(node);
              } else if (node.nodeType === Node.ELEMENT_NODE) {
                convertAllDOM(node);
              }
            });
          } else if (mutation.type === 'characterData') {
            convertTextNode(mutation.target);
          } else if (mutation.type === 'attributes' && mutation.target instanceof Element) {
            convertAttributes(mutation.target);
          }
        });
      }, 50);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['placeholder', 'title', 'aria-label', 'alt']
    });

    return () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      observer.disconnect();
    };
  }, [language, isTraditional]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    toggleLanguage,
    t,
    isTraditional
  }), [language, setLanguage, toggleLanguage, t, isTraditional]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
