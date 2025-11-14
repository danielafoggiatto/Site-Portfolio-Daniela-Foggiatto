// script.js

// Seletores
const themeBtn = document.getElementById("themeToggle");
const mobileBtn = document.getElementById("mobileBtn");
const navMenu = document.getElementById("navMenu");


// =====================================
// 🔥 1. CARREGAR TEMA SALVO (dark/light)
// =====================================
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
}


// =====================================
// 🌙 2. ALTERNAR TEMA E SALVAR NO STORAGE
// =====================================
if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");

        if (document.documentElement.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}


// =====================================
// 📱 3. MENU MOBILE ABRIR/FECHAR
// =====================================
if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}


// =====================================
// 📌 4. FECHAR MENU AO CLICAR EM UM LINK
// =====================================
if (navMenu) {
    const links = navMenu.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
        });
    });
}
