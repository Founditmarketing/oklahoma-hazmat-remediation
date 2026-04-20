import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowRight, BadgeCheck, PhoneCall, MapPin, Briefcase, Users, Clock } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "35+", icon: <Clock className="w-5 h-5" /> },
  { label: "Base of Operations", value: "Del City, OK", icon: <MapPin className="w-5 h-5" /> },
  { label: "Response Coverage", value: "Statewide", icon: <Briefcase className="w-5 h-5" /> },
  { label: "Availability", value: "24 / 7 / 365", icon: <PhoneCall className="w-5 h-5" /> },
];

const certifications = [
  {
    body: "FMCSA",
    full: "Federal Motor Carrier Safety Administration",
    detail: "Certified for the safe transport and disposal of hazardous materials on public roadways across state lines.",
  },
  {
    body: "ODQ",
    full: "Oklahoma Department of Quality",
    detail: "Licensed for environmental quality compliance, ensuring all remediation work meets state-mandated standards.",
  },
  {
    body: "OK Dept. of Agriculture",
    full: "Oklahoma Department of Agriculture, Food & Forestry",
    detail: "Certified for livestock recovery, mortality management, and agricultural incident response across Oklahoma.",
  },
];

const values = [
  {
    title: "Safety First",
    description:
      "Every operation begins with a comprehensive risk assessment. Our technicians never compromise on personal protection or environmental containment.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Compassionate Response",
    description:
      "We understand that behind every incident is a person or family in distress. We respond with urgency and with respect for those affected.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Regulatory Mastery",
    description:
      "Full compliance with EPA, OSHA, FMCSA, and Oklahoma DEQ requirements on every job — zero shortcuts, zero liability exposure for our clients.",
    icon: <BadgeCheck className="w-6 h-6" />,
  },
  {
    title: "Rapid Mobilization",
    description:
      "Our dispatch infrastructure is built for speed. From the moment of your call, our team is moving — days, nights, weekends, holidays.",
    icon: <Clock className="w-6 h-6" />,
  },
];

export default function About() {
  return (
    <div className="pb-24 bg-ohr-bg min-h-screen">

      {/* Hero Header */}
      <header className="bg-ohr-neutral py-24 text-white relative overflow-hidden border-b-4 border-ohr-neutral">
        <div className="absolute inset-0 opacity-15">
          <img src="/ohr2.jpg" alt="OHR operations" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ohr-neutral via-ohr-neutral/70 to-transparent" />
        {/* Back nav row */}
        <div className="relative z-10 border-b border-white/10 mb-12">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-ohr-red text-white text-[10px] font-mono font-bold uppercase tracking-[0.4em]">
            Our Story
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-[0.85]">
            About <span className="text-ohr-tan">OHR</span>
          </h1>
          <p className="text-lg text-zinc-300 font-medium leading-relaxed max-w-2xl">
            Oklahoma Hazmat &amp; Remediation was built by industry veterans who saw a gap — and filled it. Certified, experienced, and committed to Oklahoma communities.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 caution-stripe" />
      </header>

      {/* Who We Are */}
      <section className="bg-white border-b-2 border-zinc-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 md:p-20 space-y-8 border-r border-zinc-100">
            <h4 className="text-xs font-black uppercase text-ohr-tan tracking-[0.3em]">Who We Are</h4>
            <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">
              Built to Solve <br /><span className="text-ohr-red">The Professional Gap.</span>
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              At Oklahoma Hazmat &amp; Remediation (OHR), we're committed to protecting lives, property, and the
              environment through rapid, professional response to hazardous and biohazard situations. Founded in 2024
              and backed by over 35 years of combined experience, our team brings expert-level knowledge and precision
              to every cleanup and remediation project.
            </p>
            <p className="text-zinc-500 leading-relaxed">
              Certified by the FMCSA, ODQ, and the Oklahoma Department of Agriculture, OHR stands as a trusted name
              in hazardous material handling, spill response, and recovery services across Oklahoma and beyond. We
              specialize in hazmat cleanup, highway spill response, biohazard and crime scene cleanup, industrial
              spill management, natural disaster response, and livestock recovery.
            </p>
            <p className="text-zinc-500 leading-relaxed">
              From small-scale incidents to major emergencies, our goal is always the same — restore safety quickly
              while maintaining the highest environmental and regulatory standards.
            </p>
          </div>
          <div className="relative overflow-hidden group min-h-[400px]">
            <img
              src="/ohr3.jpg"
              alt="OHR field operations"
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-ohr-red/10 mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b-2 border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-100">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-8 py-12 space-y-2"
            >
              <div className="text-ohr-red">{stat.icon}</div>
              <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-black text-ohr-neutral tracking-tight">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-ohr-neutral py-24 border-b-4 border-ohr-neutral relative overflow-hidden">
        <div className="absolute inset-0 caution-stripe opacity-5" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h4 className="text-xs font-black uppercase text-ohr-tan tracking-[0.3em]">Our Mission</h4>
          <blockquote className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tight">
            "True recovery means more than cleanup — it means helping{" "}
            <span className="text-ohr-tan">communities and businesses</span> return to normal safely and responsibly."
          </blockquote>
          <p className="text-zinc-400 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
            Every member of the OHR team is trained to respond with compassion, care, and professionalism. Whether
            it's recovering cargo after a highway accident, cleaning up a contaminated site, or providing safe
            holding for displaced livestock — we work with urgency and respect for those affected.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-zinc-50 border-b-2 border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="space-y-2">
            <h4 className="text-xs font-black uppercase text-ohr-red tracking-[0.3em]">How We Operate</h4>
            <h2 className="text-4xl font-black uppercase tracking-tight">Our Core <span className="text-ohr-red">Values</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white border-2 border-zinc-200 border-l-8 border-l-ohr-red space-y-4 hover:shadow-xl transition-shadow"
              >
                <div className="p-3 w-fit bg-zinc-50 border border-zinc-200 text-ohr-neutral">
                  {v.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">{v.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-white border-b-2 border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="space-y-2">
            <h4 className="text-xs font-black uppercase text-ohr-red tracking-[0.3em]">Verified &amp; Trusted</h4>
            <h2 className="text-4xl font-black uppercase tracking-tight">Certifications &amp; <span className="text-ohr-red">Compliance</span></h2>
            <p className="text-zinc-500 max-w-2xl leading-relaxed pt-2">
              OHR holds active certifications with federal and state regulatory bodies, ensuring every operation meets the highest legal and environmental standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-zinc-50 border-2 border-zinc-200 border-t-8 border-t-ohr-neutral space-y-4"
              >
                <ShieldCheck className="w-8 h-8 text-ohr-neutral" />
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-ohr-neutral">{cert.body}</p>
                  <p className="text-sm font-bold text-zinc-600 mt-0.5">{cert.full}</p>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium border-t border-zinc-200 pt-4">{cert.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image strip */}
      <section className="grid grid-cols-3 h-52 border-b-4 border-ohr-neutral overflow-hidden">
        {["/ohr4.jpg", "/ohr5.jpg", "/ohr6.jpg"].map((src, i) => (
          <div key={i} className="overflow-hidden group relative">
            <img src={src} alt={`OHR operations ${i + 1}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
            <div className="absolute inset-0 bg-ohr-neutral/20" />
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <div className="bg-ohr-neutral p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 border-l-8 border-ohr-red relative overflow-hidden group">
          <div className="absolute inset-0 caution-stripe opacity-5 grayscale group-hover:scale-105 transition-transform duration-700" />
          <div className="space-y-4 relative z-10">
            <h3 className="text-4xl font-black uppercase tracking-tight">Ready to Work With OHR?</h3>
            <p className="text-zinc-400 max-w-xl font-medium">
              Our dispatch team is on standby 24/7. Whether you need an immediate response or want to pre-plan for your facility, we're here.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <a href="tel:4054942889" className="btn btn-red text-xl py-6 px-12 whitespace-nowrap">
              Call 405.494.2889
            </a>
            <Link to="/contact" className="btn btn-outline text-white border-white hover:bg-white hover:text-ohr-neutral py-6 px-12 whitespace-nowrap">
              Get a Quote <ArrowRight className="w-4 h-4 inline ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
