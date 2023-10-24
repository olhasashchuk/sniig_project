function calcCartPrice(){
   const cartItems = document.querySelectorAll('.popup_textCart');
   const totalPriceEl = document.querySelector('.total-price')

   let totalPrice = 0;
   
   cartItems.forEach(function (item){
      const amountEl = item.querySelector('[data-count]');
      const priceEl = item.querySelector('.price');
      const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
      totalPrice += currentPrice;
   })

   console.log(totalPrice)

   totalPriceEl.innerText = totalPrice;
}