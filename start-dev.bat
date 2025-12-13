@echo off
echo Starting Development Server...
powershell -Command "Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force; npm run dev"
pause
