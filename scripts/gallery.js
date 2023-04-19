const slides = document.querySelectorAll(".slide");
const caption = document.querySelector(".caption");

const back = document.querySelector("#back").addEventListener("click", skiftSlide);
const next = document.querySelector("#next").addEventListener("click", skiftSlide);


let current = 0;

captionText = slides[current].getAttribute("alt");
caption.textContent = captionText;


function skiftSlide() {
    slides[current].classList.remove("slide--active");

if (this.getAttribute("id") === "next") {
    current++;
    if (current > slides.length - 1) {
        current = 0;
    }
    slides[current].classList.add("slide--active");
}
else{

    current--;
    if (current < 0) {
        current = slides.length - 1;
    }
    slides[current].classList.add("slide--active");
}


captionText = slides[current].getAttribute("alt");
caption.textContent = captionText;
console.log(current);
}
