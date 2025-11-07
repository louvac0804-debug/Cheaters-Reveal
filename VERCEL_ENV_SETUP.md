# Configuration des Variables d'Environnement Vercel

## Variables à ajouter dans Vercel

Allez sur https://vercel.com/dashboard → Votre projet → Settings → Environment Variables

### Variable 1 : STRIPE_SECRET_KEY
- **Name:** `STRIPE_SECRET_KEY`
- **Value:** `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`
- **Environments:** ✅ Production, ✅ Preview, ✅ Development

### Variable 2 : NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- **Name:** `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- **Value:** `pk_live_51SLuCVDS4Cbtb14QJUqIMvvH82D5raMBzOpr3B87AMl6JwSUz54NTcxsuUfYvpnA5ptARiJatHWiQ5zoFuaFdI3W00ovPuYMPM`
- **Environments:** ✅ Production, ✅ Preview, ✅ Development

### Variable 3 : NEXT_PUBLIC_APP_URL
- **Name:** `NEXT_PUBLIC_APP_URL`
- **Value:** `https://cheatersreveal.vercel.app`
- **Environments:** ✅ Production, ✅ Preview, ✅ Development

## Instructions

1. Pour chaque variable, cliquez sur "Add New"
2. Entrez le nom exact (copier-coller)
3. Entrez la valeur (copier-coller)
4. Cochez les 3 environnements (Production, Preview, Development)
5. Cliquez sur "Save"
6. Répétez pour les 3 variables
7. Allez dans "Deployments" et redéployez le dernier déploiement

## Vérification

Après avoir ajouté les variables, redéployez votre projet. Le paiement devrait maintenant fonctionner.

