const items = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver((entries, obs) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const el = entry.target;

        el.classList.add("show");

        // stop observing after animation (important for performance)
        obs.unobserve(el);

    });

}, {
    threshold: 0.2,
    rootMargin: "0px 0px -80px 0px"
});

items.forEach(item => {
    observer.observe(item);
});

// ====================================

// ======================================

// =================================================
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-card h2");

    const countobserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate(entry.target);
                countobserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    counters.forEach(c => countobserver.observe(c));

    function animate(el) {
        const target = +el.dataset.target;
        let current = 0;
        const speed = 40;

        function update() {
            const increment = target / speed;

            if (current < target) {
                current += increment;
                el.innerText = Math.ceil(current).toLocaleString() + "+";
                requestAnimationFrame(update);
            } else {
                el.innerText = target.toLocaleString() + "+";
            }
        }

        update();
    }
});