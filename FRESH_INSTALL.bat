@echo off
echo ================================================
echo   FRESH INSTALL - Hassan Portfolio
echo ================================================
echo.

echo [Step 1/6] Deleting old files...
echo.

if exist node_modules (
    echo Deleting node_modules...
    rmdir /s /q node_modules
    echo ✅ node_modules deleted
) else (
    echo ℹ️  node_modules doesn't exist (already clean)
)

if exist .next (
    echo Deleting .next...
    rmdir /s /q .next
    echo ✅ .next deleted
) else (
    echo ℹ️  .next doesn't exist (already clean)
)

if exist package-lock.json (
    echo Deleting package-lock.json...
    del /f /q package-lock.json
    echo ✅ package-lock.json deleted
) else (
    echo ℹ️  package-lock.json doesn't exist (already clean)
)

echo.
echo [Step 2/6] Cleaning npm cache...
echo.
call npm cache clean --force
if %ERRORLEVEL% NEQ 0 (
    echo ❌ ERROR: npm cache clean failed!
    pause
    exit /b 1
)
echo ✅ npm cache cleaned
echo.

echo [Step 3/6] Installing dependencies (this may take 2-3 minutes)...
echo.
call npm install --legacy-peer-deps
if %ERRORLEVEL% NEQ 0 (
    echo ❌ ERROR: npm install failed!
    pause
    exit /b 1
)
echo ✅ Dependencies installed
echo.

echo [Step 4/6] Checking for .env.local...
echo.
if not exist ".env.local" (
    echo ⚠️  Creating .env.local template...
    (
        echo # Portfolio Environment Variables
        echo.
        echo # REQUIRED: Get your Gemini API key from https://aistudio.google.com/app/apikey
        echo GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here
        echo.
        echo # OPTIONAL: Email service
        echo RESEND_API_KEY=your_resend_api_key_here
        echo AHMAD_EMAIL=ahmadhassan41093@gmail.com
    ) > .env.local
    echo ✅ Created .env.local - PLEASE ADD YOUR API KEY!
    echo.
    echo Get your Gemini API key: https://aistudio.google.com/app/apikey
    echo.
) else (
    echo ✅ .env.local exists
)
echo.

echo [Step 5/6] Testing build...
echo.
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo ⚠️  Build had issues (check above)
    echo.
) else (
    echo ✅ Build successful!
    echo.
)

echo [Step 6/6] Starting dev server...
echo ================================================
echo.
echo ✅ ALL DONE! Starting development server...
echo.
echo Your portfolio will open at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.
echo ================================================
echo.

call npm run dev
