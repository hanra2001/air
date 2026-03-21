/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  SearchCheck, 
  ShieldCheck, 
  Wrench, 
  Droplets, 
  Waves, 
  Fan, 
  CheckCircle,
  Phone,
  MessageCircle,
  Star,
  ExternalLink,
  X,
  Users,
  MapPin,
  Menu,
  ChevronUp,
  ChevronDown
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { name: "회사소개", href: "#about" },
  { name: "청소효과", href: "#effect" },
  { name: "프리미엄 케어", href: "#premium" },
  { name: "고객 후기", href: "#review" },
  { name: "비포&애프터", href: "#before-after" },
];

const EFFECTS = [
  {
    title: "무균의 숨결",
    description: "에어컨 내부 곰팡이와 세균을 99.9% 완벽 제거하여 호흡기 질환의 원인을 해결합니다.",
    icon: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Leaf%20fluttering%20in%20wind/3D/leaf_fluttering_in_wind_3d.png",
    delay: 0
  },
  {
    title: "에너지 효율 극대화",
    description: "냉방 효율을 회복시켜 더 시원한 바람과 함께 전기 요금 부담을 획기적으로 낮춥니다.",
    icon: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/High%20voltage/3D/high_voltage_3d.png",
    delay: 0.1
  },
  {
    title: "프리미엄 가전 보호",
    description: "정밀 세척으로 부품 부식을 방지하여 에어컨의 기기 수명을 최대로 연장합니다.",
    icon: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Shield/3D/shield_3d.png",
    delay: 0.2
  }
];

const STEPS = [
  { tag: "01 CHECK", title: "정밀 점검", icon: SearchCheck, delay: 0 },
  { tag: "02 PROTECT", title: "완벽 보양", icon: ShieldCheck, delay: 0.05 },
  { tag: "03 OPEN", title: "부품 분해", icon: Wrench, delay: 0.1 },
  { tag: "04 SPRAY", title: "약품 도포", icon: Droplets, delay: 0.15 },
  { tag: "05 WASH", title: "고압 세척", icon: Waves, delay: 0.2 },
  { tag: "06 STEAM", title: "스팀 살균", icon: Fan, delay: 0.25 },
  { tag: "07 DONE", title: "조립 마무리", icon: CheckCircle, delay: 0.3 },
];

const REVIEWS = [
  {
    img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260319_91%2F1773901321397LphAg_JPEG%2F7.jpg",
    title: "부모님 댁 에어컨이 새것이 되었습니다",
    content: "기사님이 정말 친절하셨어요. 팬 안쪽까지 완전히 분해해서 보여주시니 신뢰가 갑니다.",
    author: "ykjo****님",
    rating: 5.0
  },
  {
    img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260319_298%2F1773901321412DD6an_JPEG%2F9.jpg",
    title: "아이가 있는 집이라면 필수예요",
    content: "친환경 살균 세제와 스팀 공정을 직접 눈으로 보니 안심이 됐습니다. 진작 부를 걸 그랬습니다.",
    author: "love****님",
    rating: 5.0
  },
  {
    img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260320_17%2F17740040717932v97D_JPEG%2F%25C7%25D0%25BF%25F8.jpeg",
    title: "학원 에어컨 전문성은 여기가 최고",
    content: "대기업 수준의 체계적인 관리에 감동했어요. 내년에도 꼭 다시 맡길 예정입니다.",
    author: "educ****님",
    rating: 5.0
  },
  {
    img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260304_213%2F1772591367161IoLXE_JPEG%2FKakaoTalk_20260122_135248904_01.jpg",
    title: "귀찮아서 미루다 큰맘 먹고 불렀는데 신세계네요",
    content: "에어컨 켤 때마다 냄새 나서 찝찝했는데, 뜯어보니 충격받았어요. 속이 다 시원합니다.",
    author: "blue****님",
    rating: 5.0
  },
  {
    img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260304_5%2F1772591365450n6bYo_PNG%2FKakaoTalk_20260124_215357238.png",
    title: "작년에 싼데 맡겼다가 후회했는데, 여기가 최고네요",
    content: "역시 전문가는 다르구나 싶었어요. 비용 아깝지 않네요.",
    author: "best****님",
    rating: 5.0
  }
];

const BEFORE_AFTER = [
  {
    img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260320_3%2F1773999658645S71hD_JPEG%2F%25B3%25C3%25B0%25A2.jpg",
    title: "냉각핀 정밀 세척",
    desc: "고압으로 오염물을 완벽 제거",
    delay: 0
  },
  {
    img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260320_144%2F1773999965301Uw9Q6_JPEG%2F20260320_184544_1.jpg",
    title: "송풍팬 곰팡이 박멸",
    desc: "보이지 않는 곳의 세균까지 심층 살균",
    delay: 0.1
  },
  {
    img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260320_289%2F17740030090711k7fO_JPEG%2F%25C4%25C9%25BE%25EE.jpg",
    title: "부품별 딥 클리닝",
    desc: "분해 후 구석구석 정성스럽게 관리",
    delay: 0.2
  }
];

const CompanyIntro = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24 px-5 max-w-7xl mx-auto overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-center mb-16 md:mb-24"
      >
        <motion.span variants={itemVariants} className="text-primary font-bold tracking-[0.3em] uppercase block mb-4 text-xs md:text-sm">CORPORATE OVERVIEW</motion.span>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-7xl font-extrabold text-navy mb-6 md:mb-8 tracking-tighter leading-[1.2] md:leading-[1.1]">
          우리 가족의 건강한 숨결을 위한<br />
          <span className="text-primary relative inline-block">
            따뜻한 약속
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-1 md:bottom-2 left-0 h-2 md:h-3 bg-primary/20 -z-10"
            />
          </span>, 맑은숨
        </motion.h2>
        <motion.p variants={itemVariants} className="text-text-sub text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium">
          맑은숨은 내 집을 케어하는 마음으로 정성을 다해<br className="hidden md:block" /> 
          고객님께 쾌적하고 맑은 공기를 선물하는 든든한 파트너입니다.
        </motion.p>
      </motion.div>

      {/* Company Building & Vision Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center mb-24 md:mb-40">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          <div className="relative rounded-[30px] md:rounded-[40px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] md:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" 
              alt="맑은숨 에어케어 센터" 
              className="w-full h-[350px] md:h-[650px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="w-8 md:w-12 h-1px bg-primary" />
                <span className="text-xs md:text-sm font-bold tracking-widest uppercase">Our Workspace</span>
              </div>
              <h4 className="text-2xl md:text-4xl font-bold mb-2">맑은숨 에어케어 센터</h4>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-10 md:space-y-12"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-extrabold text-navy mb-4 md:mb-6 flex items-center gap-4">
              <span className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <ShieldCheck size={24} />
              </span>
              기업 철학 (Philosophy)
            </h3>
            <p className="text-text-sub text-base md:text-lg leading-relaxed md:pl-14">
              맑은숨은 '정직'과 '신뢰'를 기업의 최우선 가치로 삼습니다. 
              단순한 이익 창출을 넘어, 우리 사회의 모든 공간에 맑은 공기를 전파하여 
              삶의 질을 향상시키는 사회적 책임을 다하고 있습니다.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-extrabold text-navy mb-4 md:mb-6 flex items-center gap-4">
              <span className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <CheckCircle size={24} />
              </span>
              핵심 역량 (Core Competence)
            </h3>
            <div className="md:pl-14 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <p className="text-text-sub text-base md:text-lg">수도권 전역의 체계적인 서비스 네트워크 구축</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <p className="text-text-sub text-base md:text-lg">자체 기술 교육 센터 운영을 통한 전문가 양성</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <p className="text-text-sub text-base md:text-lg">최첨단 정밀 세척 장비 및 친환경 솔루션 보유</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4 md:pt-6">
            <div className="bg-bg-light p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-gray-100 relative">
              <div className="absolute -top-4 -left-4 text-primary opacity-20">
                <svg width="32" height="32" md:width="40" md:height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L22.017 3V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H4.01697C2.9124 8 2.01697 7.10457 2.01697 6V3L10.017 3V15C10.017 18.3137 7.33068 21 4.01697 21H2.01697Z" /></svg>
              </div>
              <p className="text-navy font-bold text-lg md:text-xl italic leading-relaxed mb-6">
                "우리는 단순히 먼지를 닦아내는 것이 아니라, 고객님의 소중한 가족이 마시는 공기를 디자인한다는 사명감으로 임합니다."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img src="https://picsum.photos/seed/ceo/100/100" alt="CEO" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-navy text-sm md:text-base">이용훈</p>
                  <p className="text-xs md:text-sm text-text-sub">맑은숨 대표이사</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24 md:mb-40">
        {[
          { label: "누적 서비스 건수", value: "50,000+", icon: <CheckCircle className="text-primary" size={20} /> },
          { label: "고객 만족도", value: "99.2%", icon: <ShieldCheck className="text-primary" size={20} /> },
          { label: "보유 전문가", value: "120명+", icon: <Users className="text-primary" size={20} /> },
          { label: "서비스 지역", value: "수도권 전역", icon: <MapPin className="text-primary" size={20} /> }
        ].map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-gray-50 text-center hover:shadow-xl transition-all duration-500"
          >
            <div className="flex justify-center mb-3 md:mb-4">{stat.icon}</div>
            <div className="text-xl md:text-3xl font-black text-navy mb-1 md:mb-2">{stat.value}</div>
            <div className="text-text-sub font-bold text-[10px] md:text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Core Promises Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-navy rounded-[32px] md:rounded-[60px] p-8 md:p-24 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -ml-32 -mb-32" />
        
        <div className="relative z-10">
          <h3 className="text-xl md:text-5xl font-extrabold mb-8 md:mb-16 text-center tracking-tight">맑은숨의 3대 핵심 약속</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
            <motion.div 
              whileHover={{ y: -15 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 md:p-10 rounded-[24px] md:rounded-[40px] transition-all duration-500 hover:bg-white/10"
            >
              <div className="text-primary text-3xl md:text-5xl font-black mb-2 md:mb-6 opacity-50">01</div>
              <h4 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">전문 자격증 보유</h4>
              <p className="opacity-70 text-sm md:text-base leading-relaxed">
                모든 현장 기사는 체계적인 전문 교육 과정을 이수한 전문가입니다. 
                검증된 실력으로 최상의 결과를 보장합니다.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -15 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 md:p-10 rounded-[24px] md:rounded-[40px] transition-all duration-500 hover:bg-white/10"
            >
              <div className="text-primary text-3xl md:text-5xl font-black mb-2 md:mb-6 opacity-50">02</div>
              <h4 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">완벽 보양 시스템</h4>
              <p className="opacity-70 text-sm md:text-base leading-relaxed">
                작업 전 가구와 바닥을 완벽하게 보호하는 3중 보양 시스템을 적용합니다. 
                청소 후에도 고객님의 공간은 그대로 유지됩니다.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -15 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 md:p-10 rounded-[24px] md:rounded-[40px] transition-all duration-500 hover:bg-white/10"
            >
              <div className="text-primary text-3xl md:text-5xl font-black mb-2 md:mb-6 opacity-50">03</div>
              <h4 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">투명한 공정 확인</h4>
              <p className="opacity-70 text-sm md:text-base leading-relaxed">
                세척 전후의 상태를 실시간으로 공유하며, 모든 작업 과정을 투명하게 공개합니다. 
                눈으로 확인하는 안심 케어를 경험하세요.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const QuoteModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    region: "",
    content: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mbdzbkqv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "성함": formData.name,
          "연락처": formData.contact,
          "지역": formData.region,
          "문의내용": formData.content
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", contact: "", region: "", content: "" });
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          alert(data["errors"].map((error: any) => error["message"]).join(", "));
        } else {
          alert("신청 중 오류가 발생했습니다. 다시 시도해주세요.");
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("네트워크 오류가 발생했습니다. 나중에 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-5">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-white w-full max-w-lg rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden max-h-[92vh] md:max-h-[90vh] flex flex-col"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-text-sub hover:text-navy transition-colors z-50 bg-white/80 backdrop-blur-sm rounded-full"
        >
          <X size={24} />
        </button>

        <div className="p-6 md:p-10 overflow-y-auto">
          {!isSuccess ? (
            <>
              <div className="mb-8">
                <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">QUICK QUOTE</span>
                <h3 className="text-3xl font-extrabold text-navy">무료 견적 신청</h3>
                <p className="text-text-sub mt-2">상담원이 확인 후 신속하게 연락드리겠습니다.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-navy mb-2 ml-1">성함</label>
                  <input 
                    required
                    type="text"
                    placeholder="성함을 입력해주세요"
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2 ml-1">연락처</label>
                  <input 
                    required
                    type="tel"
                    placeholder="연락처를 입력해주세요"
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2 ml-1">지역</label>
                  <p className="text-[0.7rem] text-primary font-bold mb-2 ml-1">※ 서울, 경기, 인천 전지역 출장 가능합니다.</p>
                  <input 
                    required
                    type="text"
                    placeholder="예: 서울시 강남구"
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2 ml-1">문의 내용</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="에어컨 종류, 대수 등을 적어주시면 더 정확한 견적이 가능합니다."
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  />
                </div>
                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:translate-y-0"
                >
                  {isSubmitting ? "신청 중..." : "견적 신청하기"}
                </button>
              </form>
            </>
          ) : (
            <div className="py-10 text-center">
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-3xl font-extrabold text-navy mb-3">신청 완료!</h3>
              <p className="text-text-sub mb-8 leading-relaxed">
                견적 신청이 정상적으로 접수되었습니다.<br />
                빠른 시일 내에 연락드리겠습니다.
              </p>
              <button 
                onClick={onClose}
                className="px-10 py-4 bg-navy text-white rounded-2xl font-bold hover:bg-navy/90 transition-all"
              >
                닫기
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<"home" | "about">("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#about") {
        setCurrentPage("about");
        window.scrollTo(0, 0);
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-[1000] transition-all duration-700 bg-white py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = "";
              setCurrentPage("home");
            }}
            className="block transition-all duration-700 hover:scale-105"
          >
            <img 
              src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260321_212%2F1774079901049p0166_PNG%2F%25B7%25CE%25B0%25ED4-2_-_%25B0%25A1%25B7%25CE.png" 
              alt="맑은숨 로고" 
              className="h-10 md:h-12 transition-all duration-700 brightness-100"
              referrerPolicy="no-referrer"
            />
          </a>
          <nav className="hidden md:flex items-center space-x-12">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => {
                  if (link.href === "#about") {
                    setCurrentPage("about");
                    window.scrollTo(0, 0);
                  } else if (currentPage === "about") {
                    // If on about page and clicking a section link, go home first
                    setCurrentPage("home");
                    setTimeout(() => {
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }
                }}
                className={`font-bold text-[1.05rem] tracking-tight transition-all duration-300 hover:opacity-70 ${
                  (link.href === "#about" && currentPage === "about") || (link.href !== "#about" && currentPage === "home")
                    ? "text-primary" 
                    : "text-navy hover:text-primary"
                }`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-8 py-3 bg-primary text-white rounded-full font-bold text-[1rem] shadow-md hover:bg-navy hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              무료 견적 받기
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-navy hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[999] bg-white md:hidden pt-24 px-8"
            >
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-5 p-2 text-navy hover:text-primary transition-colors"
                aria-label="메뉴 닫기"
              >
                <X size={32} />
              </button>
              <div className="flex flex-col space-y-8">
                {NAV_LINKS.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      if (link.href === "#about") {
                        setCurrentPage("about");
                        window.scrollTo(0, 0);
                      } else if (currentPage === "about") {
                        setCurrentPage("home");
                        setTimeout(() => {
                          const element = document.querySelector(link.href);
                          element?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }
                    }}
                    className={`text-2xl font-bold tracking-tight transition-all duration-300 ${
                      (link.href === "#about" && currentPage === "about") || (link.href !== "#about" && currentPage === "home")
                        ? "text-primary" 
                        : "text-navy"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsQuoteModalOpen(true);
                  }}
                  className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-xl shadow-lg hover:bg-navy transition-all duration-300"
                >
                  무료 견적 받기
                </button>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 text-text-sub font-medium text-lg border-t border-gray-100 mt-4"
                >
                  메뉴 닫기
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {currentPage === "home" ? (
        <>
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center text-center px-5 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260318_285%2F177381414039109qQ5_PNG%2F6.png')] bg-center bg-cover filter blur-[4px] brightness-[0.7] scale-105 transition-transform duration-[10s] ease-out hover:scale-110"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-white max-w-4xl"
        >
          <span className="block text-navy font-bold text-lg mb-5 tracking-[0.2em]">PREMIUM AIR CARE</span>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-bold tracking-tight">수도권 전지역 서비스 가능</span>
          </div>
          <h1 className="text-[2.4rem] md:text-7xl font-extrabold mb-6 leading-[1.25] md:leading-[1.15] tracking-tighter break-keep">
            가족의 건강을 위한<br />
            가장 깨끗한 <span className="text-sky-400 drop-shadow-sm">맑은 숨</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90">99.9% 완벽 살균으로 공기의 가치를 증명합니다.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-12 py-5 bg-primary text-white rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center"
            >
              무료 견적 받기
            </button>
            <a 
              href="https://open.kakao.com/o/s5ykrdmi" 
              target="_blank" 
              className="px-12 py-5 bg-white/10 backdrop-blur-md text-white border border-white/40 rounded-full font-bold text-lg hover:bg-white hover:text-navy hover:-translate-y-2 transition-all duration-500"
            >
              상담 예약하기
            </a>
          </div>
        </motion.div>
      </section>

      {/* 1. 청소효과 */}
      <section id="effect" className="py-24 md:py-32 max-w-7xl mx-auto px-5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[2.2rem] md:text-5xl font-extrabold text-navy mb-5 tracking-tighter break-keep leading-[1.2]">
            청소 그 <span className="text-primary">이상의 변화</span>
          </h2>
          <p className="text-text-sub text-base md:text-lg break-keep max-w-md mx-auto">
            보이지 않는 곳의 위생이<br className="md:hidden" /> 당신의 일상을 바꿉니다
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EFFECTS.map((effect) => (
            <motion.div 
              key={effect.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: effect.delay }}
              className="p-10 md:p-14 rounded-[40px] bg-bg-light text-center border border-transparent hover:bg-white hover:-translate-y-5 hover:shadow-2xl hover:border-primary transition-all duration-500 group"
            >
              <img 
                src={effect.icon} 
                alt={effect.title} 
                className="w-32 h-32 mx-auto mb-6 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                referrerPolicy="no-referrer"
              />
              <h3 className="text-2xl font-bold mb-4">{effect.title}</h3>
              <p className="text-text-sub leading-relaxed">{effect.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. 프리미엄 케어 */}
      <section id="premium" className="bg-navy py-24 md:py-32 text-white">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-[2.2rem] md:text-5xl font-extrabold mb-5 tracking-tighter break-keep leading-[1.2]">
              맑은숨 프리미엄 <br className="md:hidden" /> <span className="text-sky-400">7단계 케어</span>
            </h2>
            <p className="opacity-70 text-base md:text-lg break-keep max-w-md mx-auto">
              청소 자격 기사가 선사하는<br className="md:hidden" /> 타협 없는 압도적 디테일을 경험하세요
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8">
            {STEPS.map((step) => (
              <motion.div 
                key={step.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay }}
                className="text-center group cursor-pointer"
              >
                <span className="block text-[0.75rem] font-extrabold text-[#0066FF] tracking-widest mb-4">{step.tag}</span>
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/5 border border-white/10 rounded-[35px] flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:bg-[#0066FF] group-hover:-translate-y-4 group-hover:rotate-[10deg] group-hover:shadow-[0_15px_30px_rgba(0,102,255,0.4)]">
                  <step.icon className="w-10 h-10 md:w-12 md:h-12 text-[#0066FF] transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                </div>
                <h4 className="font-bold text-lg">{step.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 고객 후기 */}
      <section id="review" className="py-24 md:py-32 overflow-hidden bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-5"
        >
          <h2 className="text-[2.2rem] md:text-5xl font-extrabold text-navy mb-5 tracking-tighter break-keep leading-[1.2]">
            고객님의 <br className="md:hidden" /> <span className="text-primary">이유 있는 선택</span>
          </h2>
          <p className="text-text-sub text-base md:text-lg break-keep max-w-2xl mx-auto">
            만족도 4.9점, 실제 이용 고객님이 전하는<br className="md:hidden" /> 리얼 보이스를 확인하세요
          </p>
        </motion.div>

        <div className="flex gap-8 w-max animate-scroll-left py-5">
          {[...REVIEWS, ...REVIEWS].map((review, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-100 p-8 rounded-[35px] flex flex-col md:flex-row items-center gap-6 w-[320px] md:w-[550px] flex-shrink-0 transition-all duration-500 hover:border-primary hover:-translate-y-2 hover:shadow-xl group"
            >
              <img 
                src={review.img} 
                alt={review.title} 
                className="w-full md:w-36 h-44 md:h-36 rounded-2xl object-cover flex-shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 text-[#FFD700] mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  <span className="ml-2 text-sm font-extrabold">{review.rating.toFixed(1)}</span>
                </div>
                <h4 className="text-lg font-extrabold text-navy mb-2 leading-tight">"{review.title}"</h4>
                <p className="text-text-sub text-sm leading-relaxed mb-2">{review.content}</p>
                <p className="text-text-sub text-xs font-medium opacity-60">({review.author})</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. 비포 & 애프터 */}
      <section id="before-after" className="bg-bg-light py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-5 tracking-tighter">결과로 증명하는 압도적 차이</h2>
            <p className="text-text-sub text-lg">맑은숨의 정밀 세척으로 새 에어컨의 컨디션을 되찾아드립니다.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BEFORE_AFTER.map((item) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="h-64 overflow-hidden bg-gray-100">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 text-center">
                  <h4 className="text-xl font-extrabold text-navy mb-2">{item.title}</h4>
                  <p className="text-text-sub">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        </>
      ) : (
        <CompanyIntro />
      )}

      {/* Floating Quick Menu (Desktop & Mobile) */}
      <div className="fixed right-4 md:right-8 bottom-24 md:bottom-1/2 md:translate-y-1/2 z-[1500] flex flex-col gap-3 md:gap-4">
        {/* Phone Call */}
        <motion.a 
          href="tel:01048366436"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 md:w-16 md:h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl group relative"
        >
          <Phone size={24} className="md:w-7 md:h-7" />
          <span className="absolute right-full mr-4 px-3 py-1.5 bg-navy text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
            전화 상담하기
          </span>
        </motion.a>

        {/* KakaoTalk */}
        <motion.a 
          href="https://open.kakao.com/o/s5ykrdmi"
          target="_blank"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 md:w-16 md:h-16 bg-[#FEE500] text-[#191919] rounded-2xl flex items-center justify-center shadow-xl group relative"
        >
          <MessageCircle size={24} className="md:w-7 md:h-7" />
          <span className="absolute right-full mr-4 px-3 py-1.5 bg-navy text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
            카카오톡 문의
          </span>
        </motion.a>

        {/* Naver Reservation */}
        <motion.a 
          href="https://map.naver.com/p/entry/place/2050970162"
          target="_blank"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 md:w-16 md:h-16 bg-[#03C75A] text-white rounded-2xl flex items-center justify-center shadow-xl group relative"
        >
          <ExternalLink size={24} className="md:w-7 md:h-7" />
          <span className="absolute right-full mr-4 px-3 py-1.5 bg-navy text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
            네이버 예약
          </span>
        </motion.a>

        {/* Quick Quote (Modal Trigger) */}
        <motion.button 
          onClick={() => setIsQuoteModalOpen(true)}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 md:w-16 md:h-16 bg-navy text-white rounded-2xl flex items-center justify-center shadow-xl group relative"
        >
          <SearchCheck size={24} className="md:w-7 md:h-7" />
          <span className="absolute right-full mr-4 px-3 py-1.5 bg-navy text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
            무료 견적 신청
          </span>
        </motion.button>

        {/* Scroll Top/Bottom */}
        <div className="flex flex-col gap-2 mt-2">
          <motion.button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 md:w-12 md:h-12 bg-white text-navy border border-gray-200 rounded-xl flex items-center justify-center shadow-lg group relative"
            aria-label="맨 위로"
          >
            <ChevronUp size={20} className="md:w-6 md:h-6" />
            <span className="absolute right-full mr-4 px-3 py-1 bg-navy text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
              맨 위로
            </span>
          </motion.button>
          <motion.button 
            onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })}
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 md:w-12 md:h-12 bg-white text-navy border border-gray-200 rounded-xl flex items-center justify-center shadow-lg group relative"
            aria-label="맨 아래로"
          >
            <ChevronDown size={20} className="md:w-6 md:h-6" />
            <span className="absolute right-full mr-4 px-3 py-1 bg-navy text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
              맨 아래로
            </span>
          </motion.button>
        </div>
      </div>

      {/* Footer */}

      <footer className="bg-[#f8f9fa] py-24 px-5 border-t border-gray-100 text-center">
        <div className="flex flex-wrap justify-center gap-5 mb-12">
          <button 
            onClick={() => setIsQuoteModalOpen(true)}
            className="flex items-center gap-2 px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:brightness-110 transition-all shadow-lg"
          >
            무료 견적 신청하기 <SearchCheck size={18} />
          </button>
          <a 
            href="https://map.naver.com/p/entry/place/2050970162" 
            target="_blank" 
            className="flex items-center gap-2 px-10 py-5 bg-[#03C75A] text-white rounded-2xl font-bold text-lg hover:brightness-110 transition-all"
          >
            네이버 예약 바로가기 <ExternalLink size={18} />
          </a>
          <a 
            href="https://open.kakao.com/o/s5ykrdmi" 
            target="_blank" 
            className="flex items-center gap-2 px-10 py-5 bg-[#FEE500] text-[#191919] rounded-2xl font-bold text-lg hover:brightness-105 transition-all"
          >
            카카오톡 상담하기 <MessageCircle size={18} />
          </a>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-navy mb-5">맑은숨 에어컨 케어</h2>
          <div className="text-text-sub space-y-1">
            <p className="font-bold text-navy mb-2">서비스 지역: 서울 · 경기 · 인천 전지역</p>
            <p>대표 이용훈 | 사업자번호 388-06-03762</p>
            <p className="text-2xl font-bold text-navy mt-2">
              <a href="tel:010-4836-6436" className="hover:text-primary transition-colors">010-4836-6436</a>
            </p>
            <p className="pt-8 text-xs opacity-50">© 2026 맑은숨. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>

      {/* Quote Modal */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <QuoteModal 
            isOpen={isQuoteModalOpen} 
            onClose={() => setIsQuoteModalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
