const menuEmail = document.querySelector('.navbar-email');
const burgerMenu = document.querySelector(".menu");
const carritoMenuIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetail = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
carritoMenuIcon.addEventListener("click", toggleShoppingCartContainer);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);


function toggleDesktopMenu(){
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");

    if(!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add("inactive");
    }

    closeProductDetailAside();

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");

    if(!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add("inactive");
    }

    closeProductDetailAside()

    mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCartContainer(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    } else if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }

    closeProductDetailAside();

    shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside(){
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetail.classList.remove("inactive");
}

function closeProductDetailAside(){
    productDetail.classList.add("inactive");
}

const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Screen",
    price: 320,
    image: "https://practicalwanderlust.com/wp-content/uploads/2017/09/Pinterst-Mockup-on-Large-Mac-Computer-Screen.jpg"
})
productList.push({
    name: "Laptop",
    price: 1020,
    image: "https://www.pinningpro.com/wp-content/uploads/2020/08/create-pinterest-pins-image.png"
})
productList.push({
    name: "Dumbell",
    price: 80,
    image: "https://i.pinimg.com/originals/88/a0/8d/88a08de72580a6c050e73c81c9f8a5d4.jpg"
})
productList.push({
    name: "Desk",
    price: 210,
    image: "https://images.squarespace-cdn.com/content/v1/5c71dfdf348cd9244803661e/1586378178419-FHUYR8D8P1DX6C0PU8YI/That+is+the+way+you+create+your+personal+finances+residence+workplace+Every+thing+about+yours.png?format=500w"
})
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Screen",
    price: 320,
    image: "https://practicalwanderlust.com/wp-content/uploads/2017/09/Pinterst-Mockup-on-Large-Mac-Computer-Screen.jpg"
})
productList.push({
    name: "Laptop",
    price: 1020,
    image: "https://www.pinningpro.com/wp-content/uploads/2020/08/create-pinterest-pins-image.png"
})
productList.push({
    name: "Dumbell",
    price: 80,
    image: "https://i.pinimg.com/originals/88/a0/8d/88a08de72580a6c050e73c81c9f8a5d4.jpg"
})
productList.push({
    name: "Desk",
    price: 210,
    image: "https://images.squarespace-cdn.com/content/v1/5c71dfdf348cd9244803661e/1586378178419-FHUYR8D8P1DX6C0PU8YI/That+is+the+way+you+create+your+personal+finances+residence+workplace+Every+thing+about+yours.png?format=500w"
})

function renderProducts(arr){
    for(product of productList){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement("figure");
    
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

