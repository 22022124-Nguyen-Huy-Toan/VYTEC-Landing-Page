# Social Innovation Launch 2025 - Landing Page

Une page d'accueil moderne pour la compétition d'innovation sociale SIL 2025, construite avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design responsive** - Optimisé pour tous les appareils
- **Navigation mobile** - Menu hamburger pour les petits écrans
- **Sections complètes** :
  - Hero avec appel à l'action
  - Présentation des fonctionnalités
  - Calendrier de la compétition
  - Prix et récompenses
  - Informations de contact
- **Accessibilité** - Composants accessibles avec Radix UI
- **Performance** - Optimisé avec Next.js 15

## 🛠️ Technologies

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide React** - Icônes
- **Radix UI** - Composants accessibles
- **Class Variance Authority** - Gestion des variantes de composants

## 🏗️ Structure du projet

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── badge.tsx
│       ├── button.tsx
│       └── card.tsx
└── lib/
    └── utils.ts
```

## 🚀 Installation et démarrage

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

3. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📝 Scripts disponibles

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Construire l'application pour la production
- `npm run start` - Démarrer le serveur de production
- `npm run lint` - Lancer ESLint

## 🎨 Personnalisation

### Couleurs
Le projet utilise un thème basé sur des tons bleus avec Tailwind CSS. Les couleurs principales sont :
- Bleu primaire: `bg-blue-600`
- Arrière-plan: `bg-gradient-to-br from-blue-50 to-indigo-100`

### Composants
Les composants UI sont situés dans `src/components/ui/` et peuvent être personnalisés via les variantes définies avec `class-variance-authority`.

### Contenu
Le contenu est principalement en français et peut être modifié dans `src/app/page.tsx`.

## 🤝 Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos modifications
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Contact

Pour toute question concernant ce projet :
- Email: info@sil2025.com
- Site web: [sil2025.com](https://sil2025.com)
