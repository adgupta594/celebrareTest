let drafts = JSON.parse(localStorage.draftImg);

let root = document.querySelector("#root");
let value = ""

let buttons = "<div style=\"display: flex; justify-content:center; margin-top: 20px; margin-bottom: 10px;\"><div style=\"max-width:50%;display: flex;justify-content: flex-end;\"><button id=\"downloadsw\" style=\"cursor: pointer;display:block;background-color: white;color: black; width: 150px; padding: 1%; margin: 2%; border-radius: 5px;\">Customize</button></div><div style=\"max-width:50%;display: flex;justify-content: start;\"><button id=\"rzp-button1\" style=\"z-index: 100 ;display:block;background-color: red;color: white; width: 150px; padding: 1%;margin: 2%;border: none;border-radius: 5px;\">Download</button></div></div>" 

drafts.forEach(draft => {
    value += "<div class=\"card\"><div class=\"swiper mySwiper\"><div class=\"swiper-wrapper\">";
    draft.forEach(e => {
        value += "<div class=\"swiper-slide\">";
        value += e;
        value += "</div>";
    })
    value +="</div><div class=\"swiper-button-next\"></div><div class=\"swiper-button-prev\"></div><div class=\"swiper-pagination\" style=\"color: red;\"></div></div>";
    value += buttons;
    value += "</div>"
    console.log(draft);
});

root.innerHTML = value;