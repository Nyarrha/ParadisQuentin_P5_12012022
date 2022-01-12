const kanapsList = document.getElementById('items');
const url = 'http://localhost:3000/api/products/';


// Appel API
fetch(url)
    // Promesse pour transformer le résultat en .JSON
   .then((response) => response.json())
//    Affichage des produits sur le DOM
   .then((kanaps) =>{
       for(let kanap = 0; kanap < kanaps.length; kanap += 1){
       kanapsList.innerHTML += `<a href="./product.html?id=${kanaps[kanap]._id}">
                            <article>
                                <img src="${kanaps[kanap].imageUrl}" alt="${kanaps[kanap].altTxt}">
                                <h3 class="productName">${kanaps[kanap].name}</h3>
                                <p class="productDescription">${kanaps[kanap].description}</p>
                                </article>
                           </a>`;
       }
   })
   // Réponse en cas d'erreur
   .catch((reject) =>{
   return reject;
   });
