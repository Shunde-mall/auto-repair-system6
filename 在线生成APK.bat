@echo off
chcp 65001 >nul
title PWA to APK 在线生成器

echo ========================================
echo   AutoCare PWA 转 APK 生成器
echo ========================================
echo.
echo 此工具使用在线服务生成APK
echo.

cd /d "%~dp0"

echo [1/3] 启动本地服务器...
start /b python -m http.server 8888 >nul 2>&1
timeout /t 2 /nobreak >nul

echo   服务器已启动: http://localhost:8888
echo.

echo [2/3] 获取本机IP地址...
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4"') do set IP=%%a
set IP=%IP: =%
echo   您的IP地址: %IP%
echo.

echo [3/3] 打开在线生成器...
echo.
echo ========================================
echo   请复制以下信息到生成器
echo ========================================
echo.
echo   网站地址: http://%IP%:8888
echo.
echo   然后访问以下在线工具:
echo   - https://www.pwabuilder.com/
echo   - https://pwa2apk.com/
echo.
echo ========================================
echo.
pause
start https://www.pwabuilder.com/
echo.
echo 按任意键打开浏览器...
pause >nul

:menu
cls
echo ========================================
echo   菜单
echo ========================================
echo   1. 打开 PWABuilder
echo   2. 打开 PWA2APK  
echo   3. 测试本地网站
echo   4. 退出
echo.
set /p choice=请选择 (1-4): 

if "%choice%"=="1" start https://www.pwabuilder.com/
if "%choice%"=="2" start https://pwa2apk.com/
if "%choice%"=="3" start http://localhost:8888
if "%choice%"=="4" goto end
goto menu

:end
echo.
echo 停止服务器...
taskkill /f /im python.exe >nul 2>&1
echo 完成！
pause