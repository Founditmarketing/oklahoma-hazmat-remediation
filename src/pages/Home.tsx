import { motion, AnimatePresence } from "motion/react";
import { 
  Truck, 
  Biohazard as BiohazardIcon, 
  Wind, 
  Trash2, 
  ArrowRight, 
  PhoneCall, 
  ShieldCheck, 
  MapPin,
  Clock,
  Briefcase,
  BadgeCheck,
  AlertTriangle,
  FileText,
  ZoomIn,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImg(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  const emergencyServices = [
    {
      title: "Biohazard Cleanup Services",
      description: "Our team uses specialized equipment, medical-grade cleaning agents, and proven containment methods to fully remove contamination and restore safety.",
      link: "/services/biohazard-cleanup",
      icon: <BiohazardIcon className="w-6 h-6" />
    },
    {
      title: "Unattended Death Cleanups",
      description: "We handle every situation with sensitivity, ensuring families and property owners are supported through each step of the process. Our technicians carefully remove all biological hazards, disinfect contaminated surfaces, and eliminate any lingering odors.",
      link: "/services/unattended-death",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Commercial Vehicle Accident Cleanup",
      description: "We provide fast, thorough cleanup and cargo recovery to restore safety and get roadways back to normal as quickly as possible. Our team responds promptly to secure the accident scene and contain hazardous materials.",
      link: "/services/vehicle-accident",
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: "Crime Scene Cleanup",
      description: "We handle crime scene cleanup with professionalism, discretion, and care. Our team responds promptly to remove all biohazards, disinfect surfaces, and restore the environment to a fully safe and sanitary condition.",
      link: "/services/crime-scene",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Blood Cleanup",
      description: "Blood and bodily fluids can carry serious risks if not handled correctly. Our specialists use proven methods and equipment to ensure every surface is cleaned and disinfected.",
      link: "/services/blood-cleanup",
      icon: <BiohazardIcon className="w-6 h-6" />
    },
    {
      title: "LOAD TRANSFERS & SHIFT RECOVERY",
      description: "When cargo shifts or spills on the roadway, OHR secures, recovers, and transfers loads safely. Our fast action reduces downtime and keeps highways open for travel.",
      link: "/services/load-transfers",
      icon: <Truck className="w-6 h-6" />
    },
  ];

  const environmentalServices = [
    {
      title: "Natural Disaster Response",
      description: "Our disaster response team steps in to quickly restore safety and order after storms, floods, tornadoes, and other natural disasters. We assess affected areas, remove hazardous materials, and clear debris.",
      link: "/services/natural-disaster",
      icon: <Wind className="w-6 h-6" />
    },
    {
      title: "Livestock Recovery",
      description: "We provide safe and reliable livestock recovery for farmers, ranchers, and property owners. Certified by the Oklahoma Department of Agriculture, our team handles livestock recovery, cleanup, and disposal.",
      link: "/services/livestock-recovery",
      icon: <BadgeCheck className="w-6 h-6" />
    },
    {
      title: "Waste Disposal",
      description: "We provide professional handling, transportation, and disposal of both hazardous and non-hazardous waste. Our team ensures all waste is managed responsibly and safely according to federal regulations.",
      link: "/services/waste-disposal",
      icon: <Trash2 className="w-6 h-6" />
    },
    {
      title: "Industrial Spill & Response Planning",
      description: "These plans identify potential hazards and provide guidance for safe containment, cleanup, and disposal. Preparing ahead reduces downtime and limits environmental impact.",
      link: "/services/industrial-spill-planning",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Pre-Planning Services",
      description: "Designed to help businesses and municipalities develop a clear, actionable response plan before an incident occurs. Proper planning reduces downtime and keeps everyone safe.",
      link: "/services/pre-planning",
      icon: <FileText className="w-4 h-4" />
    },
  ];

  const galleryImages = [
    "/ohr4.jpg",
    "/ohr5.jpg",
    "/ohr6.jpg",
    "/ohr7.jpg",
  ];

  return (
    <>
    <div className="flex flex-col bg-ohr-bg min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[450px] flex items-center overflow-hidden bg-zinc-900 px-6 md:px-16 border-b-4 border-ohr-neutral">
        <div className="absolute inset-0 z-0">
          <img 
            src="/ohr1.jpg" 
            alt="Industrial truck" 
            className="w-full h-full object-cover opacity-20 grayscale brightness-150"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/60 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ohr-red text-white text-xs font-black uppercase tracking-[0.3em]">
              <span className="animate-pulse">●</span> 24/7 Rapid Dispatch
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-[0.9] uppercase tracking-tighter">
              Oklahoma’s Shield <br/>Against <span className="text-ohr-red">Environmental Chaos</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl font-medium tracking-tight border-l-4 border-ohr-tan pl-6">
              35+ Years of Front-Line Experience. Certified specialists for Highway, Industrial, and Biohazard Emergencies across the Heartland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="tel:4054942889" className="btn btn-red scale-110">EMERGENCY CALL: 405.494.2889</a>
              <Link to="/contact" className="btn btn-outline hover:text-black">Get a Compliance Quote</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section className="bg-white border-b-2 border-zinc-200">
        {/* Top: image + intro */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 md:p-24 space-y-8 border-r border-zinc-100">
            <h4 className="text-xs font-black uppercase text-ohr-tan tracking-[0.3em]">Who We Are</h4>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Built to Solve <br/><span className="text-ohr-red">The Professional Gap.</span>
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Founded in 2024 and backed by over 35 years of combined industry experience, Oklahoma Hazmat &amp; Remediation (OHR) brings expert-level knowledge and precision to every cleanup and remediation project across the state.
            </p>
            <p className="text-zinc-500 leading-relaxed">
              We specialize in hazmat cleanup, highway spill response, biohazard and crime scene cleanup, industrial spill management, natural disaster response, and livestock recovery. From small-scale incidents to major emergencies — our goal is always the same: restore safety quickly while maintaining the highest environmental and regulatory standards.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-ohr-red border-b-2 border-ohr-red pb-1 hover:text-ohr-neutral hover:border-ohr-neutral transition-colors">
              Learn More About OHR <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative overflow-hidden group">
            <img 
              src="/ohr2.jpg" 
              alt="OHR operations" 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-ohr-red/10 mix-blend-multiply" />
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t-2 border-zinc-100">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-100">
            {[
              { label: "Years Experience", value: "35+" },
              { label: "Base of Operations", value: "DEL CITY, OK" },
              { label: "Response Coverage", value: "STATEWIDE" },
              { label: "Availability", value: "24 / 7 / 365" },
            ].map((stat, i) => (
              <div key={i} className="px-8 py-10 space-y-1">
                <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">{stat.label}</p>
                <p className="text-xl font-black text-ohr-neutral tracking-tight">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission + Certifications */}
        <div className="border-t-2 border-zinc-100 bg-zinc-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Mission */}
            <div className="p-12 md:p-16 space-y-6 border-r border-zinc-200">
              <h4 className="text-xs font-black uppercase text-ohr-red tracking-[0.3em]">Our Mission</h4>
              <p className="text-zinc-700 text-lg leading-relaxed font-medium italic border-l-4 border-ohr-red pl-6">
                "True recovery means more than cleanup — it means helping communities and businesses return to normal safely and responsibly."
              </p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Every member of the OHR team is trained to respond with compassion, care, and professionalism. Whether it's recovering cargo after a highway accident, cleaning up a contaminated site, or providing safe holding for displaced livestock, we work with urgency and respect for those affected.
              </p>
            </div>
            {/* Certifications */}
            <div className="p-12 md:p-16 space-y-6">
              <h4 className="text-xs font-black uppercase text-ohr-red tracking-[0.3em]">Certifications &amp; Compliance</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                OHR holds active certifications with federal and state regulatory bodies, ensuring every operation meets the highest legal and environmental standards.
              </p>
              <div className="space-y-3">
                {[
                  { body: "FMCSA", full: "Federal Motor Carrier Safety Administration" },
                  { body: "ODQ", full: "Oklahoma Department of Quality" },
                  { body: "OK Dept. of Agriculture", full: "Livestock Recovery &amp; Agricultural Response" },
                ].map((cert, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white border border-zinc-200 border-l-4 border-l-ohr-neutral">
                    <ShieldCheck className="w-5 h-5 text-ohr-neutral flex-shrink-0" />
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-ohr-neutral">{cert.body}</p>
                      <p className="text-xs text-zinc-400 font-medium" dangerouslySetInnerHTML={{ __html: cert.full }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EMERGENCY RESPONSE SERVICES */}
      <section className="relative overflow-hidden py-24 bg-zinc-50 border-b-2 border-zinc-200">
        <div className="absolute inset-0 z-0">
          <img 
            src="/ohr3.jpg" 
            alt="Emergency response scene" 
            className="w-full h-full object-cover opacity-25 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-zinc-50/40 to-zinc-50" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b-2 border-ohr-neutral pb-8">
             <div className="space-y-2">
               <h4 className="text-xs font-black uppercase text-ohr-red tracking-[0.3em]">Category 01</h4>
               <h2 className="text-4xl font-black uppercase tracking-tight">Emergency Response <span className="text-ohr-red">Services</span></h2>
             </div>
             <Link to="/emergency-services" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:text-ohr-red transition-colors">
               View All Emergency <ArrowRight className="w-4 h-4" />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyServices.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className={`p-8 bg-white/90 backdrop-blur-sm border-2 border-zinc-200 border-l-8 border-l-ohr-red flex flex-col gap-4 shadow-sm hover:shadow-xl transition-all`}
              >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-zinc-50 border border-zinc-200 text-ohr-neutral">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight leading-tight">{service.title}</h3>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed">{service.description}</p>
              <Link to={service.link} className="mt-auto pt-4 border-t border-zinc-50 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest group">
                Service Details <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      {/* 4. ENVIRONMENTAL & RECOVERY SERVICES */}
      <section className="bg-zinc-900 py-32 border-y-4 border-ohr-neutral">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b-2 border-white/10 pb-8">
             <div className="space-y-2">
               <h4 className="text-xs font-black uppercase text-ohr-green tracking-[0.3em]">Category 02</h4>
               <h2 className="text-4xl font-black uppercase tracking-tight text-white">Environmental & <span className="text-ohr-green">Recovery</span></h2>
             </div>
             <Link to="/environmental-services" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-white hover:text-ohr-green transition-colors">
               Explore Disaster Plans <ArrowRight className="w-4 h-4" />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {environmentalServices.map((service, idx) => (
              <div key={idx} className="bg-zinc-800/50 p-8 border border-white/5 hover:bg-zinc-800 transition-colors space-y-6 flex flex-col">
                <div className="text-ohr-green">{service.icon}</div>
                <h3 className="text-lg font-black uppercase text-white tracking-tight leading-tight">{service.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{service.description}</p>
                <div className="pt-4 flex justify-end items-center mt-auto">
                   <Link to={service.link} className="p-2 border border-white/10 hover:border-ohr-green hover:text-ohr-green text-white transition-all">
                     <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-12">
        <div className="text-center space-y-2">
            <h4 className="text-xs font-black uppercase text-zinc-400 tracking-[0.3em]">Visual Proof</h4>
            <h2 className="text-4xl font-black uppercase tracking-tight">On-Site Execution <span className="text-ohr-red">Gallery</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="aspect-square overflow-hidden border-2 border-zinc-100 group cursor-pointer relative"
              onClick={() => setLightboxImg(img)}
            >
              <img 
                src={img} 
                alt={`Remediation scene ${idx + 1}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. DISPATCH / CONTACT SECTION */}
      <section className="bg-ohr-light-gray py-24 border-t-2 border-ohr-neutral relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full caution-stripe opacity-5 -skew-x-12" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div className="space-y-4">
               <h4 className="text-xs font-black uppercase text-ohr-red tracking-[0.4em]">Get Dispatched</h4>
               <h2 className="text-5xl font-black uppercase tracking-tighter">Oklahoma’s Responsive <span className="text-ohr-red">Nerve Center.</span></h2>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                 <div className="p-4 bg-white border border-zinc-200"><MapPin className="w-6 h-6 text-ohr-red" /></div>
                 <div>
                    <h4 className="font-black uppercase tracking-widest text-sm">Strategic Hub</h4>
                    <p className="text-zinc-600">317 South Scott Street, Del City, OK 73115</p>
                 </div>
              </div>
              <div className="flex gap-6 items-start">
                 <div className="p-4 bg-white border border-zinc-200"><Clock className="w-6 h-6 text-ohr-red" /></div>
                 <div>
                    <h4 className="font-black uppercase tracking-widest text-sm">24/7 Availability</h4>
                    <p className="text-zinc-600">Continuous monitoring of all Oklahoma Interstates and Industrial Corridors.</p>
                 </div>
              </div>
            </div>

            <div className="p-8 bg-zinc-900 text-white space-y-6">
               <div className="flex items-center gap-3 text-ohr-red">
                 <PhoneCall className="w-6 h-6 animate-bounce" />
                 <span className="font-black tracking-widest uppercase text-xs">Emergency Hotline</span>
               </div>
               <a href="tel:4054942889" className="text-4xl font-black tracking-tighter hover:text-ohr-red transition-colors block underline decoration-ohr-red/30 underline-offset-8">
                  405.494.2889
               </a>
            </div>
          </div>

          <div className="bg-white p-10 border-4 border-ohr-neutral shadow-2xl relative">
             <div className="absolute -top-4 right-8 bg-ohr-red text-white text-[10px] font-black uppercase px-4 py-2 tracking-widest">
                Rapid Response Protocol
             </div>
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Organization / Name</label>
                  <input type="text" placeholder="Acme Logistics / John Doe" className="w-full p-4 bg-zinc-50 border-2 border-zinc-100 focus:border-ohr-red outline-none transition-all font-bold text-xs uppercase tracking-widest" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Incident Category</label>
                    <select className="w-full p-4 bg-zinc-50 border-2 border-zinc-100 focus:border-ohr-red outline-none transition-all font-bold text-xs uppercase tracking-widest">
                       <option>Highway Spill</option>
                       <option>Biohazard</option>
                       <option>Industrial Recovery</option>
                       <option>Agricultural Incident</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Urgency</label>
                    <select className="w-full p-4 bg-zinc-50 border-2 border-zinc-100 focus:border-ohr-red outline-none transition-all font-bold text-xs uppercase tracking-widest">
                       <option>Immediate (15m Dispatch)</option>
                       <option>Urgent (1h Response)</option>
                       <option>Quote Request</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1">
                   <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Location of Incident</label>
                   <textarea rows={3} placeholder="GPS or Address..." className="w-full p-4 bg-zinc-50 border-2 border-zinc-100 focus:border-ohr-red outline-none transition-all font-bold text-xs uppercase tracking-widest resize-none" />
                </div>
                <button className="btn btn-red w-full py-6 text-base tracking-[0.2em]">Initiate Alert Protocol</button>
                <div className="flex items-center gap-2 justify-center text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                   <ShieldCheck className="w-3 h-3 text-ohr-green" /> Authenticated & Secure Dispatch Tracking
                </div>
             </form>
          </div>
        </div>
      </section>
    </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            key="home-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-12"
            onClick={() => setLightboxImg(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-w-4xl w-full overflow-hidden border-4 border-ohr-red shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImg}
                alt="Enlarged view"
                className="w-full h-auto max-h-[80vh] object-contain bg-zinc-900"
              />
              <div className="bg-zinc-900 border-t-4 border-ohr-red px-6 py-4 flex items-center justify-between">
                <span className="text-[10px] font-bold text-ohr-red uppercase tracking-widest">On-Site Execution Gallery</span>
                <button
                  onClick={() => setLightboxImg(null)}
                  className="flex items-center gap-2 bg-ohr-red text-white px-4 py-2 font-black text-xs uppercase tracking-widest hover:bg-ohr-neutral transition-colors"
                >
                  <X className="w-4 h-4" /> Close
                </button>
              </div>
            </motion.div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
              Press ESC or click outside to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
