<template>
    <section class="user">
        <nav class="user__nav">
            <ul class="user__list">
                <li>
                    <router-link class="user__element" :to="{name: 'user'}">Produtos</router-link>
                </li>
                <li>
                    <router-link class="user__element" :to="{name: 'purchases'}">Compras</router-link>
                </li>
                <li>
                    <router-link class="user__element" :to="{name: 'sales'}">Vendas</router-link>
                </li>
                <li>
                    <router-link class="user__element" :to="{name: 'edit'}">Editar Usuário</router-link>
                </li>
                <li>
                    <button class="user__element user__btn" @click="logout">Logout</button>
                </li>
            </ul>
        </nav>
        <transition mode="out-in">
            <router-view></router-view>
        </transition>
    </section>
</template>

<script>
export default {
    name: "MyUser",
    methods: {
        logout() {
            this.$store.dispatch("logoutUser");
            this.$router.push("/login");
        }
    }
}
</script>

<style lang="scss" scoped>

.user {
    display: grid;
    grid-template-columns: minmax(140px, 200px) 1fr;
    max-width: 900px;
    margin: 40px auto;
    grid-gap: 30px;
    padding: 20px;
    &__element {
        display: block;
        background: #f4f7fc;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 4px;
        &.router-link-exact-active,
        &:hover {
            background: #87f;
            color: #fff;
        }
    }
    &__btn {
        padding: 10px;
        border: none;
        width: 100%;
        font-size: 1rem;
        text-align: left;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
    }
}

@media screen and (max-width: 500px) {
    .user {
        grid-template-columns: 1fr;
        margin: 0px auto;
    }
}
</style>