# TPN VPN - Progressive Web App

یک وب‌سایت فروش VPN با React و Vite که به صورت PWA (Progressive Web App) طراحی شده است.

## ✨ ویژگی‌ها

- 🚀 **PWA**: قابلیت نصب روی موبایل و دسکتاپ
- 📱 **Responsive**: طراحی واکنش‌گرا برای تمام دستگاه‌ها
- ⚡ **سریع**: بهینه‌سازی شده با Vite
- 🎨 **زیبا**: طراحی مدرن با انیمیشن‌های جذاب
- 🔒 **امن**: رعایت اصول امنیتی وب
- ♿ **دسترسی‌پذیر**: سازگار با screen reader ها
- 🔍 **SEO**: بهینه‌سازی شده برای موتورهای جستجو

## 🛠️ تکنولوژی‌ها

- **Frontend**: React 18.3.1
- **Build Tool**: Vite 5.4.0
- **Styling**: CSS خالص + FontAwesome
- **PWA**: Service Worker + Manifest
- **Language**: JavaScript (ES6+)

## 🚀 نصب و اجرا

### پیش‌نیازها

- Node.js 16+
- npm یا yarn

### نصب

```bash
npm install
```

### اجرا در حالت توسعه

```bash
npm run dev
```

### ساخت برای تولید

```bash
npm run build
npm run build:pwa
```

### پیش‌نمایش

```bash
npm run preview
```

## 📁 ساختار پروژه

```text
tpn/
├── public/
│   ├── images/          # تصاویر
│   ├── manifest.json    # PWA manifest
│   ├── sw.js           # Service Worker
│   ├── robots.txt      # SEO
│   └── sitemap.xml     # SEO
├── src/
│   ├── components/     # کامپوننت‌های React
│   ├── styles/         # فایل‌های CSS
│   ├── App.jsx         # کامپوننت اصلی
│   └── main.jsx        # نقطه ورود
└── package.json
```

## 🎯 کامپوننت‌ها

- **Header**: هدر سایت با منوی همبرگری
- **Banner**: بخش معرفی و تبلیغات
- **OptionCard**: مزایای سرویس
- **Country**: نمایش سرورهای کشورهای مختلف
- **Service**: تعرفه‌ها و پکیج‌ها
- **Connection**: دانلود اپلیکیشن‌ها
- **Footer**: فوتر و لینک‌های اجتماعی

## 🔧 تنظیمات PWA

فایل `manifest.json` شامل تنظیمات PWA است:

- نام و توضیحات اپ
- آیکون‌ها
- رنگ‌های تم
- حالت نمایش

## 📱 تست PWA

1. اپ را در مرورگر باز کنید
2. روی آیکون "نصب" کلیک کنید
3. یا از منوی مرورگر "Add to Home Screen" را انتخاب کنید

## 🎨 سفارشی‌سازی

### تغییر رنگ‌ها

فایل `src/styles/style.css` را ویرایش کنید:

```css
:root {
  --primary-color: #5B9A8B;
  --secondary-color: #252B48;
  --background-color: #445069;
}
```

### اضافه کردن کامپوننت جدید

```jsx
// src/components/NewComponent.jsx
export function NewComponent() {
  return (
    <div className="new-component">
      {/* محتوا */}
    </div>
  );
}
```

## 🚀 استقرار

### Netlify

```bash
npm run build
# فایل‌های dist را به Netlify آپلود کنید
```

### Vercel

```bash
npm run build
# فایل‌های dist را به Vercel آپلود کنید
```

## 📄 مجوز

این پروژه تحت مجوز MIT منتشر شده است.

## 👨‍💻 توسعه‌دهنده

**iamiresaei** - [GitHub](https://github.com/iamiresaei)

---

⭐ اگر این پروژه برایتان مفید بود، ستاره بدهید!
