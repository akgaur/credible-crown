import type { User, LoanRequest, LoanOffer, Agreement, Repayment } from '../types/models';

export const fetchCurrentUser = async (): Promise<User> => ({
  user_id: 1,
  role: 'borrower',
  full_name: 'Jane Doe',
  email: 'jane@example.com',
  phone: '9999999999',
  aadhaar_number: '123412341234',
  pan_number: 'ABCDE1234F',
  cibil_score: 750,
  kyc_status: 'verified',
  credibility_score: 92.5,
});

export const fetchLoanRequests = async (): Promise<LoanRequest[]> => [
  {
    loan_id: 1,
    borrower_id: 1,
    amount: 100000,
    interest_rate: 12,
    tenure_months: 12,
    purpose: 'Home Renovation',
    status: 'open',
  },
];

export const fetchLoanOffers = async (): Promise<LoanOffer[]> => [
  {
    offer_id: 1,
    loan_id: 1,
    lender_id: 2,
    amount_offered: 100000,
    status: 'pending',
  },
];

export const fetchAgreements = async (): Promise<Agreement[]> => [
  {
    agreement_id: 1,
    loan_id: 1,
    lender_id: 2,
    borrower_id: 1,
    agreement_url: 'https://example.com/agreement/1.pdf',
    signed_by_borrower: true,
    signed_by_lender: false,
    signed_at: undefined,
  },
];

export const fetchRepayments = async (): Promise<Repayment[]> => [
  {
    repayment_id: 1,
    loan_id: 1,
    borrower_id: 1,
    lender_id: 2,
    due_date: '2024-07-01',
    amount_due: 9000,
    amount_paid: 0,
    status: 'pending',
    paid_at: undefined,
  },
];
