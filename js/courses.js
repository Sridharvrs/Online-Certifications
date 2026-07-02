const filters = document.querySelectorAll(".filter");
const courses = document.querySelectorAll(".course");

filters.forEach(button=>{

    button.addEventListener("click",()=>{

        filters.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        courses.forEach(course=>{

            if(filter==="all" || course.dataset.cat===filter){

                course.style.display="block";

                requestAnimationFrame(()=>{
                    course.style.opacity="1";
                    course.style.transform="translateY(0)";
                });

            }else{

                course.style.opacity="0";
                course.style.transform="translateY(25px)";

                setTimeout(()=>{
                    course.style.display="none";
                },250);

            }

        });

    });

});

/* Default Active */

document.querySelector('[data-filter="all"]').classList.add("active");

// ====================
// CATEGORY CLICK → fill search box
const input = document.querySelector(".search-box input");
const chips = document.querySelectorAll(".categories span");

chips.forEach(chip => {
    chip.addEventListener("click", () => {
        input.value = chip.textContent.replace("🔥 Trending: ","");
        input.focus();
    });
});

// SIMPLE SEARCH EFFECT
document.querySelector(".search-box button")
.addEventListener("click", () => {
    alert("Searching: " + input.value);
});

// ===================
const scrollContainer = document.querySelector(".path-scroll");

let scrollAmount = 0;

function autoScroll() {
    scrollAmount += 1;

    if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
    }

    scrollContainer.scrollLeft = scrollAmount;

    requestAnimationFrame(autoScroll);
}

autoScroll();

// =====================
const buttons = document.querySelectorAll(".outcome-filters button");
const cards = document.querySelectorAll(".outcome-card");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        // active state
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const role = btn.dataset.role;

        cards.forEach(card => {
            if(role === "all") {
                card.style.display = "block";
            } else {
                const roles = card.dataset.role;
                card.style.display = roles.includes(role) ? "block" : "none";
            }
        });

    });
});

// ======================== 
const projects = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

projects.forEach(p => {
    p.style.opacity = 0;
    p.style.transform = "translateY(40px)";
    p.style.transition = "0.6s ease";
    observer.observe(p);
});

// =================================
const track = document.querySelector(".compare-track");

let isDown = false;
let startX;
let scrollLeft;

track.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
});

track.addEventListener("mouseleave", () => isDown = false);
track.addEventListener("mouseup", () => isDown = false);

track.addEventListener("mousemove", (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
});

// ========================
// const instructors = document.querySelectorAll(".instructor");

// window.addEventListener("scroll", () => {
//     instructors.forEach((el, i) => {
//         const speed = 0.02 * (i % 3 + 1);
//         el.style.transform = `translateY(${window.scrollY * speed}px)`;
//     });
// });

// ============================
function runCode() {
    const code = document.getElementById("codeBox").value;
    const output = document.getElementById("outputBox");

    try {
        const logs = [];
        const originalLog = console.log;

        console.log = function(msg) {
            logs.push(msg);
        };

        eval(code);

        console.log = originalLog;

        output.innerText = logs.join("\n") || "Code executed successfully ✔";
    } catch (err) {
        output.innerText = "Error: " + err.message;
    }
}