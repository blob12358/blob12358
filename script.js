// script.js

document.getElementById('spin-button').addEventListener('click', function () {
    const wheel = document.getElementById('wheel');
    const resultDisplay = document.getElementById('result');

    // Choix aléatoire entre "Oui" et "Non"
    const isYes = Math.random() < 0.5;

    // Si c'est "Oui", on applique une rotation de 90 degrés, sinon 270 degrés
    const angle = isYes ? 90 : 270;

    // Appliquer l'angle de rotation
    wheel.style.transform = `rotate(${angle}deg)`;

    // Afficher le résultat
    resultDisplay.textContent = `Résultat : ${isYes ? 'Oui' : 'Non'}`;
});
