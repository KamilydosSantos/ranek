<template>
    <section>
        <div class="product" v-if="product">
            <ul class="product__pictures" v-if="pictures">
                <li v-for="(picture, index) in product.pictures" :key="index">
                    <img :src="picture.src" :alt="picture.title">
                </li>
            </ul>
            <div class="content">
                <h1 class="content__name">{{ product.name }}</h1>
                <p class="content__price">{{ product.price | formattingPrice}}</p>
                <p class="content__description">{{ product.description }}</p>
                <transition v-if="product.sold === 'false'" mode="out-in">
                    <button class="btn" v-if="!checkout" @click="checkout = true">Comprar</button>
                    <CheckOut v-else :product="product"/>
                </transition>
                <button class="btn" v-else disabled>Produto Vendido</button>
            </div>
        </div>
        <LoadingPage v-else/>
    </section>
</template>

<script>
import { api } from "@/services.js";
import CheckOut from "@/components/CheckOut.vue";

export default {
    name: "MyProduct",
    components: {
        CheckOut
    },
    props: ["id"],
    data() {
        return {
            product: null,
            checkout: false,
        }
    },
    methods: {
        getProduct() {
            api.get(`/products/${this.id}`)
            .then(response => {
                this.product = response.data;
            })
        }
    },
    created() {
        this.getProduct();
    }
}
</script>

<style lang="scss" scoped>
.product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    max-width: 900px;
    padding: 60px 20px;
    margin: 0 auto;
    .content__price {
        color: #e80;
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 40px;
    }
    .content__description {
        font-size: 1.2rem;
    }
    .btn {
        margin-top: 60px;
        width: 200px;
    }
}
</style>