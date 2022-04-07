<template>
  <breadcrumb />
  <section class="register container p-t-40 p-b-40">
    <div class="row pt-5 d-flex justify-content-center">
      <div class="col-md-2 pl-5 pl-md-0 pb-5">
        <!-- Stepper -->
        <div class="steps-form">
          <div class="steps-row setup-panel d-flex justify-content-around">
            <div class="steps-step">
              <a href="#step-1" class="btn btn-info btn-circle waves-effect">
                <i class="fas fa-user"></i>
              </a>
            </div>
            <div class="steps-step">
              <a href="#step-2" class="btn btn-pink btn-circle waves-effect">
                <i class="far fa-envelope"></i>
              </a>
            </div>
            <div class="steps-step">
              <a href="#step-3" class="btn btn-pink btn-circle waves-effect">
                <i class="fas fa-check"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <form role="form" action="" method="post">
          <!-- First Step -->
          <div class="row setup-content" id="step-1">
            <div class="col-md-12">
              <a href="#" class="btn" style="background-color: #01579b;">
                <i class="fab fa-facebook-f m-r-5"></i>
                Register with Facebook
              </a>
              <a href="#" class="btn" style="background-color: #f44336;">
                <i class="fab fa-google m-r-5"></i>
                Register with Google
              </a>
              <a href="#" class="btn" style="background-color: #0091ea;">
                <i class="fab fa-twitter m-r-5"></i>
                Register with Twitter
              </a>
              <h3 class="bold pl-0 my-4"><strong>Basic Information</strong></h3>
              <form>
                <div class="form-group">
                  <label for="name">Your Name</label>
                  <input id="name" type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input id="email" type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="FormControlSelect">Account Type</label>
                  <select class="form-control" id="FormControlSelect">
                    <option>Lawyer</option>
                    <option>Customer</option>
                  </select>
                </div>
                <div class="form-group">
                  <input
                    id="photo"
                    type="file"
                    placeholder="Upload Your Profile picture"
                  />
                  <label for="photo">Upload Your Profile picture</label>
                </div>
                <span class="text-muted f-s-14">
                  By clicking Join now, you agree to hifriends's User Agreement,
                  Privacy Policy, and Cookie Policy.
                </span>
                <button class="btn float-right m-t-10" type="button">
                  Next
                </button>
              </form>
            </div>
          </div>

          <!-- Second Step -->
          <div class="row setup-content" id="step-2">
            <div class="col-md-12">
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
                  By clicking Join now, you agree to hifriends's User Agreement,
                  Privacy Policy, and Cookie Policy.
                </span>
                <button class="btn float-right m-t-10" type="button">
                  Join Now
                </button>
              </form>
            </div>
          </div>

          <!-- Third Step -->
          <div class="row setup-content" id="step-3">
            <div class="col-md-12 text-center success">
              <div class="icon">
                <i class="fas fa-check"></i>
              </div>
              <h2 class="primary-color bold m-b-30">
                You Registerd Successfully
              </h2>
              <a href="#" class="primary-color f-s-15">
                Go to your dashboard
                <i class="fas fa-angle-double-right m-l-5"></i>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
export default {
  components: { Breadcrumb },
  name: 'Register',
}
</script>

<style lang="scss">
/*************** Register ****************/
.register-first .second a,
.register-first .third a {
  cursor: not-allowed;
}
.register-first .steps-form .steps-row .first .btn-circle {
  background-color: #303f9f !important;
  color: white !important;
}
.steps-form .steps-row .second .btn-circle:hover,
.steps-form .steps-row .third .btn-circle:hover {
  background-color: white !important;
  color: #303f9f !important;
}

.register-second .second a,
.register-second .third a {
  cursor: not-allowed;
}
.register-second .steps-form .steps-row .second .btn-circle {
  background-color: #303f9f !important;
  color: white !important;
}
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

.steps-form {
  width: 2px;
  height: 436px;
  position: relative;
}
.steps-form svg {
  font-size: 35px;
  transition: all 0s ease-in-out;
}
form .setup-content .form-control {
  border: solid 1px #ddd;
}
form .setup-content .bootstrap-select > .dropdown-toggle {
  border: 0;
  padding: 0;
}
form .setup-content .bootstrap-select > .dropdown-toggle:focus {
  outline: 0 !important;
  outline-offset: 0 !important;
}
.steps-form .steps-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
.steps-form .steps-row:before {
  top: 14px;
  bottom: 0;
  position: absolute;
  content: '';
  width: 2px;
  height: 100%;
  background-color: #7283a7;
}
.steps-form .steps-row .steps-step {
  height: 218px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  position: relative;
}
.steps-form .steps-row .steps-step.no-height {
  height: 50px;
}
.steps-form .steps-row .steps-step p {
  margin-top: 0.5rem;
}
.steps-form .steps-row .steps-step button[disabled] {
  opacity: 1 !important;
  filter: alpha(opacity=100) !important;
}
.steps-form .steps-row .steps-step .btn {
  background-color: transparent;
  color: #000;
  border-radius: 50% !important;
  border-color: #303f9f;
  min-width: 10px;
  padding: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
}
.steps-form .steps-row .steps-step .btn:active {
  border-color: transparent;
  border: 0;
}
.steps-form .steps-row .steps-step .btn-circle {
  width: 60px;
  height: 60px;
  background-color: white !important;
  color: #59698d !important;
  margin-top: -22px;
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
  font-family: FontAwesome;
  color: #303f9f;
  margin-left: 5px;
  transition: all 0.4s ease-in-out;
}
/*************** Register ****************/
</style>
