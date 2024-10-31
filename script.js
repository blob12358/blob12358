// script.js

document.getElementById('spin-button').addEventListener('click', function () {
    const wheel = document.getElementById('wheel');
    const resultDisplay = document.getElementById('result');

    // Détermine aléatoirement si le résultat sera "Oui" ou "Non"
    const result = Math.random() < 0.5 ? 'Oui' : 'Non';

    // Choisit l'angle de rotation final en fonction du résultat
    const finalRotation = result === 'Oui' ? 1440 + 90 : 1440 + 270;

    // Applique la rotation avec transition
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${finalRotation}deg)`;

    // Affiche le résultat après l'animation
    setTimeout(() => {
        resultDisplay.textContent = `Résultat : ${result}`;
    }, 4000); // Durée correspondant à l'animation
});
