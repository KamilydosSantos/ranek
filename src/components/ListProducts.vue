<template>
    <section class="list-container">
        <div class="products" v-if="products && products.length">
            <div class="products__product" v-for="product in products" :key="product.id">
                <router-link to="/">
                    <img class="products__img" v-if="product.pictures" :src="product.pictures" :alt="product.pictures[0].title">
                    <p class="products__price">{{ product.price }}</p>
                    <h2 class="products__title">{{ product.name }}</h2>
                    <p class="products__description">{{ product.description }}</p>
                </router-link>
            </div>
        </div>
        <div v-else-if="products && products.length === 0">
            <p class="no-results">Busca sem resultados. Tente buscar outro termo.</p>
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

<style lang="scss" scoped>

.list-container {
    max-width: 1000px;
    margin: 0 auto;
    .products {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px;
        margin: 30px;
        &__product {
            box-shadow: 0 4px 8px rgba(30, 60, 90, .1);
            padding: 10px;
            background: #fff;
            border-radius: 4px;
            transition: all .2s;
            &:hover {
                box-shadow: 0 6px 12px rgba(30, 60, 90, .2);
                transform: scale(1.1);
                position: relative;
                z-index: 1;
            }
        }
        &__img {
            border-radius: 4px;
            margin-bottom: 20px;
        }
        &__title {
            margin-bottom: 10px;
        }
        &__price {
            font-weight: bold;
            color: #e80;
        }
    }
    .no-results {
        text-align: center;
    }
}
</style>