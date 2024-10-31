// script.js

document.getElementById('spin-button').addEventListener('click', function () {
    const wheel = document.getElementById('wheel');
    const resultDisplay = document.getElementById('result');

    // Génère une rotation aléatoire (grande pour une meilleure animation visuelle)
    const randomRotation = Math.floor(5000 + Math.random() * 5000);
    
    // Applique la rotation
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    // Écouteur d'événement pour détecter la fin de la transition
    wheel.addEventListener('transitionend', function onTransitionEnd() {
        // Calcul de l'angle final entre 0 et 360 degrés
        const computedStyle = window.getComputedStyle(wheel);
        const transformMatrix = computedStyle.transform;

        // Extraction de l'angle de rotation à partir de la matrice de transformation
        const values = transformMatrix.split('(')[1].split(')')[0].split(',');
        const a = values[0];
        const b = values[1];
        let angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

        // Correction pour que l'angle soit positif
        if (angle < 0) angle += 360;

        // Déterminer le résultat en fonction de l'angle final
        const result = (angle >= 0 && angle < 180) ? 'Oui' : 'Non';
        
        // Affiche le résultat
        resultDisplay.textContent = `Résultat : ${result}`;

        // Supprime l'écouteur après l'exécution pour éviter plusieurs déclenchements
        wheel.removeEventListener('transitionend', onTransitionEnd);
    });
});
