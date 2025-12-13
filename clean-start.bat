@echo off
echo ================================================
echo  Next.js Clean Start - Fixing HMR Issues
echo ================================================
echo.

REM Kill all node processes
echo [1/4] Stopping all Node.js processes...
taskkill /F /IM node.exe 2>nul
if %ERRORLEVEL% EQU 0 (
    echo       ✓ Node processes stopped
) else (
    echo       - No Node processes running
)
timeout /t 2 /nobreak >nul

REM Clean up lock files
echo [2/4] Removing lock files...
if exist ".next\dev\lock" (
    del /F /Q ".next\dev\lock" 2>nul
    echo       ✓ Lock files removed
) else (
    echo       - No lock files found
)

REM Clear .next cache to fix HMR module factory errors
echo [3/4] Clearing Turbopack cache...
if exist ".next" (
    rd /S /Q ".next" 2>nul
    echo       ✓ Cache cleared successfully
) else (
    echo       - No cache to clear
)

echo [4/4] Starting development server...
echo.
echo ================================================
echo  Server starting at http://localhost:3000
echo ================================================
echo.

npm run dev
