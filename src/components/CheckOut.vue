<template>
    <section>
        <h2>Endereço de Envio</h2>
        <UserForm>
            <button class="btn" @click.prevent="finishShopping">Finalizar Compra</button>
        </UserForm>
    </section>
</template>

<script>
import UserForm from "./UserForm.vue";
import { api } from "@/services.js";
import { mapState } from "vuex";

export default {
    name: "CheckOut",
    components: {
        UserForm
    },
    props: ["product"],
    computed: {
        ...mapState(["user"]),
        shopping() {
            return {
                buyer_id: this.user.email,
                seller_id: this.product.user_id,
                product: this.product,
                address: {
                    zip: this.user.zip,
                    street: this.user.street,
                    number: this.user.number,
                    city: this.user.city,
                    state: this.user.state
                }
            }
        }
    },
    methods: {
        createTransaction() {
            return api.post("/transaction", this.shopping)
            .then(() => {
                this.$router.push({name: "shopping"});
            });
        },
        async createUser() {
            try {
                await this.$store.dispatch("createUser", this.$store.state.user);
                await this.$store.dispatch("getUser", this.$store.state.user.email);
                await this.createTransaction();
            } catch(error) {
                console.log(error);
            }
        },
        finishShopping() {
            if (this.$store.state.login) {
                this.createTransaction();
            } else {
                this.createUser();
            }
        }
    }
};
</script>

<style lang="scss" scoped>
    h2 {
        margin-bottom: 20px;
        margin-top: 40px;
    }
    .btn {
        background: #e80;
    }
</style>