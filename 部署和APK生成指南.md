# GitHub Pages 部署 + APK 生成完整指南

## 第一步：创建 GitHub 账号（如果没有）

1. 访问 https://github.com
2. 点击右上角 "Sign up" 注册
3. 填写用户名、邮箱、密码
4. 验证邮箱

---

## 第二步：创建 GitHub 仓库

### 2.1 新建仓库
1. 登录 GitHub 后，点击右上角 **+** 号
2. 选择 **New repository**

### 2.2 填写仓库信息
```
Repository name: auto-repair-system
Description: 汽车维修厂日常管理系统
Visibility: ✅ Public（公开，才能使用 GitHub Pages）
```

3. **不要**勾选 "Add a README file"
4. **不要**勾选 "Add .gitignore"
5. 点击 **Create repository**

---

## 第三步：上传项目文件

### 方法A：网页上传（简单）

1. 在刚创建的仓库页面，点击 **uploading an existing file**
2. 把 `auto-repair-system` 文件夹里的所有文件拖进去：
   - index.html
   - styles.css
   - app.js
   - manifest.json
   - sw.js
   - README.md
   - icons/ 文件夹
3. 在底部 "Commit changes" 填写：
   ```
   Commit message: 初始化汽车维修管理系统
   ```
4. 点击 **Commit changes**

### 方法B：Git 命令上传（如果已安装 Git）

打开 PowerShell，运行：

```powershell
cd C:\Users\win10\.qclaw\workspace\auto-repair-system

git init
git add .
git commit -m "初始化汽车维修管理系统"
git branch -M main
git remote add origin https://github.com/你的用户名/auto-repair-system.git
git push -u origin main
```

---

## 第四步：开启 GitHub Pages

1. 进入你的仓库页面
2. 点击 **Settings**（设置）
3. 左侧菜单找到 **Pages**
4. 在 "Build and deployment" 部分：
   - **Source**: 选择 "Deploy from a branch"
   - **Branch**: 选择 `main` 分支
   - **Folder**: 选择 `/ (root)`
5. 点击 **Save**

等待 1-2 分钟，页面会显示：
```
Your site is live at https://你的用户名.github.io/auto-repair-system/
```

---

## 第五步：测试网站

访问：`https://你的用户名.github.io/auto-repair-system/`

确认网站能正常打开。

---

## 第六步：在线生成 APK

### 使用 PWABuilder（微软官方工具）

#### 6.1 访问 PWABuilder
打开：https://www.pwabuilder.com/

#### 6.2 输入网站地址
在输入框中填写：
```
https://你的用户名.github.io/auto-repair-system/
```

点击 **Start** 按钮

#### 6.3 等待检测
PWABuilder 会自动检测你的 PWA 配置：
- ✅ manifest.json
- ✅ Service Worker
- ✅ 图标
- ✅ 离线支持

#### 6.4 生成 APK
1. 检测完成后，点击顶部的 **Package for stores**
2. 选择 **Android** 平台
3. 填写 APK 信息：
   ```
   Package Name: com.autocare.app
   App Name: AutoCare
   ```
4. 点击 **Generate**
5. 等待 1-2 分钟
6. 下载生成的 APK 文件

---

## 第七步：安装 APK 到手机

### Android 手机
1. 把下载的 APK 传到手机
2. 点击 APK 文件
3. 如果提示"未知来源"，去设置开启：
   ```
   设置 → 安全 → 允许安装未知来源应用
   ```
4. 点击安装
5. 安装完成后，桌面会出现 "AutoCare" 图标

---

## 快速参考

| 步骤 | 操作 | 地址 |
|------|------|------|
| 1 | 创建仓库 | https://github.com/new |
| 2 | 上传文件 | 仓库页面 → upload files |
| 3 | 开启 Pages | Settings → Pages |
| 4 | 生成 APK | https://www.pwabuilder.com/ |

---

## 你的网站地址

部署完成后，你的网站地址是：
```
https://你的GitHub用户名.github.io/auto-repair-system/
```

把这个地址输入 PWABuilder 即可生成 APK！

---

## 常见问题

### Q: GitHub Pages 显示 404？
A: 等待 2-3 分钟，Pages 需要时间部署

### Q: PWA 检测失败？
A: 确保上传了所有文件，包括 manifest.json 和 sw.js

### Q: APK 安装失败？
A: 检查手机设置，允许安装未知来源应用

---

**预计总耗时**: 10-15 分钟