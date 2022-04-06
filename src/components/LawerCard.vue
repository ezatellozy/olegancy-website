<template>
  <b-col cols="11" sm="6" md="4" lg="3">
    <div class="lawyer m-b-30">
      <figure>
        <a href="#">
          <img :src="lawyer.media" :alt="lawyer.name" />
        </a>
      </figure>
      <div class="info bg-white p-20">
        <a href="#">
          <h5 class="primary-color m-b-15">{{ lawyer.name }}</h5>
        </a>
        <ul class="p-0 m-b-0 text-muted f-s-13">
          <li>
            <font-awesome-icon
              :class="$i18n.locale == 'en' ? 'm-r-5' : 'm-l-5'"
              :icon="['fas', 'map-marker-alt']"
            ></font-awesome-icon>
            {{ lawyer.address }}
          </li>
          <li>
            <font-awesome-icon
              :class="$i18n.locale == 'en' ? 'm-r-5' : 'm-l-5'"
              :icon="['fas', 'phone']"
            ></font-awesome-icon>
            {{ lawyer.phone }}
          </li>
        </ul>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  props: ['lawyer'],
}
</script>

<style lang="scss">
.lawyers {
  .lawyer {
    max-width: 240px;
    margin: 0 auto;
    margin-bottom: 20px;
    border-bottom: solid 2px transparent;
    transition: all 0.4s ease-in-out;

    figure {
      margin-bottom: 0;
      background-color: #f8f9fa;
    }
    .info ul li {
      margin-bottom: 7px;
    }
    &:hover figure img {
      transform: scale(1.1) rotate(3deg);
    }
  }
}
</style>
