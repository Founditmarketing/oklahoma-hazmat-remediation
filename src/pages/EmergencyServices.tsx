import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Biohazard, AlertTriangle, Truck, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";

export default function EmergencyServices() {
  const services = [
    {
      id: "biohazard-cleanup",
      title: "Biohazard Cleanup Services",
      icon: <Biohazard className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
      description: "Our team uses specialized equipment, medical-grade cleaning agents, and proven containment methods to fully remove contamination and restore safety."
    },
    {
      id: "unattended-death",
      title: "Unattended Death Cleanups",
      icon: <AlertTriangle className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=600&auto=format&fit=crop",
      description: "We handle every situation with sensitivity, ensuring families and property owners are supported through each step of the process. Our technicians carefully remove all biological hazards."
    },
    {
      id: "vehicle-accident",
      title: "Commercial Vehicle Accident Cleanup",
      icon: <Truck className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop",
      description: "We provide fast, thorough cleanup and cargo recovery to restore safety and get roadways back to normal as quickly as possible."
    },
    {
      id: "crime-scene",
      title: "Crime Scene Cleanup",
      icon: <ShieldCheck className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
      description: "We handle crime scene cleanup with professionalism, discretion, and care. Our team responds promptly to remove all biohazards and restore safety."
    },
    {
      id: "blood-cleanup",
      title: "Blood Cleanup",
      icon: <Biohazard className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
      description: "Blood and bodily fluids can carry serious risks if not handled correctly. Our specialists use proven methods and equipment for full disinfection."
    },
    {
      id: "load-transfers",
      title: "LOAD TRANSFERS & SHIFT RECOVERY",
      icon: <Truck className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=600&auto=format&fit=crop",
      description: "When cargo shifts or spills on the roadway, OHR secures, recovers, and transfers loads safely to reduce downtime and keep highways open."
    }
  ];

  return (
    <div className="pb-24 bg-ohr-bg">
      <header className="bg-ohr-neutral py-20 text-white relative overflow-hidden text-center border-b-6 border-ohr-neutral">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Emergency background" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-8">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ohr-red text-white text-[10px] font-mono font-bold uppercase tracking-[0.4em]">
              Critical Response Hub
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight uppercase leading-[0.8]">Emergency <span className="text-ohr-red">Response</span></h1>
            <p className="max-w-2xl mx-auto text-lg text-zinc-400 font-medium tracking-tight text-center">
              Immediate deployment for high-stakes remediation. OHR is Oklahoma's primary shield against biohazard, trauma, and highway spill chaos.
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
            <div className="h-48 overflow-hidden relative border-b-4 border-ohr-red">
               <img 
                 src={service.image} 
                 alt={service.title} 
                 className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="p-8 flex-grow flex flex-col space-y-4">
              <h3 className="text-xl font-black uppercase tracking-tight leading-tight">{service.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">{service.description}</p>
              <Link to={`/services/${service.id}`} className="mt-auto pt-6 border-t border-zinc-50 flex items-center justify-between text-xs font-black uppercase tracking-widest text-ohr-red group/link">
                Operational Details <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="max-w-7xl mx-auto px-6 mt-24">
        <div className="bg-ohr-neutral p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 border-l-8 border-ohr-red">
          <div className="space-y-4">
            <h2 className="text-3xl font-black uppercase tracking-tighter">Immediate Crisis Assistance Needed?</h2>
            <p className="text-zinc-400 max-w-xl font-medium">Do not wait. Our dispatch center is active 24/7/365 to deploy specialists to your location immediately.</p>
          </div>
          <a href="tel:4054942889" className="btn btn-red text-xl py-6 px-12">405.494.2889</a>
        </div>
      </section>
    </div>
  );
}
