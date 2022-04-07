<template>
  <breadcrumb />
  <section class="container p-t-40 p-b-40">
    <b-row class="mt-5 register mx-auto d-flex justify-content-center">
      <b-col cols="12" class="d-flex steps justify-content-between">
        <div
          class="step"
          @click="
            () => {
              step1 = true
              step2 = false
              step3 = false
            }
          "
          :class="step1 ? 'active' : ''"
        >
          <a href="#" class="">
            <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon>
          </a>
        </div>
        <div
          class="step"
          @click="
            () => {
              step2 = true
              step1 = false
              step3 = false
            }
          "
          :class="step2 ? 'active' : ''"
        >
          <a href="#" class="">
            <font-awesome-icon :icon="['far', 'envelope']"></font-awesome-icon>
          </a>
        </div>
        <div
          class="step"
          @click="
            () => {
              step3 = true
              step2 = false
              step1 = false
            }
          "
          :class="step3 ? 'active' : ''"
        >
          <a href="#" class="">
            <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
          </a>
        </div>
      </b-col>
      <b-col cols="12">
        <b-form @submit="onSubmit">
          <!-- First Step -->
          <form-step-1 v-if="step1" @goStep="changeStep($event)" />
          <!-- Second Step -->
          <form-step-2 v-if="step2" @goStep="changeStep($event)" />

          <!-- Third Step -->
          <form-step-3 v-if="step3" />
        </b-form>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import FormStep1 from '@/components/FormStep1.vue'
import FormStep2 from '@/components/FormStep2.vue'
import FormStep3 from '@/components/FormStep3.vue'
export default {
  components: { Breadcrumb, FormStep1, FormStep2, FormStep3 },
  name: 'Register',
  data() {
    return {
      step1: true,
      step2: false,
      step3: false,
    }
  },
  methods: {
    changeStep(e) {
      if (e == 1) {
        this.step1 = false
        this.step2 = true
        this.step3 = false
      } else if (e == 2) {
        this.step1 = false
        this.step2 = false
        this.step3 = true
      }
    },
  },
}
</script>

<style lang="scss">
/*************** Register ****************/
// .register-first .second a,
// .register-first .third a {
//   cursor: not-allowed;
// }
// .register-first .steps-form .steps-row .first .btn-circle {
//   background-color: #303f9f !important;
//   color: white !important;
// }
// .steps-form .steps-row .second .btn-circle:hover,
// .steps-form .steps-row .third .btn-circle:hover {
//   background-color: white !important;
//   color: #303f9f !important;
// }

// .register-second .second a,
// .register-second .third a {
//   cursor: not-allowed;
// }
// .register-second .steps-form .steps-row .second .btn-circle {
//   background-color: #303f9f !important;
//   color: white !important;
// }
.steps-form .steps-row .first .btn-circle:hover,
.steps-form .steps-row .third .btn-circle:hover {
  background-color: white !important;
  color: #303f9f !important;
}

.register-third .second a,
.register-third .third a {
  cursor: not-allowed;
}
.register-third .steps-form .steps-row .third .btn-circle {
  background-color: #303f9f !important;
  color: white !important;
}
.steps-form .steps-row .second .btn-circle:hover,
.steps-form .steps-row .first .btn-circle:hover {
  background-color: white !important;
  color: #303f9f !important;
}

.register {
  max-width: 800px;
}

.steps {
  position: relative;
  margin-bottom: 30px;

  &::before {
    content: '';
    top: 50%;
    transform: translateY(-50%);
    bottom: 0;
    position: absolute;
    width: calc(100% - 24px);
    height: 2px;
    background-color: #7283a7;
  }
  .step {
    height: 218px;
    position: relative;
    width: 60px;
    height: 60px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    border: 1px solid #59698d;
    svg {
      font-size: 35px;
      transition: all 0s ease-in-out;
      color: #7283a7;
    }
    &.active {
      background-color: #303f9f !important;
      svg {
        color: #fff !important;
      }
    }
    .no-height {
      height: 50px;
    }
    p {
      margin-top: 0.5rem;
    }
  }
}

.register .success .icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 40px auto;
  background-color: #303f9f;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register .success .icon svg {
  font-size: 30px;
  color: white;
}
[type='file'] {
  filter: alpha(opacity=0);
  opacity: 0;
  position: absolute;
}
[type='file'] + label {
  left: 0;
  top: 0.5em;
  color: #303f9f;
  cursor: pointer;
  position: relative;
  border-radius: 3px;
  padding: 10px;
  width: 100%;
  font-size: 17px;
  transition: all 0.4s ease-in-out;
}
[type='file'] + label:before {
  content: '\f093';
  font-family: 'Font Awesome 6 Free';
  font-weight: 900;
  color: #303f9f;
  margin-left: 5px;
  margin-right: 5px;
  transition: all 0.4s ease-in-out;
}
/*************** Register ****************/
</style>
