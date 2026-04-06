# 汽车维修厂管理系统

![版本](https://img.shields.io/badge/版本-1.1.0-blue)
![平台](https://img.shields.io/badge/平台-Web%20%7C%20PWA%20%7C%20Android-green)

一个现代化、专业的汽车维修厂管理系统，支持Web浏览器和手机PWA安装。

---

## 🚀 快速开始

### 方式一：本地运行
```
双击 index.html 直接在浏览器中打开
```

### 方式二：启动本地服务器
```
双击 启动服务器.bat
浏览器访问 http://localhost:8080
```

---

## 📱 手机端安装 (PWA)

### Android
1. 用 Chrome 浏览器打开网页
2. 点击右上角 ⋮ 菜单
3. 选择 "添加到主屏幕"
4. 桌面出现 "AutoCare" 图标

### iOS
1. 用 Safari 打开网页
2. 点击底部分享按钮 (□→)
3. 滑动找到 "添加到主屏幕"
4. 点击添加

---

## 📦 APK 打包

### 在线工具（推荐）

1. **PWABuilder** - https://www.pwabuilder.com/
2. **PWA2APK** - https://pwa2apk.com/
3. **BubbleWrap** - https://developer.android.com/bubblewrap

### 使用步骤
1. 先将网站部署到可访问的URL（可用 Vercel / Netlify / GitHub Pages）
2. 访问上述任一工具
3. 输入网站URL
4. 下载生成的APK

---

## 📁 文件结构

```
auto-repair-system/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── app.js             # 应用逻辑
├── manifest.json      # PWA配置
├── sw.js              # Service Worker (离线支持)
├── icons/
│   └── icon.svg       # 应用图标
├── 启动服务器.bat      # 一键启动服务器
├── APK打包指南.md     # APK打包详细指南
└── README.md          # 说明文档
```

---

## 🎯 功能模块

| 模块 | 功能 |
|------|------|
| 控制台 | 今日工单、收入统计、库存预警、技师状态 |
| 维修工单 | 新建/编辑工单、状态跟踪、技师指派 |
| 客户管理 | 客户信息、VIP标识、车辆关联 |
| 配件库存 | 入库/出库、库存预警 |
| 财务管理 | 收支统计、利润分析 |
| 员工管理 | 员工信息、技师等级 |
| 数据报表 | 营业报表、维修统计 |

---

## 🔧 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **PWA**: Service Worker, Web App Manifest
- **设计**: 工业风 + 科技感，响应式布局

---

## 📝 开发日志

### v1.1.0 (2026-04-06)
- ✅ PWA支持 - 可添加到主屏幕
- ✅ 离线支持 - Service Worker缓存
- ✅ 移动端优化 - 响应式布局
- ✅ APK打包指南 - 多种打包方案

### v1.0.0 (2026-04-06)
- ✅ 核心功能开发完成

---

## 📄 许可证

MIT License

---

**开发者**: OpenClaw AI Assistant  
**创建时间**: 2026年4月6日