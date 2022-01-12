// Récupération de l'ID du produit sélectionné dans l'URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

// Appel API du produit sélectionné
fetch(`http://localhost:3000/api/products/${id}`)
// Promesse pour changer la réponse en JSON
.then((response) => response.json())
// Promesse pour traiter les données reçues
.then((res) => recupData(res))
.catch((reject) => reject)

// Fonction regroupant les différentes données du produits et les fonctions pour les afficher
function recupData(kanap){
    const {altTxt, colors, description, imageUrl, name, price} = kanap;
    createImage(imageUrl, altTxt)
    createTitle(name)
    createPrice(price)
    createDescription(description)
    createColors(colors)
}

// Fonction pour afficher l'image et le texte alt. sur le DOM
function createImage(imageUrl, altTxt){
    const image = document.createElement("img")
    image.src = imageUrl
    image.alt = altTxt
    const parent = document.querySelector(".item__img")
    if (parent != null) parent.appendChild(image)
}

// Fonction pour afficher le nom du produit sur le DOM
function createTitle(name){
    const title = document.querySelector('#title')
    if (title != null) title.innerText = name
}

// Fonction pour afficher le prix en € sur le DOM
function createPrice(price){
    const priceEuros = document.querySelector('#price')
    if (priceEuros != null) priceEuros.innerText = price
}

// Fonction pour afficher la description du produit sur le DOM
function createDescription(description){
const descriptif = document.querySelector('#description')
if (descriptif != null) descriptif.innerText = description
}

// Fonction pour afficher les différents choix de couleurs du produit sur le DOM
function createColors(colors){
    const select = document.querySelector('#colors')
    if (select != null) {
        // Pour chaque couleur du tableau des couleurs du produit
        colors.forEach((color) => {
            // Créer un élément <option> à la valeur et au texte de chaque couleur
        const option = document.createElement('option')
        option.value = color
        option.innerText = color
            // Assigner la boucle de création de couleurs au HTML sur l'id #colors
        select.appendChild(option)
        })
    }
}