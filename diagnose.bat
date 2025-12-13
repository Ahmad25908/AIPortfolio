@echo off
echo ================================================
echo  Portfolio Diagnostic Tool
echo ================================================
echo.

echo [1/3] Checking for running Node processes...
tasklist /FI "IMAGENAME eq node.exe" 2>nul | find /I "node.exe"
if %ERRORLEVEL% NEQ 0 (
    echo       ❌ No Node processes running!
    echo       → Run clean-start.bat to start the server
) else (
    echo       ✓ Node processes found
)
echo.

echo [2/3] Checking port 3000...
netstat -ano | findstr ":3000" | findstr "LISTENING"
if %ERRORLEVEL% NEQ 0 (
    echo       ❌ Nothing listening on port 3000!
) else (
    echo       ✓ Port 3000 is active
)
echo.

echo [3/3] Checking for lock files...
if exist ".next\dev\lock" (
    echo       ⚠️  Lock file exists - may need cleanup
) else (
    echo       ✓ No lock files
)
echo.

echo ================================================
echo  Diagnostic Complete
echo ================================================
echo.
echo If you see errors above, run: clean-start.bat
echo Otherwise, open: http://localhost:3000
echo.
pause
