// Dictionnaire de traduction (à compléter avec tes textes)
const translations = {
    fr: {
        "nav_home": "Accueil",
        // ... ajoute toutes les autres clés de traduction ici
    },
    en: {
        "nav_home": "Home",
        // ... ajoute toutes les autres clés de traduction ici
    }
};

// Récupérer la langue sauvegardée ou mettre 'fr' par défaut
let currentLang = localStorage.getItem('portfolioLang') || 'fr';

function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    localStorage.setItem('portfolioLang', currentLang); // Sauvegarde la langue
    applyTranslations();
}

function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
    // Met à jour le texte du bouton de langue
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
}

// Appliquer la traduction au chargement de chaque page
document.addEventListener('DOMContentLoaded', applyTranslations);