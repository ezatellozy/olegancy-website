<template>
  <div :class="$store.getters.locale == 'ar' ? 'is-rtl' : ''">
    <main-header />
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
import MainHeader from './components/MainHeader.vue'
export default {
  components: {
    Navbar,
    MainHeader,
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

.modal {
  padding-top: 20px;
  .modal-header {
    border-bottom: 0;
    padding: 10px;
  }
  .modal-body {
    & > img {
      margin-bottom: 30px;
    }
  }
  .modal-footer {
    border-top: 0;
  }

  form {
    width: 75%;
    margin: auto;
    @media (max-width: 576px) {
      width: 100%;
    }
  }
  .or {
    background-color: white;
    color: #303f9f;
    font-size: 14px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    margin: 10px auto;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
    padding-top: 5px;
  }
  .form-control {
    height: 50px;
  }
  .links {
    display: flex;
    justify-content: space-between;
  }
  textarea {
    height: 150px !important;
  }
  .message-modal .form-control {
    font-size: 14px;
    height: 43px;
  }
  .message-modal form {
    width: 85%;
  }
}
</style>
