@echo off
chcp 65001 >nul
title 汽车维修管理系统 - PWA服务器
echo ========================================
echo   汽车维修管理系统 PWA 服务器
echo ========================================
echo.
echo 启动本地服务器...
echo 访问地址: http://localhost:8080
echo.
echo 按 Ctrl+C 停止服务器
echo.

cd /d "%~dp0"
python -m http.server 8080

pause