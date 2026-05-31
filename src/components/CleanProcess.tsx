import { motion } from 'motion/react';
import { STEP_PROCESS } from '../data';
import { Smartphone, ShieldCheck, Wrench, Droplets, Flame, Wind, CheckCircle } from 'lucide-react';

const iconsMap = [
  <Smartphone key="1" className="w-6 h-6" />,
  <ShieldCheck key="2" className="w-6 h-6" />,
  <Wrench key="3" className="w-6 h-6" />,
  <Droplets key="4" className="w-6 h-6" />,
  <Flame key="5" className="w-6 h-6" />,
  <Wind key="6" className="w-6 h-6" />,
  <CheckCircle key="7" className="w-6 h-6" />
];

export default function CleanProcess() {
  return (
    <div id="process" className="py-24 bg-gradient-to-b from-sky-50/20 via-white to-white relative overflow-hidden">
      {/* Breeze particles decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-extrabold text-sm tracking-widest uppercase bg-blue-50 py-1.5 px-4 rounded-full border border-blue-100 inline-flex items-center gap-1.5">
            <Wind className="w-4 h-4 text-sky-400" />
            PROFESSIONAL PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight mt-3">
            청담의 <br className="sm:hidden" /><span className="text-blue-500">정밀 7단계 가전 안심 공정</span>
          </h2>
          <p className="text-sm sm:text-base font-bold text-slate-500 mt-2">
            박리다매식 겉핥기 가습 세정이 아닌, <br className="sm:hidden" />
            송풍팬 구석까지 남김없이 분해하여 <br className="sm:hidden" />
            항균 코팅막까지 세우는 정성에 정성을 더합니다.
          </p>
        </div>

        {/* Timeline Path representing a cooling draft */}
        <div className="relative">
          {/* Central vertical pipeline for large screens */}
          <div className="absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-sky-200 via-sky-400 to-blue-500 -translate-x-1/2 hidden lg:block"></div>

          <div className="space-y-12 relative z-10">
            {STEP_PROCESS.map((p, index) => {
              const isEven = index % 2 === 0;
              const stepIcon = iconsMap[index] || <CheckCircle className="w-6 h-6" />;

              return (
                <div
                  key={p.step}
                  className={`flex flex-col lg:flex-row items-center justify-between ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left Column (Info Card on alternate sides) */}
                  <div className="w-full lg:w-[45%]">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="p-6 sm:p-8 bg-white border border-sky-100 rounded-3xl shadow-xl shadow-sky-100/35 hover:shadow-sky-200/40 relative group"
                    >
                      {/* Header block with Icon in deep blue button */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-500 text-white shadow-md shadow-sky-100">
                          {stepIcon}
                        </div>
                        <h3 className="text-xl font-black text-slate-800 leading-tight">
                          {p.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base font-semibold text-slate-500 leading-relaxed pr-10">
                        {p.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Central Node representing pipeline intersection */}
                  <div className="relative my-4 lg:my-0 flex items-center justify-center z-20">
                    <div className="w-10 h-10 rounded-full bg-white border-[5px] border-sky-400 font-bold font-display text-xs text-sky-600 flex items-center justify-center shadow-md animate-pulse">
                      {p.step}
                    </div>
                  </div>

                  {/* Right Column (Placeholder or space balancer for alternate layouts) */}
                  <div className="hidden lg:block lg:w-[45%]"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Callout Footer Banner */}
        <div className="mt-20 p-8 rounded-3.5xl bg-gradient-to-tr from-sky-400 to-blue-600 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#ffffff_2px,transparent_2px)]" style={{ backgroundSize: '16px 16px' }}></div>
          <div className="relative z-10 space-y-1.5 max-w-xl text-center md:text-left">
            <span className="text-xs font-black tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full text-cyan-100">GUARANTEED RESULTS</span>
            <h3 className="text-2xl sm:text-3.5xl font-black leading-tight">이유 있는 프리미엄 케어, 품질로 보답합니다</h3>
            <p className="text-xs sm:text-sm font-semibold opacity-90 leading-relaxed">
              &lsquo;청소를 담다&rsquo;는 엄선된 친환경 장약과 다년간 사내 교육을 수료한 현역 숙련 기사님들만 투입하여 <br />
              최상의 가전 성능 가동율을 영위합니다.
            </p>
          </div>
          <a
            href="tel:010-2458-2516"
            className="relative z-10 px-6 py-3.5 rounded-2xl bg-white text-blue-600 font-extrabold text-base hover:bg-sky-50 shadow-lg hover:scale-105 active:scale-95 transition-all text-center min-w-44 shrink-0"
          >
            기사 배정 빠른 상담
          </a>
        </div>

      </div>
    </div>
  );
}
