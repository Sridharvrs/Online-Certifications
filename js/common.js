// Mobile Menu

const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {

    menu.classList.toggle("show");

    const isOpen = menu.classList.contains("show");

    toggle.innerHTML = isOpen ? "✕" : "☰";

    // Prevent page scrolling
    document.body.classList.toggle("no-scroll", isOpen);

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




//============================================================




/* =========================
   CURSOR GLOW FOLLOW
========================= */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

/* BIG PARTICLES */
for(let i=0;i<25;i++){
    particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,

        size:Math.random()*35 + 20,   // 👈 BIG SIZE
        dx:(Math.random()-0.5)*0.4,
        dy:(Math.random()-0.5)*0.4,

        color:[
            "rgba(79,70,229,0.25)",
            "rgba(6,182,212,0.22)",
            "rgba(16,185,129,0.22)",
            "rgba(245,158,11,0.20)"
        ][Math.floor(Math.random()*4)]
    });
}

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let p of particles){

        /* soft glow */
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 40;
        ctx.shadowColor = p.color;

        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fill();

        /* movement */
        p.x += p.dx;
        p.y += p.dy;

        /* smooth bounce */
        if(p.x < -100 || p.x > canvas.width+100) p.dx *= -1;
        if(p.y < -100 || p.y > canvas.height+100) p.dy *= -1;
    }

    requestAnimationFrame(draw);
}

draw();

/* resize */
window.addEventListener("resize",()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


// ==============================================
/* ===========================================
        UNIVERSAL SCROLL REVEAL
=========================================== */

document.addEventListener("DOMContentLoaded",()=>{

const items=document.querySelectorAll(
".reveal-left,.reveal-right,.reveal-up,.reveal-pop"
);

items.forEach((el,index)=>{

if(el.classList.contains("reveal-pop")){
el.style.setProperty("--delay",index%6);
}

});

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

observer.unobserve(entry.target);

}

});

},{
threshold:.15
});

items.forEach(el=>observer.observe(el));

});