import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, AlertCircle, Sparkles, Smile, Flame, ShieldAlert, ArrowRight, RotateCcw } from 'lucide-react';

export default function AqiCalculator() {
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [smell, setSmell] = useState<string>('');
  const [visibleDust, setVisibleDust] = useState<string>('');

  const restartQuiz = () => {
    setHistory('');
    setLocation('');
    setSmell('');
    setVisibleDust('');
    setStep(1);
  };

  // Calculations based on choices
  const calculateResults = () => {
    let score = 20; // base score

    // History weight
    if (history === 'never_3y') score += 40;
    else if (history === '2y') score += 30;
    else if (history === '1y') score += 15;
    else score += 0;

    // Location multiplier
    let locMult = 1.0;
    if (location === 'cafe') locMult = 1.25;
    else if (location === 'office') locMult = 1.15;
    else if (location === 'living') locMult = 1.05;

    // Smell weight
    if (smell === 'heavy') score += 20;
    else if (smell === 'sometimes') score += 10;

    // Visible dust weight
    if (visibleDust === 'heavy') score += 20;
    else if (visibleDust === 'fine') score += 10;

    const totalScore = Math.min(Math.round(score * locMult), 100);

    // Determine status & details
    let label = '안전 (Clean)';
    let colorClass = 'text-emerald-500 bg-emerald-50 border-emerald-100';
    let iconColor = 'text-emerald-500';
    let summaryText = '정기적인 필터 물 세척만으로도 충분히 깨끗한 공기를 누리실 수 있는 상쾌한 상태입니다.';
    let recommendation = '아직 심각한 오염은 없으나, 바람 흡배기구에 먼지가 날리지 않도록 2주에 한 번 간이 헤파필터를 교체해 주세요.';

    if (totalScore >= 80) {
      label = '매우 위험 (Critical)';
      colorClass = 'text-rose-600 bg-rose-50 border-rose-100 dark:bg-rose-950/20';
      iconColor = 'text-rose-500';
      summaryText = '에어컨 내부 블로어팬과 냉각핀에 이미 유해 자낭균(검은곰팡이) 및 먼지다듬이 유충 배설물이 빈틈없이 번식해 공기를 마실 때마다 호흡기 질환 및 만성 비염을 호소할 수 있는 단계입니다.';
      recommendation = "최대한 빠른 완전분해 청소가 필요합니다. 초고온 스팀 살균 공정을 더한 '청소를 담다'의 프리미엄 살균 케어로 완벽 살균 세척하여 냉방 효율 회복 및 건강 증진을 도모해야 합니다.";
    } else if (totalScore >= 50) {
      label = '위험 및 경고 (Warning)';
      colorClass = 'text-amber-600 bg-amber-50 border-amber-100';
      iconColor = 'text-amber-500';
      summaryText = '송풍 팬 날개에 고형 먼지가 들러붙어 가동 시 시큼하고 퀴퀴한 발효 냄새가 나며, 전력 소모량이 부쩍 늘어나고 곰팡이가 내부 물받이(드레인)부터 증식하기 시작하는 주정 단계입니다.';
      recommendation = '시즌 가동 전 전문 살균 청소를 받는 것이 가장 합리적이며, 냉방 중 가동을 중단하기 전 30분 이상 송풍 운전하여 습기를 말려 주는 보완적 습관을 당부드립니다.';
    } else if (totalScore >= 30) {
      label = '보통 (Moderate)';
      colorClass = 'text-sky-600 bg-sky-50 border-sky-100';
      iconColor = 'text-sky-500';
      summaryText = '가장 대중적인 축적 상태로, 심하진 않지만 알루미늄 배관의 발열 틈새에 생활 먼지가 엉겨 굳어지고 있어 가동 초기 일시적인 꿉꿉함이 방출되는 단계입니다.';
      recommendation = '여름 한 철 동안 가동을 무사히 마치려면 예방 차원 고압 스팅 세척을 통해 새 제품 수준의 공기 복원을 하시는 것을 권장합니다.';
    }

    // Secondary metrics
    const moldIndex = Math.min(Math.round(totalScore * 1.05), 100);
    const powerLoss = Math.min(Math.round((totalScore / 100) * 22), 25);
    const bacterialScore = Math.min(Math.round(totalScore * 0.95 + 5), 100);

    return {
      totalScore,
      label,
      colorClass,
      iconColor,
      summaryText,
      recommendation,
      moldIndex,
      powerLoss,
      bacterialScore
    };
  };

  const currentStepData = () => {
    switch (step) {
      case 1:
        return {
          title: '에어컨을 장치 및 청소하고 얼마나 시간이 경과했나요?',
          subtitle: '곰팡이 번식 기간을 유추하는 고합의 근거가 됩니다.',
          options: [
            { key: 'less_6m', label: <>6개월 미만 <br className="sm:hidden" /> (아주 깨끗한 최근 관리)</>, icon: '🟢' },
            { key: '1y', label: <>6개월~1년 이내 <br className="sm:hidden" /> (시즌 1회 적당한 청소)</>, icon: '🟡' },
            { key: '2y', label: <>1년 초과 ~ 2년 이내 <br className="sm:hidden" /> (관리가 슬슬 밀린 기간)</>, icon: '🟠' },
            { key: 'never_3y', label: '3년 이상 경과함 또는 평생 청소 안 함', icon: '🔴' }
          ],
          select: (key: string) => {
            setHistory(key);
            setStep(2);
          }
        };
      case 2:
        return {
          title: '에어컨이 가동되고 설치된 주된 장소는 어디인가요?',
          subtitle: '장소별 유동 인구 및 습기 축적 속도 가중치를 매깁니다.',
          options: [
            { key: 'bedroom', label: '가정집 침실/공부방 (유동 적음, 밀폐 주도)', icon: '🏠' },
            { key: 'living', label: '가정집 거실 (공동 사용, 부엌 연동 오염)', icon: '🛋️' },
            { key: 'office', label: '사무실 / 공용 서재 (사용 주기가 길고 환기 부족)', icon: '🏢' },
            { key: 'cafe', label: '상가, 카페, 뷰티숍, 음식점 (유입 먼지 극대)', icon: '☕' }
          ],
          select: (key: string) => {
            setLocation(key);
            setStep(3);
          }
        };
      case 3:
        return {
          title: '에어컨을 처음 가동할 때 기분 나쁜 냄새가 나나요?',
          subtitle: '풍 풍기 내부에 누적된 메탄/효모 곰팡이 오염을 판정합니다.',
          options: [
            { key: 'none', label: '안 나거나 아주 상쾌하고 신선한 바람', icon: '✨' },
            { key: 'sometimes', label: '처음 5분 가동 시 살짝 쉰내, 꿉꿉함', icon: '👃' },
            { key: 'heavy', label: '식초 냄새, 걸레 빤 것 같은 땀내, 축축한 잡내 상시 돌출', icon: '🤢' }
          ],
          select: (key: string) => {
            setSmell(key);
            setStep(4);
          }
        };
      case 4:
        return {
          title: '에어컨 날개 밑이나 하단 필터에 먼지가 도드라져 보이나요?',
          subtitle: '유해 가루의 외부 배출 여부를 파악합니다.',
          options: [
            { key: 'clean', label: '눈으로 보기에 뽀얗고 외관상 아주 깨끗함', icon: '💎' },
            { key: 'fine', label: '회색 먼지와 노란 기름기가 판넬 겉에 보임', icon: '🔎' },
            { key: 'heavy', label: '날개 날밑에 검정 가루가 떨어지거나 새카만 반점이 가득함', icon: '🎛️' }
          ],
          select: (key: string) => {
            setVisibleDust(key);
            setStep(5);
          }
        };
      default:
        return null;
    }
  };

  const stepInfo = currentStepData();
  const results = step === 5 ? calculateResults() : null;

  return (
    <div id="calculator" className="py-24 bg-gradient-to-b from-white via-sky-50/40 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-extrabold text-sm tracking-widest uppercase bg-blue-50 py-1.5 px-4 rounded-full border border-blue-100 inline-flex items-center gap-1.5">
            <Calculator className="w-4 h-4" />
            AI 스마트 안심 클린 자가 진단
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight mt-3">
            우리 집 에어컨 오염도 <br className="sm:hidden" /><span className="text-blue-500">자가 측정기</span>
          </h2>
          <p className="text-sm sm:text-base font-bold text-slate-500 mt-2">
            간단한 선택만으로 보이지 않는 열교환기 뒷면과 블로어 필터 사이의 오염 수치 계측값을 산정합니다.
          </p>
        </div>

        {/* Diagnostic Panel Box */}
        <div className="bg-white border-2 border-sky-100 rounded-3xl shadow-xl shadow-sky-200/20 overflow-hidden min-h-[460px] flex flex-col">
          
          {/* Header Progress status bar */}
          <div className="bg-gradient-to-r from-sky-400 to-blue-500 p-1.5 flex transition-all duration-300">
            <div
              className="bg-white h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${(step / 5) * 100}%` }}
            ></div>
          </div>

          <div className="p-6 sm:p-10 flex-1 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {step <= 4 && stepInfo ? (
                <motion.div
                  key={`quiz-step-${step}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8 flex-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-sky-100 text-sky-700 font-bold font-display px-2.5 py-1 rounded-xl text-xs">
                        질문 {step} / 4
                      </span>
                      <span className="text-slate-400 text-xs">AI 오염 지수 계산 알고리즘</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-800 leading-snug">
                      {stepInfo.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-400 mt-1.5">
                      {stepInfo.subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3.5 my-6">
                    {stepInfo.options.map((option, idx) => (
                      <button
                        key={option.key}
                        onClick={() => stepInfo.select(option.key)}
                        className="w-full text-left p-4.5 rounded-2xl bg-slate-50 hover:bg-sky-50/80 border-2 border-slate-100 hover:border-sky-200 text-slate-700 hover:text-sky-800 font-bold transition-all flex items-center justify-between group active:scale-[0.99]"
                        id={`calc-opt-${step}-${idx}`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-2xl filter group-hover:scale-125 transition-transform">{option.icon}</span>
                          <span className="text-base tracking-tight">{option.label}</span>
                        </span>
                        <ArrowRight className="w-5 h-5 text-slate-350 group-hover:text-sky-500 group-hover:translate-x-1.5 transition-all" />
                      </button>
                    ))}
                  </div>

                  <div className="text-center text-xs text-slate-400">
                    *본 검사는 누적 오염 역학 통계치 및 에어컨 사이클 역파 전력 공식에 기반하여 산출됩니다.
                  </div>
                </motion.div>
              ) : (
                results && (
                  <motion.div
                    key="quiz-results"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-8 flex-1"
                  >
                    {/* Gauge Header */}
                    <div className="flex flex-col md:flex-row items-center gap-6 pb-6 border-b border-sky-50 justify-between">
                      <div className="text-center md:text-left space-y-1">
                        <span className={`inline-block text-xs font-black px-3 py-1 rounded-full border ${results.colorClass}`}>
                          종합 오염 등급 : {results.label}
                        </span>
                        <h4 className="text-2xl font-black text-slate-800">
                          진단 결과: 유해 물질 누적율 <span className="text-blue-500 font-display text-3xl">{results.totalScore}%</span>
                        </h4>
                      </div>

                      {/* Visual Circular Gauge */}
                      <div className="relative flex items-center justify-center w-28 h-28 shrink-0">
                        <svg className="w-full h-full transform -rotate-90">
                          {/* Background Circle */}
                          <circle
                            cx="56"
                            cy="56"
                            r="48"
                            strokeWidth="10"
                            stroke="#f1f5f9"
                            fill="transparent"
                          />
                          {/* Active Gauge Circle */}
                          <motion.circle
                            cx="56"
                            cy="56"
                            r="48"
                            strokeWidth="10"
                            stroke={results.totalScore >= 80 ? '#f43f5e' : results.totalScore >= 50 ? '#f59e0b' : '#38bdf8'}
                            strokeDasharray={2 * Math.PI * 48}
                            initial={{ strokeDashoffset: 2 * Math.PI * 48 }}
                            animate={{ strokeDashoffset: 2 * Math.PI * 48 * (1 - results.totalScore / 100) }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                            strokeLinecap="round"
                            fill="transparent"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-2.5xl font-black font-display text-slate-800 leading-none">
                            {results.totalScore}
                          </span>
                          <span className="text-[10px] font-bold text-slate-400 mt-1">SCORE</span>
                        </div>
                      </div>
                    </div>

                    {/* Secondary Metrics breakdown bento-rows */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      
                      {/* Mold Accumulation Progress */}
                      <div className="p-4 rounded-2xl bg-neutral-50/80 border border-slate-100 flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block">MOLD REPLIC</span>
                          <span className="text-lg font-black text-slate-800">곰팡이 증식 위험도</span>
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between text-xs font-bold text-slate-550 mb-1">
                            <span>유해 균사 위험율</span>
                            <span className={results.totalScore >= 50 ? 'text-rose-500' : 'text-sky-500'}>{results.moldIndex}%</span>
                          </div>
                          <div className="h-2 bg-slate-150 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${results.totalScore >= 80 ? 'bg-rose-500' : results.totalScore >= 50 ? 'bg-amber-400' : 'bg-sky-400'}`}
                              style={{ width: `${results.moldIndex}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Bacterial Risk level */}
                      <div className="p-4 rounded-2xl bg-neutral-50/80 border border-slate-100 flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block">BACTERIA ACTIVE</span>
                          <span className="text-lg font-black text-slate-800">병원균 활성 위험</span>
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between text-xs font-bold text-slate-550 mb-1">
                            <span>대장균 및 레지오넬라</span>
                            <span className={results.totalScore >= 50 ? 'text-rose-500' : 'text-sky-500'}>{results.bacterialScore}%</span>
                          </div>
                          <div className="h-2 bg-slate-150 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${results.totalScore >= 80 ? 'bg-rose-500' : results.totalScore >= 50 ? 'bg-amber-400' : 'bg-sky-400'}`}
                              style={{ width: `${results.bacterialScore}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Power Load Increase Inefficiency */}
                      <div className="p-4 rounded-2xl bg-neutral-50/80 border border-slate-100 flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block">POWER OVERLOAD</span>
                          <span className="text-lg font-black text-slate-800">전기요금 추가 소모</span>
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between text-xs font-bold text-slate-550 mb-1">
                            <span>냉방 압축기 효율 저하</span>
                            <span className="text-rose-500 font-extrabold">{results.powerLoss}% 에너지 추가</span>
                          </div>
                          <div className="h-2 bg-slate-150 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full bg-rose-500"
                              style={{ width: `${(results.powerLoss / 25) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Report and Action Recommendations */}
                    <div className="p-5 rounded-2xl bg-slate-50 border border-sky-100 text-slate-700 text-sm space-y-3">
                      <p className="font-semibold leading-relaxed">
                        🔍 <strong className="text-slate-900 font-extrabold">내부 누적 분석 진단서:</strong> {results.summaryText}
                      </p>
                      <p className="font-semibold text-blue-600 leading-relaxed bg-blue-50/50 p-3 rounded-lg border border-blue-100/40">
                        ⚡ <strong className="text-slate-900 font-black">케어 전문가 처방안:</strong> {results.recommendation}
                      </p>
                    </div>

                    {/* Reset Button */}
                    <div className="flex justify-between items-center pt-2">
                      <button
                        onClick={restartQuiz}
                        className="px-5 py-2.5 rounded-xl border-2 border-slate-150 hover:bg-slate-50 text-slate-5050 font-bold text-sm tracking-tight transition-colors cursor-pointer flex items-center gap-2"
                        id="calc-reset"
                      >
                        <RotateCcw className="w-4 h-4" />
                        진단 다시하기
                      </button>

                      {results.totalScore >= 50 && (
                        <div className="flex items-center gap-1.5 text-xs text-rose-500 font-black animate-pulse">
                          <ShieldAlert className="w-4 h-4" />
                          보이지 않는 먼지가 호흡기에 직결되고 있습니다!
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
