<template>
    <div class="product" v-if="product">
        <router-link class="product__img" :to="{name: 'product', params: {id: product.id}}">
            <img v-if="product.pictures" :src="product.pictures[0].src" :alt="product.pictures[0].title">
            <p>Ver Produto</p>
        </router-link>
        <div class="content">
            <p class="product__price">{{ product.price | formattingPrice}}</p>
            <h2 class="product__name">{{ product.name }}</h2>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductItem",
    props: {
        product: Object
    }
}
</script>

<style lang="scss" scoped>
.product {
    display: grid;
    grid-template-columns: minmax(100px, 200px) 1fr;
    grid-gap: 20px;
    margin-bottom: 40px;
    position: relative;
    &__img {
        border-radius: 4px;
        overflow: hidden;
        height: 100px;
    }
    &__content {
        align-self: end;
    }
}
</style>