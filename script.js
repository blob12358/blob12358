// script.js

document.getElementById('spin-button').addEventListener('click', function () {
    const wheel = document.getElementById('wheel');
    const resultDisplay = document.getElementById('result');

    // Génère un angle entre 0 et 360 degrés
    const angle = Math.floor(Math.random() * 360);

    // Applique la rotation sans accumulation
    wheel.style.transition = 'transform 3s ease-out';
    wheel.style.transform = `rotate(${angle}deg)`;

    // Calculer le résultat en fonction de l'angle
    setTimeout(() => {
        const result = (angle >= 0 && angle < 180) ? 'Oui' : 'Non';
        resultDisplay.textContent = `Résultat : ${result}`;
    }, 3000); // Durée de l'animation
});
