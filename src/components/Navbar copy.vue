<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <div class="links d-flex justify-content-between">
        <a class="navbar-brand" href="#">{{ $t('navs.brand') }}</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          id="navbarSupportedContent justify-content-end"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
              <!-- <a class="nav-link active" aria-current="page" href="/">Home</a> -->
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/other">Link</router-link>
            </li>
          </ul>
        </div>
      </div>
      <a class="btn rounded-pill main-btn text-white" href="#">Login</a>
      <div class="lang">
        <b-form-select
          v-model="lang"
          @change="changeLang($event)"
          :options="locales"
        ></b-form-select>
      </div>
    </div>
  </nav>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      lang: this.$store.state.locale,
      locales: [
        { value: 'en', text: 'English' },
        { value: 'ar', text: 'عربي' },
      ],
    }
  },
  methods: {
    changeLang(event) {
      Cookies.set('locale', event)
      this.$store.commit('changeLocale', event)
      setTimeout(() => window.location.reload(), 200)
    },
  },
}
</script>

<style lang="scss">
.router-link-active,
.router-link-exact-active {
  color: #fff !important;
}

.navbar {
  .navbar-brand {
    font-family: 'Cairo';
  }
  .links {
    flex: 1;
  }
  .lang {
    width: fit-content;
    .form-select {
      cursor: pointer;
      background: none !important;
      border: none !important;
      color: #fff !important;
      font-weight: bold;
      width: fit-content !important;
      padding: 0 !important;
    }
  }
}
</style>
