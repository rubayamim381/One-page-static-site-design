// sticky content after scrolling to top
const nav = document.querySelector('.hero-navbar');
// const txt_clr_cng = document.querySelectorAll('.container-fluid .text-white-50');
// console.log(txt_clr_cng);

window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 100) {
        nav.classList.add('fixed-top', 'bg-white');
    } else {
        nav.classList.remove('fixed-top', 'bg-white');
    }
}

// change icon, background color
const notCollapsed = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');

notCollapsed.addEventListener("click", () => {

    if (notCollapsed.attributes['class'].nodeValue.search("collapsed") == -1) {
        notCollapsed.childNodes[1].childNodes[0].classList.replace('fa-bars', 'fa-xmark');
        navbar.classList.replace('bg-transparent', 'bg-white');
    }
    else {
        notCollapsed.childNodes[1].childNodes[0].classList.replace('fa-xmark', 'fa-bars');
        navbar.classList.replace('bg-white', 'bg-transparent');
    }
});

// media query support 
function mediaQuery(x) {
    const heroCont = document.querySelector('.hero-container');
    const footerCont = document.querySelector('.footer-bg');

    if (x.matches) {
        heroCont.children[1].classList.replace('w-75', 'w-100');
        heroCont.children[2].classList.replace('w-75', 'w-100');
        footerCont.children[0].classList.replace('w-75', 'w-100');
    } else {
        heroCont.children[1].classList.replace('w-100', 'w-75');
        heroCont.children[2].classList.replace('w-100', 'w-75');
        footerCont.children[0].classList.replace('w-100', 'w-75');
    }
}

var x = window.matchMedia("(max-width: 768px)")

mediaQuery(x);

x.addEventListener("change", function () {
    mediaQuery(x);
});