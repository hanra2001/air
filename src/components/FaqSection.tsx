import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="py-24 bg-gradient-to-b from-sky-50/10 via-white to-sky-50/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-extrabold text-sm tracking-widest uppercase bg-blue-50 py-1.5 px-4 rounded-full border border-blue-100 inline-flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-sky-450" />
            FREQUENT QUESTIONS FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight mt-3">
            더욱 안심할 수 있는 <br className="sm:hidden" /><span className="text-blue-500">궁금증 해결 FAQ</span>
          </h2>
          <p className="text-sm sm:text-base font-bold text-slate-500 mt-2">
            살균 세제 성분, 추천 청소 주기, 작업 소요 시간 등 예약 신청 전 가장 많이 여쭤보시는 질문에 투명하게 답해 드립니다.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border-2 border-sky-100/50 rounded-2.5xl overflow-hidden transition-shadow shadow-md shadow-sky-100/10"
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-black text-slate-800 hover:text-sky-600 text-base sm:text-lg transition-colors cursor-pointer"
                  id={`faq-btn-${index}`}
                >
                  <span className="flex items-start gap-3">
                    <span className="text-sky-500 font-display">Q.</span>
                    <span className="leading-snug tracking-tight">{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5.5 h-5.5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-sky-500' : ''
                    }`}
                  />
                </button>

                {/* Accordion panel answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-500 font-semibold text-sm sm:text-base leading-relaxed border-t border-sky-50 flex items-start gap-3">
                        <span className="text-rose-400 font-display font-black text-lg">A.</span>
                        <p className="tracking-tight">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
