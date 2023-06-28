<template>
    <section>
        <form class="add-product">
            <label for="name">Nome</label>
            <input type="text" name="name" id="name" v-model="product.name">
            <label for="price">Preço (R$)</label>
            <input type="number" name="price" id="price" v-model="product.price">
            <label for="pictures">Fotos</label>
            <input type="file" name="pictures" id="pictures" ref="pictures">
            <label for="description">Descrição</label>
            <textarea name="description" id="description" v-model="product.description"></textarea>
            <input class="btn" type="button" value="Adicionar Produto" @click.prevent="addProduct">
        </form>
    </section>
</template>

<script>
import { api } from '@/services.js';

export default {
    name: "AddProduct",
    data() {
        return {
            product: {
                name: "",
                price: "",
                description: "",
                pictures: null
            }
        }
    },
    methods: {
        formattingProduct() {
            this.product.user_id = this.$store.state.user.id;
        },
        addProduct() {
            this.formattingProduct();
            api.post("/products", this.product)
            .then(() => {
                this.$store.dispatch("getUserProducts");
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.add-product {
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    margin-bottom: 60px;
    .btn {
        grid-column: 2;
    }
}
</style>