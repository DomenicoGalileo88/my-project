<template>
  <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid justify-content-center">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    v-smooth-scroll="{ offset: -300 }"
                    href="#about"
                    ><div class="text_nav_link">About</div></a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    v-smooth-scroll="{ offset: -200 }"
                    href="#experience"
                    ><div class="text_nav_link">Experience</div></a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    v-smooth-scroll="{ offset: -200 }"
                    href="#works"
                    ><div class="text_nav_link">Works</div></a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    v-smooth-scroll="{ offset: -100 }"
                    href="#skills"
                    ><div class="text_nav_link">Skills</div></a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    v-smooth-scroll="{ offset: -100 }"
                    href="#contacts"
                    tabindex="-1"
                    aria-disabled="true"
                    ><div class="text_nav_link">Contacts</div></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- /.navbar -->
</template>

<script>
export default {
    name: "NavComponent"
}
</script>

<style lang="scss" scoped>
nav {
    background-color: black;
    box-shadow: 0px 20px 20px 0px black;
    width: 100%;
    position: fixed !important;
    z-index: 1;
    .navbar-toggler-icon {
      background-color: #ae4119;
      border-radius: 0.5rem;
    }

    a {
      .text_nav_link {
        font-size: 1.5rem;
        text-transform: uppercase;
      }
      color: #808080 !important;
      transition: all 0.5s !important;
      &:hover {
        color: #ae4119 !important;
      }
    }

    .navbar-collapse {
      flex-grow: 0;
      padding-right: 2rem;
      a {
        font-size: 1rem;
      }
    }

    .nav-link {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }
  }
</style>