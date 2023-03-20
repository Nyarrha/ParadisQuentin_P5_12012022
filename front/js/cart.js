let url = `http://localhost:3000/api/products/`
let cart = JSON.parse(window.localStorage.getItem('cart')) ?? [];
let res = await fetch(url);
let products = await res.json();

//Création nouvelle liste API à partir du localstorage
// let productsIdMapping = products.map(product => product._id)

// for (let i = productsIdMapping.length -1; i >= 0; i--){
//     if (productsIdMapping[i].value != cart.id) {
//         productsIdMapping.splice(i, 1);
//     }
// }
// console.log(productsIdMapping);

function createCartItem() {
    let section = document.querySelector('#cart__items')
    // Appel fonctions pour créer l'item panier
    let article = createArticle();
    let image = createImage();
    let itemsContent = createItemsContent();
    let itemContent = createItemContent();
    let contentSettings = createContentSettings();
    let contentSettingsQuantity = createSettingsQuantity();
    let contentSettingsDelete = settingsDelete();

    
    article.appendChild(image);
    article.appendChild(itemsContent);
    article.appendChild(itemContent);
    article.appendChild(contentSettings);
    article.appendChild(contentSettingsQuantity);
    article.appendChild(contentSettingsDelete);

    section.appendChild(article);

    return section;
}

for (let i = 0; i < cart.length; i++){
    createCartItem();
}
    // -------- Pas fini --------- //

// Création de la balise article
function createArticle() {
    let article = document.createElement('article');
    article.classList.add('cart__item');
    article.dataset.id = cart.id;
    article.dataset.color = cart.color;
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
function createItemsContent() {
    let divContent = document.createElement('div');
    divContent.classList.add('cart__item__content');
    // Regroupement des petites div dans la plus grande
    let content = createContent();
    let contentSettings = createContentSettings();
    let deleteSettings = deleteContentSettings();

    divContent.appendChild(content);
    divContent.appendChild(contentSettings);
    divContent.appendChild(deleteSettings);

    return divContent;
}

// 

// Création de la div description du produit
function createItemContent() {
    let divDesc = document.createElement('div');
    divDesc.classList.add('cart__item__content__description');
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


// Création div regroupant éléments concernant les paramètres de la commande
function createContentSettings() {
    let settings = document.createElement('div');
    settings.classList.add('cart__item__content__settings');

    let settingsQuantity = createSettingsQuantity();
    let settingsDelete = settingsDelete();

    settings.appendChild(settingsQuantity);
    settings.appendChild(settingsDelete);

    return settings;
}

// Fonction créant les éléments de paramètres directement rattachés à la div au dessus
function createSettingsQuantity() {
    let settingsQuantity = document.createElement('div');
    settingsQuantity.classList.add('cart__item__content__settings__quantity');

    let quantityText = document.createElement('p');
    quantityText.textContent = 'Quantité : ';

    let quantityButton = document.createElement('input');
    quantityButton.type = 'number';
    quantityButton.classList.add('itemQuantity');
    quantityButton.name = 'itemQuantity';
    quantityButton.min = '1';
    quantityButton.max = '100';
    quantityButton.value = parseInt(cart.quantityChoice);

    settingsQuantity.appendChild(quantityText);
    settingsQuantity.appendChild(quantityButton);

    return settingsQuantity;
}


// Fonction pour ajouter la proposition de supprimer le produit du produit(seulement l'élément texte)
function settingsDelete() {
    let settingsDelete = document.createElement('div');
    settingsDelete.classList.add('cart__item__content__settings__delete');
    let settingsDeleteText = document.createElement('p');
    settingsDeleteText.textContent = 'Supprimer';

    settingsDelete.appendChild(settingsDeleteText);

    return settingsDelete;
}


// Fonction pour calculer la quantité totale d'articles du panier
function totalQuantity(){
    let totalQuantity = document.querySelector('#totalQuantity'); 
    
}