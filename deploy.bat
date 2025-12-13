@echo off
REM Ahmad Hassan Portfolio - One-Click Deploy Script (Windows)
REM Built 100%% by Gemini AntiGravity agents

echo 🚀 Ahmad Hassan Portfolio - Deploying to Vercel...
echo.

REM Check if Vercel CLI is installed
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo 📦 Installing Vercel CLI...
    npm i -g vercel
)

REM Build the project
echo 🔨 Building production bundle...
call npm run build

if %ERRORLEVEL% EQU 0 (
    echo ✅ Build successful!
    echo.
    
    REM Deploy to Vercel
    echo 🌐 Deploying to Vercel...
    call vercel --prod
    
    if %ERRORLEVEL% EQU 0 (
        echo.
        echo ✅ Deployment successful!
        echo.
        echo 🎉 Your portfolio is now live!
        echo.
        echo Next steps:
        echo 1. Add custom domain in Vercel dashboard
        echo 2. Configure DNS for ahmadhassan.ai, ahmadhassan.dev, or ahmadhassan.io
        echo 3. Run Lighthouse test: https://pagespeed.web.dev/
        echo.
    ) else (
        echo ❌ Deployment failed. Please check the error above.
        exit /b 1
    )
) else (
    echo ❌ Build failed. Please fix errors and try again.
    exit /b 1
)
