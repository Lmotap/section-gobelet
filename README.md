# section-gobelet

Cas pratique que j'ai eu l'opportunité de faire pour un processus de recrutement. Je devais reproduire une section avec une animation autour de gobelets.

## Utilisation de la librairie Javascript GSAP et son installation :

1. Avec le terminal, je lance la commande `"npm init -y"`.
2. J'installe mes dépendances avec `"npm install --save-dev webpack-cli"`.
3. J'installe GSAP avec la commande `"npm install gsap"`.
4. Je crée un fichier `webpack.config.js` et j'ajoute cette configuration :

   ```javascript
   const path = require('path');

   module.exports = {
       entry: './app.js',
       output: {
           filename: 'bundle.js',
           path: path.resolve(__dirname, 'dist')
       },
       mode: 'development'
   };
5. Je relie mon bundle.js au fichier html
6. J'importe GSAP avec la ligne :
` import { gsap } from "gsap"; ` 
7. Je rajoute un script de build dans mon package : 
` "scripts": {
    "build": "webpack"
} ` 
8. J'éxécute Webpack dans le terminal pour crée un bundle :
 ` npm run build ` 
9. Et c'est tout bon, c'est magique.

Notes : 

- Je n'ai pas réussi à parfaitement aligner les vecteurs. J'ai changé la taille de police, essayé différents positionnements, mais c'était bien - plus tenace que je l'aurais cru.

- J'ai suivi les consignes à la lettre, je ne me suis pas permis (même si j'en avais très envie) des petits élans de créativité ou des animations diverses dont j'aurais pu m'inspirer sur CodePen ou d'autres sites.

A Ajuster :

- 
