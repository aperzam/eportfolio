// Dictionnaire de traduction (à compléter avec tes textes)
const translations = {
    fr: {
        "nav_home": "Accueil",
        "nav_academics": "Parcours académique",
        "nav_mobility": "Projet de mobilité",
        "nav_engagements": "Engagements",
        "nav_projects": "Projets",
        "btn_see_projects": "Voir mes projets",
        "hero_bio": "Étudiant en école d'ingénieurs (Toulouse INP - ENSEEIHT) en filière Sciences du Numérique, j'aimerais me spécialiser en cybersécurité. Bienvenue sur mon e-Portfolio qui regroupe mon parcours académique, mon projet de mobilité, mes engagements et mes réalisations.",
        "acad_title": "Parcours académique",
        "acad_1_title": "Diplôme d'Ingénieur — Toulouse INP - ENSEEIHT",
        "acad_1_sub": "Filière Sciences du Numérique (Toulouse, France)",
        "acad_1_desc": "Formation d'ingénieur en informatique, développement logiciel, systèmes embarqués, réseaux et mathématiques appliquées.",
        "acad_2_title": "CPGE — Lycée Faidherbe (Lille, France)",
        "acad_2_sub": "Filière MP2I / MPI",
        "acad_2_desc": "Deux années de formation intensive en informatique, mathématiques et physique en vue des concours d'entrée aux grandes écoles d'ingénieurs.",
        "acad_3_title": "Baccalauréat Général",
        "acad_3_sub": "Spécialité Mathématiques et Physique Chimie — Mention Très Bien",
        "mob_title": "Projet de mobilité",
        "mob_intro": "Dans le cadre de ma scolarité d'ingénieur, je souhaite effectuer un semestre d'échange académique ou un stage à l'étranger afin de perfectionner mon anglais, découvrir de nouvelles méthodes de travail et m'ouvrir à une autre culture.",
        "mob_1_tag": "Destination prévue",
        "mob_1_country": "Canada (Montréal)",
        "mob_1_desc": "Semestre d'études ou double diplôme (Polytechnique Montréal) pour leur excellence en informatique. De plus le Canada offre un environnement bilingue ce qui permettrait de renforcer mes compétences lunguistiques en anglais.",
        "eng_title": "Engagements",
        "eng_1_title": "Engagement écologique",
        "eng_1_desc": "Participation à des initiatives écologiques et durables pour réduire l'empreinte carbone et promouvoir la sensibilisation environnementale.",
        "civic_title": "Engagements écologiques",
        "civic_intro": "Le métier d'ingénieur implique une responsabilité sociale et environnementale. Voici les actions concrètes auxquelles je prends part :",
        "civic_eco_title": "Sensibilisation écologique & Numérique Responsable",
        "civic_eco_desc": "Participation à la Fresque du Climat et réflexion sur l'impact environnemental du numérique (sobriété logicielle, allongement de la durée de vie du matériel informatique).",
        "hob_title": "Sports et Loisirs",
        "hob_1_title": "Sports en compétition",
        "hob_1_desc": "Catamaran (SL 16) niveau national jusqu'en 2023 puis encadrement de groupes de jeunes.",
        "hob_2_title": "Musique & Culture",
        "hob_2_desc": "Pratique du Ukulele et DJ.",
        "hob_3_title": "Projets personnels et loisirs",
        "hob_3_desc": "Course à pieds, CTF informatique et bricolage d'objets informatique en tout genre.",
        "proj_back": "Retour aux projets",
        "proj_page_title": "Mes Projets",
        "proj_page_sub": "Sélection de projets académiques et personnels réalisés durant mes études d'ingénieur et en CPGE.",
        "proj_1_type": "Projet TIPE",
        "proj_1_title": "Implémentation de la méthode Rho de Pollard",
        "proj_1_desc": "Implémentation de l'algorithme Rho de Pollard pour résoudre le problème du logarithme discret et comparaison avec d'autres méthodes.",
        "proj_2_type": "Création de e-Portoflio",
        "proj_2_title": "Création de ce e-Portfolio",
        "proj_2_desc": "Design et mise en ligne de ce e-Portfolio pour présenter mon parcours académique, mes projets et mes engagements."
    },
    en: {
        "nav_home": "Home",
        "nav_academics": "Academic Background",
        "nav_mobility": "Mobility Project",
        "nav_engagements": "Engagements",
        "nav_projects": "Projects",
        "hero_bio": "Engineering student (Toulouse INP - ENSEEIHT) in the Computer Sciences program, I would like to specialize in cybersecurity. Welcome to my e-Portfolio which showcases my academic background, mobility project, engagements, and achievements.",
        "btn_see_projects": "See My Projects",
        "acad_title": "Academic Background",
        "acad_1_title": "Engineering Degree — Toulouse INP - ENSEEIHT",
        "acad_1_sub": "Computer Sciences Program (Toulouse, France)",
        "acad_1_desc": "Engineering education in computer science, software development, embedded systems, networks, and applied mathematics.",
        "acad_2_title": "CPGE — Lycée Faidherbe (Lille, France)",
        "acad_2_sub": "MP2I / MPI Track",
        "acad_2_desc": "Two years of intensive training in computer science, mathematics, and physics in preparation for entrance exams to top engineering schools.",
        "acad_3_title": "General Baccalaureate",
        "acad_3_sub": "Mathematics and Physics-Chemistry Specialization — Excellent Grade",
        "mob_title": "Mobility Project",
        "mob_intro": "As part of my engineering studies, I would like to complete an academic exchange semester or an internship abroad to improve my English, discover new work methods, and open myself to another culture.",
        "mob_1_tag": "Planned Destination",
        "mob_1_country": "Canada (Montreal)",
        "mob_1_desc": "Study semester or double degree (Polytechnique Montréal) for their excellence in computer science. Additionally, Canada offers a bilingual environment which would help strengthen my English language skills.",
        "civic_title": "Engagements",
        "civic_intro": "The engineering profession implies a social and environmental responsibility. Here are the concrete actions I participate in:",
        "civic_eco_title": "Ecological Awareness & Responsible Computing",
        "civic_eco_desc": "Participation in the Climate Fresk and reflection on the environmental impact of computing (software sobriety, extending the lifespan of IT equipment).",
        "hob_title": "Hobbies",
        "hob_1_title": "Competitive sports",
        "hob_1_desc": "Catamaran (SL 16) national level until 2023 then supervising groups of young people.",
        "hob_2_title": "Music & Culture",
        "hob_2_desc": "Playing the Ukulele and DJing.",
        "hob_3_title": "Personal projects and hobbies",
        "hob_3_desc": "Running, computer CTFs, and tinkering with various IT objects.",
        "proj_back": "Back to the home page",
        "proj_page_title": "My Projects",
        "proj_page_sub": "Selection of academic and personal projects completed during my engineering studies and in CPGE.",
        "proj_1_type": "TIPE Project",
        "proj_1_title": "Implementation of Pollard's Rho Method",
        "proj_1_desc": "Implementation of Pollard's Rho algorithm to solve the discrete logarithm problem and comparison with other methods.",
        "proj_2_type": "Creation of e-Portfolio",
        "proj_2_title": "Creation of this e-Portfolio",
        "proj_2_desc": "Design and launch of this e-Portfolio to showcase my academic background, projects, and engagements."
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