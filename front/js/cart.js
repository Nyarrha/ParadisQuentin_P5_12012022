let url = `http://localhost:3000/api/products/`
let cart = JSON.parse(window.localStorage.getItem('cart')) ?? [];
let res = await fetch(url);
let products = await res.json();
cart.forEach(item => console.log(item));

function createCartItem() {
    let section = document.querySelector('#cart__items')
    // Appel fonctions pour créer l'item panier
}

// Création de la balise article
function createArticle() {
    let article = document.createElement('article');
    article.classList.add('cart__item');
    article.dataset.id(cart.id);
    article.dataset.color(cart.color);
    return article;
}

// Création de la balise image
function createImage() {
    let divImage = document.createElement('div')
    divImage.classList.add('cart__item__img');
    let img = document.createElement('img');
    img.src = cart.imageUrl;
    img.alt = cart.altTxt;
    divImage.appendChild(img);
    return divImage;
}

// Création de la grande div contenant les autres concernant produit
function createContent() {
    let divContent = document.createElement('div');
    divContent.classList.add('cart__item__content');
    // Regroupement des div dans la plus grande
    let content = createContent();
    let contentSettings = createContentSettings();
    let deleteSettings = deleteContentSettings();

    divContent.appendChild(content);
    divContent.appendChild(contentSettings);
    divContent.appendChild(deleteSettings);

    return divContent;
}

function createContent() {
    let divDesc = document.createElement('div');
    let title = document.createElement('h2');
    title.textContent = products.name

    let color = document.createElement('p');
    color.textContent = cart.color;

    let price = document.createElement('p');
    price.textContent = products.price;

    divDesc.appendChild(title);
    divDesc.appendChild(color);
    divDesc.appendChild(price);
    return divDesc;
}

function createContentSettings() {
    // A suivre
}