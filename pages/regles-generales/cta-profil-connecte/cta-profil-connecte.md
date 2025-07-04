# 📕 Affichage des CTAs du Profil connecté

Ce document décrit les règles d’affichage des CTAs (call-to-action) sur les profils connectés. Les CTAs diffèrent en fonction de la manière dont le profil est consulté, par exemple depuis une carte du menu Offreurs ou depuis une suggestion de favoris. Les CTAs incluent des options telles que "Partager", "Téléphoner", "Favori" et "Poster une demande".

---

## Sommaire

1. Règle 1 : Affichage des CTAs
   1. Je consulte le profil d'un Offreur depuis une carte du Menu Offreurs
   2. Je consulte le profil d'un Offreur (je suis certain qu'il s'agit d'un Offreur) depuis ailleurs dans le produit
   3. Je consulte un profil depuis ailleurs dans le produit, qui est un profil demandeur OU dont je ne suis pas sûr
   4. Je consulte MON profil, depuis le menu Mon Compte

---

## REGLE 1 : Affichage des CTAs

| ![Affichage CTA desktop](./images/affichage_cta_1.webp) | ![Affichage CTA mobile](./images/affichage_cta_mobile.webp) |
| :-----------------------------------------------------: | :---------------------------------------------------------: |

---

### 1 - Je consulte le profil d'un Offreur depuis une carte du Menu Offreurs

| Zone               | Liste CTA                                                | Apparence                                                                  |
| ------------------ | -------------------------------------------------------- | -------------------------------------------------------------------------- |
| Zone Bouton Haute  | - Téléphoner (si actif)                                  | - Couleur : selon statut du profil (neutral/violet) <br> - Type : Outlined |
| Zone TabBar/NavBar | - Partager <br> - Menu Kebab : Signaler un abus, Bloquer | X                                                                          |
| Zone Bouton Basse  | - Favori <br> - Ajouter                                  | - Couleur : neutral, tout le temps <br> - Type : Contained                 |

---

### 2 - Je consulte le profil d'un Offreur (je suis certain qu'il s'agit d'un Offreur) depuis ailleurs dans le produit

| Zone               | Liste CTA                                                | Apparence                                                                  |
| ------------------ | -------------------------------------------------------- | -------------------------------------------------------------------------- |
| Zone Bouton Haute  | - Partager <br> - Téléphoner (si actif)                  | - Couleur : selon statut du profil (neutral/violet) <br> - Type : Outlined |
| Zone TabBar/NavBar | - Partager <br> - Menu Kebab : Signaler un abus, Bloquer | X                                                                          |
| Zone Bouton Basse  | - Favori <br> - Poster une demande (manuelle)            | - Couleur : selon statut du profil <br> - Type : Contained                 |

---

### Règles des CTA sur le profil d'un Offreur :

| Menu Offreur | Cartes Offreurs : Favoris - Ajouter <br> Profil menu Offreur : Favoris - Ajouter <br> Favori menu Offreur : Favori - Poster une demande                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NewsFeed     | - Clic sur un profil Offreur (issus des réponses) : Favori - Poster une demande <br> - Suggestions de favoris : Poster une demande                                               |
| Messagerie   | - Clic sur profil depuis une conversation : Pas de CTA                                                                                                                           |
| Mails        | - Flux hebdo : <br> _ Clic sur "voir la demande" puis sur le profil du demandeur : Pas de CTA <br> _ Ajout en favori : Pas de CTA <br> \* Clic sur "voir le profil" : Pas de CTA |

---

### 3 - Je consulte un profil depuis ailleurs dans le produit, qui est un profil demandeur OU dont je ne suis pas sûr que c'est un Offreur

| Zone               | Liste CTA                                                                  | Apparence |
| ------------------ | -------------------------------------------------------------------------- | --------- |
| Zone Bouton Haute  | - Couleur : selon statut du profil (neutral/violet) <br> - Type : Outlined |
| Zone TabBar/NavBar | - Partager <br> - Menu Kebab : Signaler un abus, Bloquer                   | X         |
| Zone Bouton Basse  | (zone masquée)                                                             | X         |

---

### 4 - Je consulte MON profil, depuis le menu Mon Compte

| Zone               | Liste CTA                                  | Apparence                                  |
| ------------------ | ------------------------------------------ | ------------------------------------------ |
| Zone Bouton Haute  | Partager                                   | - Couleur : neutral <br> - Type : Outlined |
| Zone TabBar/NavBar | 1. Partager <br> 2. Compléter profil (app) | X                                          |
| Zone Bouton Basse  | Compléter mon profil                       | X                                          |
