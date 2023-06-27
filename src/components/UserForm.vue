<template>
    <form class="create-form">
        <label for="name">Nome</label>
        <input type="text" id="name" name="name" v-model="name">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model="email">
        <label for="password">Senha</label>
        <input type="password" id="password" name="password" v-model="password">
        <label for="zip">CEP</label>
        <input type="text" id="zip" name="zip" v-model="zip" @keyup="fillZip">
        <label for="street">Rua</label>
        <input type="text" id="street" name="street" v-model="street">
        <label for="number">Número</label>
        <input type="number" id="number" name="number" v-model="number">
        <label for="nborhood">Bairro</label>
        <input type="text" id="nborhood" name="nborhood" v-model="nborhood">
        <label for="city">Cidade</label>
        <input type="text" id="city" name="city" v-model="city">
        <label for="state">Estado</label>
        <input type="text" id="state" name="state" v-model="state">
        <div class="button">
            <slot></slot>
        </div>
    </form>
</template>

<script>
import {getZip} from "@/services.js";

export default {
    name: "UserForm",
    computed: {
        name: {
            get() {
                return this.$store.state.user.name;
            },
            set(value) {
                this.$store.commit("UPDATE_USER", {name: value});
            }
        },
        email: {
            get() {
                return this.$store.state.user.email;
            },
            set(value) {
                this.$store.commit("UPDATE_USER", {email: value});
            }
        },
        password: {
            get() {
                return this.$store.state.user.password;
            },
            set(value) {
                this.$store.commit("UPDATE_USER", {password: value});
            }
        },
        zip: {
            get() {
                return this.$store.state.user.zip;
            },
            set(value) {
                this.$store.commit("UPDATE_USER", {zip: value});
            }
        },
        street: {
            get() {
                return this.$store.state.user.street;
            },
            set(value) {
                this.$store.commit("UPDATE_USER", {street: value});
            }
        },
        number: {
            get() {
                return this.$store.state.user.number;
            },
            set(value) {
                this.$store.commit("UPDATE_USER", {number: value});
            }
        },
        nborhood: {
            get() {
                return this.$store.state.user.nborhood;
            },
            set(value) {
                this.$store.commit("UPDATE_USER", {nborhood: value});
            }
        },
        city: {
            get() {
                return this.$store.state.user.city;
            },
            set(value) {
                this.$store.commit("UPDATE_USER", {city: value});
            }
        },
        state: {
            get() {
                return this.$store.state.user.state;
            },
            set(value) {
                this.$store.commit("UPDATE_USER", {state: value});
            }
        }
    },
    methods: {
        fillZip() {
            const zip = this.zip.replace(/\D/g, "");
            if(zip.length === 8) {
                getZip(zip)
                .then(response => {
                    this.street = response.data.logradouro;
                    this.nborhood = response.data.bairro;
                    this.city = response.data.localidade;
                    this.state = response.data.uf;
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.create-form {
    display: grid;
    grid-template-columns: 80px 1fr;
    align-items: center;
    .button {
        grid-column: 2;
        margin-top: 10px;
    }
}
</style>