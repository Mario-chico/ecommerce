const navImageEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const hamMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('#shoppingCartDetail')
const cardsContainer = document.querySelector('.cards-container')

console.log({navImageEmail})

navImageEmail.addEventListener('click', activeDesktopMenu)
hamMenu.addEventListener('click', activeHamMenu)
menuCarritoIcon.addEventListener('click', activeAside)

function activeAside(){

  aside.classList.toggle('inactive')
}

function activeDesktopMenu(){
  desktopMenu.classList.toggle('inactive')
}
function activeHamMenu(){
  const isAsideActive = !aside.classList.contains('inactive')
  if(isAsideActive){
    aside.classList.add('inactive')
  }

  mobileMenu.classList.toggle('inactive')
}

const productList = [];

productList.push({
  name: 'Bike',
  price: 120,
  image: './assets/img/bike.jpg',
});
productList.push({
  name: 'Car',
  price: 220,
  image: './assets/img/bike.jpg',
});
productList.push({
  name: 'Plane',
  price: 320,
  image: './assets/img/bike.jpg',
});
productList.push({
  name: 'Helicopter',
  price: 420,
  image: './assets/img/bike.jpg',
  alt: 'Helicopter img',
});
productList.push({
  name: 'Rocket',
  price: 520,
  image: './assets/img/bike.jpg',
});

/* <div class="product-card">
        <img src="assets/img/bike.jpg" alt="" class="product-img"/>
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure><img src="./assets/icons/bt_add_to_cart.svg" alt=""/></figure>
        </div>
      </div> */
function renderProducts(productList) {
  const html = productList.map(product => {
    return `
      <div class="product-card">
        <img src="${product.image}" alt="${product.alt}" class="product-img"/>
        <div class="product-info">
          <div>
            <p>${"$" + product.price}</p>
            <p>${product.name}</p>
          </div>
          <figure><img src="./assets/icons/bt_add_to_cart.svg" alt=""/></figure>
        </div>
      </div>
    `
  })

  cardsContainer.innerHTML = html.join('')
}

renderProducts(productList)

function showingProducts(arr){
  for (product of arr) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
  
    const img = document.createElement('img')
    img.setAttribute('src', product.image)
    img.classList.add('product-img')
  
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
  
    const productDivAlone = document.createElement('div')
  
    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + product.price
  
    const productName = document.createElement('p')
    productName.innerText = product.name
  
    const productFigure = document.createElement('figure')
  
    const productFigureImg = document.createElement('img')
  
  
    productFigureImg.setAttribute('src', './assets/icons/bt_add_to_cart.svg')
  
    productDivAlone.append(productPrice, productName)
    productFigure.append(productFigureImg)
    productInfo.append(productDivAlone, productFigure)
    
    productCard.append(img, productInfo)
    
    cardsContainer.append(productCard)
  }
}

showingProducts(productList)

