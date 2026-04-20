import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, ZoomIn, Eye, X } from "lucide-react";
import { useState, useEffect } from "react";

const galleryImages = [
  {
    url: "/ohr1.jpg",
    caption: "Precision Biohazard Remediation",
    category: "Biohazard"
  },
  {
    url: "/ohr2.jpg",
    caption: "Commercial Vehicle Incident Control",
    category: "Spill Response"
  },
  {
    url: "/ohr3.jpg",
    caption: "Specialized Odor Neutralization Systems",
    category: "Equipment"
  },
  {
    url: "/ohr4.jpg",
    caption: "Natural Disaster Recovery Operations",
    category: "Disaster"
  },
  {
    url: "/ohr5.jpg",
    caption: "Industrial Decontamination Protocols",
    category: "Industrial"
  },
  {
    url: "/ohr6.jpg",
    caption: "Hazardous Material Cargo Recovery",
    category: "Logistics"
  },
  {
    url: "/ohr7.jpg",
    caption: "On-Site Environmental Assessment",
    category: "Assessment"
  },
  {
    url: "/ohr8.jpg",
    caption: "Industrial Spill Planning Strategy",
    category: "Planning"
  }
];

type GalleryImage = typeof galleryImages[0];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="pb-24 bg-ohr-bg min-h-screen">
      {/* Header */}
      <header className="bg-ohr-neutral py-20 text-white relative overflow-hidden border-b-6 border-ohr-neutral">
        <div className="absolute inset-0 opacity-10 grayscale contrast-150">
          <img 
            src="/ohr8.jpg" 
            alt="Gallery bg" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Back nav row */}
        <div className="relative z-10 border-b border-white/10 mb-12">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ohr-yellow text-ohr-neutral text-[10px] font-mono font-bold uppercase tracking-[0.4em]">
              Operational Archive
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight uppercase leading-[0.8]">Service <span className="text-ohr-yellow">Gallery</span></h1>
            <p className="max-w-2xl text-lg text-zinc-400 font-medium tracking-tight">
              A visual record of OHR's field operations, equipment capability, and success in restoring order to environmental chaos across Oklahoma.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 caution-stripe" />
      </header>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden border-2 border-zinc-200 bg-white"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.url} 
                alt={image.caption}
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-ohr-neutral/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 border-b-4 border-ohr-yellow">
                 <div className="absolute top-4 right-4 text-ohr-yellow">
                   <ZoomIn className="w-6 h-6" />
                 </div>
                 <span className="text-[10px] font-bold text-ohr-yellow uppercase tracking-widest mb-1">{image.category}</span>
                 <h3 className="text-white font-black uppercase text-sm leading-tight tracking-tight">{image.caption}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-w-5xl w-full overflow-hidden border-4 border-ohr-yellow shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.caption}
                className="w-full h-auto max-h-[80vh] object-contain bg-zinc-900"
              />
              {/* Caption bar */}
              <div className="bg-zinc-900 border-t-4 border-ohr-yellow px-6 py-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-ohr-yellow uppercase tracking-widest block mb-0.5">{selectedImage.category}</span>
                  <h3 className="text-white font-black uppercase text-sm leading-tight tracking-tight">{selectedImage.caption}</h3>
                </div>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="flex items-center gap-2 bg-ohr-yellow text-ohr-neutral px-4 py-2 font-black text-xs uppercase tracking-widest hover:bg-white transition-colors"
                >
                  <X className="w-4 h-4" /> Close
                </button>
              </div>
            </motion.div>

            {/* ESC hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
              Press ESC or click outside to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
         <div className="bg-zinc-900 p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 border-l-8 border-ohr-yellow shadow-2xl overflow-hidden relative group">
            <div className="absolute inset-0 caution-stripe opacity-5 grayscale group-hover:scale-105 transition-transform duration-700" />
            <div className="space-y-4 relative z-10">
              <h3 className="text-4xl font-black uppercase tracking-tight">Technical Mastery <span className="text-ohr-yellow">On Display</span></h3>
              <p className="text-zinc-400 max-w-xl font-medium">Our gallery represents a fraction of our field successes. Contact us to discuss site-specific implementation for your facility or fleet.</p>
            </div>
            <Link to="/contact" className="btn bg-ohr-yellow text-ohr-neutral text-xl py-6 px-12 hover:bg-white relative z-10 shadow-lg transform hover:-translate-y-1 transition-all">
              REQUEST QUOTE
            </Link>
         </div>
      </div>
    </div>
  );
}
