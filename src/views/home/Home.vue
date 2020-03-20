<template>
  <div class="home">
    <div class="information">
      <div class="myImage"></div>
      <div class="welcome">
        <span>HI! {{userName}}</span>
      </div>
    </div>
    <div class="my-music">
      <div
        class="like"
        @click="likeClick"
      >
        <span>喜欢</span>
      </div>
      <div
        class="recently"
        @click="recentlyClick"
      >
        <span>最近</span>
      </div>
      <div
        class="download"
        @click="downloadClick"
      >
        <span>本地歌曲</span>
      </div>
      <div
        class="star"
        @click="starClick"
      >
        <span>收藏</span>
      </div>
    </div>
    <div class="music-list">
      <ul
        v-for="(item, index) in MusicList"
        :key="index"
      >{{item}}</ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      userName: "Freiheit",
      MusicList: ["收藏1", "收藏2"]
    };
  },
  methods: {
    likeClick: function() {
      this.$router.push("/like");
    }
  }
};
</script>
<style scoped>
.information {
  height: 4rem;
  display: flex;
  margin: 0 2rem;
}
.information .myImage {
  width: 4rem;
  background-image: url(../../assets/image/views/home/touxiang.svg);
  background-size: 3rem;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
}

.information .welcome {
  line-height: 4rem;
  margin-left: 1rem;
}
.my-music {
  width: 100%;
  vertical-align: center;
  background-color: rgb(255, 222, 222);
}
.my-music img {
  width: 1.5rem;
  height: 1.5rem;
  vertical-align: middle;
}
.my-music .like,
.download,
.star,
.recently {
  margin: 0 2rem;
  height: 3rem;
  background-size: 1.6rem;
  background-repeat: no-repeat;
  background-position-y: center;
}
.my-music .like {
  background-image: url(../../assets/image/views/home/like.svg);
}
.my-music .recently {
  background-image: url(../../assets/image/views/home/recently.svg);
}
.my-music .download {
  background-image: url(../../assets/image/views/home/download.svg);
}
.my-music .star {
  background-image: url(../../assets/image/views/home/star.svg);
}
.my-music span {
  line-height: 3rem;
  font-size: 1rem;
  margin-left: 4rem;
}
</style>
