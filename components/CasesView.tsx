import React, { useState, useMemo } from 'react';
import Navbar from './Navbar';
import Reveal from './Reveal';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'all' | 'exam-payout' | 'exam-pass' | 'live-payout' | 'feedback';

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'all', label: '全部' },
  { id: 'exam-payout', label: '考试盘出金' },
  { id: 'exam-pass', label: '考试盘通过' },
  { id: 'live-payout', label: '实盘盈利出金' },
  { id: 'feedback', label: '学员反馈' },
];

const R2_BASE_URL = "https://img.deltapextrading.com";

// Map category IDs to R2 folder names
const FOLDER_MAP: Record<Exclude<Category, 'all'>, string> = {
  'exam-pass': 'casesexam-passed',
  'exam-payout': 'casesexam-payout',
  'feedback': 'casesfeedback',
  'live-payout': 'casesreal-profit',
};

// Specific URLs provided by user to override auto-generation
const CUSTOM_URLS: Partial<Record<Exclude<Category, 'all'>, string[]>> = {
  'exam-pass': [
    "https://img.deltapextrading.com/casesexam-passed/6e8121747b58fad016a09bdd438733ad.jpg",
    "https://img.deltapextrading.com/casesexam-passed/736693c28895c5a3789609e748c11b1c.jpg",
    "https://img.deltapextrading.com/casesexam-passed/740f089501306405ed7ee2c25bb59fe2.jpg",
    "https://img.deltapextrading.com/casesexam-passed/7d82f345667b7ee193ad1788bc2fa779.jpg",
    "https://img.deltapextrading.com/casesexam-passed/7f722d15db78f668276fbe7a450f0472.jpg",
    "https://img.deltapextrading.com/casesexam-passed/820346f75095d9b2d28c2d29aa1d8eef.jpg",
    "https://img.deltapextrading.com/casesexam-passed/89c98001779de23a62d21b5e130f2657.jpg",
    "https://img.deltapextrading.com/casesexam-passed/a9b9467a-63f7-43a2-b767-f4595b44dfb5.jpg",
    "https://img.deltapextrading.com/casesexam-passed/b12acbeb80443b75defc4c0485207655.png",
    "https://img.deltapextrading.com/casesexam-passed/cbd7ebb139eac3bc2abd7895a1164321.jpg"
  ],
  'exam-payout': [
    "https://img.deltapextrading.com/casesexam-passed/e081f6ef3c9e89acc91f4f19757fff13.png",
    "https://img.deltapextrading.com/casesexam-passed/e96bac5d56fce364ba9fcf7c503d0777.jpg",
    "https://img.deltapextrading.com/casesexam-passed/ef91f34c4ae652ae38749209fe3c70fe.jpg",
    "https://img.deltapextrading.com/casesexam-passed/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_17611598224618.png",
    "https://img.deltapextrading.com/casesexam-payout/da37d283-9224-4ee5-b57b-cc1c5e27b5ba.png",
    "https://img.deltapextrading.com/casesexam-payout/ScreenShot_2025-11-26_134816_521.png",
    "https://img.deltapextrading.com/casesexam-payout/ScreenShot_2025-11-04_135620_411.png",
    "https://img.deltapextrading.com/casesexam-passed/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_17709056942303.png",
    "https://img.deltapextrading.com/casesexam-passed/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250901153452_452_153.jpg",
    "https://img.deltapextrading.com/casesexam-payout/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250902170635_474_153.jpg",
    "https://img.deltapextrading.com/casesexam-payout/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250902171653_482_153.png"
  ],
  'live-payout': [
    "https://img.deltapextrading.com/casesreal-profit/20240905_144217000_iOS.jpg",
    "https://img.deltapextrading.com/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5D3ff6516a5f12d5e059a139db4adbaee.png",
    "https://img.deltapextrading.com/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5D8d132c73b51450b7d42e37751c363d4.png",
    "https://img.deltapextrading.com/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-01-22%2017.44.58.png",
    "https://img.deltapextrading.com/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-01-22%2018.39.00.png",
    "https://img.deltapextrading.com/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-01-22%2018.43.29.png",
    "https://img.deltapextrading.com/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5D%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-04-02%2018.00.08.png",
    "https://img.deltapextrading.com/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5D%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-03-08%2000.19.02.png",
    "https://img.deltapextrading.com/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5D%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-03-07%2023.57.06.png"
  ],
  'feedback': [
    "https://img.deltapextrading.com/casesfeedback/21407c639e9544291631bd9271f262d8_compress.jpg",
    "https://img.deltapextrading.com/casesfeedback/%5B%E6%B0%B4%E5%8D%B0%5D6697819d19396c4fe1c4bf89ce188ae.png",
    "https://img.deltapextrading.com/casesfeedback/%5B%E6%B0%B4%E5%8D%B0%5D6faf2a46267cd4e5f1946d974b00213.png",
    "https://img.deltapextrading.com/casesfeedback/%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-02-08%2014.52.38.png",
    "https://img.deltapextrading.com/casesfeedback/%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-02-08%2015.06.28.png",
    "https://img.deltapextrading.com/casesfeedback/%5B%E6%B0%B4%E5%8D%B0%5D%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-02-27%2000.20.39.png",
    "https://img.deltapextrading.com/casesfeedback/%5B%E6%B0%B4%E5%8D%B0%5D%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-03-04%2013.17.56.png",
    "https://img.deltapextrading.com/casesfeedback/%5B%E6%B0%B4%E5%8D%B0%5D%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-03-04%2013.19.29.png",
    "https://img.deltapextrading.com/casesfeedback/a1ad2bb906d771d6b5a5d383bfef2fc.jpg",
    "https://img.deltapextrading.com/casesfeedback/%5B%E6%B0%B4%E5%8D%B0%5D%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-03-04%2013.22.07.png",
    "https://img.deltapextrading.com/casesfeedback/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250910095446_632_153.jpg"
  ]
};

// Generate image list based on assumption of ~50 images per folder
const IMAGE_COUNT = 50;

interface CaseImage {
  id: string;
  url: string;
  category: Category;
}

const CasesView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Generate images dynamically
  const allImages = useMemo(() => {
    const images: CaseImage[] = [];
    
    // Helper to add images for a category
    const addImagesForCategory = (cat: Exclude<Category, 'all'>) => {
      const customList = CUSTOM_URLS[cat];
      
      if (customList && customList.length > 0) {
        // Use provided custom URLs
        customList.forEach((url, index) => {
          images.push({
            id: `${cat}-custom-${index}`,
            url: url,
            category: cat
          });
        });
      } else {
        // Fallback to auto-generation loop
        const folder = FOLDER_MAP[cat];
        for (let i = 1; i <= IMAGE_COUNT; i++) {
          images.push({
            id: `${cat}-${i}`,
            url: `${R2_BASE_URL}/${folder}/${i}.webp`,
            category: cat
          });
        }
      }
    };

    // If specific category selected, only load that. If 'all', load everything (interleaved or grouped)
    // To make 'all' look diverse, we can interleave them or just concat.
    // Let's concat all for now to keep it simple, filtering happens next.
    (Object.keys(FOLDER_MAP) as Array<Exclude<Category, 'all'>>).forEach(cat => {
      addImagesForCategory(cat);
    });

    return images;
  }, []);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') {
      // Shuffle or just return all? Returning all might be too many images (200+).
      // Let's return all for now, masonry handles layout.
      // Maybe shuffle them deterministically so 'all' view is interesting?
      // For now, just return all sorted by category as generated.
      return allImages;
    }
    return allImages.filter(img => img.category === activeCategory);
  }, [activeCategory, allImages]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-display tracking-tight">
              实战战果公示
            </h1>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeCategory === cat.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:bg-slate-50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Masonry Layout using CSS columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className="break-inside-avoid bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group mb-6"
              >
                <div 
                  className="relative overflow-hidden cursor-zoom-in"
                  onClick={() => setSelectedImage(img.url)}
                >
                  <img 
                    src={img.url} 
                    alt="Trading Result" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      // Hide image if it fails to load (e.g. 404)
                      (e.target as HTMLImageElement).closest('.break-inside-avoid')?.classList.add('hidden');
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <i className="fa-solid fa-magnifying-glass-plus text-xl"></i>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <p>暂无相关案例数据</p>
          </div>
        )}
      </main>

      <Footer />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-md px-4 py-8 cursor-zoom-out transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center">
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 group scale-100 opacity-100 transition-all duration-300" onClick={(e) => e.stopPropagation()}>
              <img 
                src={selectedImage} 
                className="max-w-full max-h-[85vh] object-contain" 
                alt="Trading Result Preview"
              />
              <button 
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm border border-white/10"
                onClick={() => setSelectedImage(null)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CasesView;
