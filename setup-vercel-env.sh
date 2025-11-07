#!/bin/bash

# Script pour configurer les variables d'environnement Vercel
# Note: Vous devrez vous connecter à Vercel d'abord avec: vercel login

echo "Configuration des variables d'environnement Vercel..."

# Variables d'environnement
vercel env add STRIPE_SECRET_KEY production <<< "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"
vercel env add STRIPE_SECRET_KEY preview <<< "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"
vercel env add STRIPE_SECRET_KEY development <<< "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"

vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY production <<< "pk_live_51SLuCVDS4Cbtb14QJUqIMvvH82D5raMBzOpr3B87AMl6JwSUz54NTcxsuUfYvpnA5ptARiJatHWiQ5zoFuaFdI3W00ovPuYMPM"
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY preview <<< "pk_live_51SLuCVDS4Cbtb14QJUqIMvvH82D5raMBzOpr3B87AMl6JwSUz54NTcxsuUfYvpnA5ptARiJatHWiQ5zoFuaFdI3W00ovPuYMPM"
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY development <<< "pk_live_51SLuCVDS4Cbtb14QJUqIMvvH82D5raMBzOpr3B87AMl6JwSUz54NTcxsuUfYvpnA5ptARiJatHWiQ5zoFuaFdI3W00ovPuYMPM"

echo "✅ Variables d'environnement configurées !"
