// Sélection de la barre de progression
const progressBar = document.querySelector('.progress-bar');

// Fonction pour calculer et ajuster la largeur de la barre
const updateProgressBar = () => {
    const scrollTop = window.scrollY; // Distance scrollée depuis le haut
    const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Hauteur totale scrollable
    const scrollPercentage = (scrollTop / docHeight) * 100; // Pourcentage scrollé
    const rotateDegree = (scrollTop / docHeight) * 180; // Angle de rotation
    console.log(rotateDegree);

    // Mettre à jour la largeur de la barre
    progressBar.style.width = `${scrollPercentage}%`;
};

// Écoute de l'événement de scroll
window.addEventListener('scroll', updateProgressBar);