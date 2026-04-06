@echo off
chcp 65001 >nul
title AutoCare APK 一键生成工具

echo ========================================
echo   汽车维修管理系统 - APK生成工具
echo ========================================
echo.

:: 检查 Node.js
node --version >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo [错误] 未安装 Node.js
    echo 请先安装 Node.js: https://nodejs.org
    pause
    exit /b 1
)

echo [1/4] 检查环境...
echo   Node.js: OK

:: 检查 npm
npm --version >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo [错误] npm 未安装
    pause
    exit /b 1
)
echo   npm: OK

cd /d "%~dp0"

echo.
echo [2/4] 安装依赖...
echo   安装 pwa2apk-tools...

:: 尝试安装工具
npm install -g pwa2apk-tools >nul 2>&1
if %ERRORLEVEL% equ 0 (
    echo   工具安装成功
) else (
    echo   [提示] 在线工具方式可能更稳定
)

echo.
echo [3/4] 启动本地服务器...
start /b python -m http.server 8080 >nul 2>&1
timeout /t 2 /nobreak >nul

echo.
echo ========================================
echo   环境准备完成！
echo ========================================
echo.
echo 请选择下一步:
echo.
echo   方法1: 在线生成APK (推荐)
echo   访问: https://www.pwabuilder.com/
echo   输入: http://localhost:8080
echo.
echo   方法2: 如果安装了 pwa2apk-tools
echo   运行: pwa2apk http://localhost:8080
echo.
echo   方法3: 直接安装到连接的Android设备
echo   (需要 ADB 和开发者模式开启)
echo.
echo ========================================
echo.
echo 本地服务器已启动: http://localhost:8080
echo 按任意键打开浏览器测试...
echo 按 Ctrl+C 停止服务器
echo.
pause >nul
start http://localhost:8080
pause