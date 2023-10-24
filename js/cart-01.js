// const popupLinks = document.querySelectorAll('.popup-link');
// const body = document.querySelector ('body');
// const lockPadding = document.querySelectorAll(".lock-padding");

// let unlock = true;

// if (popupLinks.length > 0) {
//    for (let index = 0; index < popupLinks.length; index++) {
//       const popupLink = popupLinks[index];
//       popupLink.addEventListener("click", function (event) {
//          const popupName = popupLink.getAttribute('href').replace('#', '');
//          const curentPopup = document.getElementById(popupName);
//          popupOpen(curentPopup);
//          event.preventDefault();
//       });
//    }
// }

// const popupCloseIcon = document.querySelectorAll ('.close-popup');
// if (popupCloseIcon.length > 0) {
//    for (let index = 0; index < popupCloseIcon.length; index++) {
//       const el = popupCloseIcon[index];
//       el.addEventListener('click', function(event) {
//          popupClose(el.closest('.popup'));
//          event.preventDefault();
//       });
//    }
// }

// function popupOpen(curentPopup) {
//    if (curentPopup && unlock) {
//       const popupActive = document.querySelector('.popup.open');
//       if (popupActive) {
//          popupClose(popupActive, false);
//       } else {
//          bodyLock();
//       }
//       curentPopup.classList.add('open');
//       curentPopup.addEventListener("click", function(event){
//          if (!event.target.closest('.popup_content')) {
//             popupClose(event.target.closest('.popup'));
//          }
//       });
//    }
// }  

// // function popupClose(popupActive, doUnlock = true) {
// //    if(unlock) {
// //       popupActive.classList.remove('open');
// //       if(doUnlock) {

// //       }
// //    }
// // }

const popupCartWrapper = document.querySelector('.popupCart-wrapper');

window.addEventListener('click', function (event){
   if(event.target.hasAttribute('data-cart')){
      const item = event.target.closest('.item');

      const productInfo = {
         id: item.dataset.id,
         imgSrc: item.querySelector ('.fotoItem').getAttribute('src'),
         title: item.querySelector('.itemTitle').innerText,
         price: item.querySelector('.price').innerText,
         counter: item.querySelector('[data-count]').innerText,
      }; 
      
      const cartItemHTML =  `<div class="popup_textCart" data-id="${productInfo.id}">
                                 <img class="fotoItem" src="${productInfo.imgSrc}">
                                 <h2 class="itemTitle">${productInfo.title}</h2>
                                 <div class="countItems counter-wrapper">
                                    <div class="items-control" data-action="minus">-</div>
                                    <div class="items-current" data-count="">${productInfo.counter}</div>
                                    <div class="items-control" data-action="plus">+</div>
                                    <div class="price">${productInfo.price}</div>
                                    </div>
                              </div>`;

      popupCartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
   }
})


window.addEventListener('click', function (event) {
   if(event.target.hasAttribute('data-delete')) {
      popupCartWrapper.remove()
   }
})

