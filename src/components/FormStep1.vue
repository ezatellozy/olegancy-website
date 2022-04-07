<template>
  <b-row>
    <b-col cols="12">
      <b-row>
        <b-col cols="12" md="4">
          <a
            href="#"
            class="btn w-100"
            style="background-color: #01579b !important;"
          >
            <font-awesome-icon
              :icon="['fab', 'facebook-f']"
            ></font-awesome-icon>
            Register with Facebook
          </a>
        </b-col>
        <b-col cols="12" md="4">
          <a
            href="#"
            class="btn w-100"
            style="background-color: #f44336 !important;"
          >
            <font-awesome-icon :icon="['fab', 'google']"></font-awesome-icon>

            Register with Google
          </a>
        </b-col>
        <b-col cols="12" md="4">
          <a
            href="#"
            class="btn w-100"
            style="background-color: #0091ea !important;"
          >
            <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
            Register with Twitter
          </a>
        </b-col>
      </b-row>
      <h3 class="bold pl-0 my-4">
        <strong>Basic Information</strong>
      </h3>
      <b-form @submit="onSubmit">
        <b-row>
          <b-col cols="12" sm="6" md="12" class="m-b-15">
            <b-form-group>
              <!-- <label for="name">Your Name</label> -->
              <b-form-input
                v-model="name"
                type="text"
                placeholder="Your Name"
                id="name"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" sm="6" md="12" class="m-b-15">
            <b-form-group>
              <!-- <label for="name">Your Name</label> -->
              <b-form-input
                v-model="email"
                type="email"
                placeholder="Email Address"
                id="email"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" sm="6" md="12" class="m-b-15">
            <b-form-group>
              <!-- <label for="name">Your Name</label> -->
              <b-form-select
                v-model="accountType"
                :options="accountTypeOptions"
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="12" sm="6" md="12" class="m-b-15">
            <div class="form-group">
              <b-form-file v-model="accountType"></b-form-file>
            </div>
          </b-col>
        </b-row>

        <span class="text-muted f-s-14">
          By clicking Join now, you agree to hifriends's User Agreement, Privacy
          Policy, and Cookie Policy.
        </span>
        <button class="btn float-right m-t-10" type="button">
          Next
        </button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      accountType: 1,
      accountTypeOptions: [
        { value: '1', text: 'Lawyer' },
        { value: '2', text: 'Customer' },
      ],
    }
  },
}
</script>

<style scpoed>
.btn {
  /* background-color: red !important; */
}
</style>
