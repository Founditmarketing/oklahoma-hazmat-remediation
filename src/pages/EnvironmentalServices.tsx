import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Wind, BadgeCheck, Trash2, Briefcase, FileText, ArrowRight, ArrowLeft } from "lucide-react";

export default function EnvironmentalServices() {
  const services = [
    {
      id: "natural-disaster",
      title: "Natural Disaster Response",
      icon: <Wind className="w-8 h-8" />,
      image: "/ohr3.jpg",
      description: "Our disaster response team steps in to quickly restore safety and order after storms, floods, tornadoes, and other natural disasters."
    },
    {
      id: "livestock-recovery",
      title: "Livestock Recovery",
      icon: <BadgeCheck className="w-8 h-8" />,
      image: "/ohr11.jpg",
      description: "We provide safe and reliable livestock recovery for farmers, ranchers, and property owners. Certified by the Oklahoma Department of Agriculture."
    },
    {
      id: "waste-disposal",
      title: "Waste Disposal",
      icon: <Trash2 className="w-8 h-8" />,
      image: "/ohr2.jpg",
      description: "We provide professional handling, transportation, and disposal of both hazardous and non-hazardous waste in full regulatory compliance."
    },
    {
      id: "industrial-spill-planning",
      title: "Industrial Spill & Response Planning",
      icon: <Briefcase className="w-8 h-8" />,
      image: "/ohr10.jpeg",
      description: "These plans identify potential hazards, outline step-by-step procedures, and provide guidance for safe containment, cleanup, and disposal."
    },
    {
      id: "pre-planning",
      title: "Pre-Planning Services",
      icon: <FileText className="w-8 h-8" />,
      image: "/ohr9.jpeg",
      description: "Designed to help businesses, municipalities, and transportation companies develop a clear, actionable response plan before an incident occurs."
    }
  ];

  return (
    <div className="pb-24 bg-ohr-bg">
      <header className="bg-ohr-neutral py-20 text-white relative overflow-hidden text-center border-b-6 border-ohr-neutral">
        <div className="absolute inset-0 opacity-10">
          <img src="/ohr11.jpg" className="w-full h-full object-cover" alt="Environmental background" />
        </div>
        {/* Back nav row */}
        <div className="relative z-10 border-b border-white/10 mb-12">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-8 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ohr-green text-white text-[10px] font-mono font-bold uppercase tracking-[0.4em]">
              Long-term Stability
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight uppercase leading-[0.8]">Environmental & <span className="text-ohr-green">Recovery</span></h1>
            <p className="max-w-2xl mx-auto text-lg text-zinc-400 font-medium tracking-tight">
              Protecting Oklahoma's land and assets through rigorous waste management, disaster recovery, and strategic pre-planning protocols.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 caution-stripe" />
      </header>

      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col bg-white border-2 border-zinc-200 shadow-sm hover:shadow-2xl transition-all h-full"
          >
            <div className="h-48 overflow-hidden relative border-b-4 border-ohr-green">
               <img 
                 src={service.image} 
                 alt={service.title} 
                 className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
               />
            </div>
            <div className="p-8 flex-grow flex flex-col space-y-4">
              <h3 className="text-xl font-black uppercase tracking-tight leading-tight">{service.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">{service.description}</p>
              <Link to={`/services/${service.id}`} className="mt-auto pt-6 border-t border-zinc-50 flex items-center justify-between text-xs font-black uppercase tracking-widest text-ohr-green group/link">
                Strategy Brief <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="max-w-7xl mx-auto px-6 mt-24">
        <div className="bg-white p-12 text-ohr-neutral flex flex-col md:flex-row items-center justify-between gap-8 border-4 border-ohr-neutral">
          <div className="space-y-4">
            <h2 className="text-3xl font-black uppercase tracking-tighter">Prepare Your Organization Today</h2>
            <p className="text-zinc-500 max-w-xl font-medium italic">"The best remediation is the one that was planned for."</p>
          </div>
          <a href="/contact" className="btn btn-outline border-ohr-neutral text-ohr-neutral py-6 px-12">Consultation Request</a>
        </div>
      </section>
    </div>
  );
}
