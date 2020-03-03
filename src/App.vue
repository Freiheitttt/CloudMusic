<template>
  <div id="app">
    <main-header />
    <main-nav-bar />
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from "./components/content/MainHeader";
import MainNavBar from "./components/content/MainNavBar";

export default {
  name: "app",
  components: {
    MainHeader,
    MainNavBar
  }
};
</script>

<style>
@import "assets/css/base.css";
html {
  background-color: azure;
}
</style>
