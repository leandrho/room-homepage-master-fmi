import {data} from './data.js'

const prevs = document.querySelectorAll(".prev-btn");
const nexts = document.querySelectorAll(".next-btn");
const heroImg = document.querySelector(".hero__img");
const heroPicDesk = document.querySelector("#hero_pic_desk");
const heroPicMob = document.querySelector("#hero_pic_mob");
const heroTitle = document.querySelector(".hero__title");
const heroDescription = document.querySelector(".hero__paragraph");
const heroBtn = document.querySelector(".hero__btn");


const animate = () => {
    heroTitle.classList.add('fadeText');
    heroDescription.classList.add('fadeText');
    heroImg.classList.add('fade');
    heroBtn.classList.add('fadeText');
    setTimeout(() => {
        heroTitle.classList.remove('fadeText');
        heroDescription.classList.remove('fadeText');
        heroImg.classList.remove('fade');
        heroBtn.classList.remove('fadeText');
    }, 1000);
}

let current = 0;
nexts.forEach( next => {
    next.addEventListener("click",()=>{
        current = ((current+1) % 3);
        const idx = current;
        heroPicDesk.setAttribute('srcset',data[idx].picture.desktop);
        heroPicMob.setAttribute('srcset',data[idx].picture.mobile);
        heroTitle.innerText = data[idx].title;
        heroDescription.innerText = data[idx].description;
        animate();
    });
});
prevs.forEach( prev => {
    prev.addEventListener("click",()=>{
        let idx = (current - 1 + 3) % 3; 
        current=idx;
        heroPicDesk.setAttribute('srcset',data[idx].picture.desktop);
        heroPicMob.setAttribute('srcset',data[idx].picture.mobile);
        heroTitle.innerText = data[idx].title;
        heroDescription.innerText = data[idx].description;
        animate();
    });
});

