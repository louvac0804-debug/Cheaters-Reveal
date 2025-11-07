# Site de Vérification de Fidélité

Un site web simple pour vérifier la fidélité d'un partenaire via les réseaux sociaux.

## Installation

1. Installez les dépendances :
```bash
npm install
```

2. Configurez vos clés Stripe dans `.env.local` :
   - Copiez le fichier `env.example` vers `.env.local`
   - Remplissez vos clés Stripe (mode test ou production)
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure du flux

1. **Page d'accueil** (`/`) - Introduction avec le message "Tu veux savoir si ton copain / copine te trompe ?"
2. **Entrée du nom d'utilisateur** (`/enter-username`) - Sélection du réseau social (Instagram/Snapchat) et saisie du nom d'utilisateur
3. **Paiement initial** (`/payment`) - Paiement de 5€ via Stripe avec le message "Vous êtes seulement à 5€ de connaître la vérité !" (Apple Pay supporté)
4. **Résultat** (`/result`) - Affichage du résultat avec deux options : Oui (compte Tinder détecté) ou Non (fidèle)
5. **Succès** (`/success`) - Message de félicitations si le partenaire est fidèle avec "Garde le/la, il/elle est fidèle !"
6. **Paiement des détails** (`/details-payment`) - Paiement de 9,89€ pour voir les détails du profil de rencontre
7. **Détails du profil** (`/details`) - Affichage du lien direct vers le profil de rencontre détecté

## Configuration Stripe

Pour obtenir vos clés Stripe :

1. Créez un compte sur [Stripe](https://stripe.com)
2. Accédez au tableau de bord
3. Allez dans "Developers" > "API keys"
4. Copiez votre "Publishable key" (commence par `pk_test_` ou `pk_live_`)
5. Copiez votre "Secret key" (commence par `sk_test_` ou `sk_live_`)

**Note** : Utilisez les clés de test (`pk_test_` et `sk_test_`) pour le développement. Les paiements de test peuvent être effectués avec la carte de test : `4242 4242 4242 4242`

## Notes importantes

- Ce site nécessite des clés Stripe valides pour fonctionner
- Les paiements utilisent Stripe en mode test par défaut
- Les résultats sont simulés pour des fins de démonstration
- Apple Pay sera disponible automatiquement si configuré dans votre compte Stripe et si l'utilisateur utilise un navigateur compatible (Safari sur iOS/Mac)

