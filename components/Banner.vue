<template>
  <div class="banner-shop banner-slider margin0 owl-slick equal-container">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banner" v-bind:key="item.key">
          <img :src="item.src" alt="item.src">
        </div>
      </div>
      <div class="swiper-pagination"  slot="pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            banner: [
                { src: '/assets/img/slider/banner1.png' }, 
                { src: '/assets/img/slider/banner2.png' }
            ],
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 8,
                loop: true,
                breakpoints: {
                    // when window width is <= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 8
                    },
                    // when window width is <= 480px
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 8
                    },
                    // when window width is <= 800px
                    800: {
                        slidesPerView: 1,
                        spaceBetween: 8
                    }
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    }
}
</script>