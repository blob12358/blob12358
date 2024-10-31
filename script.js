// script.js

// Initialise l'angle de rotation cumulé
let cumulativeRotation = 0;

// Écouteur d'événement pour le bouton "Tourner la roue"
document.getElementById('spin-button').addEventListener('click', function () {
    const wheel = document.getElementById('wheel');
    const resultDisplay = document.getElementById('result');
    
    // Génère une rotation aléatoire (entre 5000 et 10000 degrés)
    const randomRotation = Math.floor(5000 + Math.random() * 5000);
    cumulativeRotation += randomRotation; // On ajoute à l'angle cumulé

    // Applique l'angle de rotation cumulé à la roue
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${cumulativeRotation}deg)`;

    // Calcule et affiche le résultat une fois l'animation terminée
    setTimeout(() => {
        const normalizedRotation = cumulativeRotation % 360; // Réduit entre 0 et 360 degrés
        const result = (normalizedRotation >= 0 && normalizedRotation < 180) ? 'Oui' : 'Non';

        // Met à jour le texte du résultat
        resultDisplay.textContent = `Résultat : ${result}`;
    }, 4000); // Attend la fin de l'animation (4s)
});
