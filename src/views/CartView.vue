<template>
  <div class="cart">
    <h1 class="text-xl">This is a cart page</h1>
    <div class="flex flex-col gap-4">
      <div
      class="card card-side bg-white shadow-sm"
      v-for="product in cart"
      :key="product.id"
      >
        <figure class="p-4"><img class="mask mask-squircle" :src="product.image" style="height:100px; width: 100px;" alt="Movie"/></figure>
        <div class="card-body">
        <div class="card-title">
          <h3>{{ product.title }}</h3>
        </div>
        <div class="flex gap-1 flex-row items-baseline">
          <div class="text-red-500 text-xl font-black">{{ product.price * product.quantity }}€</div>
          <div v-if="product.quantity > 1" class="text-gray-400 text-xs font-semibold">{{ product.price }}€</div>
        </div>

        <div class="card-actions">
          <div class="flex flex-row align-start items-center gap-4">
            <button class="btn btn-outline material-symbols-rounded" @click="increaseProductQuantity(product)">add</button>
            <span>{{ product.quantity }}</span>
            <button class="btn btn-outline material-symbols-rounded" @click="decreaseProductQuantity(product)">remove</button>
          </div>
          <a class="btn btn-error gap-2" @click="removeFromCart(product)"><span class="material-symbols-rounded">delete</span>Remove from cart</a>
        </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapStores } from 'pinia'
import { useShoppingStore } from '../stores/shopping';

export default {
  name: 'CartView',
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
