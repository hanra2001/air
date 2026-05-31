import { useState, useEffect } from 'react';
import { Wind, Sparkles, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { label: '홈', target: 'home' },
    { label: '서비스 소개', target: 'calculator' },
    { label: '케어 과정', target: 'process' },
    { label: '전후 가이드 & 리뷰', target: 'before-after' },
    { label: '자주 묻는 질문', target: 'faq' }
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-sky-50/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md border-b border-sky-100/30'
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-500 text-white shadow-lg shadow-sky-200/50 overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Wind className="w-6 h-6" />
              </motion.div>
              {/* Cooling sparkle effect overlay */}
              <div className="absolute top-0 right-0 w-3 h-3 bg-white/40 rotate-45 transform translate-x-1 -translate-y-1"></div>
            </div>
            <div>
              <span className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-1">
                청소를 담다
                <Sparkles className="w-4 h-4 text-sky-500 fill-sky-200" />
              </span>
              <p className="text-[10px] font-medium text-sky-600 tracking-widest mt-[-2px] uppercase">
                Premium Air Care
              </p>
            </div>
          </div>

          {/* Desktop Menu - Highly intuitive navigation items with dynamic underlined hover guides */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="text-sm font-extrabold text-slate-700 hover:text-sky-500 hover:scale-105 active:scale-95 duration-200 cursor-pointer transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-sky-500 hover:after:w-full hover:after:left-0 after:transition-all after:duration-300"
                id={`nav-${item.target}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Compact booking shortcut & call buttons on right */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="tel:010-2458-2516"
              className="px-4 py-1.5 rounded-lg text-slate-700 font-extrabold text-xs bg-slate-100 hover:bg-slate-200 border border-slate-200 shadow-sm hover:scale-[1.02] cursor-pointer transition-all flex items-center gap-1.5"
              id="cta-nav-call"
            >
              <Phone className="w-3.5 h-3.5 text-sky-500 animate-bounce" />
              문의전화
            </a>
            <button
              onClick={onOpenBooking}
              className="px-4 py-1.5 rounded-lg text-white font-black text-xs bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 shadow-sm hover:scale-[1.02] cursor-pointer transition-all border border-sky-300"
              id="cta-nav-booking"
            >
              예약 바로가기
            </button>
          </div>

          {/* Mobile hamburger icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 bg-sky-50 border border-sky-100 hover:bg-sky-100/50 transition-colors"
              id="nav-mobile-hamburger"
            >
              {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 border-b border-sky-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-base font-bold text-slate-700 hover:bg-sky-50 hover:text-sky-600 cursor-pointer transition-colors"
                  id={`nav-mobile-${item.target}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-sky-50 flex gap-2">
                <a
                  href="tel:010-2458-2516"
                  className="flex-1 py-2.5 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs shadow-sm cursor-pointer border border-slate-200 flex items-center justify-center gap-1.5"
                  id="cta-mobile-call"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-500" />
                  문의전화
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="flex-1 py-2.5 text-center rounded-lg bg-gradient-to-r from-sky-400 to-blue-500 text-white font-bold text-xs shadow-sm cursor-pointer"
                  id="cta-mobile-booking"
                >
                  예약 바로가기
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
