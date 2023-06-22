<template>
    <section class="list-container">
        <div class="product" v-for="product in products" :key="product.id">
            <img v-if="product.pictures" :src="product.pictures" :alt="product.pictures[0].title">
            <p class="product__price">{{ product.price }}</p>
            <h2 class="product__title">{{ product.name }}</h2>
            <p class="product__description">{{ product.description }}</p>
        </div>
    </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "ListProducts",
  data() {
    return {
        products: null,
    };
  },
  methods: {
    getProducts() {
        api.get("/products")
        .then(response => {
            this.products = response.data;
        });
    }
  },
  created() {
    this.getProducts();
  }
}
</script>

<style>

</style>