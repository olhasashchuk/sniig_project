// const productsDatabase = [
//    {
//      unicID: 'it0001',
//      name: 'Crystal Epilators',
//      price: 10,
//      rating: 3,
//      categories: ['Razor'],
//      discription: ['New painless epilators for hair removal, safe and easy cleaning, reusable hair removal tool'],
//      isOnSale: true,
//      img1: 'img/image1.png',
//      img2: 'img/image2.png',
//    },
//    {
//       unicID: 'it0002',
//       name: 'Colorlamb Razor',
//       price: 9,
//       rating: 2,
//       categories: ['Razor'],
//       discription: [''],
//       isOnSale: true,
//       img1: 'img/image3.png',
//       img2: 'img/image4.png',
//     },
//    {
//       unicID: 'it0003',
//       name: 'Bath Mousse',
//       price: 8,
//       rating: 4,
//       categories: ['Cosmetics for body'],
//       discription: [''],
//       isOnSale: true,
//       img1: 'img/image5.png',
//       img2: 'img/image6.png',
//    },
//    {
//       unicID: 'it0004',
//       name: 'Lucky Fine Dry Shampoo',
//       price: 5,
//       rating: 5,
//       categories: ['Cosmetics for hair'],
//       discription: [''],
//       isOnSale: true,
//       img1: 'img/image7.png',
//       img2: 'img/image8.png',
//    },
//    {
//       unicID: 'it0005',
//       name: 'Razor Sniig',
//       price: 15,
//       rating: 1,
//       categories: ['Razor'],
//       discription: [''],
//       isOnSale: true,
//       img1: 'img/image9.png',
//       img2: 'img/image10.png',
//    }
// ]

// document.querySelector('#product_container');




// const menu = document.getElementById('product_container')

// for (const currentProduct of productsDatabase) {
//    const product = document.createElement("div");
//    product.classList.add('item')
//    product.setAttribute('data-price', currentProduct.price, 'data-rating', currentProduct.rating)
   
//    const productImage = document.createElement("img");
//    productImage.classList.add('fotoItem');
//    productImage.src = currentProduct.img1;
   
//    const productName = document.createElement("h2")
//    productName.innerHTML = currentProduct.name;

//    const productCounter = document.createElement('div');
//    productCounter.classList.add('countItems', 'counter-wrapper');

//    const productCounterMinus = document.createElement('div');
//    productCounterMinus.classList.add('items-contol');
//    productCounterMinus.setAttribute('data-action', 'value: minus');
//    productCounterMinus.innerHTML = currentProduct.minus;
   
//    const productCounterCount = document.createElement('div');
//    productCounterCount.classList.add('items-current');
//    productCounterCount.setAttribute('data-count', currentProduct.count);
//    productCounterCount.innerHTML = currentProduct.count;

//    const productCounterPlus = document.createElement('div');
//    productCounterPlus.classList.add('items-contol');
//    productCounterPlus.setAttribute('data-action', 'value: plus');
//    productCounterPlus.innerHTML = currentProduct.plus;

   
//    const productCounterPrice = document.createElement("div")
//    productCounterPrice.innerHTML = currentProduct.price;

//    const productCart = document.createElement("button");
//    productCart.classList.add('addToCart');
//    productCart.setAttribute('data-cart', currentProduct.buttonCart);
//    productCart.innerHTML = currentProduct.buttonCart;
   
//    product.appendChild(productImage);
//    product.appendChild(productName);
//    product.appendChild(productCounter);
//    productCounter.appendChild(productCounterMinus);
//    productCounter.appendChild(productCounterCount);
//    productCounter.appendChild(productCounterPlus);
//    productCounter.appendChild(productCounterPrice);
//    product.appendChild(productCart);

  
//    menu.appendChild(product);

// }

// console.log (menu)


// let a = [50, 86, 5, 23, 2,];

// for (let  i = 0; i < a.length; i++) {
//    for (let j = i; j < a.length; j++) {
//       if (a[i] > a [j]) {
//          let temp = a [i];
//          a [i] = a [j];
//          a[j] = temp;
//       }
//    }
// }
// console.log (a);

document.querySelector('#sort-asc').onclick = mySort;
document.querySelector('#sort-desc').onclick = mySortDesc;
document.querySelector('#sort-rating').onclick = mySortRating;

function mySort(){
   let sortGoods = document.querySelector('.goods');
   for (let  i = 0; i < sortGoods.children.length; i++) {
      for (let j = i; j < sortGoods.children.length; j++) {
         if(+sortGoods.children[i].getAttribute('data-price') > +sortGoods.children[j].getAttribute('data-price')) {
            replacedNode = sortGoods.replaceChild(sortGoods.children[j], sortGoods.children[i]);
            insertAfter(replacedNode, sortGoods.children[i]);
         }
      }
   }
}


function mySortDesc(){
   let sortGoods = document.querySelector('.goods');
   for (let  i = 0; i < sortGoods.children.length; i++) {
      for (let j = i; j < sortGoods.children.length; j++) {
         if(+sortGoods.children[i].getAttribute('data-price') < +sortGoods.children[j].getAttribute('data-price')) {
            replacedNode = sortGoods.replaceChild(sortGoods.children[j], sortGoods.children[i]);
            insertAfter(replacedNode, sortGoods.children[i]);
         }
      }
   }
}

function mySortRating(){
   let sortGoods = document.querySelector('.goods');
   for (let  i = 0; i < sortGoods.children.length; i++) {
      for (let j = i; j < sortGoods.children.length; j++) {
         if(+sortGoods.children[i].getAttribute('data-rating') > +sortGoods.children[j].getAttribute('data-rating')) {
            replacedNode = sortGoods.replaceChild(sortGoods.children[j], sortGoods.children[i]);
            insertAfter(replacedNode, sortGoods.children[i]);
         }
      }
   }
}


function insertAfter(elem, refElem) {
   return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

// создание счетчика

window.addEventListener('click', function(event){

   let count;

   if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
      const counterWrapper = event.target.closest('.counter-wrapper');
      count = counterWrapper.querySelector ('[data-count]');
   }
 
  
   if (event.target.dataset.action === 'plus') {
      count.innerText = ++count.innerText;
   }

   if (event.target.dataset.action === 'minus') {
      if (parseInt(count.innerText) > 1){
         count.innerText = --count.innerText;
      }
   }

   if(event.target.hasAttribute('data-action') && event.target.closest('.popupCart-wrapper')){
      calcCartPrice();
   }

})