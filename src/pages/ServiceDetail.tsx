import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { Biohazard, AlertTriangle, Truck, ShieldCheck, Wind, BadgeCheck, Trash2, Briefcase, FileText, ArrowLeft, PhoneCall } from "lucide-react";

const servicesData: Record<string, { 
  title: string; 
  category: string; 
  description: string; 
  detailedInfo: string[];
  image: string;
  icon: any; 
  color: string;
  features: string[];
}> = {
  "biohazard-cleanup": {
    title: "Biohazard Cleanup Services",
    category: "Emergency Response",
    icon: <Biohazard className="w-12 h-12" />,
    color: "ohr-red",
    image: "/ohr4.jpg",
    description: "Our core biohazard team uses specialized equipment, medical-grade cleaning agents, and proven containment methods to fully remove contamination and restore safety.",
    detailedInfo: [
      "Biohazard remediation is more than just cleaning; it's a specialized process that requires high-level certification and technical precision. OHR technicians are trained in the latest containment and neutralization protocols to handle infectious materials safely.",
      "We utilize medical-grade EPA-registered disinfectants that are effective against a broad spectrum of pathogens, including viruses, bacteria, and bloodborne illnesses. Our process ensures that the affected area is not only visually clean but biologically sanitary.",
      "Every project follows a strict multi-stage decontamination sequence: assessment, containment, extraction, neutralization, and final verification. We provide full documentation of the disinfection process for your records and compliance requirements."
    ],
    features: ["HEPA Air Filtration", "Pathogen Neutralization", "ATP Testing Verification", "Hazardous Waste Manifesting"]
  },
  "unattended-death": {
    title: "Unattended Death Cleanups",
    category: "Emergency Response",
    icon: <AlertTriangle className="w-12 h-12" />,
    color: "ohr-red",
    image: "/ohr5.jpg",
    description: "We handle every situation with sensitivity, ensuring families and property owners are supported through each step of the process.",
    detailedInfo: [
      "Unattended death remediation requires both technical expertise and a high degree of empathy. OHR technicians are professionals who understand the sensitive nature of these situations and work with the utmost discretion and respect.",
      "The biological impact of an unattended death goes beyond what is visible. Odors and bacteria can permeate walls, flooring, and structural elements. We use industrial-grade hydroxyl generators and ozone treatments to permanently eliminate odors at the molecular level.",
      "Our goal is to restore the property to its original condition, removing all reminders of the incident and ensuring the environment is safe for re-entry. We work closely with insurance adjusters to assist with claim documentation."
    ],
    features: ["Discreet Response", "Molecular Odor Removal", "Biological Hazard Extraction", "Insurance Liasion Services"]
  },
  "vehicle-accident": {
    title: "Commercial Vehicle Accident Cleanup",
    category: "Emergency Response",
    icon: <Truck className="w-12 h-12" />,
    color: "ohr-red",
    image: "/ohr9.jpeg",
    description: "We provide fast, thorough cleanup and cargo recovery to restore safety and get roadways back to normal as quickly as possible.",
    detailedInfo: [
      "When a commercial vehicle is involved in an incident on Oklahoma highways, the variables are complex. Fuel leaks, fluids, and scattered cargo create immediate hazards for other motorists and the environment.",
      "OHR is equipped for rapid mobilization to any stretch of I-35, I-40, or state highway corridors. We specialize in fuel spill containment and roadway decontamination using high-performance absorbents and specialized industrial sweepers.",
      "Our technicians are incident-response certified, working in tandem with the Oklahoma Highway Patrol and local emergency services to minimize lane closure time while ensuring 100% compliance with environmental cleanup standards."
    ],
    features: ["Fuel Spill Containment", "Hazmat Roadway Clearing", "Cargo Recovery & Salvage", "Rapid Response Deployment"]
  },
  "crime-scene": {
    title: "Crime Scene Cleanup",
    category: "Emergency Response",
    icon: <ShieldCheck className="w-12 h-12" />,
    color: "ohr-red",
    image: "/ohr6.jpg",
    description: "We handle crime scene cleanup with professionalism, discretion, and care. Our team responds promptly to remove all biohazards and disinfect surfaces.",
    detailedInfo: [
      "After the first responders and investigators leave, the property owner is often left with a traumatic and hazardous environment. OHR steps in to provide professional remediation that restores the scene to a safe and sanitary condition.",
      "Crime scenes often involve fingerprint dust, luminol, and other investigative chemicals in addition to biological hazards. We have specialized cleaning agents designed to remove these materials without damaging property surfaces.",
      "Our discreet service ensures that neighbors and the public are not aware of our presence. We use unmarked vehicles if requested and maintain strict confidentiality regarding all on-site activities."
    ],
    features: ["Confidential Remediation", "Chemical Residue Removal", "Full Bio-Sanitization", "Structural Decontamination"]
  },
  "blood-cleanup": {
    title: "Blood Cleanup",
    category: "Emergency Response",
    icon: <Biohazard className="w-12 h-12" />,
    color: "ohr-red",
    image: "/ohr7.jpg",
    description: "Blood and bodily fluids can carry serious risks if not handled correctly. Our specialists use proven methods and equipment for full disinfection.",
    detailedInfo: [
      "The cleanup of blood and bodily fluids is strictly regulated by OSHA due to the risk of bloodborne pathogens such as HIV, Hepatitis B, and Hepatitis C. Standard janitorial services are not equipped or insured to handle these hazards.",
      "OHR utilizes hospital-grade disinfectants and precise cleaning protocols to ensure every trace of biological material is removed. We use UV light and ATP testing to verify that surfaces are biologically clean.",
      "We handle the hazardous waste disposal process from start to finish, ensuring that all materials are manifested and transported to a licensed treatment facility according to state and federal law."
    ],
    features: ["OSHA/CDC Compliance", "Pathogen Decontamination", "Verified ATP Testing", "Regulated Waste Disposal"]
  },
  "load-transfers": {
    title: "LOAD TRANSFERS & SHIFT RECOVERY",
    category: "Emergency Response",
    icon: <Truck className="w-12 h-12" />,
    color: "ohr-red",
    image: "/ohr10.jpeg",
    description: "When cargo shifts or spills on the roadway, OHR secures, recovers, and transfers loads safely.",
    detailedInfo: [
      "Shifted loads or overturned trailers represent a major liability and operational bottleneck for logistics firms. OHR provides the heavy equipment and specialized labor required to rescue cargo and clear the scene.",
      "We are experts in pallet restacking, load stabilization, and intermodal container transfers. Our teams work quickly to get your driver and truck back on the road or move the load to a secondary carrier.",
      "Safety is our priority. We maintain a secure perimeter during transfers and use specialized rigging to ensure cargo integrity during the recovery process, reducing the financial impact of the incident."
    ],
    features: ["Cargo Salvage & Recovery", "Heavy Equipment Support", "Cross-Dock Coordination", "Trailer Stabilization"]
  },
  "natural-disaster": {
    title: "Natural Disaster Response",
    category: "Environmental & Recovery",
    icon: <Wind className="w-12 h-12" />,
    color: "ohr-green",
    image: "/ohr3.jpg",
    description: "Our disaster response team steps in to quickly restore safety and order after storms, floods, tornadoes, and other natural disasters.",
    detailedInfo: [
      "In the aftermath of Oklahoma's severe weather patterns, rapid response is the key to preventing further property damage and ensuring community safety. OHR is a primary responder for municipal and private recovery efforts.",
      "We specialize in the clearance of hazardous debris, including downed lines, chemical spills from damaged facilities, and large-scale architectural debris removal. Our teams are equipped for off-road access and heavy demolition.",
      "Beyond immediate clearing, we provide comprehensive environmental assessments to ensure that floodwaters or storm surges haven't contaminated the soil or perimeter structures with hazardous materials."
    ],
    features: ["Severe Weather Recovery", "Hazardous Debris Removal", "Flooding Decontamination", "Ecosystem Restoration"]
  },
  "livestock-recovery": {
    title: "Livestock Recovery",
    category: "Environmental & Recovery",
    icon: <BadgeCheck className="w-12 h-12" />,
    color: "ohr-green",
    image: "/ohr11.jpg",
    description: "We provide safe and reliable livestock recovery for farmers, ranchers, and property owners following disasters.",
    detailedInfo: [
      "Livestock incidents following highway crashes or major storms represent a specialized environmental and agricultural challenge. OHR is uniquely certified by the Oklahoma Department of Agriculture for these specific scenarios.",
      "Our team provides humane and professional recovery and transportation for affected animals. We understand the biological risks associated with livestock mortality and follow strict protocols for carcass removal and disposal.",
      "We also assist property owners with valuation documentation for insurance and government aid programs, ensuring that the full scope of the disaster is recorded and remediated."
    ],
    features: ["Dept. of Ag Certified", "Biological Containment", "Professional Extraction", "Mortality Management"]
  },
  "waste-disposal": {
    title: "Waste Disposal",
    category: "Environmental & Recovery",
    icon: <Trash2 className="w-12 h-12" />,
    color: "ohr-green",
    image: "/ohr2.jpg",
    description: "We provide professional handling, transportation, and disposal of both hazardous and non-hazardous waste.",
    detailedInfo: [
      "Modern waste management is a complex landscape of federal and state regulations. OHR manages the entire lifecycle of hazardous materials, from initial profiling to final destruction.",
      "We specialize in the manifesting and transportation of flammable liquids, corrosive chemicals, and toxic industrial materials. Our process ensures that your organization remains in full compliance with the EPA and DEQ.",
      "Our logistics network includes partnerships with the region's elite treatment, storage, and disposal facilities (TSDFs), guaranteeing that all waste is treated with the most environmentally responsible methods available."
    ],
    features: ["RCRA Compliance", "Hazardous Profiling", "Manifesting Services", "Regulated Transport"]
  },
  "industrial-spill-planning": {
    title: "Industrial Spill & Response Planning",
    category: "Environmental & Recovery",
    icon: <Briefcase className="w-12 h-12" />,
    color: "ohr-green",
    image: "/ohr1.jpg",
    description: "These plans identify potential hazards, outline step-by-step procedures, and provide guidance for safe containment and cleanup.",
    detailedInfo: [
      "For industrial facilities, the question isn't 'if' an incident will occur, but 'when.' A professional response plan is the difference between a minor interruption and a catastrophic financial loss.",
      "OHR develops site-specific Spill Prevention, Control, and Countermeasure (SPCC) plans. We map your facility, identify high-risk zones, and establish clear operational protocols for your staff and emergency responders.",
      "Our planning process includes training modules and regular audits to ensure your facility is not just compliant on paper, but ready in practice. We integrate our dispatch systems directly with your site's emergency tree."
    ],
    features: ["SPCC Plan Development", "Site Risk Mapping", "Containment Design", "Response Drill Audits"]
  },
  "pre-planning": {
    title: "Pre-Planning Services",
    category: "Environmental & Recovery",
    icon: <FileText className="w-12 h-12" />,
    color: "ohr-green",
    image: "/ohr8.jpg",
    description: "Designed to help businesses, municipalities, and transportation companies develop a clear, actionable response plan before an incident occurs.",
    detailedInfo: [
      "Crisis pre-planning is the ultimate liability reduction tool for modern enterprises. By establishing a partnership with OHR before an emergency, you lock in priority dispatch and pre-vetted pricing structures.",
      "We conduct exhaustive reviews of your organization's current hazmat management and emergency protocols. Our experts identify gaps in regulatory compliance and provide actionable steps to fortify your environmental safety net.",
      "Under a Pre-Planning Agreement, OHR becomes an extension of your safety team. We maintain digital records of your facility maps and chemical inventories, enabling a hyper-accurate response the moment an incident is triggered."
    ],
    features: ["Priority Dispatch", "Locked-In Rate Cards", "Regulatory Advocacy", "Safety Audit Sync"]
  }
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = id ? servicesData[id] : null;

  if (!service) {
    return (
      <div className="py-32 text-center space-y-4">
        <h1 className="text-4xl font-black uppercase tracking-tight">Service Protocol Not Found</h1>
        <Link to="/" className="text-ohr-red font-bold uppercase tracking-widest underline">Return to Command Center</Link>
      </div>
    );
  }

  const colorClass = service.color === "ohr-red" ? "bg-ohr-red" : (service.color === "ohr-green" ? "bg-ohr-green" : "bg-ohr-tan");
  const borderClass = service.color === "ohr-red" ? "border-ohr-red" : (service.color === "ohr-green" ? "border-ohr-green" : "border-ohr-tan");
  const textClass = service.color === "ohr-red" ? "text-ohr-red" : (service.color === "ohr-green" ? "text-ohr-green" : "text-ohr-tan");

  return (
    <div className="pb-24 bg-ohr-bg min-h-screen">
      <header className={`bg-ohr-neutral py-20 text-white relative overflow-hidden border-b-6 border-ohr-neutral`}>
        <div className="absolute inset-0 opacity-20 contrast-125 grayscale mix-blend-overlay">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Back nav row */}
        <div className="relative z-10 border-b border-white/10 mb-12">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <Link to={service.category === "Emergency Response" ? "/emergency-services" : "/environmental-services"} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to {service.category}
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`inline-flex items-center gap-2 px-3 py-1 text-white text-[10px] font-mono font-bold uppercase tracking-[0.4em] mb-6 ${colorClass}`}>
            {service.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase leading-[0.9] max-w-4xl">{service.title}</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 caution-stripe" />
      </header>

      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column - Intro & Photo */}
        <div className="lg:col-span-4 space-y-8">
           <div className={`aspect-square bg-white border-2 border-zinc-200 border-l-8 ${borderClass} shadow-xl overflow-hidden group`}>
             <img 
               src={service.image} 
               alt={`${service.title} detail`} 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
             />
           </div>

           <div className="p-8 bg-zinc-900 text-white space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500">Service Highlights</h4>
              <ul className="space-y-4">
                 {service.features.map((feature, i) => (
                   <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                     <ShieldCheck className={`w-5 h-5 ${textClass}`} />
                     {feature}
                   </li>
                 ))}
              </ul>
           </div>
           
           <div className="bg-white border-2 border-zinc-100 p-8 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400">Response Integrity</h4>
              <p className="text-xs leading-relaxed text-zinc-500 font-medium italic">
                "Oklahoma's reliable shield against environmental chaos. Our technicians are the difference between a clean scene and a safe scene."
              </p>
           </div>
        </div>

        {/* Right Column - Deep Content */}
        <div className="lg:col-span-8 space-y-12">
           <div className="space-y-8 bg-white p-12 md:p-16 border-2 border-zinc-100 shadow-sm">
              <h2 className="text-4xl font-black uppercase tracking-tighter border-b-2 border-zinc-50 pb-8">
                Professional <span className={textClass}>Implementation</span>
              </h2>
              <div className="space-y-8">
                {service.detailedInfo.map((para, i) => (
                  <p key={i} className="text-zinc-600 text-lg leading-relaxed font-normal">
                    {para}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                 <div className="p-8 border-2 border-zinc-100 space-y-4 hover:border-ohr-neutral transition-colors">
                    <div className="bg-zinc-50 w-12 h-12 flex items-center justify-center"><BadgeCheck className="w-6 h-6 text-ohr-green" /></div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-900">Regulatory Compliance</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed font-medium">100% adherence to sub-sector Oklahoma DEQ and Federal EPA requirements for hazardous material management.</p>
                 </div>
                 <div className="p-8 border-2 border-zinc-100 space-y-4 hover:border-ohr-neutral transition-colors">
                    <div className="bg-zinc-50 w-12 h-12 flex items-center justify-center"><Briefcase className="w-6 h-6 text-ohr-tan" /></div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-900">Evidence Lifecycle</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed font-medium">Complete chain-of-custody documentation and incident reports suitable for high-stakes insurance claims.</p>
                 </div>
              </div>
           </div>

           <div className="bg-ohr-red p-12 text-white flex flex-col md:flex-row items-center justify-between gap-12 border-l-8 border-ohr-neutral shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 caution-stripe grayscale opacity-5 group-hover:scale-110 transition-transform duration-700" />
              <div className="space-y-4 relative z-10">
                <h3 className="text-3xl font-black uppercase tracking-tight">Rapid Response Required?</h3>
                <p className="text-white/80 max-w-xl font-medium">Oklahoma's most reliable dispatch team is currently on standby for your local corridor. Do not delay professional remediation.</p>
              </div>
              <a href="tel:4054942889" className="btn bg-white text-ohr-red text-2xl py-6 px-12 hover:bg-zinc-100 relative z-10 shadow-lg">
                405.494.2889
              </a>
           </div>
        </div>
      </div>
    </div>
  );
}
