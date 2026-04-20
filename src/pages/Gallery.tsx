import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, ZoomIn, Eye } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    caption: "Precision Biohazard Remediation",
    category: "Biohazard"
  },
  {
    url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    caption: "Commercial Vehicle Incident Control",
    category: "Spill Response"
  },
  {
    url: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1200&auto=format&fit=crop",
    caption: "Specialized Odor Neutralization Systems",
    category: "Equipment"
  },
  {
    url: "https://images.unsplash.com/photo-1547683908-21aa53140b44?q=80&w=1200&auto=format&fit=crop",
    caption: "Natural Disaster Recovery Operations",
    category: "Disaster"
  },
  {
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
    caption: "Industrial Decontamination Protocols",
    category: "Industrial"
  },
  {
    url: "https://images.unsplash.com/photo-1581092921461-7d657444ff9f?q=80&w=1200&auto=format&fit=crop",
    caption: "Hazardous Material Cargo Recovery",
    category: "Logistics"
  },
  {
    url: "https://images.unsplash.com/photo-1504917595217-d4dc5f9c4708?q=80&w=1200&auto=format&fit=crop",
    caption: "On-Site Environmental Assessment",
    category: "Assessment"
  },
  {
    url: "https://images.unsplash.com/photo-1454165833267-028cc2402f0a?q=80&w=1200&auto=format&fit=crop",
    caption: "Industrial Spill Planning Strategy",
    category: "Planning"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pb-24 bg-ohr-bg min-h-screen">
      {/* Header */}
      <header className="bg-ohr-neutral py-20 text-white relative overflow-hidden border-b-6 border-ohr-neutral">
        <div className="absolute inset-0 opacity-10 grayscale contrast-150">
          <img 
            src="https://images.unsplash.com/photo-1581092921461-7d657444ff9f?q=80&w=2000&auto=format&fit=crop" 
            alt="Gallery bg" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-8">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
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
              onClick={() => setSelectedImage(image.url)}
            >
              <img 
                src={image.url} 
                alt={image.caption}
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-ohr-neutral/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 border-b-4 border-ohr-yellow">
                 <div className="absolute top-4 right-4 text-ohr-yellow">
                   <Eye className="w-6 h-6" />
                 </div>
                 <span className="text-[10px] font-bold text-ohr-yellow uppercase tracking-widest mb-1">{image.category}</span>
                 <h3 className="text-white font-black uppercase text-sm leading-tight tracking-tight">{image.caption}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-ohr-neutral/95 flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-5xl max-h-full overflow-hidden border-4 border-ohr-yellow shadow-2xl"
          >
            <img 
              src={selectedImage} 
              alt="Expanded view" 
              className="w-auto h-auto max-w-full max-h-[80vh] object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4">
               <button className="bg-ohr-yellow text-ohr-neutral p-4 font-black text-xs uppercase tracking-widest hover:bg-white transition-colors">
                 Close [ESC]
               </button>
            </div>
          </motion.div>
        </div>
      )}

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
