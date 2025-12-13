@echo off
echo ================================================
echo    Node.js Installation Helper
echo ================================================
echo.
echo This script will help you install Node.js LTS
echo.
echo OPTION 1: Download Installer (Recommended)
echo ------------------------------------------
echo 1. Visit: https://nodejs.org
echo 2. Download "LTS" version (recommended)
echo 3. Run the installer
echo 4. Restart this terminal after installation
echo.
echo OPTION 2: Use Windows Package Manager
echo ------------------------------------------
echo Run this command in PowerShell (as Administrator):
echo   winget install -e --id OpenJS.NodeJS.LTS
echo.
echo After installation, close and reopen your terminal,
echo then run: npm install
echo.
pause
