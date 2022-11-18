<template>
  <div class="card card-side bg-white shadow-sm">
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
</template>

<script>
export default {
  name: 'ProductCardCart',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
