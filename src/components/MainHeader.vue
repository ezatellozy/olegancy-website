<template>
  <header>
    <div class="top-header py-2 bg-primary-color text-white">
      <div class="container d-flex justify-content-between flex-wrap">
        <ul class="login justify-content-center">
          <li :class="$i18n.locale == 'en' ? 'me-2' : 'ms-2'">
            <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">
              <font-awesome-icon
                :class="$i18n.locale == 'en' ? 'me-2' : 'ms-2'"
                :icon="['fas', 'sign-in-alt']"
              ></font-awesome-icon>
              <span>Login</span>
            </a>
          </li>
          <li>
            <router-link :to="{ name: 'Register' }">
              <font-awesome-icon
                :class="$i18n.locale == 'en' ? 'me-2' : 'ms-2'"
                :icon="['fas', 'user-plus']"
              ></font-awesome-icon>
              <span>New Member</span>
            </router-link>
          </li>
        </ul>
        <ul class="social d-flex justify-content-center">
          <li>
            <a href="#" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'facebook-f']"
              ></font-awesome-icon>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <font-awesome-icon :icon="['fab', 'youtube']"></font-awesome-icon>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'google-plus']"
              ></font-awesome-icon>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'linkedin-in']"
              ></font-awesome-icon>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'instagram']"
              ></font-awesome-icon>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <font-awesome-icon :icon="['fas', 'rss']"></font-awesome-icon>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'pinterest']"
              ></font-awesome-icon>
            </a>
          </li>
          <locale-switcher />
        </ul>
      </div>
    </div>

    <!-- Login Modal -->
    <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header border-0">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body text-center">
            <img
              src="@/assets/images/logo.png"
              class="logo d-block mx-auto"
              alt="olgency"
            />

            <div
              class="fb-login-button"
              data-max-rows="1"
              data-size="large"
              data-button-type="continue_with"
              data-show-faces="false"
              data-auto-logout-link="false"
              data-use-continue-as="false"
            ></div>

            <figure>
              <img
                src="@/assets/images/fb.png"
                style="max-width: 350px; margin: 0 auto 10px; cursor: pointer;"
                alt=""
              />
              <img
                src="@/assets/images/g+.png"
                style="max-width: 350px; margin: 0 auto 10px; cursor: pointer;"
                alt=""
              />
              <img
                src="@/assets/images/tw.png"
                style="max-width: 350px; margin: 0 auto 10px; cursor: pointer;"
                alt=""
              />
            </figure>

            <div class="or">OR</div>

            <b-form>
              <b-form-group>
                <b-form-input
                  type="email"
                  v-model="email"
                  class="form-control"
                  placeholder="Email Address"
                ></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input
                  type="password"
                  v-model="password"
                  class="form-control"
                  placeholder="Password"
                ></b-form-input>
              </b-form-group>
              <div class="links">
                <a href="#" class="primary-color secondary-color-hover f-s-14">
                  Do you forget password ?
                </a>
                <a
                  href="register.php"
                  class="primary-color secondary-color-hover f-s-14"
                >
                  Register now ..
                </a>
              </div>
              <button type="submit" class="btn m-t-20">Submit</button>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'
export default {
  components: { LocaleSwitcher },
  data() {
    return {
      email: '',
      password: '',
    }
  },
}
</script>

<style lang="scss">
ul.social li {
  margin: 0 5px;
}
ul.social li a svg {
  color: rgba(255, 255, 255, 0.95);
}
ul.login {
  display: flex;
}

ul.login li a {
  color: rgba(255, 255, 255, 0.95);
}

@media (max-width: 576px) {
  ul.login,
  ul.social {
    width: 100%;
    margin-bottom: 5px !important;
  }
}
</style>
