import { gsap } from "gsap";

// Fonction pour envelopper chaque lettre dans un span
function wrapLetters(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = text.split('').map(letter => `<span>${letter}</span>`).join('');
    });
}

// Appliquer la fonction aux textes
wrapLetters('.text-scroll');
wrapLetters('.text-wait');
wrapLetters('.text-game');

// Animer les lettres avec GSAP
gsap.fromTo(".text-wait span", { opacity: 0 }, { opacity: 1, duration: 0.05, stagger: 0.05 });
gsap.fromTo(".text-scroll span", { opacity: 0 }, { opacity: 1, duration: 0.05, stagger: 0.05, delay: 2 });
gsap.fromTo(".text-game span", { opacity: 0 }, { opacity: 1, duration: 0.05, stagger: 0.05, delay: 4 });