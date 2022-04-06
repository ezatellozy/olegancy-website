<template>
  <section class="contact">
    <div class="row m-0">
      <div class="col-md-6 p-0">
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.846732571935!2d31.376556714580115!3d31.030519581534364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79d75290d319b%3A0x1fa0c5c9fc92cad0!2sTechno+Egypt+Software+Company+Web+Design!5e0!3m2!1sen!2seg!4v1538316587388"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="col-md-6 p-0">
        <div class="contact-info p-30">
          <h2 class="primary-color m-b-20 text-center">
            Keep in touch with us
          </h2>
          <ul class="info p-0 m-b-30">
            <li>
              <div
                class="icon rounded-circle bg-primary-color text-white"
                :class="$i18n.locale == 'en' ? 'm-r-10' : 'm-l-10'"
              >
                <font-awesome-icon
                  :icon="['fas', 'map-marker-alt']"
                ></font-awesome-icon>
              </div>
              <span>
                El-Mansoura , Abd Elslam Aref street .
              </span>
            </li>
            <li>
              <div
                class="icon rounded-circle bg-primary-color text-white"
                :class="$i18n.locale == 'en' ? 'm-r-10' : 'm-l-10'"
              >
                <font-awesome-icon :icon="['fas', 'phone']"></font-awesome-icon>
              </div>
              <span>+20101010010</span>
            </li>
            <li>
              <div
                class="icon rounded-circle bg-primary-color text-white"
                :class="$i18n.locale == 'en' ? 'm-r-10' : 'm-l-10'"
              >
                <font-awesome-icon :icon="['fas', 'phone']"></font-awesome-icon>
              </div>
              <span>+20101000010</span>
            </li>
          </ul>
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
              <div class="text-center">
                <button type="submit" class="btn">Send Message</button>
              </div>
            </b-row>
          </b-form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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

<style lang="scss" scoped>
/** Contact **/
.contact {
  background: url('@/assets/images/bg2.jpg') no-repeat center fixed;
  background-size: cover;
}
.contact .map iframe {
  width: 100%;
  height: 580px;
  margin-bottom: -6px;
}
.contact ul.info li {
  display: block;
  margin-bottom: 12px;
  clear: both;
  display: flex;
  align-items: center;
}
.contact ul.info li .icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact ul.info li svg {
  font-size: 20px;
}
.contact ul.info li span {
  width: 80%;
}
.contact form textarea {
  height: 140px;
}
.contact .form-control {
  background-color: white;
  border: 0;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.18);
  padding: 10px;
}
/** Contact **/
</style>
