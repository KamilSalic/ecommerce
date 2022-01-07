const menuOpen = document.getElementById("menu");
const hamburger = document.getElementById("burger");
const menuClose = document.getElementById("close");

function openMenu() {
    menuOpen.classList.add("menuopacity");
}
function closeMenu() {
    menuOpen.classList.remove("menuopacity");
}

hamburger.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);


const prevArrow = document.getElementById('prev-chevron-circle-slider');
const nextArrow = document.getElementById('next-chevron-circle-slider');
const sliderInner = document.getElementById('circle-slider-inner');

const specialOfferInner = document.getElementById('special-offer-inner');
const prevArrowSpecial = document.getElementById('prev-chevron-special-offer');
const nextArrowSpecial = document.getElementById('next-chevron-special-offer');

const newArrivalsInner = document.getElementById('new-arrivals-inner');
const prevArrowArrivals = document.getElementById('prev-chevron-new-arrivals');
const nextArrowArrivals = document.getElementById('next-chevron-new-arrivals');

function moveRight() {
    sliderInner.classList.remove("transLeft");
    sliderInner.classList.add("transRight");
    prevArrow.style.display = "flex";
    nextArrow.style.display = "none";
}
function moveLeft() {
    sliderInner.classList.remove("transRight");
    sliderInner.classList.add("transLeft");
    prevArrow.style.display = "none";
    nextArrow.style.display = "flex";
}

function moveRightSpecial() {
    specialOfferInner.classList.remove("transLeft");
    specialOfferInner.classList.add("transRight");
    specialOfferInner.style.transform = "translate3d(-50%, 0, 0)";
    prevArrowSpecial.style.display = "flex";
    nextArrowSpecial.style.display = "none";

}
function moveLeftSpecial() {
    specialOfferInner.classList.remove("transRight");
    specialOfferInner.style.transform = "translate3d(0px, 0, 0)";
    specialOfferInner.classList.add("transLeft");
    prevArrowSpecial.style.display = "none";
    nextArrowSpecial.style.display = "flex";
}

function moveRightArrivals() {
    newArrivalsInner.classList.remove("transLeft");
    newArrivalsInner.classList.add("transRight");
    newArrivalsInner.style.transform = "translate3d(-50%, 0, 0)";
    prevArrowArrivals.style.display = "flex";
    nextArrowArrivals.style.display = "none";
}
function moveLeftArrivals() {
    newArrivalsInner.classList.remove("transRight");
    newArrivalsInner.style.transform = "translate3d(0px, 0, 0)";
    newArrivalsInner.classList.add("transLeft");
    prevArrowArrivals.style.display = "none";
    nextArrowArrivals.style.display = "flex";
}
nextArrow.addEventListener('click', moveRight);
prevArrow.addEventListener('click', moveLeft);

nextArrowSpecial.addEventListener('click', moveRightSpecial);
prevArrowSpecial.addEventListener('click', moveLeftSpecial);

nextArrowArrivals.addEventListener('click', moveRightArrivals);
prevArrowArrivals.addEventListener('click', moveLeftArrivals);