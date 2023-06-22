<template>
    <header>
        <nav class="menu">
            <router-link class="menu__logo" to="/">
                <img src="@/assets/ranek.svg" alt="Ranek">
            </router-link>
            <router-link class="btn" to="/login">Login</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: "TheHeader",
}
</script>

<style lang="scss" scoped>
.menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    box-shadow: 0 2px 4px rgba(30, 60, 90, .1);
    &__logo {
        padding: 10px 0;
        & img {
            width: 90px;
        }
    }
}
</style>