<template>
    <ul class="pages" v-if="totalPages > 1">
        <li class="pages__page" v-for="page in totalPages" :key="page"><router-link class="pages__link" :to="{query: query(page)}">{{ page }}</router-link></li>
    </ul>
</template>

<script>
export default{
    props: {
        productsPerPage: {
            type: Number,
            default: 1
        },
        totalProducts: {
            type: Number,
            default: 1
        }
    },
    methods: {
        query(page) {
            return {
                ...this.$route.query,
                _page: page
            }
        }
    },
    computed: {
        totalPages() {
            const total = this.totalProducts/ this.productsPerPage;
            return (total !== Infinity) ? Math.ceil(total) : 0;
        }
    }
};
</script>

<style lang="scss">
.pages {
    grid-column: 1/-1;
    &__page {
        display: inline-block;
    }
    &__link {
        padding: 2px 8px;
        border-radius: 2px;
        margin: 4px;
        &.router-link-exact-active,
        &:hover {
            background: #87f;
            color: #fff;
        }
    }
}
</style>