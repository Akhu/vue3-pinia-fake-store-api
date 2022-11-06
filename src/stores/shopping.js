import { defineStore } from 'pinia'

export const useShoppingStore = defineStore('shopping',{
    state: () => ({
      products : [],
      cart: []
    }),

    getters: {
      cartTotal: state => {
        let total = 0
        if(state.cart !== undefined && state.cart.length > 0) {
          total = state.cart.reduce((acc, item) => acc + (item.price * item.quantity), total)
        }
        return Math.round((total + Number.EPSILON) * 100) / 100
      }
    },

    actions: {
      getProductDetail(id) {
        return this.products.find(product => product.id === id)
      },
      getQuantityInCartForProduct(product) {
        const item = this.cart.find(element => element.id === product.id)
        return item ? item.quantity : 0
      },
      isInCart(product) {
        return this.cart.find(element => element.id === product.id)
      },
      async fetchProducts() {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        localStorage.setItem('products', JSON.stringify(data))
        this.products = data
      },
      loadData() {
        let localStorageProducts = JSON.parse(localStorage.getItem('products'))
        let localStorageCart = JSON.parse(localStorage.getItem('cart'))
        if(localStorageCart) {
          this.cart = localStorageCart
        }
        if(localStorageProducts) {
          this.products = localStorageProducts
        }
        this.fetchProducts()
      },
      addToCart(product) {
        const item = this.cart.find(item => item.id === product.id)
        //Si l'item existe, on update la quantité, sinon on l'ajoute avec une quantité de 1
        item ? item.quantity++ : this.cart.push({...product, quantity: 1})
        localStorage.setItem('cart', JSON.stringify(this.cart))
      },
      removeFromCart(product) {
        if(confirm('Are you sure you want to remove this item?')){
          const item = this.cart.find(item => item.id === product.id)
          this.cart = this.cart.filter(item => item.id !== product.id)
          localStorage.setItem('cart', JSON.stringify(this.cart))
        }
      },
      increaseProductQuantity(product) {
        let quantity = product.quantity + 1
        if(quantity > 0) {
          const item = this.cart.find(item => item.id === product.id)
          item.quantity = quantity
          localStorage.setItem('cart', JSON.stringify(this.cart))
        }
      },
      decreaseProductQuantity(product) {
        let quantity = product.quantity - 1
        if(quantity > 0) {
          const item = this.cart.find(item => item.id === product.id)
          item.quantity = quantity
          localStorage.setItem('cart', JSON.stringify(this.cart))
        }
      }
    },
})
