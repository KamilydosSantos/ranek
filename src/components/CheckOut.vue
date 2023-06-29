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
            api.post("/transaction", this.shopping)
            .then(() => {
                this.$router.push({name: "shopping"});
            });
        },
        finishShopping() {
            this.createTransaction();
        }
    }
};
</script>

<style>

</style>