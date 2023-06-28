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
                    <button class="btn" @click.prevent="logout">Logout</button>
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
.user__list {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 1/-1;
}
.user__element {
    padding: 2px 8px;
    border-radius: 2px;
    margin: 4px;
    &.router-link-exact-active,
    &:hover {
        background: #87f;
        color: #fff;
    }
}
</style>