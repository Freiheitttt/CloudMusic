<template>
  <div class="nav-item">
    <div class="logo"></div>
    <div class="title">
      <span>CloudMusic</span>
    </div>
    <div class="settings">
    </div>
  </div>

</template>

<script>
export default {
  name: "MainHeader",
  data () {
    return {};
  }
};
</script>

<style scoped>
.nav-item {
  display: flex;
  text-align: center;
  line-height: 3rem;
  height: 3rem;
  box-shadow: 0 2px 2px rgba(100, 100, 100, 0.2);
  background-color: mintcream;
}
.title {
  flex: 1;
}
.nav-item img {
  width: 3rem;
}
.nav-item .title span {
  font-size: 22px;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  color: rgb(185, 88, 88);
}
.nav-item .logo {
  width: 5.5rem;
  background-image: url(../../../assets/image/setting.svg);
  background-position: center;
  background-size: 1.8rem;
  background-repeat: no-repeat;
}
.nav-item .settings {
  width: 5.5rem;
  background-image: url(../../../assets/image/search.svg);
  background-position: center;
  background-size: 2rem;
  background-repeat: no-repeat;
}
</style>