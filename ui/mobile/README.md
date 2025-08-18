# 📌 Credible Crown – Project Documentation

## 🏦 Project Overview
Credible Crown is a **peer-to-peer (P2P) lending platform** where users can register as **Borrowers** or **Lenders**.  
Borrowers can request loans, and Lenders can fund them after verifying credibility via **Aadhaar, CIBIL score, and fingerprint KYC**.  
All transactions happen via **secure escrow**, with automated agreements and repayment tracking.

---


---

## 🛠️ Tech Stack & Engineering Best Practices

### 1. Tech & Tools to Use with React Native

- **Framework:** React Native (latest stable)
- **TypeScript:** Strict typing, prevents 80% of runtime bugs.
- **Navigation:** React Navigation (stack, tab, drawer).
- **State Management:**
  - Server state: [TanStack React Query] (data fetching, caching)
  - Local/global state: [Zustand] or [Redux Toolkit] (if complex)
- **Forms:** [React Hook Form] + [Zod] for validation.
- **Styling:** [Tailwind RN] or [Styled Components] (consistent, scalable UI).
- **Networking:** Axios + Interceptors (token handling, retries).
- **Testing:** Jest + React Native Testing Library.
- **Linting & Formatting:** ESLint (Airbnb config) + Prettier + Husky (pre-commit hooks).
- **Error Monitoring:** Sentry or Firebase Crashlytics.
- **CI/CD:** GitHub Actions or Bitrise for automated builds & deployments.
- **Environment Management:** react-native-config for .env handling.

### 2. Directory Structure (Top 5% Engineers Standard)

```
/src
  /api          → API clients, axios configs
  /assets       → Images, fonts, icons
  /components   → Reusable UI components (buttons, modals, forms)
  /constants    → Colors, typography, spacing, config
  /hooks        → Custom React hooks (auth, data fetching, etc.)
  /navigation   → Stack, Tab, Drawer navigators
  /screens      → Screen-level components (Dashboard, LoanFeed, etc.)
  /services     → Business logic (AuthService, LoanService, PaymentService)
  /store        → Zustand/Redux store
  /types        → Global TypeScript types/interfaces
  /utils        → Helpers, formatters, validators
  /theme        → Tailwind config, dark/light mode
/tests          → Unit + integration tests
```

### ✅ Best Practice Rules (Followed by Elite Devs)

- **Use TypeScript Everywhere:** Never use `any`.
- **Component Design:** Small, reusable, composable. One responsibility per component.
- **Atomic Commit Messages:** Conventional commits (e.g., `feat: add loan form`).
- **Error Handling:** Centralized error boundary + toast/snackbar for UX.
- **Network Layer:** Always through `/api/` with retry logic, no raw fetch in screens.
- **Business Logic Separation:** Services handle logic, screens only orchestrate.
- **Code Reviews & Lint:** Every PR must pass ESLint, Prettier, tests.
- **Dark Mode & Accessibility:** Required from start.
- **Navigation Rules:** Define types for routes to avoid runtime crashes.
- **Testing Culture:** Unit test critical utils, snapshot test UI, integration test flows.

---


## 📱 Mobile App UI Flow & User Journeys

### 🔄 Borrower Journey
- **Open App → Landing Page**
- **Login/Register** (Aadhaar OTP, fingerprint)
- **Profile Setup** (KYC + CIBIL fetch)
- **Create Loan Request**
- **Loan Ads Feed** → Lender accepts
- **Agreement Page** → E-Sign
- **Repayment Dashboard**

### 💰 Lender Journey
- **Open App → Landing Page**
- **Login/Register** (KYC)
- **Browse Loan Requests Feed**
- **Fund Loan → Agreement → Escrow Payment**
- **Portfolio Dashboard** (ROI, repayments)

### 🧭 Bottom Navigation (Both Roles)
- **Home** – Dashboard/Overview
- **Browse** – Loans/Offers Feed
- **Create** – Request (Borrower) / Offer (Lender)
- **Wallet / Transactions** – Escrow, payments, history
- **Profile** – KYC, settings, verification status

---

## 🎨 UI/UX Design & Best Practices

- **Minimal UI** with trust-first color theme (blue, teal, gold)
- **Security First:**  
  - Encrypt Aadhaar/PAN using AES-256  
  - Store fingerprint as hash (never raw biometric)  
  - Use HTTPS/TLS everywhere
- **Compliance:**  
  - Follow RBI NBFC-P2P Guidelines (2017)  
  - Escrow accounts via RBI-licensed trustees  
  - Enforce E-Signature (Aadhaar OTP / DSC) on agreements
- **User Trust:**  
  - Show verified badge after KYC  
  - Transparent, auto-generated PDF agreements  
  - Notifications for EMIs, repayments, defaults
- **Onboarding:**  
  - Smooth, guided steps for registration and KYC
- **Lender Experience:**  
  - Show risk and return clearly  
  - Push credibility scores and verification badges upfront

---

## 📑 Pages Required

### 👤 Guest Pages
- **Landing / Home** – Intro, features, and Call-to-Action.  
- **About / How it Works** – Explains credibility & compliance.  
- **Login / Register** – Aadhaar OTP, fingerprint, phone/email.

### 💳 Borrower Pages
- Profile Setup (KYC, Aadhaar, PAN, income proof).  
- Credit Check (CIBIL API).  
- Create Loan Request (amount, interest, tenure, purpose).  
- Loan Status / Matching.  
- Agreements / E-Sign.  
- Repayment Dashboard.

### 💰 Lender Pages
- Profile & Verification.  
- Browse Loan Ads (filters: ROI, amount, tenure).  
- Fund Loan via Escrow.  
- Agreement Signing (digital).  
- Portfolio Dashboard.

### 🛠️ Admin Pages
- User Management (KYC, fraud checks).  
- Loan & Escrow Monitoring.  
- Agreement Templates.  
- Reports & Compliance Exports.

---

## 🗄️ Database Schema (Simplified)

```sql
-- 👤 USERS (Borrowers, Lenders, Admins)
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    role VARCHAR(20) CHECK (role IN ('borrower','lender','admin')),
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    aadhaar_number CHAR(12) UNIQUE,
    pan_number CHAR(10) UNIQUE,
    fingerprint_hash TEXT,
    cibil_score INT,
    kyc_status VARCHAR(20) CHECK (kyc_status IN ('pending','verified','rejected')) DEFAULT 'pending',
    credibility_score DECIMAL(5,2) DEFAULT 0.0,
    created_at TIMESTAMP DEFAULT NOW()
);

-- 📄 KYC VERIFICATION LOGS
CREATE TABLE kyc_logs (
    kyc_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    document_type VARCHAR(50),
    document_url TEXT,
    verification_status VARCHAR(20) CHECK (verification_status IN ('pending','verified','rejected')) DEFAULT 'pending',
    verified_by VARCHAR(100),
    verified_at TIMESTAMP
);

-- 🏦 LOAN REQUESTS
CREATE TABLE loan_requests (
    loan_id SERIAL PRIMARY KEY,
    borrower_id INT REFERENCES users(user_id),
    amount DECIMAL(12,2) NOT NULL,
    interest_rate DECIMAL(5,2) NOT NULL,
    tenure_months INT NOT NULL,
    purpose TEXT,
    status VARCHAR(20) CHECK (status IN ('open','funded','closed','defaulted')) DEFAULT 'open',
    created_at TIMESTAMP DEFAULT NOW()
);

-- 💰 LOAN OFFERS (by lenders to loan requests)
CREATE TABLE loan_offers (
    offer_id SERIAL PRIMARY KEY,
    loan_id INT REFERENCES loan_requests(loan_id),
    lender_id INT REFERENCES users(user_id),
    amount_offered DECIMAL(12,2) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('pending','accepted','rejected')) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT NOW()
);

-- 📜 AGREEMENTS (digital contracts between borrower & lender)
CREATE TABLE agreements (
    agreement_id SERIAL PRIMARY KEY,
    loan_id INT REFERENCES loan_requests(loan_id),
    lender_id INT REFERENCES users(user_id),
    borrower_id INT REFERENCES users(user_id),
    agreement_url TEXT,
    signed_by_borrower BOOLEAN DEFAULT FALSE,
    signed_by_lender BOOLEAN DEFAULT FALSE,
    signed_at TIMESTAMP
);

-- 💵 TRANSACTIONS (Escrow-based)
CREATE TABLE transactions (
    txn_id SERIAL PRIMARY KEY,
    loan_id INT REFERENCES loan_requests(loan_id),
    from_user INT REFERENCES users(user_id),
    to_user INT REFERENCES users(user_id),
    amount DECIMAL(12,2) NOT NULL,
    method VARCHAR(30) CHECK (method IN ('UPI','BankTransfer','Escrow')),
    txn_status VARCHAR(20) CHECK (txn_status IN ('initiated','success','failed')) DEFAULT 'initiated',
    created_at TIMESTAMP DEFAULT NOW()
);

-- 📅 REPAYMENTS (Scheduled & Paid)
CREATE TABLE repayments (
    repayment_id SERIAL PRIMARY KEY,
    loan_id INT REFERENCES loan_requests(loan_id),
    borrower_id INT REFERENCES users(user_id),
    lender_id INT REFERENCES users(user_id),
    due_date DATE NOT NULL,
    amount_due DECIMAL(12,2) NOT NULL,
    amount_paid DECIMAL(12,2) DEFAULT 0.0,
    status VARCHAR(20) CHECK (status IN ('pending','paid','late')) DEFAULT 'pending',
    paid_at TIMESTAMP
);

-- 👛 WALLET (for users' available balance inside platform)
CREATE TABLE wallets (
    wallet_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    balance DECIMAL(12,2) DEFAULT 0.0,
    last_updated TIMESTAMP DEFAULT NOW()
);

-- 🔔 NOTIFICATIONS (for events like loan funded, repayment due, etc.)
CREATE TABLE notifications (
    notification_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    message TEXT NOT NULL,
    type VARCHAR(30) CHECK (type IN ('info','loan','repayment','system')),
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- 📊 AUDIT LOGS (important for compliance & fraud checks)
CREATE TABLE audit_logs (
    log_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    action VARCHAR(100) NOT NULL,
    details TEXT,
    ip_address VARCHAR(50),
    created_at TIMESTAMP DEFAULT NOW()
);
```