@echo off
chcp 65001 >nul
title PWA to APK

echo =========================
echo AutoCare PWA to APK
echo =========================

cd /d "%~dp0"

echo Starting local server...
start /b python -m http.server 8888 >nul 2>&1
timeout /t 2 /nobreak >nul

echo Server: http://localhost:8888

for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4"') do set IP=%%a
set IP=%IP: =%

echo Your IP: %IP%
echo.
echo Open browser to test: http://localhost:8888
echo.
echo Then go to https://www.pwabuilder.com/
echo Input: http://%IP%:8888
echo.
pause