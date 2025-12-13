# Portfolio Testing & Optimization - Quick Start

## 🧪 Run All Tests
```bash
# Windows
run-all-tests.bat

# macOS/Linux
npm install
npm run test:ci
npm run test:e2e
```

## 🚀 Deploy to Production
```bash
deploy-vercel.bat
```

## 📊 Individual Test Commands
```bash
# Unit tests (watch mode)
npm run test

# Unit tests (CI mode)
npm run test:ci

# E2E tests (Playwright)
npm run test:e2e

# Lighthouse audit (requires dev server running)
npm run dev
# In another terminal:
npm run test:lighthouse
```

## 📁 Test Files
- `tests/unit/component.test.ts` - Jest unit tests
- `tests/e2e/portfolio.spec.ts` - Playwright e2e tests
- `tests/lighthouse.test.mjs` - Lighthouse performance audit

## ✅ Expected Results
- All Jest tests pass
- All Playwright tests pass
- Lighthouse scores 90+ on all metrics

## 🐛 Troubleshooting
- **Jest fails:** Check Node version (18+)
- **Playwright fails:** Run `npx playwright install`
- **Lighthouse fails:** Ensure dev server is running on port 3000
