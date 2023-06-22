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
import { serialize } from "@/helpers.js"

export default {
  name: "ListProducts",
  data() {
    return {
        products: null,
        listLimit: 9,
    };
  },
  computed: {
    url() {
        const query = serialize(this.$route.query);
        return `/products?_limit=${this.listLimit}${query}`;
    }
  },
  methods: {
    getProducts() {
        api.get(this.url)
        .then(response => {
            this.products = response.data;
        });
    }
  },
  watch: {
    url() {
        this.getProducts();
    }
  },
  created() {
    this.getProducts();
  }
}
</script>

<style>

</style>