#!/bin/bash
# Double-cliquez ce fichier pour lancer l'aperçu local du portail.
# Une fenêtre Terminal s'ouvre (laissez-la ouverte tant que vous travaillez),
# puis le navigateur ouvre http://localhost:4321 avec le site en direct.
# Pour arrêter : fermez la fenêtre Terminal (ou Ctrl+C dedans).

cd "$(dirname "$0")" || exit 1

echo "──────────────────────────────────────────"
echo "  Aperçu local — Bolt Kickstart Theme"
echo "──────────────────────────────────────────"

if ! command -v npm >/dev/null 2>&1; then
  echo ""
  echo "⚠️  Node.js n'est pas installé sur ce Mac."
  echo "    Installe-le une fois depuis https://nodejs.org (bouton LTS),"
  echo "    puis double-clique à nouveau ce fichier."
  echo ""
  read -r -p "Appuie sur Entrée pour fermer."
  exit 1
fi

if [ ! -d node_modules ]; then
  echo ""
  echo "Première fois : installation des dépendances (1 à 2 minutes)…"
  npm install || { echo "Échec de l'installation."; read -r -p "Entrée pour fermer."; exit 1; }
fi

# Ouvre le navigateur dès que le serveur répond
( for i in $(seq 1 30); do
    if curl -s http://localhost:4321 >/dev/null 2>&1; then open http://localhost:4321; break; fi
    sleep 1
  done ) &

echo ""
echo "Démarrage… le navigateur va s'ouvrir sur http://localhost:4321"
echo "Laisse cette fenêtre ouverte. Pour arrêter : ferme-la."
echo ""
npm run dev
