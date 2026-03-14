export const presentations = [
  {
    id: 1,
    title: "Le Statut de l'Auteur en Droit Tunisien",
    summary: "Analyse du cadre juridique tunisien du droit d'auteur : droits moraux et patrimoniaux, exceptions legales et place de l'auteur sur le marche. Comparaison avec le systeme americain du copyright, illustree par un cas concret traite par l'OTDAV.",
    keywords: ["Droit d'auteur", "Droits moraux", "OTDAV", "Loi n94-36", "Convention de Berne"],
    axis: "droit",
    axisLabel: "Droit & PI",
    semester: "S1",
    pdf: "/presentations/statut-auteur.pdf"
  },
  {
    id: 2,
    title: "Les Logiciels Libres & Droit de la PI",
    summary: "Croisement entre le mouvement open source (FSF, OSI, GNU/GPL) et le cadre juridique tunisien. Demontre que le logiciel libre s'appuie sur le droit d'auteur pour garantir les libertes d'usage, de modification et de redistribution.",
    keywords: ["Open Source", "FSF", "GNU/GPL", "Licences libres", "Droit tunisien"],
    axis: "droit",
    axisLabel: "Droit & PI",
    semester: "S1",
    pdf: "/presentations/logiciels-libres.pdf"
  },
  {
    id: 3,
    title: "Panorama Mondial de la Protection des Donnees Personnelles",
    summary: "Analyse comparative des grands cadres reglementaires mondiaux : RGPD europeen, CCPA californien, LGPD bresilienne, PIPL chinoise et Loi tunisienne 2004-63. Explore les tendances actuelles face a la montee de l'IA et de la cybersecurite.",
    keywords: ["RGPD", "CCPA", "Donnees personnelles", "INPDCP", "Loi 2004-63"],
    axis: "droit",
    axisLabel: "Droit & PI",
    semester: "S2",
    pdf: "/presentations/protection-donnees.pdf"
  },
  {
    id: 4,
    title: "Diagnostic Stratégique de la Proprieté Intellectuelle",
    summary: "Evaluation et optimisation de la strategie PI d'une organisation via des outils classiques du management strategique : SWOT, PESTEL et benchmarking concurrentiel pour transformer le portefeuille PI en levier de competitivite durable.",
    keywords: ["SWOT", "PESTEL", "Benchmarking", "Actifs immmatériels", "Stratégie PI"],
    axis: "management",
    axisLabel: "Management & Qualité",
    semester: "S1",
    pdf: "/presentations/diagnostic-pi.pdf"
  },
  {
    id: 5,
    title: "Piloter la Qualité vers l'Excellence Operationnelle",
    summary: "Etude des deux piliers ISO 9000 appliqués chez MPC PROKIM (industrie chimique). Mobilise des outils concrets : PDCA, Kaizen, Six Sigma, AMDEC et diagramme de Pareto pour analyser et resoudre les non-conformites des resines alkydes en production.",
    keywords: ["ISO 9000", "AMDEC", "PDCA", "Kaizen", "MPC PROKIM"],
    axis: "management",
    axisLabel: "Management & Qualité",
    semester: "S1",
    pdf: "/presentations/management-qualite.pdf"
  },
  {
    id: 6,
    title: "Modeliser la STEG de Demain",
    summary: "Analyse du modele d'affaires de la STEG via un Business Model Canvas enrichi, croise avec les 17 ODD et les enjeux de la transformation digitale. Identifie les leviers strategiques : compteurs intelligents, energies renouvelables et plateformisation.",
    keywords: ["BMC", "ODD", "Transformation digitale", "Transition energetique", "RSE"],
    axis: "management",
    axisLabel: "Management & Qualité",
    semester: "S1",
    pdf: "/presentations/steg.pdf"
  },
  {
    id: 7,
    title: "Dashboard d'Analyse des Brevets Mondiaux",
    summary: "Application full stack de veille strategique sur 100 000 brevets mondiaux issus de The Lens. Pipeline rigoureux de nettoyage et normalisation des donnees avant d'exposer des analyses predictives via une architecture React / Node.js / MongoDB.",
    keywords: ["MongoDB", "React", "Data Cleaning", "Patent Intelligence", "API The Lens"],
    axis: "tech",
    axisLabel: "Tech & Innovation",
    semester: "S2",
    pdf: "/presentations/brevets.pdf",
    link: "https://patent-intelligence.vercel.app/"
  }
]

export const axes = [
  { id: 'all', label: 'Tout voir' },
  { id: 'droit', label: 'Droit & PI' },
  { id: 'management', label: 'Management & Qualité' },
  { id: 'tech', label: 'Tech & Innovation' },
]