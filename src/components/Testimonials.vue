<template>
  <section class="testimonials m-t-20">
    <div class="overlay">
      <div class="container">
        <div class="title text-center text-white">
          <h2 class="text-center f-s-35">Testimonials</h2>
        </div>
        <div>
          <carousel v-bind="settings">
            <slide v-for="n in 5" :key="n">
              <testimonial-card />
            </slide>
            <template #addons>
              <pagination />
            </template>
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TestimonialCard from './TestimonialCard.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
export default {
  components: { TestimonialCard, Carousel, Slide, Pagination },
  data() {
    return {
      settings: {
        autoplay: 2000,
        itemsToShow: 1,
        // wrapAround: true,
        snapAlign: 'center',
        breakpoints: {
          992: {
            itemsToShow: 2,
            snapAlign: 'center',
          },
        },
      },
    }
  },
}
</script>

<style lang="scss">
/** T
TestimonialCardestimonials **/
.testimonials {
  background: url('@/assets/images/bg1.jpg') no-repeat center fixed;
  background-size: cover;
}
.testimonials .overlay {
  padding: 50px 0;
}
.carousel__pagination {
  margin-top: 20px;

  .carousel__pagination-button {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #869791;
    &.carousel__pagination-button--active {
      background-color: #ddd;
    }
  }
}

/** Testimonials **/
</style>
