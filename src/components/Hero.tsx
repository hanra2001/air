import HeroImage from '../assets/images/cooling_hero_banner_1780135573404.png';
import { useMemo } from 'react';
import { motion } from 'motion/react';
import { Wind, ShieldCheck, Award, Flame, Calendar, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onSpinWheel: () => void;
}

export default function Hero({ onOpenBooking, onSpinWheel }: HeroProps) {
  // Floating Ice Cubes & Bubbles configurations for decorative motion (memoized to prevent clock-induced jumping)
  const floatingItems = useMemo(() => {
    return Array.from({ length: 22 }, (_, i) => {
      const types: ('ice' | 'bubble' | 'sparkle')[] = ['ice', 'bubble', 'sparkle'];
      const type = types[i % 3];
      
      const size = type === 'ice'
        ? Math.random() * 25 + 22   // 22px - 47px
        : type === 'bubble'
        ? Math.random() * 16 + 12   // 12px - 28px
        : Math.random() * 15 + 10;  // 10px - 25px

      return {
        id: i,
        type,
        size,
        delay: i * 0.45,
        duration: Math.random() * 5 + 7, // 7s - 12s flow speed
        left: `${(i * 4.3 + Math.random() * 8) % 94 + 3}%`, // nicely spaced horizontally
        swayRange: Math.random() * 50 - 25, // horizontal sine wave movement
        rotateSpeed: (Math.random() * 140 + 60) * (Math.random() > 0.5 ? 1 : -1),
      };
    });
  }, []);

  return (
    <div id="home" className="relative shrink-0 pt-20 overflow-hidden bg-gradient-to-b from-sky-100 via-blue-50 to-white min-h-[92vh] flex items-center">
      {/* Background Decorative Circles */}
      <div className="absolute top-10 left-[-10%] w-[45vw] h-[45vw] bg-sky-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-[-10%] w-[50vw] h-[50vw] bg-blue-200/40 rounded-full blur-3xl pointer-events-none"></div>

      {/* Floating Animated Ice Cubes and Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {floatingItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ y: '110vh', opacity: 0, x: 0, rotate: 0 }}
            animate={{
              y: '-15vh',
              x: [0, item.swayRange, -item.swayRange, item.swayRange / 2, 0],
              opacity: [0, 0.85, 0.85, 0],
              rotate: [0, item.rotateSpeed]
            }}
            transition={{
              y: { duration: item.duration, repeat: Infinity, delay: item.delay, ease: 'linear' },
              x: { duration: item.duration / 2, repeat: Infinity, delay: item.delay, ease: 'easeInOut' },
              opacity: { duration: item.duration, repeat: Infinity, delay: item.delay, ease: 'easeOut' },
              rotate: { duration: item.duration, repeat: Infinity, delay: item.delay, ease: 'linear' }
            }}
            style={{
              position: 'absolute',
              left: item.left,
              width: `${item.size}px`,
              height: `${item.size}px`
            }}
            className="flex items-center justify-center"
          >
            {item.type === 'ice' && (
              /* Floating Premium Ice Cube Model with Refraction Glare */
              <div className="w-full h-full bg-cyan-100/45 border-2 border-white/80 rounded-xl shadow-[inset_0_4px_10px_rgba(255,255,255,0.95),0_6px_15px_rgba(14,165,233,0.3)] flex items-center justify-center relative overflow-hidden backdrop-blur-[1px]">
                {/* Glare diagonal */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-white/80 transform rotate-12 -translate-y-1/3"></div>
                {/* Cold Core */}
                <div className="w-[45%] h-[45%] bg-white/45 border border-cyan-200/50 rounded-md shadow-inner"></div>
                {/* Extra micro shine bubble inside */}
                <div className="absolute top-1 left-1.5 w-1 h-1 bg-white rounded-full"></div>
              </div>
            )}

            {item.type === 'bubble' && (
              /* Floating Air Bubble with Shimmer reflections */
              <div className="w-full h-full rounded-full border-2 border-white/90 bg-gradient-to-tr from-sky-400/20 via-sky-200/10 to-white/50 shadow-[0_5px_12px_rgba(56,189,248,0.25),inset_0_3px_6px_rgba(255,255,255,0.85)] flex items-center justify-center relative">
                {/* Curved glare reflection */}
                <div className="absolute top-0.5 left-1 w-[35%] h-[35%] bg-white/70 rounded-full transform rotate-12"></div>
                {/* Tiny secondary sparkle inside bubble */}
                <div className="absolute bottom-1 right-1.5 w-0.5 h-0.5 bg-white/30 rounded-full"></div>
              </div>
            )}

            {item.type === 'sparkle' && (
              /* Beautiful active clean air sparkle symbolizing sterilization */
              <div className="text-cyan-400/90 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.9)] w-full h-full flex items-center justify-center">
                <Sparkles className="w-[85%] h-[85%] stroke-[1.8] fill-sky-200/40" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Promotion Text Content */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Top Tag - Headquarters Quality Brand */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-4.5 py-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full text-xs sm:text-sm font-black tracking-tight shadow-md shadow-blue-400/20 mb-5"
            >
              <ShieldCheck className="w-4 h-4 text-sky-200 fill-sky-200/10 shrink-0" />
              본사 직영 홈케어 전문 브랜드
            </motion.div>

            {/* Main Super Title holding Slogan prominently */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-4 mb-8"
            >
              <div className="space-y-1.5 sm:space-y-2.5">
                <span className="block text-base sm:text-xl font-bold text-[#0c7075] tracking-tight">
                  기분 좋은 공간의 진화를 만듭니다.
                </span>
                <h1 className="text-[2.65rem] xs:text-[3.2rem] sm:text-[4.2rem] md:text-[4.8rem] lg:text-[5.2rem] xl:text-[5.8rem] font-black text-black tracking-tighter leading-[112%]">
                  깨끗함을 <br className="sm:hidden" />온전히 담아내다
                </h1>
                <div className="text-[2.65rem] xs:text-[3.2rem] sm:text-[4.2rem] md:text-[4.8rem] lg:text-[5.2rem] xl:text-[5.8rem] font-black tracking-tighter leading-none pt-1 sm:pt-2 relative inline-block">
                  <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                    청소를 담다
                  </span>
                  <span className="absolute bottom-1.5 sm:bottom-2.5 left-0 right-0 h-3 sm:h-4.5 bg-sky-200/40 -z-10 animate-pulse rounded-full"></span>
                </div>
              </div>
              <p className="text-[12.5px] sm:text-base font-bold text-slate-500 mt-4 tracking-tight leading-relaxed">
                고객님의 건강한 실내환경을 책임지는 <br className="sm:hidden" />에어컨 청소 전문업체 <strong className="text-[#0c7075] font-extrabold text-[13.5px] sm:text-lg font-sans">‘청소를 담다’</strong>입니다.<br />
                가정용부터 업소용, 시스템에어컨까지 <br className="sm:hidden" />다양한 현장 경험을 바탕으로 <br className="sm:hidden" />꼼꼼하고 전문적인 분해 세척 서비스를 <br className="sm:hidden" />네이버 및 카카오톡 간편 예약 신청으로 가장 신속하게 만나보세요.
              </p>
            </motion.div>

            {/* Inner actions - Beautiful Naver Booking and Kakao Booking side-by-side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3.5 w-full justify-center lg:justify-start"
            >
              {/* Naver Booking Button */}
              <a
                href="https://naver.me/IxKT5WR4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-6.5 py-4 rounded-2xl bg-[#03C75A] text-white font-black text-base shadow-lg shadow-[#03C75A]/20 hover:bg-[#02b14f] hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2.5"
                id="hero-cta-naver-booking"
              >
                {/* Custom Inline SVG Naver Logo */}
                <svg className="w-5 h-5 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M16.2 3H21v18h-4.8l-8.4-12.3V21H3V3h4.8l8.4 12.3V3z"/>
                </svg>
                네이버 예약하기
              </a>
              
              {/* Kakao Booking Button */}
              <a
                href="https://open.kakao.com/o/ssjlFfxi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-6.5 py-4 rounded-2xl bg-[#FEE500] text-[#191919] font-black text-base shadow-lg shadow-[#FEE500]/15 hover:bg-[#edd400] hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2.5"
                id="hero-cta-kakao-booking"
              >
                {/* Custom Inline SVG Kakao Logo */}
                <svg className="w-5.5 h-5.5 fill-[#191919] shrink-0" viewBox="0 0 24 24">
                  <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.707 4.8 4.27 6.054-.188.702-.68 2.531-.777 2.946-.118.497.186.49.39.352.162-.11.258-.415 3.593-2.385C10.96 17.143 11.474 17.18 12 17.18c4.97 0 9-3.185 9-7.115S16.97 3 12 3z"/>
                </svg>
                카카오톡 예약하기
              </a>
            </motion.div>

          </div>

          {/* Right Column: Original Image styled block plus generated AI Image */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full max-w-lg aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 shadow-sky-200 bg-slate-100"
            >
              {/* Dynamic breeze visual overlay on the image */}
              <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/3 right-0 h-10 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-md transform -skew-y-12 animate-pulse"></div>
                <div className="absolute top-1/2 left-1/4 right-0 h-12 bg-gradient-to-r from-transparent via-sky-300/15 to-transparent blur-lg transform -skew-y-6"></div>
                
                {/* Wind movement animation effect */}
                <motion.div
                  animate={{
                    x: ['-20%', '120%'],
                    y: ['10%', '0%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="absolute top-1/3 left-0 w-[50%] h-[3px] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-sm rotate-8"
                />
              </div>

              {/* High-quality generated background image of a room with breezy AC */}
              <img
                src={HeroImage}
                alt="Cheongso Damda High Quality Premium Care Banner"
                className="w-full h-full object-cover relative z-10 transition-transform duration-700 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />

              {/* Soft reflection lighting overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-sky-400/10 via-transparent to-transparent mix-blend-overlay z-15 pointer-events-none"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
