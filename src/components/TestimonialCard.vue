<template>
  <div class="item m-auto d-flex flex-row flex-lg-column flex-xl-row">
    <figure class="mb-0">
      <img
        class="rounded-circle"
        src="@/assets/images/lawyer1.jpg"
        alt="client1"
      />
    </figure>
    <div class="content text-white text-start px-4">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <h5>Jonathen Adler</h5>
      <h6 class="f-s-14">Business</h6>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.item {
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  figure {
    width: 120px;
    height: 120px;
  }
  .content {
    width: 75%;
  }
}
</style>
