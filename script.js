// script.js

document.getElementById('spin-button').addEventListener('click', function () {
    const wheel = document.getElementById('wheel');
    const resultDisplay = document.getElementById('result');

    // On génère une rotation aléatoire (entre 0 et 360 degrés) pour que le point d'arrêt soit prédictible
    let baseRotation = Math.floor(Math.random() * 360);
    const fullRotations = 1440; // 4 tours complets pour l'animation

    // Déterminer le résultat en fonction de l'angle cible
    const result = (baseRotation < 180) ? 'Oui' : 'Non';

    // Ajout de l'angle de base à la rotation complète
    const finalRotation = fullRotations + baseRotation;

    // Applique la rotation avec transition
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${finalRotation}deg)`;

    // Afficher le résultat après l'animation
    setTimeout(() => {
        resultDisplay.textContent = `Résultat : ${result}`;
    }, 4000); // Durée correspondant à l'animation
});
