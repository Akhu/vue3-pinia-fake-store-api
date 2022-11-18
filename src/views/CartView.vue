<template>
  <div class="cart">
    <h1 class="text-xl">This is a cart page</h1>
    <div class="flex flex-col gap-4">
      <ProductCardCart
      :product="product"
      v-for="product in cart"
      :key="product.id" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapStores } from 'pinia'
import { useShoppingStore } from '../stores/shopping';
import ProductCardCart from '../components/ProductCardCart.vue';

export default {
  name: 'CartView',
  components: {
    ProductCardCart
  },
  mounted() {
  },
  computed: {
    ...mapState(useShoppingStore, ['cart', 'cartTotal'])
  },
  methods: {
    ...mapActions(useShoppingStore, ['loadData', 'removeFromCart', 'increaseProductQuantity', 'decreaseProductQuantity']),
  },

}
</script>

<style>

</style>
