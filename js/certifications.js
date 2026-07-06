const counters = document.querySelectorAll("[data-target]");

const observer = new IntersectionObserver((entries, obs) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        animate(entry.target);

        obs.unobserve(entry.target);

    });

}, {
    threshold: 0.4
});

counters.forEach(c => observer.observe(c));

function animate(el) {

    const target = parseFloat(el.dataset.target);
    let current = 0;

    const duration = 1200;
    const stepTime = 16;
    const increment = target / (duration / stepTime);

    const isPercent = el.innerText.includes("%") || el.dataset.type === "percent";

    function update() {

        current += increment;

        if (current < target) {
            el.innerText = Math.floor(current) + (isPercent ? "%" : "+");
            requestAnimationFrame(update);
        } else {
            el.innerText = Math.floor(target) + (isPercent ? "%" : "+");
        }
    }

    update();
}