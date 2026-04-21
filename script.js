const mainNav = document.querySelector('.main_nav');
const dropdown = document.querySelectorAll('.dropdown');
const header_btn = mainNav.querySelectorAll('.button');

header_btn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.forEach(down => {
            if (down.id === btn.value) {
                down.classList.toggle("show");
            };
            if (down.id != btn.value) {
                setTimeout(() => {
                    down.classList.remove("show");
                }, 300);
            };
        });
    });
});

dropdown.forEach(down => {
    down.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});

window.addEventListener("click", () => {
    dropdown.forEach(down => {
        down.classList.remove("show");
    });
});

const darkMode = document.querySelector(".dark_mode");
const root = document.querySelector(":root"); 

darkMode.addEventListener("click", () => {
    root.classList.toggle("dark_mode");
    darkMode.disabled = true;
    classic.disabled = false;
    darkMode.style.color = "grey";
    classic.style.color = "white";
});

const classic = document.querySelector(".classic");

classic.addEventListener("click", () => {
    root.classList.toggle("dark_mode");
    classic.disabled = true;
    darkMode.disabled = false;
    classic.style.color = "grey";
    darkMode.style.color = "white";
});