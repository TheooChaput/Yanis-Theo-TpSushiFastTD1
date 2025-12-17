# 🍣 SushiFast — Application Web React

## 1. Présentation du projet
Le projet **SushiFast** est une application web développée avec la bibliothèque **React**. Elle a été réalisée dans un cadre universitaire et a pour objectif de présenter les menus d’un restaurant fictif spécialisé dans la cuisine japonaise.

L’application permet de consulter les menus proposés, d’accéder à leurs détails (ingrédients, saveurs, prix) et de naviguer entre différentes pages thématiques. Les données sont centralisées dans un fichier **JSON**, garantissant une séparation claire entre la logique applicative et les données.

---

## 2. Objectifs pédagogiques
Ce projet vise à mettre en pratique les notions suivantes :
- Création d’une application React moderne
- Découpage de l’interface en composants réutilisables
- Mise en place du routage avec React Router
- Gestion et affichage de données à partir d’un fichier JSON
- Structuration claire et maintenable d’un projet front-end
- Utilisation d’un framework CSS pour la mise en forme

---

## 3. Technologies utilisées
- **React** (avec Vite)
- **React Router DOM**
- **Bootstrap 5**
- **JavaScript (ES6+)**
- **HTML5 / CSS3**


---

## 4. Structure du projet
```
src/
 ├── components/
 │     ├── Header.jsx
 │     ├── Footer.jsx
 │     ├── MenuCard.jsx
 │
 ├── pages/
 │     ├── Home.jsx
 │     ├── prix_pieces_inferieur13.jsx
 │     ├── MenusPrix.jsx
 │     ├── MenuDetail.jsx
 │     ├── MenusSaveurs.jsx
 │     ├── Avocat.jsx
 │     ├── california.jsx
 │     ├── PrixMoins13.jsx
 │     ├── saveurs.jsx
 │     ├── prix.jsx
 │     ├── avocatcoriandre.jsx
 │
 ├── data/
 │     ├── boxes.json
 │     └── saveursData.js
 │
 ├── App.jsx
 └── main.jsx
```

Cette organisation permet une séparation claire entre les composants, les pages, les données et les fichiers principaux de l’application.

---

## 5. Fonctionnalités développées

### 5.1 Navigation générale
- Présence d’un **Header** commun à toutes les pages
- Menu de navigation permettant l’accès aux différentes sections
- Routage géré par **React Router DOM**
- Présence d’un **Footer** contenant les informations générales et les liens principaux

---

### 5.2 Affichage des menus
- Affichage de l’ensemble des menus sous forme de cartes
- Informations disponibles pour chaque menu :
  - Nom
  - Image
  - Nombre de pièces
  - Prix
- Accès à une page de détails dédiée pour chaque menu

---

### 5.3 Détails d’un menu
- Page dédiée au menu sélectionné
- Affichage des informations suivantes :
  - Image
  - Prix
  - Nombre de pièces
  - Liste des ingrédients
  - Saveurs associées
- Bouton de navigation permettant de revenir à la page précédente

---

### 5.4 Gestion des saveurs
- Page présentant l’ensemble des saveurs disponibles
- Tableau récapitulatif contenant :
  - Nom de la saveur
  - Image
  - Origine
  - Menus associés (liens cliquables)

---

### 5.5 Pages thématiques
- **Avocat / Coriandre** : menus contenant ces saveurs
- **Sans California Saumon Avocat** : sélection de menus spécifiques
- **Cher & Pas Cher** : affichage du menu le moins cher et du plus cher
- **Accueil** : page d’introduction présentant les principales sections de l’application

---

### 5.6 Recherche et filtres
- Recherche par nom de menu
- Filtres permettant de trier les menus selon :
  - Le prix
  - Les saveurs
  - Les ingrédients
  - Le nombre de pièces

---

## 6. Contraintes techniques respectées
- Utilisation des données issues du fichier `boxes.json`
- Présence obligatoire d’un Header et d’un Footer
- Mise en place du routage avec React Router
- Utilisation d’un framework CSS (Bootstrap)
- Architecture modulaire en composants React
- Code structuré, lisible et commenté
- Présence d’un fichier README explicatif

---

## 7. Conclusion
Ce projet a permis de consolider les compétences en développement front-end avec React, notamment en ce qui concerne la gestion du routage, l’exploitation de données externes et la structuration d’une application web moderne. Il répond aux objectifs pédagogiques définis dans le cadre de ce travail universitaire.

