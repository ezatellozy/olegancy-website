<template>
  <section class="lawyers container p-t-30">
    <div class="title text-center">
      <h2 class="text-center f-s-35">Our lawyers</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley.
      </p>
    </div>

    <b-tabs pills>
      <b-tab title="Most Rated" active>
        <div
          class="tab-pane fade show active"
          id="pills-tab1"
          role="tabpanel"
          aria-labelledby="pills-tab1-tab"
        >
          <b-row class="justify-content-center">
            <lawer-card
              v-for="lawyer in lawyers"
              :key="lawyer.id"
              :lawyer="lawyer"
            />
          </b-row>
        </div>
      </b-tab>
      <b-tab title="Most Viewed">
        <div
          class="tab-pane fade show active"
          id="pills-tab1"
          role="tabpanel"
          aria-labelledby="pills-tab1-tab"
        >
          <b-row class="justify-content-center">
            <lawer-card
              v-for="lawyer in lawyers2"
              :key="lawyer.id"
              :lawyer="lawyer"
            />
          </b-row>
        </div>
      </b-tab>
      <b-tab title="Most Recent">
        <div
          class="tab-pane fade show active"
          id="pills-tab1"
          role="tabpanel"
          aria-labelledby="pills-tab1-tab"
        >
          <b-row class="justify-content-center">
            <lawer-card
              v-for="lawyer in lawyers3"
              :key="lawyer.id"
              :lawyer="lawyer"
            />
          </b-row>
        </div>
      </b-tab>
    </b-tabs>
  </section>
</template>

<script>
import LawerCard from './LawerCard.vue'
export default {
  components: { LawerCard },
  data() {
    return {
      lawyers: [
        {
          id: 1,
          name: 'Lawyer Name',
          phone: '2010012345678',
          address: ' 12 Almotaser St. Mansoura',
          media: 'images/lawyer1.jpg',
        },
        {
          id: 2,
          name: 'Lawyer Name',
          phone: '2010012345678',
          address: ' 12 Almotaser St. Mansoura',
          media: 'images/lawyer2.jpg',
        },
        {
          id: 3,
          name: 'Lawyer Name',
          phone: '2010012345678',
          address: ' 12 Almotaser St. Mansoura',
          media: 'images/lawyer3.jpg',
        },
        {
          id: 4,
          name: 'Lawyer Name',
          phone: '2010012345678',
          address: ' 12 Almotaser St. Mansoura',
          media: 'images/lawyer4.jpg',
        },
        {
          id: 5,
          name: 'Lawyer Name',
          phone: '2010012345678',
          address: ' 12 Almotaser St. Mansoura',
          media: 'images/lawyer5.jpg',
        },
        {
          id: 6,
          name: 'Lawyer Name',
          phone: '2010012345678',
          address: ' 12 Almotaser St. Mansoura',
          media: 'images/lawyer6.jpg',
        },
        {
          id: 7,
          name: 'Lawyer Name',
          phone: '2010012345678',
          address: ' 12 Almotaser St. Mansoura',
          media: 'images/lawyer7.jpg',
        },
        {
          id: 8,
          name: 'Lawyer Name',
          phone: '2010012345678',
          address: ' 12 Almotaser St. Mansoura',
          media: 'images/lawyer8.jpg',
        },
      ],
      lawyers2: [
        {
          id: 1,
          name: 'Lawyer Name',
          phone: '2010012345678',
          address: ' 12 Almotaser St. Mansoura',
          media: 'images/lawyer1.jpg',
        },
        {
          id: 2,
          name: 'Lawyer Name',
          phone: '2010012345678',
          address: ' 12 Almotaser St. Mansoura',
          media: 'images/lawyer2.jpg',
        },
        {
          id: 3,
          name: 'Lawyer Name',
          phone: '2010012345678',
          address: ' 12 Almotaser St. Mansoura',
          media: 'images/lawyer3.jpg',
        },
        {
          id: 4,
          name: 'Lawyer Name',
          phone: '2010012345678',
          address: ' 12 Almotaser St. Mansoura',
          media: 'images/lawyer4.jpg',
        },
      ],
      lawyers3: [
        {
          id: 1,
          name: 'Lawyer Name',
          phone: '2010012345678',
          address: ' 12 Almotaser St. Mansoura',
          media: 'images/lawyer1.jpg',
        },
        {
          id: 2,
          name: 'Lawyer Name',
          phone: '2010012345678',
          address: ' 12 Almotaser St. Mansoura',
          media: 'images/lawyer2.jpg',
        },
        {
          id: 3,
          name: 'Lawyer Name',
          phone: '2010012345678',
          address: ' 12 Almotaser St. Mansoura',
          media: 'images/lawyer3.jpg',
        },
        {
          id: 4,
          name: 'Lawyer Name',
          phone: '2010012345678',
          address: ' 12 Almotaser St. Mansoura',
          media: 'images/lawyer4.jpg',
        },
        {
          id: 5,
          name: 'Lawyer Name',
          phone: '2010012345678',
          address: ' 12 Almotaser St. Mansoura',
          media: 'images/lawyer5.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.tabs {
  & > div {
    margin-bottom: 20px;
  }
}

/** Lawyers **/
.nav-pills {
  justify-content: center;
  margin-bottom: 20px;

  .nav-item {
    margin: 0 10px 20px;
    a {
      color: #000 !important;
    }
  }
  .nav-link {
    border-radius: 0;
    padding: 10px 35px;
    border: solid 1px #303f9f;
    &.active {
      color: #fff !important;
    }
  }
}

.nav-pills .nav-link.active,
.show > .nav-pills .nav-link {
  background-color: #303f9f !important;
}

/** Lawyers **/
</style>
