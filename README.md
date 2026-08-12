# 🎨 Portfolio MIN | 個人作品集

Portfolio MIN 是一個以 React 與 Vite 建置的個人作品集網站，旨在展示前端開發、UI/UX 網頁切版設計、專案實作與工作經歷。

網站採用響應式設計（RWD），並以 Bootstrap 5 與 SCSS 搭配客製化樣式，結合動態時間軸互動，呈現現代化的視覺版面與流暢的使用者體驗。

---

## 📦 Demo

🔗 https://MIN82814.github.io/Portfolio-MIN/

---

## 📸 功能展示

### Hero 首頁
![Hero 首頁](https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/Portfolio-MIN_modal_hero.jpg?raw=true)


---

## 👨‍💻 個人作品集網站開發

* **Hero 首頁**：視覺與自我介紹區塊規劃與 RWD 切版
* **技能展示區塊**：卡片分類展示規劃與 RWD 切版
* **專案作品區塊**：作品展現規劃、切版與動態類別篩選功能
* **專案彈窗組件**：詳細資訊 Modal 彈窗元件開發與資料帶入
* **經歷時間軸**：區塊規劃與滾動發光互動效果（`IntersectionObserver`）
* **聯絡資訊區塊**：社群與聯絡管道規劃與切版

### 資料與架構處理
* **資料驅動渲染**：專案、技能與經歷等 JSON 資料結構設計與組件映射
* **自動化部署**：Vite 環境配置與 GitHub Pages 自動化部署設定

---

## 🌟 核心功能

| 功能 | 說明 |
| :--- | :--- |
| **Hero 首頁** | 展示個人前端與設計背景、自我介紹與 CTA 動作按鈕 |
| **技能展示 (Skills)** | 以三大面向分類呈現 React、HTML/CSS 切版與開發流程等技術項目 |
| **專案作品 (Projects)** | 支援「全部」、「React前端開發」、「網頁切版」、「UI 設計與規劃」篩選查看作品 |
| **專案卡片彈窗 (Modal)** | 點選作品卡片開啟詳細介紹、負責內容與專案連結 |
| **經歷時間軸 (Experience)** | 結合 `IntersectionObserver` 實現動態滾動發光效果，分段呈現工作、專案與學歷 |
| **全站響應式布局** | 支援桌面端雙欄與行動裝置單欄最佳化瀏覽 |

---

## 🔧 技術棧

### 核心框架
* React 19
* Vite 8

### UI / 樣式
* Bootstrap 5
* SCSS
* HTML5 / CSS3

### 程式語言 & 工具
* JavaScript (ES6+)
* Git / GitHub
* gh-pages

---

## 🖥️ 本地安裝與啟動

### 環境需求
* Node.js v18 以上
* npm v10 以上

### 安裝步驟

```bash
# 1. Clone 專案
git clone [https://github.com/MIN82814/Portfolio-MIN.git](https://github.com/MIN82814/Portfolio-MIN.git)

# 2. 移動到專案資料夾
cd Portfolio-MIN

# 3. 安裝套件
npm install

# 4. 啟動專案
npm run dev

---
🗂️ 資料夾結構
src
├─ assets
│  └─ styles
├─ components
├─ data
│  ├─ projectsData.json
│  ├─ experienceData.json
│  └─ skillsData.json
├─ App.jsx
├─ main.jsx
├─ index.html
├─ package.json
└─ vite.config.js