// script.js

document.getElementById('spin-button').addEventListener('click', function () {
    const wheel = document.getElementById('wheel');
    const resultDisplay = document.getElementById('result');
    
    // On génère une rotation aléatoire (entre 5000 et 10000 degrés)
    const randomRotation = Math.floor(5000 + Math.random() * 5000);

    // Applique la rotation
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    // Calculer le résultat en fonction de la rotation finale
    setTimeout(() => {
        // Réduire l'angle entre 0 et 360 degrés pour déterminer le résultat
        const normalizedRotation = randomRotation % 360;

        // "Oui" si l'angle est entre 0 et 180, sinon "Non"
        const result = (normalizedRotation >= 0 && normalizedRotation < 180) ? 'Oui' : 'Non';

        // Affiche le résultat
        resultDisplay.textContent = `Résultat : ${result}`;
    }, 4000); // Durée correspondant à l'animation
});

