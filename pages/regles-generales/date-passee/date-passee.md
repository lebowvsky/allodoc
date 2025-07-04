# 📕 Affichage dans le produit, d’une date passée

Ce document fournit une règle fonctionnelle pour l’affichage d’une date passée dans le produit.  
Selon la date, différentes notations doivent être utilisées, telles que l’affichage de l’heure pour le jour même, “hier” pour la veille, le nom complet du jour pour les 6 derniers jours, et l’affichage du jour, mois et année pour les dates supérieures à J+7.

---

## Sommaire

- Règle fonctionnelle

---

## Règle fonctionnelle

Dans le cas où l’on doit afficher une date passée, utiliser la notation suivante :

- **Le jour même** : `"à HH:mm"`
- **La veille** : `"hier"`
- **Entre J-6 (inclus) et J-2 (inclus)** : `"eeee"` (affichage du nom du jour en entier)
- **J-7 et supérieur** :
  - le `"dd MMM"` (jour + mois _abrégé_)
  - le `"dd MMM YYYY"` (jour + mois _abrégé_ + année complète)

---

### Exemples avec la notion de “demande postée” :

| Date                         | Wording affiché                     |
| ---------------------------- | ----------------------------------- |
| Le jour même                 | demande postée **à 10:56**          |
| Hier                         | demande postée **hier**             |
| Entre J-6 et J-2             | demande postée **samedi**           |
| Supérieur à J-7 sans l’année | demande postée **le 26 janv.**      |
| Supérieur à J-7 avec l’année | demande postée **le 26 janv. 2023** |
