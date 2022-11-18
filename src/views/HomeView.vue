
<template>
  <main>
    <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </main>
</template>


<script>
import { mapActions, mapState } from 'pinia'
import { useShoppingStore } from '../stores/shopping'
import ProductCard from '../components/ProductCard.vue';
export default {
  name: 'HomeView',
  components: {
    ProductCard
  },
  computed: {

    //On récupère les variables dans le State du store
    ...mapState(useShoppingStore, ['products', 'cart'])
  },
  methods: {
    truncated(data,size) {
      if (data.length > size) {
         return data.substring(0, size) + '...';
      }
      return data
    },
    //On récupère les fonctions d'actions (fetching, ajout, suppression,etc.) depuis le store
    ...mapActions(useShoppingStore, ['fetchProducts','addToCart', 'isInCart', 'getQuantityInCartForProduct', 'removeFromCart']),
  }
}
</script>
