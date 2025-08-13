
// الهداية - وظائف أساسية (Cart + Products + Helpers)
const BRAND = "الهداية";
const VODAFONE = "01009978684";

// منتجات تجريبية
const PRODUCTS = [
  {"id":"P001","name":"فستان سهرة أنيق","price":1250,"img":"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=60","sizes":["S","M","L"],"colors":["أسود","خمري"],"desc":"فستان بخامة مريحة وتصميم راقٍ للمناسبات."},
  {"id":"P002","name":"بلوزة قطنية","price":320,"img":"https://images.unsplash.com/photo-1555574383-94b3b8e7f3c6?auto=format&fit=crop&w=1200&q=60","sizes":["M","L","XL"],"colors":["أبيض","رمادي"],"desc":"بلوزة يومية قطن 100% بنعومة عالية."},
  {"id":"P003","name":"بنطال واسع","price":540,"img":"https://images.unsplash.com/photo-1544441893-675973e31986?auto=format&fit=crop&w=1200&q=60","sizes":["S","M","L","XL"],"colors":["أسود","بيج"],"desc":"بنطال مريح بستايل عصري يناسب الخروجات."},
  {"id":"P004","name":"جاكيت خفيف","price":680,"img":"https://images.unsplash.com/photo-1520975916332-6d9b7f6b3c83?auto=format&fit=crop&w=1200&q=60","sizes":["S","M","L"],"colors":["نيود","أزرق"],"desc":"جاكيت صيفي خفيف لإطلالة أنيقة."}
];

function fmt(n){return new Intl.NumberFormat('ar-EG').format(n)}
function qs(s, r=document){return r.querySelector(s)}
function qsa(s, r=document){return [...r.querySelectorAll(s)]}

// Cart in localStorage
const CART_KEY = "alhidaya_cart_v1";
function loadCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY))||[] }catch{ return [] } }
function saveCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)) }
function addToCart(pid, size, color, qty=1){
  const cart = loadCart();
  const key = pid + "-" + size + "-" + color;
  const ix = cart.findIndex(i=>i.key===key);
  const p = PRODUCTS.find(x=>x.id===pid);
  if(ix>-1) cart[ix].qty += qty; else cart.push({key,pid,size,color,qty,price:p.price,name:p.name,img:p.img});
  saveCart(cart);
  alert("تم إضافة المنتج إلى السلة");
}
function cartCount(){
  const c = loadCart(); return c.reduce((s,i)=>s+i.qty,0);
}
function cartTotal(){
  return loadCart().reduce((s,i)=>s+i.qty*i.price,0);
}

// Populate cart badge
document.addEventListener('DOMContentLoaded', ()=>{
  const badge = qs('[data-cart-count]');
  if(badge) badge.textContent = cartCount();
});
