const langToggle = document.getElementById("toggle-language");
const darkModeToggle = document.getElementById("toggle-dark-mode");
const body = document.body;
const container = document.querySelector(".container");

let isEnglish = true;
let isDarkMode = false;

langToggle.addEventListener("click", () => {
    isEnglish = !isEnglish;
    document.getElementById("about-title").textContent = isEnglish ? "About Me" : "Обо мне";
    document.getElementById("about-text").textContent = isEnglish
        ? "A hardworking student with a passion for business and global studies who was immorally forced to make this website."
        : "Трудолюбивый студент, увлекающийся бизнесом и глобальными исследованиями, которого аморально заставили сделать этот сайт.";
    document.getElementById("projects-title").textContent = isEnglish ? "Projects" : "Проекты";
    document.getElementById("contacts-title").textContent = isEnglish ? "Contacts" : "Контакты";
});

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    container.classList.toggle("dark-mode");
});
