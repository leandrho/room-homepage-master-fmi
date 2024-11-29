import {data} from './data.js'

const prev = document.querySelector("#prev-btn");
const next = document.querySelector("#next-btn");
const heroPicDesk = document.querySelector("#hero_pic_desk");
const heroPicMob = document.querySelector("#hero_pic_mob");
const heroTitle = document.querySelector(".hero__title");
const heroDescription = document.querySelector(".hero__paragraph");

let current = 0;
next.addEventListener("click",()=>{
    current = ((current+1) % 3);
    const idx = current;
    heroPicDesk.setAttribute('srcset',data[idx].picture.desktop);
    heroPicMob.setAttribute('srcset',data[idx].picture.mobile);
    heroTitle.innerText = data[idx].title;
    heroDescription.innerText = data[idx].description;
});
prev.addEventListener("click",()=>{
    let idx = (current - 1 + 3) % 3; 
    current=idx;
    heroPicDesk.setAttribute('srcset',data[idx].picture.desktop);
    heroPicMob.setAttribute('srcset',data[idx].picture.mobile);
    heroTitle.innerText = data[idx].title;
    heroDescription.innerText = data[idx].description;
});