<template>
  <section class="landing d-flex">
    <div class="container my-auto">
      <b-form @submit="onSubmit">
        <b-row class="justify-content-center">
          <b-col cols="12" md="6" xl="4">
            <b-form-group>
              <b-form-select
                v-model="selectedItem"
                :options="options"
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6" xl="4">
            <b-form-group>
              <b-form-select
                v-model="selectedItem"
                :options="options"
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6" xl="4">
            <b-form-group>
              <b-form-select
                v-model="selectedItem"
                :options="options"
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6" xl="4">
            <b-form-group>
              <b-form-select
                v-model="selectedItem"
                :options="options"
              ></b-form-select>
            </b-form-group>
          </b-col>

          <div class="action text-center">
            <b-button cols="6" type="submit" variant="primary">Submit</b-button>
          </div>
        </b-row>
      </b-form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 1, text: 'Mike Macdonald' },
        { value: 2, text: 'Larsen Shaw' },
        { value: 3, text: 'Jami Cord' },
      ],
    }
  },
  methods: {
    onSubmit() {},
  },
}
</script>

<style scoped lang="scss">
.landing {
  background-image: url('@/assets/banner.jpg');
  background-position: center center;
  background-size: cover;
  height: 600px;
  position: relative;
  color: white;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .container {
    z-index: 10;
  }
}
</style>
