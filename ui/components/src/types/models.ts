export type UserRole = 'borrower' | 'lender' | 'admin';

export interface User {
  user_id: number;
  role: UserRole;
  full_name: string;
  email: string;
  phone: string;
  aadhaar_number?: string;
  pan_number?: string;
  cibil_score?: number;
  kyc_status: 'pending' | 'verified' | 'rejected';
  credibility_score?: number;
}

export interface LoanRequest {
  loan_id: number;
  borrower_id: number;
  amount: number;
  interest_rate: number;
  tenure_months: number;
  purpose: string;
  status: 'open' | 'funded' | 'closed' | 'defaulted';
}

export interface LoanOffer {
  offer_id: number;
  loan_id: number;
  lender_id: number;
  amount_offered: number;
  status: 'pending' | 'accepted' | 'rejected';
}

export interface Agreement {
  agreement_id: number;
  loan_id: number;
  lender_id: number;
  borrower_id: number;
  agreement_url: string;
  signed_by_borrower: boolean;
  signed_by_lender: boolean;
  signed_at?: string;
}

export interface Repayment {
  repayment_id: number;
  loan_id: number;
  borrower_id: number;
  lender_id: number;
  due_date: string;
  amount_due: number;
  amount_paid: number;
  status: 'pending' | 'paid' | 'late';
  paid_at?: string;
}
