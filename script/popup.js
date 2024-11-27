const popup = document.getElementById('popup');

// Fonction pour afficher la popup
const showPopup = () => {
    popup.classList.remove('opacity-0');
    popup.classList.add('opacity-100');
};

// Fonction pour masquer la popup
const hidePopup = () => {
    popup.classList.remove('opacity-100');
    popup.classList.add('opacity-0');
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 500);
};

// Vérifie si l'utilisateur a déjà visité la page
const hasVisited = localStorage.getItem('hasVisited');

if (!hasVisited) {
    // Si première visite, affiche la popup
    popup.classList.remove('hidden');
    showPopup(); // Déclenche l'apparition

    // Ajoute un indicateur dans localStorage
    localStorage.setItem('hasVisited', 'true');

    // Masque la popup après 5 secondes
    setTimeout(hidePopup, 5000);
}