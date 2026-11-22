# 粟琬宁 · 个人简历与作品集

在线访问：<https://sandglass-vic.github.io/ice-cv/>

河北经贸大学旅游管理本科，雅思 6.0（阅读 7.0）。
网站包含在线简历（中 / EN 切换）和两款借助 AI 独立开发的 iOS 应用作品页。

## 页面

| 页面 | 地址 |
| --- | --- |
| 简历首页 | [/ice-cv/](https://sandglass-vic.github.io/ice-cv/) |
| PSync · 多人面对面照片互传 | [/ice-cv/psync/](https://sandglass-vic.github.io/ice-cv/psync/) |
| 雅思大作文逻辑链 | [/ice-cv/ielts/](https://sandglass-vic.github.io/ice-cv/ielts/) |

## 目录

```
index.html            简历首页（简历数据内联在页面中，支持 ?lang=en、?static）
assets/               共享资源
  site.css / site.js  三个页面共用的设计变量、导航、按钮、页脚等组件（规范见 _work/DESIGN.md）
  SuWanning_Resume.pdf / 粟琬宁_简历.pdf   PDF 简历通用版（中英文各一页）
  photo.jpg           首页证件照（647×800）
  favicon.svg / og.jpg
psync/                PSync 作品页（index.html、assets/ 截图、promo/ 宣传视频与封面）
ielts/                雅思大作文逻辑链作品页（index.html、assets/ 模拟器截图）
.nojekyll             让 GitHub Pages 直接发布静态文件
```

纯静态站点，无外部依赖，所有链接均为相对路径，可直接用浏览器打开 `index.html` 本地预览。
