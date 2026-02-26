// script.js

// Seletores
const themeBtn = document.getElementById("themeToggle");
const mobileBtn = document.getElementById("mobileBtn");
const navMenu = document.getElementById("navMenu");


// =====================================
// 🔥 1. CARREGAR TEMA SALVO (dark/light)
// =====================================
const savedTheme = localStorage.getItem("theme");

// Se já existe tema salvo → usa ele
if (savedTheme) {
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
} 
// Se NÃO existe nada salvo → começa no dark
else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
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


function copyToClipboard(id, btn) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
        btn.classList.add('copied');
        setTimeout(() => btn.classList.remove('copied'), 1500);
    });
}


const demoBtns = document.querySelectorAll('.demo-btn');
const modal = document.getElementById('codeModal');
const modalCode = document.getElementById('modalCode');
const closeBtn = modal.querySelector('.close');

// Abre o modal e insere o snippet
demoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modalCode.textContent = btn.dataset.snippet;
        modal.style.display = 'block';
    });
});

// Fecha o modal clicando no "x"
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fecha o modal clicando fora do conteúdo
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

