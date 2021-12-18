const menuOpen= document.getElementById("mmenu");
const hamburger= document.getElementById("burger");
const menuClose= document.getElementById("closse");

function openMenu(){
    menuOpen.classList.add("menuopacity");
}
function closeMenu(){
    menuOpen.classList.remove("menuopacity");
}

hamburger.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);