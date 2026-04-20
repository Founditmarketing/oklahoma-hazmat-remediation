import { FileText, Calculator, ShieldCheck, Users, Facebook } from "lucide-react";

export function Contact() {
  return (
    <div className="pb-24">
      <header className="bg-zinc-50 py-16 border-b-3 border-ohr-neutral">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight uppercase leading-none">Contact <span className="text-ohr-red">OHR</span></h1>
          <p className="max-w-xl mx-auto text-sm text-zinc-500 font-medium italic">
            "Oklahoma's reliable shield against environmental chaos."
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
           <div className="space-y-4">
             <p className="text-ohr-red font-mono font-bold text-xs uppercase tracking-[0.4em]">Get in Touch</p>
             <h2 className="text-4xl font-black uppercase tracking-tight">Headquarters</h2>
             <p className="text-lg text-zinc-600">Our physical hub for equipment and personnel is located strategically in Del City for rapid deployment to the I-35 and I-40 corridors.</p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 border-2 border-zinc-100 bg-white space-y-4">
                 <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">Main Office</p>
                 <p className="font-bold text-ohr-neutral tracking-tight text-lg">317 South Scott Street<br/>Del City, OK 73115</p>
              </div>
              <div className="p-8 border-2 border-zinc-100 bg-white space-y-4">
                 <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">Direct Contact</p>
                 <p className="font-bold text-ohr-neutral tracking-tight text-lg underline decoration-ohr-red">Josh@oklahomahazmat.org</p>
                 <div className="pt-2">
                    <a href="https://www.facebook.com/OHRHazmat/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1 bg-ohr-neutral text-white text-[10px] font-bold uppercase tracking-widest hover:bg-ohr-red transition-colors">
                      <Facebook className="w-3 h-3" /> Facebook
                    </a>
                 </div>
              </div>
           </div>

           <div className="p-10 bg-ohr-red text-white">
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Immediate Emergency?</h3>
              <p className="text-lg opacity-90 mb-8">Do not email for active spills or biohazard scenes. Contact our dispatch line immediately.</p>
              <a href="tel:4054942889" className="text-4xl font-black tracking-tighter hover:text-ohr-neutral transition-colors">405.494.2889</a>
           </div>
        </div>

        <div className="bg-white border-2 border-zinc-100 p-8 shadow-sm">
           <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Send a Message</h3>
           <form className="grid grid-cols-1 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="w-full p-4 bg-zinc-50 border-2 border-transparent focus:border-ohr-neutral outline-none transition-all font-bold text-xs uppercase tracking-widest" />
                <input type="text" placeholder="Last Name" className="w-full p-4 bg-zinc-50 border-2 border-transparent focus:border-ohr-neutral outline-none transition-all font-bold text-xs uppercase tracking-widest" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full p-4 bg-zinc-50 border-2 border-transparent focus:border-ohr-neutral outline-none transition-all font-bold text-xs uppercase tracking-widest" />
              <input type="text" placeholder="Subject" className="w-full p-4 bg-zinc-50 border-2 border-transparent focus:border-ohr-neutral outline-none transition-all font-bold text-xs uppercase tracking-widest" />
              <textarea rows={5} placeholder="How can we help?" className="w-full p-4 bg-zinc-50 border-2 border-transparent focus:border-ohr-neutral outline-none transition-all font-bold text-xs uppercase tracking-widest resize-none" />
              <button className="w-full py-6 bg-ohr-neutral text-white font-black uppercase tracking-[0.3em] hover:bg-ohr-red transition-all cursor-not-allowed">
                 Send Message (Disabled for Demo)
              </button>
           </form>
        </div>
      </div>
    </div>
  );
}
