/**
 * 
 */
const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  observer: true,
  observeParents: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 50,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },
});

// const loadFinalSwiperCards = () => {
//   const cardImages = JSON.parse(localStorage.getItem("final-card-images"));

//   console.log(cardImages);
//   finalSwiperCards.innerHTML = "";
// for (let i = 0; i < cardImages.length; ++i) {
//   finalSwiperCards.innerHTML += `<div class="swiper-slide" style="transform-style: flat;height: 100%;width: 45%;">
//     <div id=${
//       "swiper-img" + (i + 1).toString()
//     } class="swiper-slide-popup"
//         style="height: 100%;width: 100%; position: relative;background-size:100% 100%; display: flex; justify-content:center; align-items:center; background-size:cover; transform-style: flat;background-image: url(${
//           cardImages[i]
//         });">
//         </div>
//         </div>`;
// }
// };
// <img id=${
//   "watermarkswiper" + (i + 1).toString()
// } style="height: 6%;width: 30%;margin-top: 130%;margin-left: 75%;border: 1px solid transparent;border-radius: 20px;background-color: rgba(0,0,0,0.8);" src="./img/CelebrareLogo.png">


// <!-- Script written by aman -->

// this piece of code, disable all the posibilites to open inspect menu
// as this page consist confidential data !

/**
 * Prevents default behaviour
 * @param {event} e 
 */
document.oncontextmenu = (e) => { e.preventDefault(); }

document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        console.log(event)
        alert('yes')
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        e.preventDefault()
        // console.log(event)
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        e.preventDefault()
        // console.log(event)
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        e.preventDefault()
        // console.log(event)
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        e.preventDefault()
        // console.log(event)
         return false;
    }
}

// <!-- Script written by aman end-->
