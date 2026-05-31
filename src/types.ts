export type AcTypeKey = 'wall' | 'stand' | 'ceiling_1' | 'ceiling_4' | 'commercial';

export interface AcType {
  key: AcTypeKey;
  name: string;
  subName: string;
  basePrice: number;
  description: string;
  iconName: string;
}

export interface CleaningOption {
  key: string;
  name: string;
  price: number;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  acType: string;
  rating: number;
  date: string;
  comment: string;
  beforeImg?: string;
  afterImg?: string;
}

export interface Booking {
  id: string;
  name: string;
  phone: string;
  address: string;
  acType?: AcTypeKey;
  quantity?: number;
  selectedOptions?: string[];
  preferredDate: string;
  preferredTime?: string;
  inquiry: string;
  couponCode?: string;
  discountAmount?: number;
  totalPrice?: number;
  status: 'pending' | 'confirmed' | 'completed';
  createdAt: string;
}

export interface Coupon {
  code: string;
  label: string;
  discountType: 'percentage' | 'fixed' | 'free_service';
  value: number;
  description: string;
}
