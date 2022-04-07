<template>
  <landing />
  <our-lawyers />
  <testimonials />
  <partners />
  <contact />
</template>

<script>
import Landing from '@/components/Landing.vue'
import OurLawyers from '@/components/OurLawyers.vue'
import Testimonials from '@/components/Testimonials.vue'
import Partners from '@/components/Partners.vue'
import Contact from '@/components/Contact.vue'
export default {
  name: 'Home',
  components: { Landing, OurLawyers, Testimonials, Partners, Contact },
}
</script>

<style></style>
