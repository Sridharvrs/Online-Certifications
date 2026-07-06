// =====================
// COURSE FILTER (MAIN)
// =====================
const filters = document.querySelectorAll(".filter");
const courses = document.querySelectorAll("#course-list .course");

filters.forEach(btn => {
  btn.addEventListener("click", () => {

    filters.forEach(b => b.classList.remove("btn-primary"));
    btn.classList.add("btn-primary");

    const filter = btn.dataset.filter;

    courses.forEach(course => {
      const match = filter === "all" || course.dataset.cat === filter;
      course.classList.toggle("hidden", !match);
    });

  });
});

// default active
document.querySelector('[data-filter="all"]')?.classList.add("btn-primary");


// =====================
// SEARCH → CATEGORY FILL
// =====================
const input = document.querySelector(".search-box input");
const chips = document.querySelectorAll(".categories span");

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    input.value = chip.textContent.replace("🔥 Trending: ", "");
    input.focus();
  });
});

document.querySelector(".search-box button")?.addEventListener("click", () => {
  alert("Searching: " + input.value);
});


// =====================
// AUTO SCROLL (SMOOTH)
// =====================
const scrollContainer = document.querySelector(".path-scroll");

if (scrollContainer) {
  let scrollAmount = 0;

  function autoScroll() {
    scrollAmount += 0.25; // smooth + light

    if (scrollAmount >= scrollContainer.scrollWidth / 2) {
      scrollAmount = 0;
    }

    scrollContainer.scrollLeft = scrollAmount;

    requestAnimationFrame(autoScroll);
  }

  autoScroll();
}


// =====================
// CAREER OUTCOME FILTER
// =====================
const outcomeBtns = document.querySelectorAll(".outcome-filters-light button");
const outcomeCards = document.querySelectorAll(".outcome-card-light");

outcomeBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    outcomeBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const role = btn.dataset.role;

    outcomeCards.forEach(card => {
      const roles = card.dataset.role || "";

      const show = role === "all" || roles.includes(role);
      card.classList.toggle("hidden", !show);
    });

  });
});


// =====================
// PROJECT SCROLL ANIMATION
// =====================
const projects = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

projects.forEach(p => {
  p.classList.add("preload");
  observer.observe(p);
});


// =====================
// DRAG SCROLL (COMPARE)
// =====================
const track = document.querySelector(".compare-track");

if (track) {
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
    if (!isDown) return;

    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2;

    track.scrollLeft = scrollLeft - walk;
  });
}


// =====================
// LIVE CODE RUNNER
// =====================
function runCode() {
  const code = document.getElementById("codeBox")?.value;
  const output = document.getElementById("outputBox");

  if (!code || !output) return;

  try {
    const logs = [];
    const originalLog = console.log;

    console.log = (msg) => logs.push(msg);

    eval(code);

    console.log = originalLog;

    output.innerText = logs.join("\n") || "Code executed successfully ✔";

  } catch (err) {
    output.innerText = "Error: " + err.message;
  }
}

window.runCode = runCode;

// ==================================
document.querySelectorAll('.filter').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('.filter').forEach(x => { x.classList.remove('btn-primary'); });
        b.classList.add('btn-primary');
        const f = b.dataset.filter;
        document.querySelectorAll('#course-list .course').forEach(c => {
          c.style.display = (f === 'all' || c.dataset.cat === f) ? '' : 'none';
        });
      });
    });

    // =======================
    
        fetch("auth/auth.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("auth-container").innerHTML = html;
  });
    