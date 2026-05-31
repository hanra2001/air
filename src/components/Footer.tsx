import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs sm:text-sm py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top bar: Brand Info & Contact Center */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="text-lg font-black text-white tracking-tight">
                청소를 담다
              </span>
              <span className="bg-sky-500/20 text-sky-400 font-extrabold px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider leading-none border border-sky-500/20">
                Premium Air Care
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-bold">
              공기에 안심을, 삶에 깨끗함을 담아 드립니다.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1 font-bold text-slate-400">
            <span className="text-xs uppercase tracking-wider text-slate-500 block">고객 행복 센터</span>
            <span className="text-xl sm:text-2xl font-black text-sky-400 font-sans tracking-tight">010-2458-2516</span>
            <span className="text-[11px] text-slate-500">
              상담 운영시간: <span className="text-emerald-400 font-extrabold">24시간 연중무휴</span>
            </span>
          </div>
        </div>

        {/* Bottom copyright attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10.5px] text-slate-600 font-bold text-center sm:text-left">
          <p>© {currentYear} 청소를 담다. All Rights Reserved.</p>
          <p className="flex items-center gap-1 justify-center sm:justify-start">
            Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for your clean air.
          </p>
        </div>

      </div>
    </footer>
  );
}
