@echo off
REM ULTIMATE TEST & IMPROVE - Professional, fast, attractive UX - 100% Gemini AntiGravity 2025
echo ===================================================
echo   COMPREHENSIVE TESTING SUITE - RUN ALL TESTS
echo ===================================================

echo.
echo [1/4] Installing test dependencies...
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] Dependency installation failed!
    pause
    exit /b %errorlevel%
)

echo.
echo [2/4] Running unit tests (Jest)...
call npm run test:ci
if %errorlevel% neq 0 (
    echo [WARNING] Some unit tests failed. Review output above.
)

echo.
echo [3/4] Running e2e tests (Playwright)...
echo Starting dev server in background...
start /B cmd /c "npm run dev >nul 2>&1"
timeout /t 10 /nobreak >nul
call npx playwright test
set e2e_result=%errorlevel%
taskkill /f /im node.exe >nul 2>&1

if %e2e_result% neq 0 (
    echo [WARNING] Some e2e tests failed. Review output above.
)

echo.
echo [4/4] Test Summary
echo ===================================================
echo Jest Unit Tests: Complete
echo Playwright E2E Tests: Complete
echo.
echo To run Lighthouse audit separately:
echo   1. Start dev server: npm run dev
echo   2. Run: npm run test:lighthouse
echo.
echo ===================================================
echo   ALL TESTS COMPLETE - Review results above
echo ===================================================
pause
