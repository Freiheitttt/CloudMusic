<template>
  <div>
    <main-header />
    <main-nav-bar />
  </div>

</template>

<script>
import MainHeader from "../content/navbar/MainHeader";
import MainNavBar from "../content/navbar/MainNavBar";
export default {
  name: "NavBar",
  components: {
    MainHeader,
    MainNavBar
  }
};
</script>

<style scoped>
</style>

