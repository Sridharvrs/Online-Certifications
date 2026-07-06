const items = document.querySelectorAll(".faq-item");

items.forEach(item => {

    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", () => {

        // close others
        items.forEach(i => {
            if(i !== item) i.classList.remove("active");
        });

        // toggle current
        item.classList.toggle("active");

    });

});