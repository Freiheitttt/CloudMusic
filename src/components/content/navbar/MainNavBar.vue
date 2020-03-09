<template>
  <div class="nav-list">
    <div
      v-for="(item, index) in titles"
      class="item"
      :key="index"
      :class="{ active: index === currentIndex }"
    >
      <router-link :to="item.path">
        <span>{{item.title}}</span>
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: "MainNavBar",

  data() {
    return {
      currentIndex: 0,
      titles: [
        {
          title: "我的音乐",
          path: "/home"
        },
        {
          title: "推荐",
          path: "/recommend"
        },
        {
          title: "排行榜",
          path: "/chart"
        },
        {
          title: "歌单",
          path: "/songList"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.nav-list {
  text-align: center;
  line-height: 3rem;
  height: 3rem;
}
.nav-list {
  display: flex;
  width: 100%;
}
.nav-list .item {
  flex: 1;
  list-style: none;
}

.nav-list .item span {
  font-size: 14px;
  font-weight: bold;
}
</style>