<template>
    <section class="login">
        <h1 class="login__title">Login</h1>
        <form class="login__form">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="login.email">
            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senha" v-model="login.password">
            <button class="btn" @click.prevent="loggingIn">Logar</button>
        </form>
        <p class="login__forgot">
            <a href="/" target="_blank">Esqueceu a senha? Clique aqui.</a>
        </p>
        <CreateLogin/>
    </section>
</template>

<script>
import CreateLogin from '@/components/CreateLogin.vue';

export default {
    name: "MyLogin",
    components: {
        CreateLogin,
    },
    data() {
        return {
            login : {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        loggingIn() {
            this.$store.dispatch("getUser", this.login.email);
            this.$router.push({name: "user"});
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
    &__title {
        text-align: center;
        font-size: 2rem;
        margin-top: 40px;
        color: #87f;
    }
    &__form {
        display: grid;
    }
    .btn {
        width: 100%;
        max-width: 300px; 
        margin-left: auto;
        margin-right: auto;
    }
    &__forgot {
        text-align: center;
        margin: 20px auto 0 auto;
        &:hover {
            color: #87f;
            text-decoration: underline;
        }
    }
}
</style>