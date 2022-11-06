<template>
  <div class="product-detail">
    <h1 class="text-xl">{{ $route.params.id }}This is a product detail page</h1>

    <div class="card" v-if="status === 'loaded'">
      <div class="cart-title">
        <h2 class="text-2xl">{{ product.title }}</h2>
        <span class="text-2xl">{{ product.price }}€</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapStores } from 'pinia'
import { useShoppingStore } from '../stores/shopping'
export default {
  name: 'ProductDetailView',
  data() {
    return {
      product: null,
      status: 'loading'
    }
  },
  mounted() {
    let result = this.getProductDetail(this.$route.params.id)
    console.log(result)
    if(!result) {
      this.status = 'notFound'
    }
    this.product = result
    this.status = 'loaded'
  },
  methods: {
    ...mapActions(useShoppingStore, ['getProductDetail'])
  },
}
</script>

<style>

</style>
