let currentIndex = 0;

export function initCarousel(){

const track = document.querySelector(".carousel-track");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const cards = document.querySelectorAll(".product-card");

const cardWidth = cards[0].offsetWidth + 30;

next.addEventListener("click", () => {

 currentIndex++;

 track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

});

prev.addEventListener("click", () => {

 if(currentIndex > 0){
 currentIndex--;
 }

 track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

});

}