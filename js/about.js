const timelineItems = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:.25
});

timelineItems.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(80px)";
    item.style.transition=".8s ease";

    observer.observe(item);

});

// ====================================
const floats = document.querySelectorAll(".floating");

window.addEventListener("mousemove",(e)=>{

    const x = (e.clientX/window.innerWidth - 0.5)*15;
    const y = (e.clientY/window.innerHeight - 0.5)*15;

    floats.forEach((box,index)=>{

        const speed=(index+1)*0.2;

        box.style.transform=
        `translate(${x*speed}px,${y*speed}px)`;

    });

});

// ======================================
const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

    const scroll = window.pageYOffset;

    heroImage.style.transform = `scale(${1 + scroll * 0.00012})`;

});