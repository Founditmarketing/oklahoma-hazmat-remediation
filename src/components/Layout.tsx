import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Facebook, Menu, X, ShieldAlert, BadgeCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { 
      name: "Emergency Response", 
      path: "/emergency-services",
      submenu: [
        { name: "Biohazard Cleanup", path: "/services/biohazard-cleanup" },
        { name: "Unattended Death", path: "/services/unattended-death" },
        { name: "Vehicle Accident Cleanup", path: "/services/vehicle-accident" },
        { name: "Crime Scene Cleanup", path: "/services/crime-scene" },
        { name: "Blood Cleanup", path: "/services/blood-cleanup" },
        { name: "Load Transfers", path: "/services/load-transfers" },
      ]
    },
    { 
      name: "Environmental & Recovery", 
      path: "/environmental-services",
      submenu: [
        { name: "Natural Disaster Response", path: "/services/natural-disaster" },
        { name: "Livestock Recovery", path: "/services/livestock-recovery" },
        { name: "Waste Disposal", path: "/services/waste-disposal" },
        { name: "Industrial Spill Planning", path: "/services/industrial-spill-planning" },
        { name: "Pre-Planning", path: "/services/pre-planning" },
      ]
    },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <div className="caution-stripe h-1.5 w-full"></div>
      
      {/* 24/7 Emergency Alert Bar */}
      <div className="bg-ohr-red text-white py-2 px-6 flex justify-between items-center font-bold tracking-tight border-b-2 border-ohr-yellow/30">
        <span className="text-xs uppercase tracking-widest flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-ohr-yellow" /> 24/7 EMERGENCY DISPATCH
        </span>
        <a href="tel:4054942889" className="font-mono text-lg flex items-center gap-2 hover:text-ohr-yellow transition-colors group">
           <span className="text-ohr-yellow hidden md:inline group-hover:animate-pulse">●</span> CALL NOW: 405.494.2889
        </a>
      </div>

      {/* Main Navigation */}
      <header className="bg-white border-b-3 border-ohr-neutral px-6 h-[60px] flex items-center justify-between sticky top-0 z-40">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/ohr logo.png"
            alt="Oklahoma Hazmat & Remediation Logo"
            className="h-10 w-auto object-contain"
          />
          <div className="flex flex-col leading-none">
            <span className="text-[0.75rem] font-black uppercase tracking-tighter text-ohr-neutral">Oklahoma Hazmat</span>
            <span className="text-[0.7rem] font-bold text-ohr-neutral tracking-tight">& Remediation</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5 h-full">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                className={`text-[0.75rem] font-bold uppercase tracking-widest py-1 border-b-2 transition-all hover:border-ohr-yellow flex items-center gap-1 ${
                  location.pathname === link.path ? "border-ohr-yellow text-ohr-neutral" : "border-transparent text-ohr-neutral"
                }`}
              >
                {link.name}
              </Link>
              
              {link.submenu && activeDropdown === link.name && (
                <div className="absolute top-[60px] left-0 w-64 bg-white border-3 border-ohr-neutral shadow-2xl py-2 z-50">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className="block px-4 py-2 text-[0.7rem] font-bold uppercase tracking-widest text-ohr-neutral hover:bg-zinc-100 transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <button 
          className="lg:hidden p-2 text-ohr-neutral"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 lg:hidden bg-ohr-neutral text-white pt-24 px-8"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-lg font-bold uppercase tracking-widest hover:text-ohr-tan transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="h-auto md:h-10 bg-ohr-neutral text-white flex flex-col md:flex-row items-center px-6 py-4 md:py-0 justify-between text-[0.65rem] uppercase tracking-widest gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span>© {new Date().getFullYear()} OKLAHOMA HAZMAT & REMEDIATION (OHR) | JOSH@OKLAHOMAHAZMAT.ORG</span>
          <a href="https://www.facebook.com/OHRHazmat/" target="_blank" rel="noopener noreferrer" className="hover:text-ohr-yellow transition-colors flex items-center gap-1">
            <Facebook className="w-3 h-3" /> Facebook
          </a>
        </div>
        <div className="hidden lg:flex gap-6 opacity-60">
          <span>OKLAHOMA HAZMAT RESPONSE</span>
          <span>HIGHWAY SPILL CLEANUP OK</span>
          <span>CERTIFIED LIVESTOCK RECOVERY</span>
        </div>
      </footer>
    </div>
  );
}
