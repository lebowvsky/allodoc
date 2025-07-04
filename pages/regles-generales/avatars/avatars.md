# Affichage des avatars et **wording** "En ligne"

Ce document décrit les différents états de connexion d'un utilisateur sur AlloVoisins : En Ligne Maintenant (ELM), En Ligne Récemment (ELR) et Hors Ligne (HL). Il explique comment afficher les avatars et les pastilles correspondantes pour chaque état, ainsi que le wording associé.

---

## Définition des statuts

Nous distinguons techniquement les 3 concepts suivants pour un utilisateur :

- **En Ligne Maintenant (ELM)** : L'utilisateur est considéré comme "En ligne" si son dernier appel à une API AlloVoisins (Mercure ou remote) a eu lieu entre 0 et 4 minutes et 59 secondes.
- **En Ligne Récemment (ELR)** : L'utilisateur n'est plus réellement connecté comme "En ligne" mais est resté actif récemment. Il est dans cet état si son dernier appel à une API AlloVoisins (remote) remonte à entre 5 minutes (inclus) et 59 minutes et 59 secondes (inclus).
- **Hors Ligne (HL)** : L'utilisateur est considéré comme Hors Ligne car son dernier appel à une API AlloVoisins remonte à plus d'1h.

---

## Affichage Avatar + Pastille En Ligne

|                      | En Ligne Maintenant (ELM) | En Ligne Récemment (ELR)                                                                                                                                                          | Hors-Ligne (HL) |
| -------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| **Pastille**         | Oui - Ronde               | Oui - Ronde                                                                                                                                                                       | Non             |
| **Wording Pastille** | Aucune                    | "XX min", où XX représente le nombre de minutes depuis le dernier appel à une API AlloVoisins (remote). Si la dernière activité date de 59 min et 59 secondes, afficher "60 min". | Non             |
| **Badge Nouveau**    | Si nécessaire             | X                                                                                                                                                                                 | Si nécessaire   |

### Exemple d'avatars :

| ![ELM](./images/ELM.webp) | ![ELR](./images/ELR.webp) | ![HL](./images/HL.webp) |
| :-----------------------: | :-----------------------: | :---------------------: |
|            ELM            |            ELR            |           HL            |

---

## Affichage Wording En Ligne

|             | En Ligne Maintenant (ELM) | En Ligne Récemment (ELR)                                                                                                    | Hors-Ligne (HL)                                                            |
| ----------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Wording** | "En ligne"                | "En ligne il y a XX minutes", où XX représente le nombre de minutes depuis le dernier appel à une API AlloVoisins (remote). | "Affichage du wording HL", "Hors ligne", "Aucune info", etc.               |
| **Exemple** | - En ligne                | - En ligne il y a 5 min <br> - En ligne il y a 18 min <br> - En ligne il y a 59 min                                         | - Hors ligne <br> - Affichage du badge "Nouveau" <br> - Aucune information |

---
