const cart = []

fetch(`http://localhost:3000/api/products/`)
.then((res) => res.json())
.then((res) => {
    console.log(res)
    retrieveItemsFromCache()
})

cart.forEach((item) => displayItem(item))

function retrieveItemsFromCache() {
    const howManyItems = localStorage.length
    console.log(`Il y a ${howManyItems} kanap choisis`)
    for (i = 0; i < howManyItems; i++){
        const item = localStorage.getItem(localStorage.key(i))
        const itemParse = JSON.parse(item)
        cart.push(itemParse)
    }
}

console.log(cart)

function displayItem(item) {
    makeArticle()
}

function makeArticle() {
    const article = createElement('article')
    const image = makeImage(image)
    article.appendChild(image)
    console.log(article)
}