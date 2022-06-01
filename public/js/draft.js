//Variable to store the local Storage variable
let drafts = JSON.parse(localStorage.draftImg);
let dataObj = JSON.parse(localStorage.cardDraft);
let dataCard = JSON.parse(localStorage.typeOfCards);

let root = document.querySelector("#root");
let value = ""

//buttons css part
let buttons = "<div style=\"display: flex; justify-content:center; margin-top: 20px; margin-bottom: 10px;\"><div style=\"max-width:50%;display: flex;justify-content: flex-end;\"><button id=\"downloadsw\" style=\"cursor: pointer;display:block;background-color: white;color: black; width: 150px; padding: 1%; margin: 2%; border-radius: 5px;\">Customize</button></div><div style=\"max-width:50%;display: flex;justify-content: start;\"><button id=\"rzp-button1\" style=\"z-index: 100 ;display:block;background-color: red;color: white; width: 150px; padding: 1%;margin: 2%;border: none;border-radius: 5px;\">Delete</button></div></div>" 

/**
 * Parses each draft in the html page
 */
drafts.forEach(draft => {
    value += "<div class=\"card\"><div class=\"swiper mySwiper\"><div class=\"swiper-wrapper\">";
    draft.forEach(e => {
        value += "<div class=\"swiper-slide\">";
        if(window.innerWidth <= 600){
            value += e.replaceAll("0.3", "0.24");
        }
        else {
            value += e.replaceAll("0.24", "0.3");
        }
        value += "</div>";
    })
    value +="</div><div class=\"swiper-button-next\"></div><div class=\"swiper-button-prev\"></div><div class=\"swiper-pagination\" style=\"color: red;\"></div></div>";
    value += buttons;
    value += "</div>"
    console.log(draft);
});

root.innerHTML = value;
//changePropertiesCustomize();

/**
 * Function to change styling based on window size
 */
function trackResize(){
    let divs = document.querySelectorAll(".card-images > div");
    if(window.innerWidth<600) {
        divs.forEach(div => div.style.transform = "scale(0.24, 0.24)")
    }
    else {
        divs.forEach(div => div.style.transform = "scale(0.3, 0.3)")
    }
}

/**
 * Tracks the resizing of window
 */
window.addEventListener("resize", trackResize, false)

/**
 * Send the card to customize screen on button pressed
 */
let btns = document.querySelectorAll('#downloadsw');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(event){
        localStorage.removeItem('final-card-images');
        localStorage.setItem("final-card-images", JSON.stringify(drafts[i]));
        localStorage.setItem("WeddingDataObjectForBackend", JSON.stringify(dataObj[i]));
        localStorage.setItem("card-type", JSON.stringify(dataCard[i]));
        window.location.href = `./customize.html?cardID=myDraft-${i+1}`;
    })   
}

/**
 * Delete the card based on the button pressed
 */
let delBtns = document.querySelectorAll('#rzp-button1');
for (let i = 0; i < delBtns.length; i++) {
    delBtns[i].addEventListener('click', function(event){
        img = [];
        obj = [];
        card = []
        for (let index = 0; index < delBtns.length; index++) {
            if(index != i) {
                img.push(drafts[index]);
                obj.push(dataObj[index]);
                card.push(dataCard[index]);
            }
        }
        localStorage.setItem("draftImg", JSON.stringify(obj));
        localStorage.setItem("cardDraft", JSON.stringify(img));
        localStorage.setItem("typeOfCards", JSON.stringify(card));
        window.location.href = `./draft.html`
    })   
}