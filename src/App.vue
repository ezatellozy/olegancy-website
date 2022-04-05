<template>
  <div :class="$store.getters.locale == 'ar' ? 'is-rtl' : ''">
    <navbar />
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar,
  },
}
</script>

<style lang="scss">
.is-rtl {
  direction: rtl;
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
