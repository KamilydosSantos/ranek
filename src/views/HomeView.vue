<template>
  <section class="home">
    <h1 class="home__title">👍 Compre ou Venda 👎</h1>
    <SearchProducts/>
    <ListProducts/>
  </section>
</template>

<script>
import SearchProducts from "@/components/SearchProducts.vue";
import ListProducts from "@/components/ListProducts.vue";

export default {
  name: "HomeView",
  components: {
    SearchProducts,
    ListProducts
  }
}
</script>

<style lang="scss" scoped>
.home__title {
  font-size: 2rem;
  color: #87f;
  margin-top: 40px;
  text-align: center;
}
</style>