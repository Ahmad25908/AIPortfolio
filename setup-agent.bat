@echo off
echo ========================================
echo Ahmad Hassan Portfolio AI Agent Setup
echo ========================================
echo.

cd portfolio-backend

echo Checking Python installation...
python --version
if errorlevel 1 (
    echo ERROR: Python is not installed!
    echo Please install Python 3.11 or higher
    pause
    exit /b 1
)

echo.
echo Installing dependencies...
pip install -r requirements.txt

echo.
echo ========================================
echo Setup complete!
echo ========================================
echo.
echo Next steps:
echo 1. Create .env file in portfolio-backend folder
echo 2. Add your GOOGLE_API_KEY to .env
echo 3. Run: python main.py
echo.
pause
