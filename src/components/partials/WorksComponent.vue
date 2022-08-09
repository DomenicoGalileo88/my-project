<template>
   <section
          id="works"
          class="projects py-5 px-4"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div class="container">
            <h2 class="orange text-center mb-4">Works</h2>

            <div
              class="
                row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4
                g-4
              "
            >
              <div
                class="col project"
                v-for="project in projects"
                :key="project.id"
              >
                <div
                  class="flip-container"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div class="flipper">
                    <div class="front">
                      <div class="img_front">
                        <img :src="project.image" :alt="project.name" />
                      </div>
                    </div>
                    <div class="back">
                      <div class="title_project">{{ project.name }}</div>
                      <p class="description_project">
                        {{ project.description }}
                      </p>
                      <small>
                        {{ project.technology }}
                      </small>
                      <div class="link_project text-center">
                        <a class="view_project" :href="project.link">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-arrow-up-right-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.project -->
            </div>
            <!-- /.row -->
          </div>
        </section>
        <!-- /.projects -->
</template>

<script>
export default {
    name: "WorksComponent",
    data(){
        return{
            projects: [
        {
          id: 1,
          name: "Discord",
          image: require("@/assets/img/discord.png"),
          link: "https://discordcopybool.netlify.app",
          technology: "Html, Css",
          description:
            "Riproduzione del sito Discord con le seguenti tecnologie:",
        },
        {
          id: 2,
          name: "Playstation",
          image: require("@/assets/img/playstation.png"),
          link: "https://playstationcopy.netlify.app",
          technology: "Html, Css",
          description:
            "Riproduzione del sito Play Station con le seguenti tecnologie:",
        },
        {
          id: 3,
          name: "Spotify",
          image: require("@/assets/img/spotify.png"),
          link: "https://spotifycopybool.netlify.app",
          technology: "Html, Css",
          description:
            "Riproduzione dell'interfaccia del sito di Spotify Web con le seguenti tecnologie:",
        },
        {
          id: 4,
          name: "Dropbox",
          image: require("@/assets/img/dropbox.png"),
          link: "https://my-dropbox.netlify.app/",
          technology: "Html, Css, Bootstrap",
          description:
            "Riproduzione del sito Dropbox con le seguenti tecnologie:",
        },
        {
          id: 5,
          name: "Avada Wordpress",
          image: require("@/assets/img/avada-wordpress.png"),
          link: "https://avada-wordpress.netlify.app/",
          technology: "Vue CLI, Bootstrap",
          description:
            "Riproduzione di un tema Wordpress realizzato con le seguenti tecnologie:",
        },
        {
          id: 6,
          name: "Boolzapp",
          image: require("@/assets/img/whattsapp-web.png"),
          link: "https://my-boolzapp-boolean.netlify.app/",
          technology: "Vue Js, Bootstrap",
          description:
            "Riproduzione della web app ispirata a Whattsapp web. Realizzata con le seguenti tecnologie:",
        },
        {
          id: 7,
          name: "Boolflix",
          image: require("@/assets/img/boolflix.png"),
          link: "https://my-boolflix.netlify.app/",
          technology: "Vue CLI, Axios, Bootstrap",
          description:
            "Riproduzione del sito Netflix, utilizzando chiamate API con Axios e filtro per categorie. Realizzata con le seguenti tecnologie: ",
        },
        {
          id: 8,
          name: "Laravel Comics",
          image: require("@/assets/img/laravel-comics-1.png"),
          link: "https://github.com/DomenicoGalileo88/laravel-comics",
          technology: "Laravel, Bootstrap",
          description:
            "Riproduzione del sito di DC Comics Realizzata con le seguenti tecnologie:",
        },
        {
          id: 9,
          name: "Boolpress",
          image: require("@/assets/img/laravel-boolpress-4.png"),
          link: "https://github.com/DomenicoGalileo88/laravel-boolpress",
          technology: "Vue CLI, Laravel, Bootstrap",
          description:
            "Riproduzione del sito di Wordpress completa di operazioni Laravel CRUD e Vue per la parte front. Tecnologie usate: ",
        },
        {
          id: 9,
          name: "Deliveboo",
          image: require("@/assets/img/1.png"),
          link: "https://github.com/DomenicoGalileo88/delivebool",
          technology: "Vue CLI, Laravel, Bootstrap",
          description:
            "Riproduzione del sito di Deliveroo completa di operazioni Laravel CRUD e VueCLI per la parte front. Tecnologie usate: ",
        },
      ],
        }
    }
}
</script>

<style lang="scss" scoped>
.project{
  height: 140px;
}
  .img_front{
    img{
      width: 100%;
      height: 143px;
    }
  }

  @media screen and (max-width: 576px){
    .project{
  height: auto;
}
  .img_front{
    img{
      width: 100%;
      height: 240px;
    }
  }
  }

  @media screen and (max-width: 426px){
    .project{
  height: auto;
}
  .img_front{
    img{
      width: 100%;
      height: auto;
    }
  }
  }
</style>