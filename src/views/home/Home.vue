<template>
  <div class="home">
    <div class="information">
      <div class="image"></div>
      <div class="welcome">
        <span>HI! {{userName}}</span>
      </div>
    </div>
    <div class="my-music">
      <div class="like">
        <span>喜欢</span>
      </div>
      <div class="recently">
        <span>最近</span>
      </div>
      <div class="download">
        <span>本地歌曲</span>
      </div>
      <div class="star">
        <span>收藏</span>
      </div>
    </div>
    <div class="music-list">
      <ul v-for="(item, index) in MusicList" :key="index">{{item}}</ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      userName: 'Freiheit',
      MusicList: ['收藏1', '收藏2']
    }
  }
}
</script>
<style scoped>
.information {
  height: 4rem;
  display: flex;
  margin: 0 2rem;
}
.information .image {
  width: 4rem;
  border-radius: 50%;
  background-image: url(../../assets/image/views/home/touxiang.svg);
  background-size: 3rem;
  background-repeat: no-repeat;
  background-position: center;
}
.information .welcome {
  line-height: 4rem;
  margin-left: 1rem;
}
.my-music {
  height: 12rem;
  margin: 0 1.2rem;
}
.my-music .like {
  height: 3rem;
  background-image: url(../../assets/image/views/home/like.svg);
  background-size: 2rem;
  background-repeat: no-repeat;
  background-position-y: center;
}
.my-music .recently {
  height: 3rem;
  background-image: url(../../assets/image/views/home/recently.svg);
  background-size: 2rem;
  background-repeat: no-repeat;
  background-position-y: center;
}
.my-music .download {
  height: 3rem;
  background-image: url(../../assets/image/views/home/download.svg);
  background-size: 2rem;
  background-repeat: no-repeat;
  background-position-y: center;
}
.my-music .star {
  height: 3rem;

  background-image: url(../../assets/image/views/home/star.svg);
  background-size: 2rem;
  background-repeat: no-repeat;
  background-position-y: center;
}
.my-music span {
  line-height: 3rem;
  font-size: 1rem;
  margin-left: 4rem;
}
</style>
