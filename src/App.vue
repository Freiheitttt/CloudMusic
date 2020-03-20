<template>
  <div id="app">
    <nav-bar />
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>

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
