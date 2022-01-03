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

const prevArrow = document.getElementsByClassName('prev');
const circleImgSlider = documennt.getElementsByClassName('circle-img-slider');

prevArrow.addEventListener('click', function () {
    circleImgSlider.style.overflowX = "30px";
})