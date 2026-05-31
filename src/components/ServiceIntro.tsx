import React from 'react';
import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Thermometer, UserCheck, Flame, Award, HeartHandshake } from 'lucide-react';

interface ServiceCoreValue {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

const VALUES: ServiceCoreValue[] = [
  {
    icon: <Leaf className="w-6 h-6 text-emerald-500" />,
    title: "100% 무독성 친환경 세정",
    subtitle: "Eco-Friendly Cleansing",
    description: "생분해성 천연 오렌지 오일 성분의 미국 인증 무독성 친환경 세제만을 엄선하여 사용합니다. 잔류 화학물질의 위험이 없어 아이나 반려동물이 있는 가정에서도 전혀 해로움 없이 안전합니다.",
    badge: "안전 인증 완료"
  },
  {
    icon: <Flame className="w-6 h-6 text-orange-500 animate-pulse" />,
    title: "130°C 고온 고압 스팀 살균",
    subtitle: "Thermal Steam Therapy",
    description: "단순 물 세척을 넘어 특수 장비에서 고압분무되는 130도 이상의 미세 스팀 열처리 공법을 전 부품에 적용합니다. 송풍 팬 내부 틈새에 서식하는 초미세 병원균과 악취유발 분자를 완벽 사멸시킵니다.",
    badge: "고온 살균 공법"
  },
  {
    icon: <UserCheck className="w-6 h-6 text-blue-500" />,
    title: "전문 마스터 1:1 직영 매칭",
    subtitle: "Certified Master Dispatch",
    description: "하청 및 외부 프리랜서 외주 방식은 철저히 배제합니다. 본사 자체 직무 아카데미에서 에어컨 회로 구조 및 분해 실습 교육을 완벽히 이수한 전속 홈케어 마스터만 배정하여 명품 조립 세정을 행합니다.",
    badge: "100% 본사 이수 기사"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
    title: "철저한 사후 안심 서비스",
    subtitle: "Thorough Service Support",
    description: "청소 후 정상 작동 및 가동 여부를 끝까지 확인하며, 고객이 만족할 때까지 세심하고 책임감 있는 안심 사후 관리 세정을 철저히 약속드립니다.",
    badge: "안심 사후 관리"
  }
];

export default function ServiceIntro() {
  return (
    <section id="service-intro" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0f2fe_1px,transparent_1px)] opacity-50" style={{ backgroundSize: '24px 24px' }}></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-40"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-blue-600 font-extrabold text-xs tracking-widest uppercase bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 w-fit">
              <Award className="w-3.5 h-3.5 text-sky-500" />
              PROFESSIONAL PREMIUM CARE SYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight leading-tight">
              차이가 곧 품격입니다, <br className="sm:hidden" />
              <span className="text-blue-500">‘청소를 담다’</span>의 <br className="sm:hidden" />4대 프리미엄 원칙
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-sm font-bold text-slate-500 leading-relaxed max-w-sm ml-auto">
              기술을 흉내 낼 수는 있지만, <br />
              한 대 한대 구석구석을 수작업으로 소독해드리는 <br />
              장인 정신의 세밀함까지 따라 할 수는 없습니다.
            </p>
          </div>
        </div>

        {/* Dynamic Process Highlight Box */}
        <div className="bg-gradient-to-r from-slate-900 to-sky-950 rounded-3.5xl p-8 sm:p-12 text-white mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-6 right-6 flex items-center gap-1 opacity-20 text-xs font-mono select-none">
            <HeartHandshake className="w-4 h-4" /> TRIPLE HYGIENE STANDARD
          </div>

          <div className="max-w-2xl space-y-5">
            <span className="text-sky-300 font-black text-xs uppercase tracking-widest">Premium Core standard</span>
            <h3 className="text-2xl sm:text-3.5xl font-black tracking-tight leading-tight">
              눈속임 없는 <br className="sm:hidden" />완전 밀착 분해 세척,<br />
              보이지 않는 내부 깊은 곳까지 완벽하게 케어합니다.
            </h3>
            <p className="text-sm text-slate-300 font-medium leading-relaxed">
              드레인판(물받이), 전면 그릴은 물론 송풍팬 분해가 가능한 모든 모델은 완벽히 완전분해하여 친환경 약제 세정 처리를 거친 후, 물기로 인해 부식이 있을 수 있는 먼지 하나까지 보양 및 가동 테스트를 완벽 확인합니다.
            </p>
          </div>
        </div>

        {/* Bento Grid: 4 Core Priniciples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VALUES.map((val, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200/60 p-6 sm:p-8 rounded-3.5xl shadow-lg shadow-slate-100/50 hover:shadow-xl hover:border-slate-300/80 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-2.5xl group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors shrink-0">
                    {val.icon}
                  </div>
                  <span className="text-[10px] sm:text-xs font-black text-blue-600 bg-blue-50 border border-blue-100/40 px-3 py-1 rounded-full">
                    {val.badge}
                  </span>
                </div>
                
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                    {val.subtitle}
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-slate-800 tracking-tight">
                    {val.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm font-bold text-slate-500 leading-relaxed">
                  {val.description}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-black text-blue-500">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span>청소를 담다가 직접 보장하는 장인 원칙</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center text-slate-400 text-xs font-bold bg-white border border-slate-200/50 px-6 py-4 rounded-2xl w-fit mx-auto">
          💡 해당 서비스는 예약된 일정에 맞춰 전문 기사의 꼼꼼한 세척 마무리가 기본 보장됩니다.
        </div>

      </div>
    </section>
  );
}
