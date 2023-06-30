<template>
    <section>
        <div class="sale" v-if="sale">
            <h2 class="sale__title">Vendas</h2>
            <div class="sale__wrapper" v-for="(buy, index) in sale" :key="index">
                <ProductItem v-if="buy.product" :product="buy.product">
                    <p class="sale__seller"><span>Comprador: </span>{{ buy.buyer_id }}</p>
                </ProductItem>
                <div class="sale__delivery">
                    <h3 class="sale__delivery__title">Entrega: </h3>
                    <ul v-if="buy.address">
                        <li v-for="(value, key) in buy.address" :key="key">
                            {{ key }}: {{ value }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import { api } from "@/services.js"
import { mapState } from 'vuex';

export default {
    name: "UserSales",
    data() {
        return {
            sale: null,
        };
    },
    components: { 
        ProductItem 
    },
    computed: {
        ...mapState(["user", "login"])
    },
    methods: {
        getSale() {
            api.get(`/transaction?seller_id=${this.user.id}`)
            .then(response => {
                this.sale = response.data;
            })
        }
    },
    watch: {
        login() {
            this.getSale();
        }
    },
    created() {
        if(this.login) {
            this.getSale();
        }
    }
}
</script>

<style lang="scss" scoped>

.sale {
    &__title {
        margin-bottom: 20px;
    }
    &__wrapper {
        margin-bottom: 40px;
    }
    &__seller span{
        color: #e80;
    }
    &__delivery {
        display: grid;
        grid-template-columns: minmax(100px, 200px) 1fr;
        grid-gap: 20px;
        margin-bottom: 60px;
        &__title {
            margin: 0;
            justify-self: end;
        }
    }
}
</style>