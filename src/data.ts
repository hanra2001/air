import { AcType, CleaningOption, Review, Coupon } from './types';

export const AC_TYPES: AcType[] = [
  {
    key: 'wall',
    name: '벽걸이형 에어컨',
    subName: '원룸, 침실, 공부방 맞춤 케어',
    basePrice: 80000,
    description: '공간을 많이 차지하지 않는 벽걸이 에어컨의 보이지 않는 내부 팬과 알루미늄 핀 깊숙이 숨은 곰팡이를 고압 살균합니다.',
    iconName: 'Smartphone'
  },
  {
    key: 'stand',
    name: '스탠드형 에어컨',
    subName: '거실, 사무실 대용량 케어',
    basePrice: 130000,
    description: '송풍구가 많고 필터 면적이 넓어 오염이 빠른 스탠드 에어컨을 완전 분해하여 토출구 내부까지 개운하게 청소합니다.',
    iconName: 'Tv'
  },
  {
    key: 'ceiling_1',
    name: '천장형 1-Way',
    subName: '시스템 에어컨 (1방향 송풍)',
    basePrice: 100000,
    description: '오피스텔이나 신축 아파트에 배치된 천장 매립식 1방향 에어컨의 프런트 판넬과 드레인 부품을 분해 청소합니다.',
    iconName: 'Layout'
  },
  {
    key: 'ceiling_4',
    name: '천장형 4-Way / 원형',
    subName: '카페, 넓은 상업 공간용 시스템',
    basePrice: 150000,
    description: '대형 사업장이나 상가 천장에 위치하여 먼지 흡입량이 엄청난 4방향 에어컨의 드레인 판넬과 필터를 고압 세척합니다.',
    iconName: 'Grid'
  },
  {
    key: 'commercial',
    name: '상업용 덕트 / 대형형',
    subName: '공장, 대형 오피스, 단체급식실',
    basePrice: 190000,
    description: '중대형 냉난방기 및 산업 시설의 공조 시스템으로, 전문 살균 장비와 특수 세제를 사용해 대규모 유해 물질을 완벽 정화합니다.',
    iconName: 'Layers'
  }
];

export const CLEANING_OPTIONS: CleaningOption[] = [
  {
    key: 'silshield',
    name: '친환경 실드 항균·방오 코팅',
    price: 20000,
    description: '청소 후 은이온 항균 코팅막을 형성하여 곰팡이 및 바이러스 재번식을 막고 상쾌한 공기를 오래 지속시킵니다.'
  },
  {
    key: 'outdoor',
    name: '실외기 고압 오물 흡입 및 케어',
    price: 40000,
    description: '실외기에 쌓인 먼지와 찌든 때를 고압 청소하여 냉방 효율을 20% 이상 향상시키고 화재 위험을 완전 차단합니다.'
  },
  {
    key: 'high_steam',
    name: '130℃ 초고온 강력 핑거스팀 살균',
    price: 15000,
    description: '강력한 고온 열기로 약품으로도 제거하기 힘든 초미세 균사와 냄새 분자까지 단숨에 사멸시킵니다.'
  },
  {
    key: 'smart_check',
    name: '스마트 냉매 가스 압력 무료 진단',
    price: 10000,
    description: '가스가 누출되었는지 세밀하게 측정하고 에어컨 바람의 온도를 원격 열화상 진단하여 최적의 부하를 검증합니다.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: '김민준',
    location: '서울 마포구',
    acType: '스탠드형 + 벽걸이형 2in1',
    rating: 5,
    date: '2026-05-24',
    comment: '여름 시작하기 전에 작년에 묵혀둔 냄새 때문에 불안해서 청담 신청했습니다. 기사님이 진짜 꼼꼼하게 부품 하나하나 뜯어서 비포 애프터 보여주시는데 정말 경악했네요.. 새카만 곰팡이가 전부 날아가고 하얀 필터로 돌아왔습니다. 바람에서 풀 냄새 나는 것 같아 대만족입니다!',
  },
  {
    id: 'rev-2',
    author: '이지아',
    location: '인천 연수구',
    acType: '천장형 1-Way 수량 3대',
    rating: 5,
    date: '2026-05-28',
    comment: '아이 방 에어컨 돌리자마자 기침을 너무 자주 하길래 에어컨 청소를 결심했습니다. 친환경 천연세제 쓴다고 해서 믿고 맡겼는데 살균 소독제 냄새도 안 나고 머리 아픈 것도 없네요! 꼼꼼하고 뒷마무리 보양 작업까지 철저하게 해주셔서 감동했어요. 매년 청담에서만 할 겁니다.',
  },
  {
    id: 'rev-3',
    author: '박동현',
    location: '경기 성남시',
    acType: '천장형 4-Way (카페 매장)',
    rating: 5,
    date: '2026-05-29',
    comment: '매장에 손님들이 가끔 꿉꿉한 냄새 난다고 하셔가지고 급하게 새벽 밤샘 세척 일정으로 예약 잡고 진행했습니다. 영업 방해 안 되게 딱 시간 맞춰서 4대 싹 해주셨어요. 전기세도 오히려 덜 나오는 느낌이고 손님들이 쾌적하다고 좋아하십니다. 강추!'
  },
  {
    id: 'rev-4',
    author: '최서우',
    location: '서울 서초구',
    acType: '벽걸이형 에어컨',
    rating: 4,
    date: '2026-05-15',
    comment: '벽걸이 에어컨 날개 틈새로 검은 가루가 떨어지기 시작해서 긴급 출동 요청했네요. 친절한 엔지니어님들이 냉방 사이클 열고 고압 세척해주시니 검은 가루 다 사라졌어요! 10점 만점에 10점입니다.'
  }
];

export const COU_SECTORS: Coupon[] = [
  { code: 'DAMDA10', label: '10% 전체할인', discountType: 'percentage', value: 10, description: '전체 결제 금액의 10%를 시원하게 깎아드립니다' },
  { code: 'FREEKOT', label: '무료 은이온 코팅', discountType: 'free_service', value: 20000, description: '2만원 상당의 친환경 살균 항균 코팅 무료 서비스' },
  { code: 'DAMDA20', label: '초특가 20% 할인', discountType: 'percentage', value: 20, description: '여름 맞이 슈퍼 할인! 20% 초특가 쿠폰' },
  { code: 'FREESTM', label: '무료 스팀 살균', discountType: 'free_service', value: 15000, description: '15,000원 상당의 초고온 스팀 소독 무료 서비스' },
  { code: 'COOL5000', label: '5천원 즉시 할인', discountType: 'fixed', value: 5000, description: '금액 불문하고 5,000원을 즉시 차감해 드립니다' },
  { code: 'DAMDA_PREMIUM', label: 'VIP 30% 할인쿠폰', discountType: 'percentage', value: 30, description: '오늘 가입/방문자 전용 30% 프리미엄 행운 할인!' }
];

export const STEP_PROCESS = [
  {
    step: '01',
    title: '동작 점검 및 성능 진단',
    description: '청소 시작 전 기기가 정상 작동하는지 살풍 온도, 기류 상태, 누출 여부를 정확히 점검합니다.'
  },
  {
    step: '02',
    title: '안전 전원 차단 & 세밀 보양',
    description: '가전 전원을 완전히 차단하고, 벽지와 소중한 가구에 오염수가 튀지 않도록 친환경 완벽 커버 보양을 작업합니다.'
  },
  {
    step: '03',
    title: '완전 분해 개방',
    description: '프런트 그릴, 필터 케이스, 드레인 수조, 송풍 팬, 물 받이판까지 남김없이 분해하여 내부 열교환기를 100% 개방합니다.'
  },
  {
    step: '04',
    title: '친환경 약품 도포 및 고압 세척',
    description: '인체에 무해한 안심 약품을 살포 후 대용량 초강력 고압 물 분사기를 사용해 미세먼지와 세균 배양액을 밀어내듯 씻어냅니다.'
  },
  {
    step: '05',
    title: '130℃ 스팀 및 UV 안심살균',
    description: '고압 물 세척으로 떨궈낸 핀 내부에 깊이 침투한 초미세 진균을 초고온 스팀 소독조로 완벽 멸균 처리합니다.'
  },
  {
    step: '06',
    title: '고속 건조 및 은이온 프리미엄 코팅',
    description: '특수 고속 송풍 건조 작업 후 피톤치드와 나노 은 항균제를 도포하여 불쾌한 잡내를 막고 탈취 막을 성막합니다.'
  },
  {
    step: '07',
    title: '재조립 및 최종 안심 클린 가동',
    description: '역순으로 완벽 재조립한 뒤 부하 테스트 가동 및 정밀 온도 센서 동작 보고를 고객님과 현장에서 크로스 체크합니다.'
  }
];

export const FAQS = [
  {
    question: '에어컨 청소 주기는 어떻게 되나요?',
    answer: '가정용 에어컨은 사계절 중 여름철 집중 가동 전(5월~6월) 또는 보관 전(9월~10월) 연 1회 청소를 강력 권장해 드립니다. 상가, 카페, 어린이집 등 유동 인구가 많고 일일 작동 시간이 긴 영업장은 유해 먼지가 빠르게 쌓여 연 2회 이상 정기 관리를 권해 드립니다.'
  },
  {
    question: '청소 시간은 얼마나 걸리나요?',
    answer: '벽걸이 에어컨 단품은 약 1시간~1시간 30분, 스탠드형 에어컨은 1시간 30분~2시간이 소요됩니다. 천장 시스템형의 경우 1대당 약 1시간 30분 내외가 소요됩니다. 현장의 오염 정도 및 분해 조립 난이도에 따라 미세하게 변동될 수 있습니다.'
  },
  {
    question: '친환경 세제를 사용하나요? 아이나 반려동물에 안전한가요?',
    answer: "네! '청소를 담다'는 미국 친환경 안전 마크 공인 획득 및 인체에 무독성인 프리미엄 전용 친환경 세정액만을 엄선하여 사용합니다. 세척 시 유해 잔류물이 전혀 생기지 않으며, 초고압 살균 수로 끊임없이 헹궈내기 때문에 영유아, 수험생, 반려동물이 머무는 생활 공간에서도 안심하고 즉시 이용하실 수 있습니다."
  }
];
