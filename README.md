# DocChain Frontend

## 👋 Présentation du projet

**DocChain** est une solution blockchain pour l’émission et la vérification sécurisée de documents certifiés. La version MVP permet aux organisations émettrices (universités, entreprises, ONG) d’émettre des documents immuables certifiés via Hedera et aux vérificateurs publics d’effectuer une vérification simple et rapide via QR code ou code unique.

Ce repo contient la partie frontend, construit avec Next.js, TypeScript, TailwindCSS et intégrant tout le nécessaire pour une expérience utilisateur fluide, notamment pour l’émission, la gestion, et la vérification des documents.

---

## 📦 Technologies principales

- Next.js (App Router)
- TypeScript
- TailwindCSS
- React (hooks, composants)
- html5-qrcode (scan QR)
- react-qr-code (génération QR)
- react-hot-toast (notifications)
- PWA (manifest + service worker)

---

## 🔧 Setup & installation

### Prérequis

- Node.js >= 18
- npm / yarn

### Installation

```
git clone https://github.com/Tomefy5/doc-chain-client
cd doc-chain-client
npm install
```

### Lancer le projet

```
npm run dev
```

L'application sera disponible sur [http://localhost:3000](http://localhost:3000).

---

## 📝 Conventions de contribution

Nous suivons une démarche structurée pour garantir la qualité :

### Processus

- Forkez le repo si vous souhaitez contribuer.
- Créez une branche à partir de `main` pour votre feature ou correction (`feature/nom`, `fix/nom`)
- Faites des commits clairs, avec la convention **Conventional Commits** (ex: `feat: ajout page de vérification QR`)
- Ouvrez une PR pour review

### Règles de code

- Respectez la convention **TS strict**.
- Utilisez Tailwind pour le style, privilégiez la réutilisabilité avec composants.
- Commentez si nécessaire, mais privilégiez le code clair.


---

## 📚 Documentation & liens utiles

- [Guide de développement Next.js](https://nextjs.org/docs) — Guide officiel pour la configuration, les fonctionnalités avancées et les bonnes pratiques avec Next.js.

- [TypeScript Documentation](https://www.typescriptlang.org/docs/) — Documentation officielle pour maîtriser TypeScript, ses types et ses fonctionnalités.

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) — Documentation officielle pour utiliser Tailwind, créer un design cohérent et personnalisé.

- [React Documentation](https://reactjs.org/docs/getting-started.html) — Resources pour comprendre React, composants, hooks, gestion d’état.

- [html5-qrcode](https://github.com/mebjas/html5-qrcode/wiki) — Guide pour implémenter la lecture de QR codes dans le navigateur.

- [react-qr-code](https://github.com/rosskhanas/react-qr-code) — Documentation pour générer des QR codes dans une application React.

- [react-hot-toast](https://react-hot-toast.com/docs) — Guide pour l’intégration et l’utilisation du système de notifications toast.

- [Progressive Web Apps (PWA)](https://web.dev/progressive-web-apps/) — Ressources et standards pour rendre ton app installable, performante, offline-ready.

- [shadcn/ui Documentation](https://ui.shadcn.com/docs)  
  Documentation officielle de la bibliothèque de composants React basés sur Radix UI, avec un design system moderne, accessible, et hautement personnalisable.


Ces liens dirigeront toute ton équipe vers la documentation officielle pour une compréhension profonde et efficace des technologies utilisées dans ton projet.

---

## 📞 Support & contact

Pour toute question ou contribution, ouvrez une issue ou contactez tomefyandrytsiresy@gmail.com.

---

## License

Ce projet est sous licence MIT. Voir [LICENSE](LICENSE) pour plus d’informations.

---

**Merci de votre contribution et bon développement !**
