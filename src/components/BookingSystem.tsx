import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Booking } from '../types';
import { CheckCircle2, Send, Trash, Loader2, Calendar, User, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function BookingSystem() {
  // Booking Form States
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [inquiry, setInquiry] = useState<string>('');

  // Local Storage Bookings List (So the user has persistent booking tracking)
  const [myBookings, setMyBookings] = useState<Booking[]>([]);
  const [loadingWeb, setLoadingWeb] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [latestBooking, setLatestBooking] = useState<Booking | null>(null);

  // Load bookings from storage on initialization
  useEffect(() => {
    const cached = localStorage.getItem('damda_bookings');
    if (cached) {
      try {
        setMyBookings(JSON.parse(cached));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  // Submit Reservation Action
  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim() || !preferredDate) {
      alert('모든 예약 필수 정보를 빠짐없이 입력해 주세요.');
      return;
    }

    setLoadingWeb(true);

    try {
      // Formspree submission
      const response = await fetch('https://formspree.io/f/xgoqblyl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          address,
          preferredDate,
          inquiry,
        }),
      });

      if (!response.ok) {
        throw new Error('Formspree submission failed');
      }

      const bCode = 'CDM-' + Math.floor(Math.random() * 900000 + 100000);
      const newBooking: Booking = {
        id: bCode,
        name: name.trim(),
        phone: phone.trim(),
        address: address.trim(),
        preferredDate,
        inquiry: inquiry.trim(),
        status: 'pending',
        createdAt: new Date().toISOString().substring(0, 10)
      };

      const updated = [newBooking, ...myBookings];
      setMyBookings(updated);
      localStorage.setItem('damda_bookings', JSON.stringify(updated));

      setLatestBooking(newBooking);
      setShowConfirmModal(true);

      // Reset form fields
      setName('');
      setPhone('');
      setAddress('');
      setPreferredDate('');
      setInquiry('');
    } catch (error) {
      console.error(error);
      alert('예약 신청 중 오류가 발생했습니다. 다시 시도해 주세요.');
    } finally {
      setLoadingWeb(false);
    }
  };

  // Cancel reservation
  const handleCancelBooking = (id: string) => {
    if (window.confirm('정말로 예약을 취소하시겠습니까?')) {
      const filtered = myBookings.filter((b) => b.id !== id);
      setMyBookings(filtered);
      localStorage.setItem('damda_bookings', JSON.stringify(filtered));
    }
  };

  return (
    <div id="booking" className="py-24 bg-gradient-to-b from-sky-50/10 to-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className="text-blue-600 font-extrabold text-xs tracking-widest uppercase bg-blue-50 py-1.5 px-4 rounded-full border border-blue-100 inline-flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            PREMIUM HOME CARE ASSIGNMENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight mt-3">
            간편 <span className="text-blue-500">예약 신청 및 접수</span>
          </h2>
          <p className="text-sm sm:text-base font-bold text-slate-500 mt-2">
            상담 대기 및 복잡한 대기 절차가 필요 없습니다. 비대면으로 원하는 날짜와 종류를 선택해 신속하게 예약하세요.
          </p>
        </div>

        {/* Master Booking Form Card */}
        <div className="bg-white border-2 border-slate-100 rounded-3.5xl p-6 sm:p-10 shadow-xl shadow-slate-200/20 relative overflow-hidden">
          
          <form onSubmit={handleSubmitBooking} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* 이름 */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-extrabold text-slate-700 block">신청자 성함</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-4.5 h-4.5 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="홍길동"
                    className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-sky-500 outline-none font-semibold text-slate-850 transition-colors"
                  />
                </div>
              </div>

              {/* 전화번호 */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-extrabold text-slate-700 block">휴대폰 연락처</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-3.5 w-4.5 h-4.5 text-slate-400 pointer-events-none" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="010-1234-5678"
                    className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-sky-500 outline-none font-semibold text-slate-850 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* 주소 */}
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-extrabold text-slate-700 block">설치 및 방문 주소</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-3.5 w-4.5 h-4.5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="서울특별시 마포구 마포대로 123, 101호"
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-sky-500 outline-none font-semibold text-slate-850 transition-colors"
                />
              </div>
            </div>

            {/* 희망 날짜 */}
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-extrabold text-slate-700 block">기사 방문 희망 일정</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-3.5 w-4.5 h-4.5 text-slate-400 pointer-events-none" />
                <input
                  type="date"
                  required
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-sky-500 outline-none font-semibold text-slate-850 transition-colors"
                />
              </div>
            </div>

            {/* 문의내용 */}
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-extrabold text-slate-700 block">문의 및 가전 정보 기재 (선택)</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-3.5 w-4.5 h-4.5 text-slate-400 pointer-events-none" />
                <textarea
                  value={inquiry}
                  onChange={(e) => setInquiry(e.target.value)}
                  placeholder="추가 요청사항이나 에어컨 기종(벽걸이, 스탠드 등)/정확한 대수를 편하게 기록해 주세요."
                  rows={4}
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-sky-500 outline-none font-semibold text-slate-850 transition-colors resize-none"
                />
              </div>
            </div>

            {/* Giant Submit Button right inside the card */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loadingWeb}
                className="w-full py-4 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-black text-base shadow-xl shadow-sky-100 hover:scale-[1.01] active:scale-[0.98] transition-all rounded-2xl cursor-pointer flex items-center justify-center gap-2"
                id="btn-submit-booking"
              >
                {loadingWeb ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    전문 직영 홈케어 마스터 기망 배정 요청 중...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 fill-white/20" />
                    프리미엄 청소 안심 예약 신청하기
                  </>
                )}
              </button>
            </div>

          </form>

        </div>

        {/* MY HISTORY BOOKINGS (Client storage list) */}
        {myBookings.length > 0 && (
          <div className="mt-12 bg-white border border-slate-100 rounded-3.5xl p-6 sm:p-8 shadow-xl shadow-slate-200/10">
            <div className="flex justify-between items-center border-b border-sky-50 pb-3.5 mb-4">
              <h4 className="font-extrabold text-slate-800 text-base flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                실시간 내 예약 신청 현황 ({myBookings.length}건)
              </h4>
              <span className="text-[10px] font-black text-slate-400">LOCAL TRACKER</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[420px] overflow-y-auto pr-2">
              {myBookings.map((b) => (
                <div key={b.id} className="p-4 rounded-2.5xl bg-slate-50/50 border border-slate-100 text-xs text-slate-600 space-y-2.5 relative group hover:border-sky-300 transition-colors">
                  <div className="flex justify-between items-center">
                    <span className="font-display font-black text-slate-800 text-[13px]">{b.id}</span>
                    <span className="bg-blue-50 text-blue-600 font-extrabold px-2.5 py-0.5 rounded-xl uppercase text-[9px] border border-blue-100/40">
                      매칭 대기 (Pending)
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 font-bold py-1">
                    <div>
                      <span className="text-slate-400 block text-[10px]">고객 성함</span>
                      <span className="text-slate-700">{b.name}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">방문 희망 일자</span>
                      <span className="text-slate-700">{b.preferredDate}</span>
                    </div>
                  </div>

                  {b.inquiry && (
                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-slate-400 block text-[10px] font-bold">문의 및 참고사항</span>
                      <p className="text-slate-600 text-[11px] font-semibold mt-0.5 leading-relaxed line-clamp-3">
                        {b.inquiry}
                      </p>
                    </div>
                  )}

                  <div className="pt-2.5 border-t border-slate-200/40 flex justify-between items-center">
                    <span className="font-bold text-slate-400">
                      상담 통화 후 요금/세종 최종 확정
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCancelBooking(b.id)}
                      className="text-rose-400 hover:text-rose-600 p-1 flex items-center gap-0.5 font-semibold hover:bg-rose-50 rounded-lg transition-colors text-[10.5px] cursor-pointer"
                    >
                      <Trash className="w-3.5 h-3.5" />
                      신청 취소
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* CONFIRMATION CONGRATS MODAL (Without Prices) */}
      <AnimatePresence>
        {showConfirmModal && latestBooking && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3.5xl max-w-md w-full overflow-hidden shadow-2xl relative border border-sky-100"
            >
              {/* Blue header splash */}
              <div className="bg-gradient-to-r from-sky-400 via-sky-500 to-blue-500 p-8 text-center text-white relative">
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)]" style={{ backgroundSize: '12px 12px' }}></div>
                
                {/* Floating animated sparkles */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  </div>
                </div>

                <h3 className="text-2.5xl font-black">예약 신청 접수 완료!</h3>
                <p className="text-xs font-bold text-cyan-100 mt-2">
                  정성을 다하는 완벽한 프리미엄 수 홈케어로 보답하겠습니다.
                </p>
              </div>

              {/* Receipt details */}
              <div className="p-6 space-y-4">
                <div className="space-y-2 border-b border-slate-100 pb-4">
                  <div className="flex justify-between text-xs text-slate-400 font-bold">
                    <span>접수 고유 예약번호</span>
                    <span className="font-display font-black text-slate-800">{latestBooking.id}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 font-bold">
                    <span>신청 고객</span>
                    <span className="font-black text-slate-800">{latestBooking.name}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 font-bold">
                    <span>고객 연락 번호</span>
                    <span className="font-black text-slate-800">{latestBooking.phone}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 font-bold">
                    <span>방문 예약 희망일</span>
                    <span className="font-black text-slate-800">{latestBooking.preferredDate}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 font-bold">
                    <span>설치 및 방문 주소</span>
                    <span className="font-black text-slate-800 max-w-48 text-right truncate">{latestBooking.address}</span>
                  </div>
                  {latestBooking.inquiry && (
                    <div className="flex justify-between text-xs text-slate-400 font-bold pt-1.5 border-t border-slate-100">
                      <span>문의내용</span>
                      <span className="font-black text-slate-800 max-w-48 text-right truncate">{latestBooking.inquiry}</span>
                    </div>
                  )}
                </div>

                <p className="text-[11px] font-semibold text-slate-500 text-center leading-relaxed py-1">
                  📢 신청 완료 후 <strong>30분 이내</strong>에 전문 매칭된 관할 구역 배정 엔지니어 기사님이 직접 해피콜 통화 연락을 드려, 상세 기종 상태 확인 및 요금과 최종 일정을 성실히 맞춤 완성해 드립니다.
                </p>

                <button
                  onClick={() => setShowConfirmModal(false)}
                  className="w-full py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white font-extrabold text-sm transition-colors cursor-pointer text-center block"
                  id="btn-confirm-modal-close"
                >
                  맑은 기운으로 돌아가기
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
