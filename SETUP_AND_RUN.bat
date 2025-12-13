@echo off
echo ================================================
echo   COMPLETE PROJECT SETUP - Ahmad Hassan Portfolio
echo ================================================
echo.

REM Check if Node.js is installed
echo [1/5] Checking Node.js installation...
node -v >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ ERROR: Node.js is NOT installed!
    echo.
    echo PLEASE INSTALL NODE.JS FIRST:
    echo 1. Visit: https://nodejs.org
    echo 2. Download LTS version (recommended)
    echo 3. Run the installer
    echo 4. Restart this terminal
    echo 5. Run this script again
    echo.
    pause
    exit /b 1
)

node -v
npm -v
echo ✅ Node.js is installed!
echo.

REM Check if .env.local exists
echo [2/5] Checking environment configuration...
if not exist ".env.local" (
    echo.
    echo ⚠️  WARNING: .env.local file not found!
    echo.
    echo Creating template .env.local file...
    (
        echo # Portfolio Environment Variables
        echo.
        echo # REQUIRED: Get your free API key from https://aistudio.google.com/app/apikey
        echo GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here
        echo.
        echo # OPTIONAL: Email service
        echo RESEND_API_KEY=your_resend_api_key_here
        echo AHMAD_EMAIL=ahmadhassan41093@gmail.com
    ) > .env.local
    echo ✅ Created .env.local template
    echo.
    echo ⚠️  IMPORTANT: Edit .env.local and add your Gemini API key!
    echo    Get it from: https://aistudio.google.com/app/apikey
    echo.
    pause
) else (
    echo ✅ .env.local exists!
)
echo.

REM Install dependencies
echo [3/5] Installing dependencies...
echo This may take 2-3 minutes...
echo.
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ ERROR: Dependency installation failed!
    pause
    exit /b 1
)
echo.
echo ✅ Dependencies installed successfully!
echo.

REM Build project to check for errors
echo [4/5] Testing build (verifying no errors)...
echo.
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ ERROR: Build failed! Check errors above.
    pause
    exit /b 1
)
echo.
echo ✅ Build successful!
echo.

REM Final instructions
echo [5/5] Setup Complete!
echo ================================================
echo.
echo ✅ ALL SETUP COMPLETE!
echo.
echo NEXT STEPS:
echo 1. Make sure your Gemini API key is in .env.local
echo 2. Run: npm run dev
echo 3. Open: http://localhost:3000
echo.
echo TO START DEV SERVER:
echo   npm run dev
echo.
echo TO BUILD FOR PRODUCTION:
echo   npm run build
echo   npm start
echo.
echo ================================================
pause
