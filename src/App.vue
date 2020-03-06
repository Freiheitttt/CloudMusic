<template>
  <div id="app">
    <nav-bar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/Screen/NavBar";
export default {
  name: "app",
  components: {
    NavBar
  }
};
</script>

<style>
@import "assets/css/base.css";
html {
  background-color: azure;
}
</style>
