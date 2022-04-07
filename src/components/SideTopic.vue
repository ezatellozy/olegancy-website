<template>
  <div class="col-lg-3">
    <aside class="sidebar">
      <a
        href="#"
        data-toggle="modal"
        data-bs-target="#loginModal"
        class="btn add-article w-100 m-b-20"
      >
        Add New Article
      </a>
      <a href="#" target="_blank" class="side-banner">
        <img src="@/assets/images/side-banner.png" class="m-b-20" alt="" />
      </a>
      <div class="side-topics">
        <h4 class="bg-primary-color text-white p-10 m-b-20">Topics</h4>
        <ul class="p-l-10 p-r-10">
          <li class="d-flex justify-content-between">
            <div class="topic-title">
              <a href="forum-article.php" class="primary-color-hover">
                <h5 class="f-s-18">
                  <i class="fas fa-book-open m-r-5"></i>
                  this is test topic
                </h5>
              </a>
              <span class="text-muted f-s-13">By Author Name , 9 Oct 2018</span>
            </div>
            <div class="num">
              <span class="bg-light">3</span>
            </div>
          </li>
          <li class="d-flex justify-content-between">
            <div class="topic-title">
              <a href="forum-article.php" class="primary-color-hover">
                <h5 class="f-s-18">
                  <i class="fas fa-book-open m-r-5"></i>
                  this is test topic
                </h5>
              </a>
              <span class="text-muted f-s-13">By Author Name , 9 Oct 2018</span>
            </div>
            <div class="num">
              <span class="bg-light">50</span>
            </div>
          </li>
          <li class="d-flex justify-content-between">
            <div class="topic-title">
              <a href="forum-article.php" class="primary-color-hover">
                <h5 class="f-s-18">
                  <i class="fas fa-book-open m-r-5"></i>
                  this is test topic
                </h5>
              </a>
              <span class="text-muted f-s-13">By Author Name , 9 Oct 2018</span>
            </div>
            <div class="num">
              <span class="bg-light">3</span>
            </div>
          </li>
          <li class="d-flex justify-content-between">
            <div class="topic-title">
              <a href="forum-article.php" class="primary-color-hover">
                <h5 class="f-s-18">
                  <i class="fas fa-book-open m-r-5"></i>
                  this is test topic
                </h5>
              </a>
              <span class="text-muted f-s-13">By Author Name , 9 Oct 2018</span>
            </div>
            <div class="num">
              <span class="bg-light">3</span>
            </div>
          </li>
          <li class="d-flex justify-content-between">
            <div class="topic-title">
              <a href="forum-article.php" class="primary-color-hover">
                <h5 class="f-s-18">
                  <i class="fas fa-book-open m-r-5"></i>
                  this is test topic
                </h5>
              </a>
              <span class="text-muted f-s-13">By Author Name , 9 Oct 2018</span>
            </div>
            <div class="num">
              <span class="bg-light">50</span>
            </div>
          </li>
          <li class="d-flex justify-content-between">
            <div class="topic-title">
              <a href="forum-article.php" class="primary-color-hover">
                <h5 class="f-s-18">
                  <i class="fas fa-book-open m-r-5"></i>
                  this is test topic
                </h5>
              </a>
              <span class="text-muted f-s-13">By Author Name , 9 Oct 2018</span>
            </div>
            <div class="num">
              <span class="bg-light">3</span>
            </div>
          </li>
          <li class="d-flex justify-content-between">
            <div class="topic-title">
              <a href="forum-article.php" class="primary-color-hover">
                <h5 class="f-s-18">
                  <i class="fas fa-book-open m-r-5"></i>
                  this is test topic
                </h5>
              </a>
              <span class="text-muted f-s-13">By Author Name , 9 Oct 2018</span>
            </div>
            <div class="num">
              <span class="bg-light">3</span>
            </div>
          </li>
          <li class="d-flex justify-content-between">
            <div class="topic-title">
              <a href="forum-article.php" class="primary-color-hover">
                <h5 class="f-s-18">
                  <i class="fas fa-book-open m-r-5"></i>
                  this is test topic
                </h5>
              </a>
              <span class="text-muted f-s-13">By Author Name , 9 Oct 2018</span>
            </div>
            <div class="num">
              <span class="bg-light">3</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
/************** Sidebar **************/
.sidebar .add-article {
  padding: 20px 10px;
  font-size: 20px;
}
.side-banner img {
  max-width: 100%;
}
.side-topics ul li svg {
  color: #303f9f;
}
.side-topics ul li {
  border-bottom: solid 1px #f5f5f5;
  padding-bottom: 15px;
  margin-bottom: 15px;
}
.side-topics ul li .num span {
  padding: 2px 10px;
  position: relative;
}
.side-topics ul li .num span::after {
  content: '';
  position: absolute;
  top: 23%;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  clear: both;
}
/************** Sidebar **************/
</style>
