<template>
    <section>
        <form action="">
            <input name="search" id="search" type="text" v-model="search">
            <input id="submit-search" type="submit" value="Buscar" @click.prevent="searchProducts">
        </form>
    </section>
</template>

<script>
export default {
  name: "SearchProducts",
  data() {
    return {
        search: "",
    }
  },
  methods: {
    searchProducts() {
        this.$router.push({ query: { q: this.search }})
    }
  }
}
</script>

<style>

</style>
