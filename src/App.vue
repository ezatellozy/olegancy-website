<template>
  <div
    :class="$store.getters.locale == 'ar' ? 'is-rtl' : ''"
    style="min-height: 100vh;"
  >
    <main-header />
    <navbar />
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <main-footer class="flex-end" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
export default {
  components: {
    Navbar,
    MainHeader,
    MainFooter,
  },
}
</script>

<style lang="scss">
.is-rtl {
  direction: rtl;
}

.logo {
  max-height: 50px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
