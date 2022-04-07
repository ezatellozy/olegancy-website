<template>
  <breadcrumb />
  <section class="contact-page container p-t-50 p-b-20">
    <div class="title text-center">
      <h2 class="text-center f-s-35">Get In Touch</h2>
    </div>
    <div class="row m-t-30">
      <div class="col-lg-6 col-12">
        <div class="p-20 bg-light">
          <h3 class="primary-color m-b-15">Contact Us</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has been standard. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
          </p>
          <ul class="social p-0 d-flex">
            <li>
              <a href="#" target="_blank">
                <font-awesome-icon
                  :icon="['fab', 'facebook-f']"
                ></font-awesome-icon>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <font-awesome-icon
                  :icon="['fab', 'twitter']"
                ></font-awesome-icon>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <font-awesome-icon
                  :icon="['fab', 'youtube']"
                ></font-awesome-icon>
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
          </ul>
        </div>
        <div class="address bg-light p-20 m-t-20">
          <h3 class="primary-color m-b-15">Contact Info</h3>
          <ul class="p-0">
            <li>
              <font-awesome-icon
                :class="$i18n.locale == 'en' ? 'm-r-10' : 'm-l-10'"
                :icon="['fas', 'map-marker-alt']"
              ></font-awesome-icon>
              <span>1234 Address name</span>
            </li>
            <li>
              <font-awesome-icon
                :class="$i18n.locale == 'en' ? 'm-r-10' : 'm-l-10'"
                :icon="['fas', 'phone']"
              ></font-awesome-icon>
              <span>(123) 456-7890</span>
            </li>
            <li>
              <font-awesome-icon
                :class="$i18n.locale == 'en' ? 'm-r-10' : 'm-l-10'"
                :icon="['fas', 'envelope']"
              ></font-awesome-icon>
              <span>mail@example.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6 col-12">
        <div class="message p-20 bg-light">
          <h3 class="primary-color m-b-20">Drop Your Message</h3>
          <b-form @submit="onSubmit">
            <b-row>
              <b-col cols="12" sm="6" md="12" class="m-b-15">
                <b-form-group>
                  <b-form-input
                    v-model="name"
                    type="text"
                    placeholder="Name"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" sm="6" md="12" class="m-b-15">
                <b-form-group>
                  <b-form-input
                    v-model="email"
                    type="text"
                    placeholder="Email Address"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" sm="12" class="m-b-15">
                <b-form-group>
                  <b-form-textarea
                    v-model="message"
                    placeholder="write your message"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
              </b-col>
              <div>
                <button type="submit" class="btn">Send Message</button>
              </div>
            </b-row>
          </b-form>
        </div>
      </div>
    </div>
    <div class="map m-t-50">
      <div class="title text-center">
        <h2 class="text-center f-s-35">How To Get There</h2>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.846732571935!2d31.376556714580115!3d31.030519581534364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79d75290d319b%3A0x1fa0c5c9fc92cad0!2sTechno+Egypt+Software+Company+Web+Design!5e0!3m2!1sen!2seg!4v1539005674738"
        width="600"
        height="450"
        frameborder="0"
        style="border: 0;"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
export default {
  components: { Breadcrumb },
  name: 'contactUs',
  data() {
    return {
      email: '',
      name: '',
      message: '',
    }
  },
  methods: {
    onSubmit() {},
  },
}
</script>

<style scoped lang="scss">
.contact-page ul.social li svg {
  color: #303f9f;
  font-size: 20px;
}
.contact-page .address ul li {
  margin-bottom: 7px;
  font-size: 15px;
}
.contact-page .address ul li svg {
  color: #303f9f;
}
.contact-page form textarea {
  height: 150px;
}
.contact-page .map iframe {
  width: 100%;
  height: 350px;
}
</style>
