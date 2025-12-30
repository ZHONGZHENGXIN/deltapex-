/**
 * Fix: Manually defining Vite environment types to resolve the 'Cannot find type definition file' error.
 * This replaces the '/// <reference types="vite/client" />' directive which is failing to resolve in this environment.
 * These declarations provide the necessary typing for import.meta.env and common asset imports (SVG, PNG, etc.).
 */

declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
    [key: string]: any;
  }
}

interface ImportMetaEnv {
  readonly [key: string]: any;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}