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


const prevArrow = document.getElementById('prev-chevron');
const nextArrow = document.getElementById('next-chevron');
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
}
function moveLeft() {
    sliderInner.classList.remove("transRight");
    sliderInner.classList.add("transLeft");
}

function moveRightSpecial() {
    specialOfferInner.classList.remove("transLeft");
    specialOfferInner.classList.add("transRight");
    specialOfferInner.style.transform = "translate3d(-50%, 0, 0)";
}
function moveLeftSpecial() {
    specialOfferInner.classList.remove("transRight");
    specialOfferInner.style.transform = "translate3d(0px, 0, 0)";
    specialOfferInner.classList.add("transLeft");
}

function moveRightArrivals() {
    newArrivalsInner.classList.remove("transLeft");
    newArrivalsInner.classList.add("transRight");
    newArrivalsInner.style.transform = "translate3d(-50%, 0, 0)";
    // if (newArrivalsInner.classList.contains('transRight')) {
    //     newArrivalsInner.style.overflow = "hidden";
    // }

}
function moveLeftArrivals() {
    newArrivalsInner.classList.remove("transRight");
    newArrivalsInner.style.transform = "translate3d(0px, 0, 0)";
    newArrivalsInner.classList.add("transLeft");
}
nextArrow.addEventListener('click', moveRight);
prevArrow.addEventListener('click', moveLeft);

nextArrowSpecial.addEventListener('click', moveRightSpecial);
prevArrowSpecial.addEventListener('click', moveLeftSpecial);

nextArrowArrivals.addEventListener('click', moveRightArrivals);
prevArrowArrivals.addEventListener('click', moveLeftArrivals);