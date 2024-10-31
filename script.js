// script.js

document.getElementById('spin-button').addEventListener('click', function () {
    const wheel = document.getElementById('wheel');
    const resultDisplay = document.getElementById('result');

    // Déterminer aléatoirement le résultat
    const isYes = Math.random() < 0.5;
    const angle = isYes ? 90 : 270;

    // Appliquer l'angle pour afficher la section correspondante sous le pointeur
    wheel.style.transform = `rotate(${angle}deg)`;

    // Afficher le résultat
    resultDisplay.textContent = `Résultat : ${isYes ? 'Oui' : 'Non'}`;
});
