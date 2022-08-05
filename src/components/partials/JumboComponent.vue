<template>
  <div class="jumbo p-5 d-flex justify-content-center align-items-center">
          <div class="container mt-5 text-center">
            <div class="content_jumbotron">
              <div class="orange welcome">Welcome</div>
              <div class="name">I am Domenico</div>
             
              <div
                class="flip-container_text"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div class="flipper_text">
                  <div class="front_text junior orange rotate_zero">
                    Jr Front Web
                  </div>
                  <div class="back_text junior orange rotate_min">
                    Jr Back Web
                  </div>
                </div>
              </div>
              <!-- /.flip-container_text -->

              <div class="display-5 developer">Developer</div>
            </div>
            <!-- /.content_jumbotron -->
            <div class="img_code text-center">
              <img
                class="my_img img-fluid"
                src="@/assets/img/coding.png"
                alt="logo"
              />
            </div>
            <!-- /.img_code -->
          </div>
        </div>
        <!-- /.jumbo -->
</template>

<script>
export default {
    name: "JumboComponent"
    // per la funzione flip vedi App.vue in methods function front e back
}
</script>

<style lang="scss" scoped>
  /* FLIP BOX */
  .flip-container_text {
    perspective: 1000px;
    transform-style: preserve-3d;
  }
  .rotate_zero {
    transform: rotateX(0deg);
  }
  .rotate_max {
    transform: rotateX(180deg);
  }
  .rotate_min {
    transform: rotateX(-180deg);
  }
  .flip-container_text,
  .front_text,
  .back_text {
    width: 100%;
  }
  .flipper_text {
    transition: 0.6s;
    transform-style: preserve-3d;
  }
  /* hide back of pane during swap */
  .front_text,
  .back_text {
    backface-visibility: hidden;
    transition: 1s;
    transform-style: preserve-3d;
    border-radius: 0.5rem;
  }
  .back_text {
    position: absolute;
    top: 0;
    bottom: 0;
  }
  .front_text {
    z-index: 2;
  }
  /* END FLIP BOX */
  .jumbo {
    ul {
      li {
        list-style: none;
      }
    }
    .welcome {
      font-size: 4rem;
    }

    .name {
      font-size: 5rem;
    }

    .junior {
      font-size: 3rem;
      --animate-duration: 2.3s;
    }

    .developer {
      font-size: 3rem;
    }

    .img_code {
      padding-top: 4rem;
      img {
        width: 200px;
      }
    }
  }
</style>