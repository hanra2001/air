import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS } from '../data';
import { Review } from '../types';
import { Star, MessageSquare, Filter, Plus, CheckCircle, User, MapPin, ShieldCheck, Lock, LogOut, Trash2 } from 'lucide-react';

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [filter, setFilter] = useState<string>('all');
  
  // Admin password states
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [showAdminLogin, setShowAdminLogin] = useState<boolean>(false);
  const [adminPasswordInput, setAdminPasswordInput] = useState<string>('');
  const [adminError, setAdminError] = useState<string>('');

  // Custom mock review post form states
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newLoc, setNewLoc] = useState('');
  const [newAcType, setNewAcType] = useState('벽걸이형 에어컨');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sync with cache or initial load
  useEffect(() => {
    const cached = localStorage.getItem('damda_reviews');
    if (cached) {
      try {
        setReviews(JSON.parse(cached));
      } catch (err) {
        console.error(err);
      }
    } else {
      setReviews(REVIEWS);
    }
  }, []);

  const handlePostReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newComment || !newLoc) {
      alert('필수 리뷰 입력 글자들을 모두 작성해 주세요.');
      return;
    }

    const created: Review = {
      id: 'rev-user-' + Date.now(),
      author: newAuthor,
      location: newLoc,
      acType: newAcType,
      rating: newRating,
      date: new Date().toISOString().substring(0, 10),
      comment: newComment
    };

    const updated = [created, ...reviews];
    setReviews(updated);
    localStorage.setItem('damda_reviews', JSON.stringify(updated));

    // Clear form
    setNewAuthor('');
    setNewLoc('');
    setNewComment('');
    setNewRating(5);
    setSubmitSuccess(true);
    
    setTimeout(() => {
      setSubmitSuccess(false);
      setShowAddForm(false);
    }, 2000);
  };

  const deleteUserReview = (id: string) => {
    const filtered = reviews.filter((r) => r.id !== id);
    setReviews(filtered);
    localStorage.setItem('damda_reviews', JSON.stringify(filtered));
  };

  const deleteReviewByAdmin = (id: string, authorName: string) => {
    const filtered = reviews.filter((r) => r.id !== id);
    setReviews(filtered);
    localStorage.setItem('damda_reviews', JSON.stringify(filtered));
  };

  const handleAdminVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPasswordInput === '1594') {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setAdminPasswordInput('');
      setAdminError('');
    } else {
      setAdminError('비밀번호가 일치하지 않습니다.');
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    setAdminError('');
  };

  const filteredReviews = reviews.filter((r) => {
    if (filter === 'all') return true;
    if (filter === 'wall') return r.acType.includes('벽걸이');
    if (filter === 'stand') return r.acType.includes('스탠드');
    if (filter === 'ceiling') return r.acType.includes('천장') || r.acType.includes('시스템');
    return true;
  });

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / (reviews.length || 1)).toFixed(1);

  return (
    <div id="reviews" className="py-24 bg-gradient-to-b from-white via-sky-50/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-extrabold text-sm tracking-widest uppercase bg-blue-50 py-1.5 px-4 rounded-full border border-blue-100 inline-flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4 text-sky-400" />
            REAL TESTIMONIAL BOARD
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight mt-3">
            고객님들의 생생한 <br className="sm:hidden" /><span className="text-blue-500">리얼 클린 후기</span>
          </h2>
          <p className="text-sm sm:text-base font-bold text-slate-500 mt-2">
            박투 작업한 청결 공정 완료 현장에서 올라온 실제 이용객들의 가감 없는 신뢰점검 평점입니다.
          </p>
        </div>

        {/* Dashboard statistics highlights summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Average Stars */}
          <div className="p-6 rounded-3xl bg-sky-50 border border-sky-100/60 text-center flex flex-col items-center justify-center space-y-2">
            <span className="text-xs font-black text-sky-600 tracking-widest block uppercase">AVERAGE LEVEL</span>
            <div className="flex items-center gap-1">
              <span className="text-4xl font-black text-slate-800 font-sans">{averageRating}</span>
              <span className="text-xl font-bold text-slate-400">/ 5.0</span>
            </div>
            <div className="flex items-center gap-0.5 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-405 stroke-[2.5]" />
              ))}
            </div>
          </div>

          {/* Guarantee complete counts */}
          <div className="p-6 rounded-3xl bg-blue-50 border border-blue-100/60 text-center flex flex-col items-center justify-center space-y-1">
            <span className="text-xs font-black text-blue-600 tracking-widest block uppercase">TOTAL SATISFIED</span>
            <div className="text-[32px] font-black text-slate-800 leading-none mb-1">
              {(reviews.length * 48 + 1205).toLocaleString()}명+
            </div>
            <p className="text-xs font-bold text-slate-400">누적 매칭 완전 소독 세척 건수 달성</p>
          </div>

          {/* Write a review trigger card */}
          <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 text-center flex flex-col items-center justify-center space-y-3">
            <span className="text-[9.5px] font-black text-cyan-400 tracking-widest block uppercase">YOUR CLEAN REVIEWS</span>
            <p className="text-xs font-bold text-slate-300">청담 케어를 받으신 적이 있나요?</p>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-500 hover:to-sky-500 text-slate-950 font-black text-xs shadow-md shadow-cyan-950 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
              id="btn-trigger-review-form"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              리뷰 직접 작성하기
            </button>
          </div>
        </div>

        {/* Modal-style Collapse Form to add new review */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-12 bg-slate-50 border-2 border-sky-100 rounded-3.5xl p-6 sm:p-8"
            >
              {submitSuccess ? (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="font-black text-slate-800 text-lg">리뷰가 정성스레 등록되었습니다!</h4>
                  <p className="text-xs font-bold text-slate-400">소중한 의견으로 더욱 투명하고 맑은 바람을 전하겠습니다.</p>
                </div>
              ) : (
                <form onSubmit={handlePostReview} className="space-y-6">
                  <div className="flex items-center justify-between border-b border-sky-100 pb-3">
                    <h3 className="font-black text-slate-800 text-base flex items-center gap-2">✍️ 청담 엔지니어 살균 후기 피드백</h3>
                    <span className="text-xs text-sky-600 font-extrabold">* 모든 항목 기본 작성 필수</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 block">이름 / 이메일 앞자리</label>
                      <input
                        type="text"
                        required
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        placeholder="예: 최주희"
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-slate-200 outline-none font-semibold focus:border-sky-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 block">계거 지역 (군/구 단위)</label>
                      <input
                        type="text"
                        required
                        value={newLoc}
                        onChange={(e) => setNewLoc(e.target.value)}
                        placeholder="예: 서울 서대문구"
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-slate-200 outline-none font-semibold focus:border-sky-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 block">세척한 에어컨 기종</label>
                      <select
                        value={newAcType}
                        onChange={(e) => setNewAcType(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-slate-200 outline-none font-semibold focus:border-sky-500"
                      >
                        <option value="벽걸이형 에어컨">벽걸이형 에어컨</option>
                        <option value="스탠드형 에어컨">스탠드형 에어컨</option>
                        <option value="시스템 천장형 1-Way">시스템 천장형 1-Way</option>
                        <option value="시스템 천장형 4-Way">시스템 천장형 4-Way</option>
                        <option value="대형 덕트 상업용 에어컨">대형 덕트 상업용 에어컨</option>
                      </select>
                    </div>
                  </div>

                  {/* Rating Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 block">리얼 세척 평점 선택</label>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => {
                        const starNum = i + 1;
                        return (
                          <button
                            type="button"
                            key={starNum}
                            onClick={() => setNewRating(starNum)}
                            className="p-1 cursor-pointer transition-transform hover:scale-115"
                          >
                            <Star
                              className={`w-7 h-7 stroke-[2.5] ${
                                starNum <= newRating
                                  ? 'fill-yellow-400 text-yellow-405'
                                  : 'text-slate-250 hover:text-yellow-250'
                              }`}
                            />
                          </button>
                        );
                      })}
                      <span className="text-xs font-black text-slate-450 ml-2">({newRating}점 / 5점 기준)</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 block">상세 세척 경험 평가 내용</label>
                    <textarea
                      required
                      rows={3}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="기사님의 설명 친절도, 곰팡이 냄새 소독 제거 수준, 소요 시간, 가격 대비 보양 마무리 상태 등 가감 없는 솔직 후기를 들려주세요."
                      className="w-full px-4 py-3 text-sm rounded-xl bg-white border border-slate-200 outline-none font-semibold focus:border-sky-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-sm rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-extrabold cursor-pointer transition-colors text-center"
                    id="btn-submit-review"
                  >
                    소중한 클린 평점 등록하기
                  </button>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Filter Tab buttons row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-sky-100 pb-5 mb-10">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="text-xs font-black text-slate-400 flex items-center gap-1 uppercase mr-2">
              <Filter className="w-3.5 h-3.5" />
              기종별 필터
            </span>
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-black rounded-full border cursor-pointer transition-all ${
                filter === 'all'
                  ? 'bg-sky-500 border-sky-400 text-white'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
              id="btn-filter-all"
            >
              전체 보기
            </button>
            <button
              onClick={() => setFilter('wall')}
              className={`px-4 py-2 text-xs font-black rounded-full border cursor-pointer transition-all ${
                filter === 'wall'
                  ? 'bg-sky-500 border-sky-400 text-white'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
              id="btn-filter-wall"
            >
              벽걸이형
            </button>
            <button
              onClick={() => setFilter('stand')}
              className={`px-4 py-2 text-xs font-black rounded-full border cursor-pointer transition-all ${
                filter === 'stand'
                  ? 'bg-sky-500 border-sky-400 text-white'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
              id="btn-filter-stand"
            >
              스탠드형
            </button>
            <button
              onClick={() => setFilter('ceiling')}
              className={`px-4 py-2 text-xs font-black rounded-full border cursor-pointer transition-all ${
                filter === 'ceiling'
                  ? 'bg-sky-500 border-sky-400 text-white'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
              id="btn-filter-ceiling"
            >
              천장형 / 시스템형
            </button>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            {isAdmin ? (
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-black text-rose-500 bg-rose-50 border border-rose-100 px-3 py-1.5 rounded-full flex items-center gap-1.5 animate-pulse">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  관리자 모드 활성
                </span>
                <button
                  type="button"
                  onClick={handleAdminLogout}
                  className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 font-extrabold rounded-xl border border-slate-200/50 cursor-pointer transition-all flex items-center gap-1"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setAdminError('');
                  setShowAdminLogin(!showAdminLogin);
                }}
                className={`px-3.5 py-1.5 text-xs font-extrabold rounded-xl border border-dashed cursor-pointer transition-all flex items-center gap-1 ${
                  showAdminLogin
                    ? 'text-slate-800 bg-slate-100 border-slate-405 border-slate-400'
                    : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50 border-slate-200'
                }`}
                id="btn-admin-mode-trigger"
              >
                <Lock className="w-3.5 h-3.5 text-slate-300" />
                관리자 전용
              </button>
            )}
          </div>
        </div>

        {/* Admin Password verification inline card */}
        <AnimatePresence>
          {showAdminLogin && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: 'auto', marginBottom: 32 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              className="p-6 rounded-3.5xl bg-white border-2 border-slate-900 shadow-xl max-w-sm mx-auto relative overflow-hidden"
            >
              <div className="absolute right-4 top-4">
                <button
                  type="button"
                  onClick={() => setShowAdminLogin(false)}
                  className="w-7 h-7 rounded-full bg-slate-50 text-slate-400 hover:text-slate-700 flex items-center justify-center font-bold text-xs cursor-pointer border border-slate-100"
                >
                  ✕
                </button>
              </div>
              <form onSubmit={handleAdminVerify} className="space-y-4">
                <div className="flex items-center gap-1.5 text-slate-800">
                  <Lock className="w-4 h-4 text-slate-800" />
                  <h4 className="font-black text-sm">관리자 권한 인증</h4>
                </div>
                <p className="text-[11px] font-bold text-slate-400 leading-relaxed">
                  리뷰 강제 관리 및 선별 삭제 처리를 위해 관리자 비밀번호를 입력해 주십시오. (비밀번호: 1594)
                </p>
                <div className="space-y-1">
                  <input
                    type="password"
                    required
                    maxLength={10}
                    value={adminPasswordInput}
                    onChange={(e) => {
                      setAdminPasswordInput(e.target.value);
                      if (adminError) setAdminError('');
                    }}
                    placeholder="비밀번호 입력"
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 outline-none text-center font-mono font-black text-slate-800 focus:border-slate-800 placeholder:font-sans placeholder:font-semibold"
                    autoFocus
                  />
                  {adminError && (
                    <span className="text-xs font-bold text-rose-500 block text-center mt-1">⚠️ {adminError}</span>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-extrabold text-xs transition-colors cursor-pointer"
                >
                  관리자 로그인
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reviews Grid Display column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((rev) => {
              const isUserAdded = rev.id.startsWith('rev-user-');
              return (
                <motion.div
                  key={rev.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 sm:p-8 rounded-3.5xl bg-white border border-sky-100 shadow-xl shadow-sky-100/20 hover:border-sky-300 relative transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-1">
                      {/* Rating Stars */}
                      <div className="flex items-center gap-0.5 text-yellow-400 mb-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 fill-yellow-400 text-yellow-405 stroke-[2] ${
                              i < rev.rating ? 'opacity-100' : 'opacity-20'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Header user details metadata */}
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-sm sm:text-base text-slate-800 flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-slate-400" />
                          {rev.author} 고객님
                        </span>
                        <span className="text-[10px] sm:text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md flex items-center gap-0.5">
                          <MapPin className="w-2.5 h-2.5" />
                          {rev.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Clean AC model details */}
                  <div className="bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-100/30 text-[11px] sm:text-xs font-extrabold text-blue-700 w-fit mb-4">
                    🛠️ 세척기종: {rev.acType}
                  </div>

                  {/* Comment */}
                  <p className="text-sm sm:text-[14.5px] font-semibold text-slate-600 leading-relaxed break-all pb-6">
                    {rev.comment}
                  </p>

                  {/* Delete button (If admin, can delete ANY review. General users can delete only their own custom reviews) */}
                  {isAdmin ? (
                    <button
                      type="button"
                      onClick={() => deleteReviewByAdmin(rev.id, rev.author)}
                      className="absolute bottom-4 right-4 text-white bg-rose-500 hover:bg-rose-600 font-extrabold text-[10px] px-3 py-1.5 rounded-xl cursor-pointer transition-all flex items-center gap-1 shadow-md shadow-rose-100"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      강제 삭제 [관리자]
                    </button>
                  ) : (
                    isUserAdded && (
                      <button
                        type="button"
                        onClick={() => deleteUserReview(rev.id)}
                        className="absolute bottom-4 right-4 text-rose-550 hover:text-rose-700 font-extrabold text-[11px] bg-rose-50 hover:bg-rose-100/60 px-2.5 py-1 rounded-lg cursor-pointer transition-colors"
                      >
                        삭제
                      </button>
                    )
                  )}
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-2 py-16 text-center text-slate-400 font-bold bg-slate-50 border-2 border-dashed border-slate-100 rounded-3.5xl">
              선택한 필터 조건에 부합하는 고객 만족 후기가 아직 부재합니다. 다른 필터를 택해 보세요.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
