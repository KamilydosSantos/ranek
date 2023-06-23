<template>
    <section>
        <form class="search" action="">
            <input name="search" class="search__text" id="search-text" type="text" placeholder="Buscar..." v-model="search">
            <input id="search-btn" class="search__btn" type="submit" value="Buscar" @click.prevent="searchProducts">
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

<style lang="scss" scoped>
  .search {
    max-width: 600px;
    margin: 30px auto 60px auto;
    position: relative;
    #search-text {
      width: 100%;
      padding: 20px;
      border: none;
      &:focus,
      &:hover {
        transform: scale(1.1);
      }
    }
    #search-btn {
      width: 62px;
      height: 62px;
      background: url("../assets/search.svg") no-repeat center center;
      text-indent: -150px;
      border: none;
      position: absolute;
      top: 0px;
      right: 0px;
      box-shadow: none;
      cursor: pointer;
    }
  }
</style>
