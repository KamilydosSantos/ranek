<template>
    <ul class="pages" v-if="totalPages > 1">
        <router-link :to="{query: query(1)}"> ❮ </router-link>
        <li class="pages__page" v-for="page in pages" :key="page">
            <router-link class="pages__link" :to="{query: query(page)}">{{ page }}</router-link>
        </li>
        <router-link :to="{query: query(totalPages)}"> ❯ </router-link>
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
        pages() {
            const current = Number(this.$route.query._page);
            const range = 9;
            const offset = Math.ceil(range/2);
            const total = this.totalPages;
            const pagesArray = [];

            for (let i=1; i<=total; i++) {
                pagesArray.push(i);
            }

            pagesArray.splice(0, current - offset);
            pagesArray.splice(range, total);

            return pagesArray;
        },
        totalPages() {
            const total = this.totalProducts/ this.productsPerPage;
            return (total !== Infinity) ? Math.ceil(total) : 0;
        }
    }
};
</script>

<style lang="scss">
.pages {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 1/-1;
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