<template>
  <breadcrumb />
  <section class="archive-books container p-t-50 p-b-50" id="archive-books">
    <div class="row m-t-30 justify-content-center">
      <div class="col-lg-3 col-sm-6 col-11 m-b-30">
        <figure>
          <img src="@/assets/images/book1.jpg" alt="book title" />
          <div class="overlay">
            <div class="text text-white">
              <h4 class="bold">Book Name</h4>
              <ul class="p-0 text-white m-t-30 f-s-17">
                <li>
                  Author: author name
                </li>
                <li>
                  Views: 5
                </li>
              </ul>
              <a href="single-book.php">
                <i class="fas fa-book-open"></i>
              </a>
            </div>
          </div>
        </figure>
      </div>
      <div class="col-lg-3 col-sm-6 col-11 m-b-30">
        <figure>
          <img src="@/assets/images/book2.jpg" alt="book title" />
          <div class="overlay">
            <div class="text text-white">
              <h4 class="bold">Book Name</h4>
              <ul class="p-0 text-white m-t-30 f-s-17">
                <li>
                  Author:Author name
                </li>
                <li>
                  Views: 5
                </li>
              </ul>
              <a href="single-book.php">
                <i class="fas fa-book-open"></i>
              </a>
            </div>
          </div>
        </figure>
      </div>
      <div class="col-lg-3 col-sm-6 col-11 m-b-30">
        <figure>
          <img src="@/assets/images/book3.jpg" alt="book title" />
          <div class="overlay">
            <div class="text text-white">
              <h4 class="bold">Book Name</h4>
              <ul class="p-0 text-white m-t-30 f-s-17">
                <li>
                  Author:Author name
                </li>
                <li>
                  Views: 5
                </li>
              </ul>
              <a href="single-book.php">
                <i class="fas fa-book-open"></i>
              </a>
            </div>
          </div>
        </figure>
      </div>
      <div class="col-lg-3 col-sm-6 col-11 m-b-30">
        <figure>
          <img src="@/assets/images/book1.jpg" alt="book title" />
          <div class="overlay">
            <div class="text text-white">
              <h4 class="bold">Book Name</h4>
              <ul class="p-0 text-white m-t-30 f-s-17">
                <li>
                  Author:Author name
                </li>
                <li>
                  Views: 5
                </li>
              </ul>
              <a href="single-book.php">
                <i class="fas fa-book-open"></i>
              </a>
            </div>
          </div>
        </figure>
      </div>
      <div class="col-lg-3 col-sm-6 col-11 m-b-30">
        <figure>
          <img src="@/assets/images/book3.jpg" alt="book title" />
          <div class="overlay">
            <div class="text text-white">
              <h4 class="bold">Book Name</h4>
              <ul class="p-0 text-white m-t-30 f-s-17">
                <li>
                  Author:Author name
                </li>
                <li>
                  Views: 5
                </li>
              </ul>
              <a href="single-book.php">
                <i class="fas fa-book-open"></i>
              </a>
            </div>
          </div>
        </figure>
      </div>
      <div class="col-lg-3 col-sm-6 col-11 m-b-30">
        <figure>
          <img src="@/assets/images/book1.jpg" alt="book title" />
          <div class="overlay">
            <div class="text text-white">
              <h4 class="bold">Book Name</h4>
              <ul class="p-0 text-white m-t-30 f-s-17">
                <li>
                  Author:Author name
                </li>
                <li>
                  Views: 5
                </li>
              </ul>
              <a href="single-book.php">
                <i class="fas fa-book-open"></i>
              </a>
            </div>
          </div>
        </figure>
      </div>
      <div class="col-lg-3 col-sm-6 col-11 m-b-30">
        <figure>
          <img src="@/assets/images/book2.jpg" alt="book title" />
          <div class="overlay">
            <div class="text text-white">
              <h4 class="bold">Book Name</h4>
              <ul class="p-0 text-white m-t-30 f-s-17">
                <li>
                  Author:Author name
                </li>
                <li>
                  Views: 5
                </li>
              </ul>
              <a href="single-book.php">
                <i class="fas fa-book-open"></i>
              </a>
            </div>
          </div>
        </figure>
      </div>
      <div class="col-lg-3 col-sm-6 col-11 m-b-30">
        <figure>
          <img src="@/assets/images/book3.jpg" alt="book title" />
          <div class="overlay">
            <div class="text text-white">
              <h4 class="bold">Book Name</h4>
              <ul class="p-0 text-white m-t-30 f-s-17">
                <li>
                  Author:Author name
                </li>
                <li>
                  Views: 5
                </li>
              </ul>
              <a href="single-book.php">
                <i class="fas fa-book-open"></i>
              </a>
            </div>
          </div>
        </figure>
      </div>
    </div>
    <div class="mt-3">
      <b-pagination
        v-model="currentPage"
        align="center"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="archive-books"
      ></b-pagination>
    </div>
    <!-- <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav> -->
  </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
export default {
  components: { Breadcrumb },
  name: 'bookLibrary',
  data() {
    return {
      currentPage: 1,
      rows: 5,
      perPage: 5,
    }
  },
}
</script>

<style lang="scss">
/************** Archive Books **************/
.archive-books figure {
  height: 375px;
  position: relative;
}
.archive-books figure .overlay {
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: 0.5s ease;
}
.archive-books figure:hover .overlay {
  width: 100%;
}
.archive-books figure .overlay .text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  white-space: nowrap;
}
.archive-books figure .overlay .text h4 {
  white-space: pre-wrap;
  line-height: 32px;
}
.archive-books figure .overlay .text svg {
  font-size: 35px;
  color: white;
  transition: all 0.4s ease-in-out;
}
.archive-books figure .overlay .text svg:hover {
  color: #303f9f;
}
/************** Archive Books **************/
</style>
