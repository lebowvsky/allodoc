# Récapitulatif Devis / Factures

L’affichage du récapitulatif d’un devis ou d’une facture est conditionné à :
- son assujettissement à la TVA (selon statut et CA déclaré)
- à l’acompte demandé
- aux acomptes déjà versés

---

## Assujetti à la TVA

### 1. Sans acompte demandé, sans acompte versé

| Détail       | Montant   |
|--------------|-----------|
| TOTAL HT     | 200,00 €  |
| TVA (20%)    | 40,00 €   |
| **Total TTC**| 240,00 €  |
| **NET À PAYER** | 240,00 € |

---

### 2. Avec acompte demandé, sans acompte versé

| Détail                   | Montant   |
|--------------------------|-----------|
| TOTAL HT                 | 200,00 €  |
| TVA (20%)                | 40,00 €   |
| **Total TTC**            | 240,00 €  |
| Dont acompte demandé     | 120,00 €  |
| **NET À PAYER**          | 240,00 €  |

---

### 3. Sans acompte demandé, avec acompte versé

| Détail           | Montant   |
|------------------|-----------|
| TOTAL HT         | 200,00 €  |
| TVA (20%)        | 40,00 €   |
| **Total TTC**    | 240,00 €  |
| Déjà réglé       | 90,00 €   |
| - 01-06-2025     | 55,00 €   |
| - 03-06-2025     | 35,00 €   |
| **NET À PAYER**  | 150,00 €  |

---

### 4. Avec acompte demandé, avec acompte versé

| Détail                   | Montant   |
|--------------------------|-----------|
| TOTAL HT                 | 200,00 €  |
| TVA (20%)                | 40,00 €   |
| **Total TTC**            | 240,00 €  |
| Dont acompte demandé     | 120,00 €  |
| Déjà réglé               | 90,00 €   |
| - 01-06-2025             | 55,00 €   |
| - 03-06-2025             | 35,00 €   |
| **NET À PAYER**          | 150,00 €  |

---

## Non assujetti à la TVA

### 1. Sans acompte demandé, sans acompte versé

| Détail       | Montant   |
|--------------|-----------|
| TOTAL HT     | 200,00 €  |
| TVA (0%)     | 0,00 €    |
| **Total TTC**| 200,00 €  |
| **NET À PAYER** | 200,00 € |

---

### 2. Avec acompte demandé, sans acompte versé

| Détail               | Montant   |
|----------------------|-----------|
| TOTAL HT             | 200,00 €  |
| TVA (0%)             | 0,00 €    |
| **Total TTC**        | 200,00 €  |
| Dont acompte demandé | 120,00 €  |
| **NET À PAYER**      | 200,00 €  |

---

### 3. Sans acompte demandé, avec acompte versé

| Détail           | Montant   |
|------------------|-----------|
| TOTAL HT         | 200,00 €  |
| TVA (0%)         | 0,00 €    |
| **Total TTC**    | 200,00 €  |
| Déjà réglé       | 90,00 €   |
| - 01-06-2025     | 55,00 €   |
| - 03-06-2025     | 35,00 €   |
| **NET À PAYER**  | 110,00 €  |

---

### 4. Avec acompte demandé, avec acompte versé

| Détail               | Montant   |
|----------------------|-----------|
| TOTAL HT             | 200,00 €  |
| TVA (0%)             | 0,00 €    |
| **Total TTC**        | 200,00 €  |
| Dont acompte demandé | 120,00 €  |
| Déjà réglé           | 90,00 €   |
| - 01-06-2025         | 55,00 €   |
| - 03-06-2025         | 35,00 €   |
| **NET À PAYER**      | 110,00 €  |

---

_Un scénario dans DataiCQ devrait suffire._

