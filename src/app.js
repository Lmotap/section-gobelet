import { gsap } from "gsap";

// Fonction pour envelopper chaque lettre dans un span et les animer en domino
function wrapLetters(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = text.split('').map(letter => `<span>${letter}</span>`).join('');
    });
}

wrapLetters('.text-scroll');
wrapLetters('.text-wait');
wrapLetters('.text-game');

gsap.fromTo(".text-wait span", { opacity: 0 }, { opacity: 1, duration: 0.07, stagger: 0.05 });
gsap.fromTo(".text-scroll span", { opacity: 0 }, { opacity: 1, duration: 0.07, stagger: 0.05, delay: 2 });
gsap.fromTo(".text-game span", { opacity: 0 }, { opacity: 1, duration: 0.07, stagger: 0.05, delay: 4 });

// Fonction pour faire vibrer les gobelets
function shakeGobelet(gobelet) {
    return gsap.to(gobelet, {
        x: '+=10',
        yoyo: true,
        repeat: -1,
        duration: 0.4,
        ease: 'power1.inOut'
    });
}

document.querySelectorAll('.circle-yes, .circle-no').forEach(el => el.style.display = 'none');

const gobelets = document.querySelectorAll('.gobelet, .second-gobelet');

// Je stocke les animations dans un array pour pouvoir les arrêter plus tard
const animations = [];

// Animation de vibration
gobelets.forEach(gobelet => {
    const animation = shakeGobelet(gobelet);
    animations.push(animation);

    // Permet d'arrêter toutes les animations en cliquant sur un gobelet et d'afficher les choix
    gobelet.addEventListener('click', () => {
        animations.forEach(anim => anim.pause());
        gsap.to(gobelet, { y: -12, duration: 0.5, ease: 'power1.inOut', onComplete: () => {
            document.querySelectorAll('.circle-yes, .circle-no').forEach(el => el.style.display = 'flex');
        }});
    });
});

// Fonction pour afficher les éléments cachés et rendre l'aperçu moins brusque et moche
window.addEventListener('load', () => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => {
        el.classList.remove('hidden');
        el.style.transition = 'opacity 1s'; 
        el.style.opacity = 1;
    });
});