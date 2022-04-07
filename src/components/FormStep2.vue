<template>
  <b-row>
    <b-col cols="12">
      <h3 class="font-weight-bold pl-0 my-4">
        <strong>Account Data</strong>
      </h3>
      <form>
        <div class="form-group">
          <label for="FormControlSelect">Account Type</label>
          <select class="form-control" id="FormControlSelect">
            <option>Lawyer</option>
            <option>Customer</option>
          </select>
        </div>
        <div class="form-row">
          <div class="col-6 m-b-15">
            <label for="phone">Your phone</label>
            <input id="phone" type="text" class="form-control" />
          </div>
          <div class="col-6 m-b-15">
            <label for="age">Age</label>
            <input id="age" type="text" class="form-control" />
          </div>
        </div>
        <div class="form-row">
          <div class="col-6 m-b-15">
            <label for="pass">Your Password</label>
            <input id="pass" type="text" class="form-control" />
          </div>
          <div class="col-6 m-b-15">
            <label for="confirm-pass">Confirm Password</label>
            <input id="confirm-pass" type="text" class="form-control" />
          </div>
        </div>
        <div class="form-row">
          <div class="col-4 m-b-15 form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label class="form-check-label" for="exampleRadios1">
              Male
            </label>
          </div>
          <div class="col-4 m-b-15 form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label class="form-check-label" for="exampleRadios2">
              Female
            </label>
          </div>
        </div>

        <span class="text-muted f-s-14">
          By clicking Join now, you agree to hifriends's User Agreement, Privacy
          Policy, and Cookie Policy.
        </span>
        <button class="btn float-right m-t-10" type="button">
          Join Now
        </button>
      </form>
    </b-col>
  </b-row>
</template>

<script>
export default {}
</script>

<style></style>
