# 📕 Règles de wording générales dans le Produit

Ce document décrit les règles générales de wording pour l’affichage du nom d’utilisateur dans le produit.  
Les formats d’affichage varient en fonction du statut de l’utilisateur, avec des exemples pour chaque cas.

---

## Display_name

L’affichage du nom utilisateur prend les règles suivantes :

| Statut            | Format d’affichage                                                      | Exemple                     |
| ----------------- | ----------------------------------------------------------------------- | --------------------------- |
| PARTICULIER       | Prénom N.                                                               | Martin D.                   |
| A-E & INDÉPENDANT | Prénom N. (Nom_commercial, s’il existe)                                 | Martin D. (Plombier 44 SAS) |
| ENTREPRISE        | Nom_commercial                                                          | Plombier 44 SAS             |
| ASSOCIATION       | Prénom Aujourd’hui, le nom de l’association est contenu dans le prénom… | Croix Rouge 44              |

---

## Affichage des avis

De manière générale, pour l’affichage des avis :

| Éléments | Si 0 avis                                                                                                | Si ≥ 1 avis                                                                                                                                                             |
| -------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Icône    | Étoile grise                                                                                             | Étoile jaune                                                                                                                                                            |
| Texte    | “-”                                                                                                      | “X/5 Y avis”                                                                                                                                                            |
|          | On n’affiche jamais 0/5, ni le nombre d’avis entre parenthèses quand l’utilisateur n’a pas encore d’avis | - “x/5” représente la moyenne de la note avec une décimale (virgule).<br> - Si la moyenne est un nombre rond (exemple 4.5 → 4,5) <br> - “Y” représente le nombre d’avis |

---

## Affichage du poids d’un fichier

- **Si le fichier < 1 Mo** :

  - Nombre de Ko sous forme d’entier : `XXX Ko` où XXX représente le nombre de kilo-octets arrondis au supérieur

- **Si le fichier ≥ 1 Mo** :
  - Nombre de Mo sous forme de décimale à 1 virgule : `X.X Mo` où XX.Y représente le nombre de Méga-octets arrondis au supérieur

### Exemples

| Poids du fichier  | Affichage |
| ----------------- | --------- |
| 43 kilo-octets    | 43 Ko     |
| 43.7 kilo-octets  | 44 Ko     |
| 999 kilo-octets   | 999 Ko    |
| 999.8 kilo-octets | 1.0 Mo    |
| 1.34 méga-octets  | 1.4 Mo    |
| 2.00 méga-octets  | 2.0 Mo    |
