<template>
  <div class="nav-list">
    <ul class="title">
      <li
        class="item"
        @click="itemClick"
        v-for="item in titles"
      ><span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MainNavBar",

  data() {
    return {
      titles: [
        {
          title: "我的音乐",
          href: "#1"
        },
        {
          title: "推荐",
          href: "#2"
        },
        {
          title: "排行榜",
          href: "#3"
        },
        {
          title: "歌单",
          href: "#4"
        }
      ]
    };
  },
  methods: {
    itemClick() {
      this.$router.currentRoute.path == this.path ||
        this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>
.nav-list {
  text-align: center;
  line-height: 3rem;
  height: 3rem;
}
.nav-list .title {
  display: flex;
  width: 100%;
}
.nav-list .title .item {
  flex: 1;
  list-style: none;
}
.nav-list .title .item:hover {
  border-bottom: 2px;
}

.nav-list .title .item span {
  font-size: 14px;
  font-weight: bold;
}
</style>