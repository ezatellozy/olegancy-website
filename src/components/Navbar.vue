<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <div class="links d-flex justify-content-between">
        <a class="navbar-brand" href="#">
          <img src="@/assets/images/logo.png" alt="logo" />
        </a>
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
              <router-link class="nav-link" to="/">
                {{ $t('nav.home') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/aboutUs">
                {{ $t('nav.aboutUs') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/policies">
                {{ $t('nav.policies') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/lawFirms">
                {{ $t('nav.lawFirms') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/pricing">
                {{ $t('nav.pricing') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/legalForums">
                {{ $t('nav.legalForums') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/bookLibrary">
                {{ $t('nav.bookLibrary') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contactUs">
                {{ $t('nav.contactUs') }}
              </router-link>
            </li>
          </ul>
        </div>
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
.nav-link {
  color: #555 !important;
  font-size: 20px;
  &.router-link-active,
  &.router-link-exact-active {
    color: #303f9f !important;
    font-weight: bold;
  }
  @media (max-width: 1200px) {
    font-size: 18px !important;
  }
}
.navbar {
  .navbar-brand {
    img {
      max-height: 50px;
      @media (max-width: 768px) {
        max-height: 40px;
      }
    }
  }
  .navbar-toggler {
    border: none;
    & > span {
      background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 20, 63, 0.9%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e');
    }
    &:focus {
      color: #fff !important;
    }
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
      // padding: 0 !important;
      > option {
        color: red;
      }
    }
  }
}
</style>
