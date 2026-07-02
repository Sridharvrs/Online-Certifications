const leftTrack = document.querySelector(".left-track");
const rightTrack = document.querySelector(".right-track");

let leftPos = 0;
let rightPos = 0;

function animateCompanies(){

    leftPos -= 0.6;
    rightPos += 0.6;

    const leftWidth = leftTrack.scrollWidth / 2;
    const rightWidth = rightTrack.scrollWidth / 2;

    if(Math.abs(leftPos) >= leftWidth){
        leftPos = 0;
    }

    if(Math.abs(rightPos) >= rightWidth){
        rightPos = 0;
    }

    leftTrack.style.transform =
        `translateX(${leftPos}px)`;

    rightTrack.style.transform =
        `translateX(${-rightPos}px)`;

    requestAnimationFrame(animateCompanies);

}

animateCompanies();

// =====================
const journeyCards = document.querySelectorAll(".journey-card,.story-block");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

journeyCards.forEach(card => {
    card.classList.add("hidden");
    observer.observe(card);
});


// 
// const blocks = document.querySelectorAll(".story-block");

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             entry.target.classList.add("show");
//         }
//     });
// }, { threshold: 0.2 });

// blocks.forEach(b => {
//     b.classList.add("hidden");
//     observer.observe(b);
// });