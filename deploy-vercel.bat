@echo off
REM ULTIMATE TEST & IMPROVE - Professional, fast, attractive UX - 100% Gemini AntiGravity 2025
echo ===================================================
echo   ONE-CLICK VERCEL DEPLOYMENT (PRODUCTION)
echo ===================================================

echo.
echo [Pre-flight] Running production build test...
call npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Build failed! Fix errors before deploying.
    pause
    exit /b %errorlevel%
)

echo.
echo [Deploy] Pushing to Vercel...
call npx vercel --prod
if %errorlevel% neq 0 (
    echo [ERROR] Deployment failed!
    echo.
    echo Common fixes:
    echo   - Run: npx vercel login
    echo   - Check internet connection
    echo   - Verify project is linked: npx vercel link
    pause
    exit /b %errorlevel%
)

echo.
echo ===================================================
echo   SUCCESS! Portfolio is LIVE on Vercel 🚀
echo ===================================================
echo.
echo Next steps:
echo   1. Visit your production URL
echo   2. Run Lighthouse audit on live site
echo   3. Monitor analytics
echo.
pause
