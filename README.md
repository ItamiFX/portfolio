# Portfolio — React (Vite) migration

This repository was migrated to a React app (Vite) while keeping a backup of the original static site in `legacy/`.

Quick start (Windows PowerShell):

1. Install Node.js (includes `npm`)

- Download and run the LTS installer from https://nodejs.org and follow the installer.
- Or use `nvm-windows` (recommended if you want multiple Node versions): https://github.com/coreybutler/nvm-windows

2. Verify installation (open a new PowerShell after installing):
```powershell
node -v
npm -v
```

3. Install dependencies and start the dev server:
```powershell
npm install
npm run dev
```

Why you saw "`npm` n'est pas reconnu" and how to fix it
- The error means Windows cannot find the `npm` command. That happens when Node.js is not installed or the Node installation directory is not in your `PATH` environment variable.
- Fixes:
  - Install Node.js using the official installer (it will add `node` and `npm` to your PATH).
  - If you installed Node but still see the error, close and re-open the terminal (PowerShell) or restart your PC so the PATH updates take effect.
  - If you used a package manager (Chocolatey / Scoop / nvm), ensure that the chosen tool added Node to PATH or use the tool-specific commands to enable it.

If you prefer I can:
- Add placeholder project detail pages or a small React Router setup.
- Add additional animations (parallax, particles, interactive cursor).
- Commit everything and create a small build script.

Files moved to `legacy/`:
- `legacy/css/styles.css` (backup of original stylesheet)
- `legacy/js/main.js` (backup of original JS)
- `legacy/index.original.html` (light backup of original index)

If anything looks off or you want a different animation direction, tell me which style you prefer (neon, glitch, particle field, interactive cursor, 3D parallax) and I’ll implement it next.
# Portfolio - Site Web Personnel

Un portfolio moderne et responsive créé avec HTML, CSS et JavaScript.

## 🚀 Structure du projet

```
portfolio/
│
├── index.html          # Page principale
├── css/
│   └── styles.css     # Feuille de style
├── js/
│   └── main.js        # Scripts JavaScript
├── images/            # Dossier pour les images
├── .gitignore         # Fichiers à ignorer
└── README.md          # Documentation
```

## 📋 Sections

Le portfolio comprend les sections suivantes :

- **Accueil** : Section hero avec présentation
- **À propos** : Présentation personnelle
- **Compétences** : Liste des compétences techniques
- **Projets** : Galerie de projets réalisés
- **Contact** : Formulaire de contact

## 🎨 Caractéristiques

- ✅ Design moderne et épuré
- ✅ Entièrement responsive (mobile, tablette, desktop)
- ✅ Navigation fluide avec smooth scroll
- ✅ Formulaire de contact interactif
- ✅ Effets hover et animations CSS
- ✅ Code sémantique et accessible

## 🛠️ Technologies utilisées

- HTML5
- CSS3 (avec variables CSS et Flexbox/Grid)
- JavaScript (vanilla)

## 📦 Installation et utilisation

1. Clonez le repository :
```bash
git clone https://github.com/ItamiFX/portfolio.git
```

2. Ouvrez le fichier `index.html` dans votre navigateur

C'est tout ! Aucune installation de dépendances n'est nécessaire.

## 🔧 Personnalisation

Pour personnaliser le portfolio :

1. **Contenu** : Modifiez le texte dans `index.html`
2. **Couleurs** : Ajustez les variables CSS dans `css/styles.css`
3. **Images** : Ajoutez vos images dans le dossier `images/`
4. **Projets** : Ajoutez ou modifiez les cartes de projet dans la section projets

## 📱 Responsive

Le site est entièrement responsive avec des breakpoints pour :
- Mobile : < 480px
- Tablette : < 768px
- Desktop : > 768px

## 📄 Licence

Ce projet est libre d'utilisation pour vos propres portfolios.

---

Créé avec ❤️