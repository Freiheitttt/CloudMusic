<template>
  <nav-bar class="nav-item">
    <div
      slot="left"
      class="logo"
    ></div>
    <div
      slot="center"
      class="title"
    >
      <span>CloudMusic</span>
    </div>
    <div
      class="settings"
      slot="right"
    ></div>
  </nav-bar>

</template>

<script>
import NavBar from "../common/navbar/NavBar";

export default {
  name: "MainHeader",
  components: {
    NavBar
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.nav-item {
  flex: 1;
}
.nav-item img {
  width: 2.8rem;
  text-align: center;
}
.nav-item .title span {
  font-size: 22px;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  color: black;
}
.nav-item .logo {
  height: 4rem;
  background-image: url(../../assets/image/logo.svg);
  background-position: center center;
  background-size: 3rem;
  background-repeat: no-repeat;
}
.nav-item .settings {
  height: 4rem;
  background-image: url(../../assets/image/settings.svg);
  background-position: center center;
  background-size: 3rem;
  background-repeat: no-repeat;
}
</style>