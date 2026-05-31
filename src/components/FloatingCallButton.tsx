import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-45 flex flex-col gap-3 items-end pointer-events-none">
      {/* Floating Call Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        className="pointer-events-auto"
      >
        <a
          href="tel:010-2458-2516"
          className="relative group flex items-center gap-2 px-4 py-3.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full text-white shadow-2xl hover:shadow-sky-400/40 hover:scale-105 active:scale-95 duration-200 border border-sky-305 border-sky-300 font-black text-sm tracking-tight"
          id="floating-call-btn"
        >
          {/* Pulse ring background */}
          <span className="absolute inset-0 rounded-full bg-sky-400/40 animate-ping opacity-75 -z-10"></span>
          
          <Phone className="w-4.5 h-4.5 animate-bounce-short fill-white" />
          
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap font-extrabold text-xs">
            전화 연결
          </span>
          <span className="text-xs font-bold leading-none">
            010-2458-2516
          </span>
        </a>
      </motion.div>
    </div>
  );
}
