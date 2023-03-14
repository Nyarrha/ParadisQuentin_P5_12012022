let cart = JSON.parse(window.localStorage.getItem('cart')) ?? [];
let res = await fetch(`http://localhost:3000/api/products/`);
let products = await res.json();
console.log(products);
products.forEach(item => console.log(item.price));


