<template>
  <section class="landing d-flex">
    <div class="container my-auto">
      <div class="search">
        <b-form @submit="onSubmit">
          <h2 class="text-white bold text-center">Our Search Engine</h2>
          <h5 class="text-white text-center m-b-30">
            use our search engine to find a lawyer by name or all lawyers neer
            you
          </h5>
          <b-row class="justify-content-center">
            <b-col cols="12" lg="6" xl="3">
              <b-form-group>
                <b-form-select
                  v-model="selectedItem"
                  :options="lawyersName"
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6" xl="3">
              <b-form-group>
                <b-form-select
                  v-model="countryS"
                  :options="country"
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6" xl="3">
              <b-form-group>
                <b-form-select v-model="cityS" :options="city"></b-form-select>
              </b-form-group>
            </b-col>

            <b-col cols="12" md="6" xl="3">
              <button type="submit" class="btn w-100">Search</button>
            </b-col>
          </b-row>
        </b-form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: null,
      name: '',
      countryS: '',
      cityS: '',
      lawyersName: [
        { value: null, text: 'Please select lawyer' },
        { value: 1, text: 'Mike Macdonald' },
        { value: 2, text: 'Larsen Shaw' },
        { value: 3, text: 'Jami Cord' },
      ],
      country: [
        { value: null, text: 'Please select country' },
        { value: 1, text: 'Egypt' },
        { value: 2, text: 'Saudi Arabia' },
        { value: 3, text: 'Emirates' },
      ],
      city: [
        { value: null, text: 'Please select City' },
        { value: 1, text: 'City' },
        { value: 2, text: 'City' },
        { value: 3, text: 'City' },
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
  background-image: url('@/assets/images/intro.jpg');
  background-position: center center;
  background-size: cover;
  height: 600px;
  position: relative;
  color: white;
  // &::before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   height: 100%;
  //   width: 100%;
  //   background-color: rgba(0, 0, 0, 0.4);
  // }
  .container {
    z-index: 10;
    .search {
      padding: 35px 35px 50px;
      background-color: rgba(0, 0, 0, 0.4);
      h2 {
        margin-bottom: 20px;
        font-size: 40px;
      }
      h5 {
        margin-bottom: 30px;
      }
      @media (max-width: 768px) {
        h2 {
          font-size: 30px;
        }
      }
      .form-select {
        padding: 10px 2.25rem 10px 0.75rem !important;
        color: gray;
      }
      .btn {
        margin-top: 0 !important;
      }
    }
  }
}
</style>
