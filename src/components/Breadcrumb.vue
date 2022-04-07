<template>
  <div class="inner-header">
    <div class="container">
      <h3 class="breadcrumb-title text-white bold">Contact</h3>
      <nav aria-label="breadcrumb" class="breadcrumb-nav">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'Home' }">
              {{ $t('nav.home') }}
            </router-link>
            <!-- <a href="index.php">Home</a> -->
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ $t(`nav.${currentActivePage}`) }}
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentActivePage: '',
    }
  },
  created() {
    this.checkCurrentPage()
  },
  methods: {
    checkCurrentPage() {
      this.currentActivePage = this.$route.name
      console.log(this.currentActivePage)
    },
  },
  watch: {
    $route() {
      this.checkCurrentPage()
    },
  },
}
</script>

<style scoped lang="scss">
.inner-header {
  background: url('@/assets/images/intro.jpg') fixed center no-repeat;
  background-size: cover;
  height: 250px;
  padding-top: 100px;
}
.breadcrumb {
  background-color: transparent;
}
.breadcrumb-item {
  font-size: 17px;
}
.breadcrumb-item a {
  color: white;
}
.breadcrumb-item.active {
  color: white;
}
.breadcrumb-item + .breadcrumb-item::before {
  color: white;
}
.breadcrumb-title {
  font-size: 40px;
}
</style>
