On va s'attaquer à des concepts plus avancés de VueJS et des framework JS récent en général. Vous allez voir c'est très proche de Flutter et des concepts qui s'y rattache.

## 1 - Création d'un projet avec Vue-CLI

Nous allons créer ensemble un projet Vue-CLI
Commencez par installer Node.JS sur votre ordinateur si c'est pas le cas

Puis on va créer un projet Vue avec Vite ⬇️
[Le web est assez complexe aujourd’hui, on sait pas trop par où commencer. Alors voici un petit guide pour commencer un projet VueJS.](https://anthony-dacruz.com/posts/2021-12-03-comment-creer-un-projet-vuejs-3)
## 2 - Lets goooo

Nous allons faire un E-Commerce ultra simple, mais il va nous permettre d'apprendre beaucoup de chose avec la gestion des états, mais aussi les composants Vue ainsi que le routeur Vue.

On va utiliser une API utile pour apprendre : Fake Store API
[Fake Store API](https://fakestoreapi.com/docs)

### Exercice 1

Allez dans le fichier `Home.vue` et faites en sorte de récupérer les données de la route `https://fakestoreapi.com/products` et affichez les dans la console du navigateur.

Utilisez `axios` pour lancer la requête, et appelez ce code dans le `hook` du cycle de vie qui vous semble optimal pour ce genre d'opération. (Trouvez et lisez bien la documentation "Hook Lifecycle Vue")

> En cas de grosse galère sur ce point, voici un lien vers un starter qui effectue déjà la requête API [https://github.com/le-campus-numerique/vue-fake-store-api](https://github.com/le-campus-numerique/vue-fake-store-api)

### Exercice 2

On veut maintenant afficher les produits dans `Home.vue`, sous forme d'une **grille**. On veut afficher les données suivantes sur un produit : 

- 🏷 Son nom 
- 🤑 Son prix 
- 🖼 Une image

Au niveau du CSS, vous pouvez directement utiliser la balise style dans vos composants `.vue`[pensez à l'attribut ](https://vue-loader.vuejs.org/guide/scoped-css.html)`[scoped](https://vue-loader.vuejs.org/guide/scoped-css.html)`

> Personnellement je suis fan de Tailwind alors je l'utilise en lançant la commande : `vue add tailwind` qui fonctionne car la communauté à créé un plugin `tailwind` pour Vue-CLI, ce qui n'est pas le cas pour toutes les dépendances NPM !

### Exercice 3 - Ajouter au panier
![](https://media.giphy.com/media/LmN8OYiY4m0X85K0Zz/giphy.gif)
- Lors du clic sur un produit, vous devez faire apparaitre un bouton "Add To Cart" et ajouter une bordure bleu au produit.
- Le bouton Add To Cart doit ajouter le produit dans une liste qui sera votre panier.
- Créez votre plus belle variable réactive pour stocker les produits dans le Panier.
- Remplacez le bouton "Add to Cart" par "Remove from Cart" quand le produit est dans le panier.
- Afficher **simplement le nombre de produit** dans le panier sur la page. On doit pouvoir ajouter et supprimer des produits facilement.

## Exercice 4 - Créer un composant

Pour afficher les détails d'un produit, utiliser le router Vue dans `/router/index.js` et créer une nouvelle page qui prendre en paramètre l'ID du produit.

Cette page doit être un composant fichier `.vue`

- Faite en sorte que lors du clique sur un produit Vue affiche la page de détail du produit sélectionné.
- Le retour du navigateur doit fonctionner.
- On doit pouvoir ajouter au panier également depuis le détail d'un produit.

## Exercice 5 -  Le panier

Créer un autre composant pour afficher le panier, également en utilisant Vue Router.

Le panier doit permettre de modifier la quantité de chaque produit, de calculer le total par ligne produit et également le total de tout les produits du panier.
![](/images/2021/11/Capture-d-e-cran-2021-11-25-a--22.07.16.png)
## Exercice 5 - Le Store Pinia (ex-Vuex)

Bon maintenant que vous avez vu comme c'est embêtant de passer des données de composants à composants, on va pouvoir comprendre l'intérêt de [Pinia](https://pinia.vuejs.org/introduction.html).
[

Pinia 🍍

Intuitive, type safe, light and flexible Store for Vue

![](https://pinia.vuejs.org/logo.png)Vue Mastery Logo

![](https://pinia.vuejs.org/social.png)
](https://pinia.vuejs.org/introduction.html)
Essayer d'implémenter :

- Un state pour vos produits nommé `product`

    ...
    export const useShoppingStore = ('shopping',{
        state: () => ({
          products : []
        }),
        ...
    })

- Une action permettant de charger les produits depuis l'API en utilisant `fetch`
- [Accéder au store](https://pinia.vuejs.org/core-concepts/state.html#usage-with-the-options-api) depuis un composant en utilisant soit `setup` soit `map...`

## Exercice 6 - Déployer le store partout

Utiliser le store en créant vos propres actions et mutations pour : 

    export const useShoppingStore = ('shopping',{
      getters: {
       //
      },
      state: () => ({
          products : []
      }),
      actions: {
        loadProducts() {  
        	//
        },
        loadBag(){ 
        	//
        },
        removeFromBag(){ 
        	//
        },
        addToBag(){ 
        	//
        }
      }
    })
    

- Utiliser le store sur vos 3 pages.
- Où est-ce judicieux d'appeler l'action du store qui charge les produits via l'API ?

## Exercice 7 

- Faites en sorte de sauvegarder le panier entre les sessions d'utilisation du site.
- Le site doit demander une confirmation à l'utilisateur quand il veut supprimer un produit du panier. Où placer cette confirmation pour modifier le moins possible le code ?

## Exercice 8 - Modal & Transitions

- Faite en sorte que le détail d'un produit soit en fait une modal qui s'affiche par dessus la liste des produits.
- Au clic pour changer de page ou afficher la modal, vous devez implémenter une transition animée.

- [Building a modal with Vue.js and Tailwind CSS](https://laravel-news.com/building-a-modal-with-vue-and-tailwind)
- [Transitions d’entrée, de sortie et de liste — Vue.js](https://fr.vuejs.org/v2/guide/transitions.html#Transition-d%E2%80%99elements-composants-simples)

# Un point sur la Composition API

Au cours de votre développement vous avez surement vu passer des choses a propos de l'Option API et de la Composition API.

Une bonne vidéo explique ici pourquoi c'est cool : [https://grafikart.fr/tutoriels/vue-3-composition-api-1209](https://grafikart.fr/tutoriels/vue-3-composition-api-1209)

L'API Options, qui est celle de base fonctionne de pair avec Composition API, vous êtes pas obligé d'apprendre Composition API. Pour savoir quand utiliser l'une ou l'autre vérifier le lien ci-dessous.
[Composition API FAQ | Vue.js](https://vuejs.org/guide/extras/composition-api-faq.html#more-flexible-code-organization)
## Un point sur le SSR

Inspecter le code de votre site web avec Chrome ou Firefox en utilisant la fonction "Afficher le code source de la page", que remarquez vous ? 

### Pour aller plus loin - Nuxt

Maintenant utilisez NuxtJS pour réaliser la même application, puis revérifier le code source de votre page, cela devrait être bien mieux pour l'indexation par les robots des moteurs de recherche.
[The Intuitive Vue Framework](https://nuxtjs.org/)
#### Question 

Quel est la différence entre Server Side Rendering, Static Site Generation et Single Page App ?
