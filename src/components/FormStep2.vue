<template>
  <b-row>
    <b-col cols="12">
      <h3 class="font-weight-bold pl-0 my-4">
        <strong>Account Data</strong>
      </h3>
      <b-form @submit.prevent>
        <b-row>
          <b-col cols="12" sm="6" md="12" class="m-b-15">
            <b-form-group>
              <!-- <label for="name">Your Name</label> -->
              <b-form-input
                v-model="phone"
                type="phone"
                placeholder="Your phone"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" sm="6" md="12" class="m-b-15">
            <b-form-group>
              <!-- <label for="name">Your Name</label> -->
              <b-form-input
                v-model="age"
                type="number"
                placeholder="Age"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" sm="6" md="12" class="m-b-15">
            <b-form-group>
              <!-- <label for="name">Your Name</label> -->
              <b-form-input
                v-model="password"
                type="password"
                placeholder="Your Password"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" sm="6" md="12" class="m-b-15">
            <b-form-group>
              <!-- <label for="name">Your Name</label> -->
              <b-form-input
                v-model="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" sm="6" md="12" class="m-b-15">
            <b-form-group>
              <b-form-radio v-model="gender" name="gender" value="male">
                Male
              </b-form-radio>
              <b-form-radio v-model="gender" name="gender" value="female">
                Female
              </b-form-radio>
            </b-form-group>
          </b-col>
          <span class="text-muted f-s-14">
            By clicking Join now, you agree to hifriends's User Agreement,
            Privacy Policy, and Cookie Policy.
          </span>
          <div>
            <button
              class="btn float-right m-t-10"
              type="button"
              @click="submit"
            >
              Join Now
            </button>
          </div>
        </b-row>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
export default {
  methods: {
    data() {
      return {
        gender: 'male',
      }
    },
    submit() {
      this.$emit('goStep', 2)
    },
  },
}
</script>

<style></style>
