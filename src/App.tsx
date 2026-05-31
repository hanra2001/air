import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AqiCalculator from './components/AqiCalculator';
import ServiceIntro from './components/ServiceIntro';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import CleanProcess from './components/CleanProcess';
import BookingSystem from './components/BookingSystem';
import Reviews from './components/Reviews';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import { Wind, MessageSquare, ArrowUp, Calendar, Phone } from 'lucide-react';

export default function App() {
  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-sky-200 selection:text-sky-950">
      
      {/* Premium Navigation Header */}
      <Navbar onOpenBooking={scrollToBooking} />

      {/* Main page sections */}
      <main className="flex flex-col">
        
        {/* Section 1: Hero Banner Area - 홈 */}
        <Hero onOpenBooking={scrollToBooking} onSpinWheel={() => {}} />

        {/* Section 2: Contamination Self-Assessment Calculator - 서비스 소개 */}
        <AqiCalculator />

        {/* Section 2.5: Professional Air Conditioner Care Introduction */}
        <ServiceIntro />

        {/* Section 3: Alternating Timeline Processes (7steps) - 케어 과정 */}
        <CleanProcess />

        {/* Section 4: Before & After comparison slide revealing - 전후 가이드 */}
        <BeforeAfterSlider />

        {/* Section 5: User Testimony grid with new inputs - 리뷰 */}
        <Reviews />

        {/* Section 6: Highly functional Booking and Reservations list - 예약 신청 */}
        <BookingSystem />

        {/* Section 7: FAQ accordion */}
        <FaqSection />

      </main>

      {/* Corporate legal footer */}
      <Footer />

      {/* Floating Sticky Actions (Quick Contact / Scroll To Top) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        
        {/* Naver Booking Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://naver.me/IxKT5WR4"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 sm:p-4 rounded-full bg-[#03C75A] hover:bg-[#02b350] text-white shadow-xl shadow-emerald-950/20 flex items-center justify-center cursor-pointer relative group"
          id="btn-sticky-naver"
        >
          {/* Custom SVG for Naver Logo */}
          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
            <path d="M16.2 2H22v20h-5.8l-6.4-9.2v9.2H4V2h5.8l6.4 9.2z" />
          </svg>
          {/* Tooltip on hover */}
          <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-bold py-1.5 px-3 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            네이버 예약 바로가기
          </span>
        </motion.a>

        {/* KakaoTalk Booking/Inquiry Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://open.kakao.com/o/ssjlFfxi"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 sm:p-4 rounded-full bg-[#FEE500] hover:bg-[#f6dc00] text-[#191919] shadow-xl shadow-yellow-950/20 flex items-center justify-center cursor-pointer relative group"
          id="btn-sticky-kakao"
        >
          {/* Custom SVG for KakaoTalk Speech Bubble Logo */}
          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.502 1.636 4.7 4.144 5.92-.17.618-.616 2.232-.705 2.57-.142.544.195.536.41.393.303-.203 2.766-1.878 3.866-2.613.435.084.887.13 1.285.13 4.97 0 9-3.185 9-7.115S16.97 3 12 3z" />
          </svg>
          {/* Tooltip on hover */}
          <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-bold py-1.5 px-3 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            카카오톡 1:1 예약/문의
          </span>
        </motion.a>

        {/* Floating Call Button with pulsing wave */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="tel:010-2458-2516"
          className="p-3 sm:p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-450/30 flex items-center justify-center cursor-pointer relative group"
          id="btn-sticky-call"
        >
          <span className="absolute inset-0 rounded-full bg-emerald-500/45 animate-ping opacity-75 -z-10"></span>
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
          {/* Tooltip on hover */}
          <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-bold py-1.5 px-3 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            전화 상담 (010-2458-2516)
          </span>
        </motion.a>

        {/* Rapid estimate trigger */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToBooking}
          className="p-3 sm:p-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-xl shadow-blue-400/30 flex items-center justify-center cursor-pointer relative group"
          id="btn-sticky-booking"
        >
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
          {/* Tooltip on hover */}
          <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-bold py-1.5 px-3 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            실시간 비대면 견적 예약
          </span>
        </motion.button>

        {/* Scroll to Top */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-lg flex items-center justify-center cursor-pointer"
          id="btn-sticky-top"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </motion.button>

      </div>

    </div>
  );
}
