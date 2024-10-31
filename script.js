// script.js
document.getElementById('spin-button').addEventListener('click', function () {
    const wheel = document.getElementById('wheel');
    const resultDisplay = document.getElementById('result');
    const randomRotation = Math.floor(5000 + Math.random() * 5000); // Rotation entre 5000 et 10000 degrés
    let currentRotation = randomRotation % 360;

    // Définir l'animation de rotation
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    // Calculer le résultat une fois la rotation terminée
    setTimeout(() => {
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${currentRotation}deg)`;

        // Afficher le résultat en fonction de l'angle final
        const result = (currentRotation >= 0 && currentRotation < 180) ? 'Oui' : 'Non';
        resultDisplay.textContent = `Résultat : ${result}`;
    }, 4000); // Durée correspondante à l'animation
});
