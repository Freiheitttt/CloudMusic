<template>
  <div class="recommend">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide
          class="swiper-slide"
          v-for="item in slideImg"
          :key="slideImg.id"
        ><img
            :src="item.url"
            alt="swiper-image"
            class="swiper-image"
          ></swiper-slide>
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </swiper>
    </div>
    <div><span>推荐歌单</span></div>
  </div>

</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "recommend",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      slideImg: [
        {
          id: 1,
          url:
            "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893798113,2002765214&fm=26&gp=0.jpg"
        },
        {
          id: 2,
          url:
            "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893798113,2002765214&fm=26&gp=0.jpg"
        },
        {
          id: 3,
          url:
            "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893798113,2002765214&fm=26&gp=0.jpg"
        },
        {
          id: 4,
          url:
            "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893798113,2002765214&fm=26&gp=0.jpg"
        },
        {
          id: 5,
          url:
            "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893798113,2002765214&fm=26&gp=0.jpg"
        }
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        initialSlide: 1,
        slidesPerView: 1.4,
        centeredSlides: true,
        autoplay: {
          delay: 3000
        },
        spaceBetween: 0,
        speed: 1000,
        loop: true
      },
      on: {
        click: function() {
          // 获取点击的索引.
          const realIndex = this.realIndex;
          // 此处可自定义点击事件,注意此处this指向swiper,定义_this
        }
      }
    };
  }
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 30.48%;
  margin: 0 1rem;
}
.swiper-slide {
  width: 100%;
  height: 7rem;
  line-height: 4rem;
  text-align: center;
}
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: rgb(219, 70, 70);
}

img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.swiper-slide:not(.swiper-slide-active) {
  transition: 300ms;
  transform: scale(0.85);
}
</style>