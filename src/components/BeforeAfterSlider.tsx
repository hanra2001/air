import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Check, Info } from 'lucide-react';

interface CompareCase {
  id: string;
  name: string;
  description: string;
  keyBenefit: string;
  beforeStatus: string;
  afterStatus: string;
  imageUrl: string;
}

const CASES: CompareCase[] = [
  {
    id: 'fan- Fins',
    name: '블로어 송풍팬 & 열교환기 세척',
    description: '에어컨 내부의 깊숙한 곳에서 바람을 일으켜 곰팡이를 집안 곳곳으로 실어 나르던 송풍팬과 냉각핀 내부 오염을 고온 스팀과 친환경 천연 약품 세척을 가미해 말끔하게 복원하였습니다.',
    keyBenefit: '바람 세기 40% 복원 • 쾌쾌한 유해 악취 100% 영구 소멸',
    beforeStatus: '점박이 검은 곰팡이 증식 및 포자 가루 날림 위험',
    afterStatus: '은이온 완전 살균 도포로 완벽한 위생 환경 회복',
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260530_39%2F1780106667086ouMNb_JPEG%2FKakaoTalk_20260522_154932189_05.jpg'
  },
  {
    id: 'parts-drain',
    name: '부품 및 전면 그릴 판넬 소독',
    description: '먼지와 곰팡이가 단단히 굳어 바람 구멍 차단막 역할을 하던 송풍 배출 그릴과 전면 부속 일체를 고압수로 개운하게 정밀 살균 세척하여 완전 청정 상태로 완성했습니다.',
    keyBenefit: '공기 흡입 효율 정상화 • 각종 유해 바이러스 99.9% 박멸',
    beforeStatus: '누런 먼지층과 결로 현상으로 오염된 불결한 상태',
    afterStatus: '친환경 세정 세척으로 잔여 세균 미검출 판정 완료',
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260530_123%2F1780106667486Mv6b4_JPEG%2FKakaoTalk_20260522_154932189_04.jpg'
  }
];

export default function BeforeAfterSlider() {
  const [activeCase, setActiveCase] = useState<string>('fan- Fins');

  const current = CASES.find((c) => c.id === activeCase) || CASES[0];

  return (
    <div id="before-after" className="py-24 bg-gradient-to-b from-white to-sky-50/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-extrabold text-xs tracking-widest uppercase bg-blue-50 py-1.5 px-4 rounded-full border border-blue-100 inline-flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-sky-400 fill-sky-100" />
            REAL BEFORE & AFTER
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight mt-3">
            확실하게 검증된 <br className="sm:hidden" /><span className="text-blue-500">실시간 전 후 사진</span>
          </h2>
          <p className="text-sm font-bold text-slate-500 mt-2">
            실제 매칭 엔지니어 기사가 촬영한 분해 필터 세척 전후 현장을 간결하고 솔직하게 보장합니다.
          </p>
        </div>

        {/* Tab Row Selector */}
        <div className="flex justify-center gap-2 mb-10">
          {CASES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCase(c.id)}
              className={`px-5 py-3 rounded-2xl font-black text-sm transition-all cursor-pointer border ${
                activeCase === c.id
                  ? 'bg-gradient-to-r from-sky-400 to-blue-500 text-white border-transparent shadow-lg shadow-sky-200/45'
                  : 'bg-white text-slate-600 border-slate-200/70 hover:bg-slate-50'
              }`}
              id={`tab-ba-${c.id}`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Main Grid: Info + Unified Comparative Image Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Descriptions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-slate-50/50 border border-slate-100 p-6 sm:p-8 rounded-3.5xl">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <span className="text-[10px] font-black text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-lg w-fit">
                  분해 정밀 세척
                </span>
                <h3 className="text-2xl font-black text-slate-800">
                  {current.name}
                </h3>
              </div>
              
              <p className="text-sm font-extrabold text-slate-500 leading-relaxed">
                {current.description}
              </p>

              <div className="pt-2">
                <span className="text-xs font-black text-slate-400 block mb-2">체감 가능한 청소 효과</span>
                <div className="flex items-center gap-2 bg-[#0c7075]/10 border border-[#0c7075]/20 p-3 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-[#0c7075] shrink-0" />
                  <span className="text-xs font-black text-[#0c7075]">{current.keyBenefit}</span>
                </div>
              </div>
            </div>

            {/* Split comparison items list in text form */}
            <div className="space-y-3 pt-4 border-t border-slate-200/60 font-semibold text-xs">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center font-bold text-[10px] shrink-0">W</span>
                <div>
                  <strong className="text-slate-700 block">세척 전 (Before)</strong>
                  <span className="text-slate-400 font-medium">{current.beforeStatus}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center font-bold text-[10px] shrink-0">C</span>
                <div>
                  <strong className="text-sky-700 block">세척 후 (After)</strong>
                  <span className="text-slate-400 font-medium">{current.afterStatus}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Beautiful High-Fidelity Combined Frame */}
          <div className="lg:col-span-7">
            <div className="relative h-full rounded-3.5xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
              <img
                src={current.imageUrl}
                alt={current.name}
                className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:h-[420px] transition-transform duration-500 group-hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>

              {/* Dynamic visual indicator to assist the user in realizing the left and right split */}
              <div className="absolute top-3 left-3 right-3 flex justify-between">
                <span className="bg-rose-600/90 backdrop-blur-sm text-white font-black text-[10px] sm:text-xs px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-lg border border-rose-500/30">
                  ◀ 세척 전
                </span>
                <span className="bg-emerald-600/90 backdrop-blur-sm text-white font-black text-[10px] sm:text-xs px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-lg border border-emerald-500/30">
                  세척 후 ▶
                </span>
              </div>

              {/* Bottom Info Tip indicator */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1 bg-slate-950/80 backdrop-blur-xs text-white p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-white/10 shadow-lg justify-center">
                <Info className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
                <p className="text-[9px] sm:text-xs font-bold tracking-tight text-slate-200 text-center">
                  실제 분해 클리닝 현장의 모습입니다.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
