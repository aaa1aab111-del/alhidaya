
# الهداية — متجر ملابس حريمي (Static)

موقع ثابت (Static) جاهز للرفع على **GitHub Pages** أو **Netlify**.
ألوان محايدة أنيقة + RTL + دفع يدوي عبر Vodafone Cash (01009978684).

## الملفات
- `index.html` — الصفحة الرئيسية + شبكة المنتجات.
- `product.html` — صفحة تفاصيل المنتج، إضافة للسلة.
- `checkout.html` — ملخص الطلب + تعليمات الدفع عبر Vodafone Cash.
- `style.css` — تنسيقات عامة محايدة.
- `app.js` — بيانات المنتجات + إدارة السلة LocalStorage.

## الرفع على GitHub Pages
1. أنشئ Repository جديد (مثل: `alhidaya`).
2. ارفع كل هذه الملفات في جذر الريبو (Root).
3. اذهب إلى **Settings → Pages** واختر: Branch = `main`, Folder = `/ (root)` ثم **Save**.
4. الرابط سيصبح: `https://USERNAME.github.io/alhidaya`.

> للتغيير إلى دومين خاص لاحقًا، أضف DNS من إعدادات Pages.

**ملاحظة**: الدفع يدوي (بدون API). للتحقق التلقائي تحتاج تكامل تاجر مع Vodafone أو وسيط دفع.
