// Mobile Menu

const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {

    menu.classList.toggle("show");

    toggle.innerHTML = menu.classList.contains("show")
        ? "✕"
        : "☰";

});

// Close when clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("show");

        toggle.innerHTML = "☰";

    });

});

// Active Page

const page = document.body.dataset.page;

document.querySelectorAll("[data-nav]").forEach(link => {

    if(link.dataset.nav === page){

        link.classList.add("active");

    }

});

// Navbar Shadow

const nav = document.querySelector(".nav-wrap");

window.addEventListener("scroll",()=>{

    if(window.scrollY>40){

        nav.classList.add("scrolled");

    }else{

        nav.classList.remove("scrolled");

    }

});

// Close menu when clicking outside

document.addEventListener("click",(e)=>{

    if(
        !menu.contains(e.target) &&
        !toggle.contains(e.target)
    ){

        menu.classList.remove("show");

        toggle.innerHTML="☰";

    }

});