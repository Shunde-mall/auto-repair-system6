# 汽车维修管理系统 - APK打包指南

由于本地环境限制，以下是几种将PWA转换为APK的方法：

---

## 方法一：在线工具（推荐，最简单）

### 1. PWABuilder (微软官方)
1. 访问：https://www.pwabuilder.com/
2. 输入你的网站URL或上传文件
3. 选择 "Android" 平台
4. 点击 "Generate" 下载 APK

### 2. BubbleWrap (Google)
1. 访问：https://developer.android.com/bubblewrap
2. 按照指引使用 CLI 工具

### 3. PWA2APK
1. 访问：https://pwa2apk.com/
2. 上传你的 PWA 文件或输入 URL
3. 下载 APK

---

## 方法二：本地使用 TWA (Trusted Web Activity)

### 前置条件
- Node.js 已安装
- npm 已安装

### 步骤

```bash
# 1. 创建 Android 项目
npx @aspect-dev/create-twa my-app
cd my-app

# 2. 配置网站URL
编辑 android/app/src/main/res/values/strings.xml
将 <string name="app_name"> 改为你的APP名称

# 3. 打包APK
./gradlew assembleDebug
```

---

## 方法三：使用 Capacitor (推荐开发团队)

```bash
# 1. 安装 Capacitor
npm install @capacitor/core @capacitor/cli

# 2. 初始化
npx cap init "AutoCare" "com.autocare.app"

# 3. 添加 Android 平台
npx cap add android

# 4. 构建
npx cap sync android
npx cap open android
```

---

## 方法四：使用 Android Studio

1. 下载 Android Studio: https://developer.android.com/studio
2. 创建新项目 → 选择 "Basic Activity"
3. 使用 WebView 加载你的 PWA URL
4. Build → Generate Signed APK

---

## 快速开始：在线生成APK

### 最快方案：使用 PWABuilder

1. **准备你的网站**
   - 确保所有文件都在 `auto-repair-system` 文件夹
   - 需要一个可访问的 URL（可使用 ngrok / vercel 部署）

2. **访问 PWABuilder**
   https://www.pwabuilder.com/

3. **输入URL**
   - 如果本地部署：用 ngrok 暴露 localhost:8080
   - 如果在线部署：填入你的网站地址

4. **下载 APK**

---

## 当前项目文件

```
auto-repair-system/
├── index.html        # 主页面
├── styles.css        # 样式
├── app.js           # JS逻辑
├── manifest.json    # PWA配置
├── sw.js            # Service Worker
├── icons/
│   └── icon.svg     # 应用图标
├── 启动服务器.bat    # 一键启动服务器
└── APK打包指南.md    # 本文件
```

---

## 本地测试步骤

1. 双击 `启动服务器.bat`
2. 浏览器访问 http://localhost:8080
3. 手机和电脑连接同一WiFi
4. 手机浏览器访问 你的IP:8080
5. 添加到主屏幕

---

如需进一步帮助，请告诉我你的具体需求！