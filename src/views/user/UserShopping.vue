<template>
    <section>
        <div class="shopping" v-if="shopping">
            <h2 class="shopping__title">Compras</h2>
            <div class="shopping__wrapper" v-for="(buy, index) in shopping" :key="index">
                <ProductItem v-if="buy.product" :product="buy.product">
                    <p class="shopping__seller"><span>Vendedor: </span>{{ buy.seller_id }}</p>
                </ProductItem>
            </div>
        </div>
    </section>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import { api } from "@/services.js"
import { mapState } from 'vuex';

export default {
    name: "UserShopping",
    data() {
        return {
            shopping: null,
        };
    },
    components: { 
        ProductItem 
    },
    computed: {
        ...mapState(["user", "login"])
    },
    methods: {
        getShopping() {
            api.get(`/transaction?buyer_id=${this.user.id}`)
            .then(response => {
                this.shopping = response.data;
            })
        }
    },
    watch: {
        login() {
            this.getShopping();
        }
    },
    created() {
        if(this.login) {
            this.getShopping();
        }
    }
}
</script>

<style lang="scss" scoped>

.shopping {
    .shopping__title {
        margin-bottom: 20px;
    }
    .shopping__wrapper {
        margin-bottom: 40px;
    }
    .shopping__seller span{
        color: #e80;
    }
    }
</style>