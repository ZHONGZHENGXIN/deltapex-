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

const R2_BASE_URL = "https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev";

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
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/0a4b9cbfc0ddb4d7a94f9ea5beef4ce2.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/0b6ba1a220bffabe7c0eeaf07aa41148.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/0dcc4b1981b037a7ed46f4baacec0ffa.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/1ea68d3ed6f5995a0caccb4cfa0e0bd4.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/1f38eac3424f90a1a3090a5966423755.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/2049b886-d703-469d-be45-14c810dff058.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/21199131a4f30aab7ea1f2d10f41f0ad.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/21a4dbfb1be88132f405fab70ba42f3f.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/23780c45139ec9d173c3156fd6d0a67c.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/27272918a19496bc21c46a95c231e4f0.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/28184c08-2e31-423b-9f5f-aeb116c89e34.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/28ffbbcd-e90d-4719-ad6b-f8e30a4945e0.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/29aa8dd2-acf1-4e39-b08f-1028d9002a9a.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/2e75dabd48d288633ed196305d1cc2b1.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/4cf51541c934ab82f62f046567e0bc11.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/572a4f34ebe7d19d75958cdbf5383159.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/5c3dbb5d2588c9ff43f75541922bd4b3.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/5cf77ada7e58a2ceefa047bce5cab75e.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/660cfc17ad4123f049311250b7f73527.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/68b87c25277ad0548b44bb5c5cf1e46e.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/6e8121747b58fad016a09bdd438733ad.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/736693c28895c5a3789609e748c11b1c.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/740f089501306405ed7ee2c25bb59fe2.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/7d82f345667b7ee193ad1788bc2fa779.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/7f722d15db78f668276fbe7a450f0472.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-passed/820346f75095d9b2d28c2d29aa1d8eef.jpg"
  ],
  'exam-payout': [
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-payout/7c153ef4-3b38-4746-8c96-97570f5caadd.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-payout/80a12820-4574-48d2-be35-041c811e5b3a.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-payout/ScreenShot_2025-10-29_111711_614.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-payout/ScreenShot_2025-11-04_135620_411.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-payout/ScreenShot_2025-11-06_152312_795.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-payout/ScreenShot_2025-11-11_143538_583.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-payout/ScreenShot_2025-11-18_135618_627.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-payout/ScreenShot_2025-11-26_134816_521.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-payout/%5B%E6%B0%B4%E5%8D%B0%5D%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-03-08%2000.25.18.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-payout/%5B%E6%B0%B4%E5%8D%B0%5D%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-03-08%2000.34.10.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-payout/da37d283-9224-4ee5-b57b-cc1c5e27b5ba.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-payout/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250902170632_473_153.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-payout/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250902171653_482_153.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesexam-payout/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250902170635_474_153.jpg"
  ],
  'live-payout': [
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/20240905_144217000_iOS.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/8f93e1d8-0464-4075-910f-73b8e4b0cd68.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5D347c0b3c4559f8fb0044a3c8ad78118-1.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5D3ff6516a5f12d5e059a139db4adbaee.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5D46c41fe145240400f8f1876f6e3c28a.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5D8d132c73b51450b7d42e37751c363d4.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-01-22%2017.38.56.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-01-22%2017.44.58.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-01-22%2018.36.13.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-01-22%2018.36.53.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-01-22%2018.39.00.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-01-22%2018.39.17.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-01-22%2018.39.59.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-01-22%2018.40.31.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-01-22%2018.49.42.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5D%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-04-03%2016.27.33.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%5B%E6%B0%B4%E5%8D%B0%5D%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-04-03%2016.27.42.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/f7d30904-803c-4266-b0e8-4b39ad1b1cc1.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250826162853_360_153.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250826162857_361_153.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250826163044_364_153.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250826163049_365_153.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesreal-profit/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250826163233_368_153.jpg"
  ],
  'feedback': [
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/21407c639e9544291631bd9271f262d8_compress.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/735c4246-6e4d-4fdb-83b5-faffb3df2efa.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/%5B%E6%B0%B4%E5%8D%B0%5D02e14261f8e5c8edd7eaa9b928f1cd9.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/%5B%E6%B0%B4%E5%8D%B0%5D0bd65acf3a801df100a54e9c0c1a5dd0.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/%5B%E6%B0%B4%E5%8D%B0%5D6697819d19396c4fe1c4bf89ce188ae.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/%5B%E6%B0%B4%E5%8D%B0%5D6faf2a46267cd4e5f1946d974b00213.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/%5B%E6%B0%B4%E5%8D%B0%5D948e41003ba7866c66ddb38059205fe-1.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-01-22%2017.40.29.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-01-22%2018.47.51.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/%5B%E6%B0%B4%E5%8D%B0%5DClipboard%20-%202025-02-08%2015.06.28.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/%5B%E6%B0%B4%E5%8D%B0%5D%5B%E6%B0%B4%E5%8D%B0%5D96b14df026c88ef0ea74c38a226c55f.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/b6b3106fb55ccdc86a261b7d9c7846c6.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/d7fb6c68d6ddd179434122af267b75d-2.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250829162700_445_153.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250902171304_478_153.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250908174545_579_153.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250908174549_580_153.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250910095445_630_153.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250910095445_631_153.jpg",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250917161343_777_153.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250917161348_778_153.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250918161857_792_153.png",
    "https://pub-0e441c0de2804950b2e1ab9e7cf7476d.r2.dev/casesfeedback/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250918161902_793_153.jpg"
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
            <div className="flex justify-center mb-6">
              <a href="/" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-white transition-all duration-300 text-sm font-medium">
                <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
                返回主页
              </a>
            </div>
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
