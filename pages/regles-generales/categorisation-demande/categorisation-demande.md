# 📕 Catégorisation de la demande

Ce document explique la catégorisation de la demande depuis les différentes provenances dans le produit.

## Depuis Menu Offreurs

| Depuis                                                                        | Type                      | Auto-catégorisation | Résultat                                                                                                                  |
| ----------------------------------------------------------------------------- | ------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Accueil du menu Offreurs                                                      | Sous-catégorie de service | ❌                  | La demande privée postée sera forcément catégorisée dans la sous-catégorie de service dans laquelle on a trouvé l’offreur |
| Détail d’une sous-catégorie du menu Offreur                                   | Sous-catégorie de service | ❌                  | La demande privée postée sera forcément catégorisée dans la sous-catégorie de service dans laquelle on a trouvé l’offreur |
| Moteur de recherche > Recherche d’un service                                  | Sous-catégorie de service | ❌                  | La demande privée postée sera forcément catégorisée dans la sous-catégorie de service dans laquelle on a trouvé l’offreur |
| Moteur de recherche > “Recherche d’un objet”                                  | Objet                     | ✅                  | La demande privée postée sera dans la sous-catégorie de service ou objet trouvée suite à auto-catégorisation par l’IA     |
| Moteur de recherche > Arborescence des catégories > Sous-catégorie de service | Sous-catégorie de service | ❌                  | La demande privée postée sera forcément catégorisée dans la sous-catégorie de service dans laquelle on a trouvé l’offreur |
| Moteur de recherche > Arborescence des catégories > Sous-catégorie d’objet    | Sous-catégorie d’objet    | ✅                  | La demande privée postée sera dans la sous-catégorie de service ou objet trouvée suite à auto-catégorisation par l’IA     |

> ℹ️ **Note** :  
> Dans le cadre des objets, nous n’utilisons **PAS l’auto-catégorisation**, car nous ne pouvons pas être sûrs, selon la provenance de l’utilisateur (Recherche directe ou utilisation de l’arborescence de sous-catégories d’objets), que nous aurons véritablement un ObjectId.

---

## Depuis Ailleurs

**Exemples :**

- Formulaire de demande publique
- CTA “Je veux la même chose”

On utilise **tout le temps l’auto-catégorisation**, et la demande est catégorisée dans la sous-catégorie de service ou dans l’objet trouvé par l’IA.
