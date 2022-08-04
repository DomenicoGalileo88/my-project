<template>
  <div id="app">
    <PreLoadear   />
    <div class="my_wrapper" v-if="show == false">
      <header class="site_header">
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

      <div class="jumbo p-5 d-flex justify-content-center align-items-center">
        <div class="container mt-5 text-center">
          <div class="content_jumbotron">
            <div class="orange welcome">Welcome</div>
            <div class="name">I am Domenico</div>
            <div
              class="
                junior
                orange
                animate__animated animate__flipInX animate__infinite
              "
            >
              {{ flip_data[flip_index].title }}
            </div>
            <div class="display-5 developer">Developer</div>
          </div>
          <div class="img_code text-center">
            <img
              class="my_img img-fluid"
              src="@/assets/img/coding.png"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <!-- /.jumbo -->
    </header>
    <!-- /.site_header -->

    <main class="site_main">
      <section
        id="about"
        class="about"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div class="container">
          <div class="row row-cols-1 row-cols-md-2">
            <div class="col">
              <h2 class="orange text-center mb-4">About Me</h2>

              <p>
                Appassionato di tecnologia ed innovazione. Nato lavorativamente
                nel campo elettrico, ho sviluppato competenze in impiantistica,
                manutenzione e propensione a lavorare in gruppo. Ho scelto il
                mondo della programmazione perché ti da la possibilità di creare
                qualcosa per le persone, affinché si possano divertire,
                informare, acquistare e tanto altro, non ci sono limiti a quello
                che si può creare. Per me questo è un punto fondamentale di
                questo lavoro che mi ha portato a fare una svolta nella mia
                vita. Sono una persona determinata, amo mettermi in gioco e
                affrontare nuove sfide, ma allo stesso tempo imparare tecnologie
                nuove che un giorno potrebbero portarmi ad essere una figura di
                riferimento.
              </p>
            </div>

            <div class="col d-flex justify-content-center align-items-center">
              <img
                class="img-fluid profile_img"
                src="@/assets/img/dom-2.jpeg"
                alt="profile_photo"
              />
            </div>
          </div>
        </div>
      </section>
      <!-- /.about -->

      <section
        id="experience"
        class="experience py-5"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div class="container">
          <h2 class="orange text-center mb-4">Experience</h2>
          <div class="row">
            <div class="col-1">
              <img
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="2000"
                data-aos-easing="ease-in-sine"
                width="50"
                src="@/assets/img/boolean.jpg"
                alt="logo-boolean"
              />
            </div>

            <div
              class="col-11 d-flex justify-content-center align-items-center"
            >
              <div class="text_experience">
                <h3 class="ms-3">Boolean Careers</h3>

                <div class="line"></div>
                <h3>Junior Full Stack Web Developer Trainee</h3>
                <small>Febbraio 2022 - Agosto 2022</small>
                <small>Milano, Lombardia, Italia</small>
                <p>
                  Durante i 6 mesi di corso intensivo ho avuto modo di fare
                  molta pratica con diversi tipi di progetti ispirati alle più
                  famose web applications come Whattsapp Web, Spotify Web,
                  Netflix e molte altre. <br />
                  Le principali tecnologie che ho utilizzato sono:
                </p>
                <ul>
                  <li>HTML</li>
                  <li>CSS (Sass)</li>
                  <li>Javascript (Vue, Axios)</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                  <li>PhpMyAdmin</li>
                  <li>Laravel</li>
                </ul>
              </div>
            </div>
            <!-- /.boolean -->

            <div class="col-1 pt-5">
              <img
              data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="2000"
                data-aos-easing="ease-in-sine"
                width="50"
                src="@/assets/img/malvin.png"
                alt="logo"
              />
            </div>

            <div
              class="col-11 d-flex justify-content-center align-items-center"
            >
              <div class="text_experience">
                <h3 class="ms-3 pt-5">Malvin S.R.L</h3>

                <div class="line"></div>
                <h3>Operaio Specializzato</h3>
                <small> Settembre 2017 - Settembre 2021</small>
                <small>Teverola (CE), Campania, Italia</small>
                <p>
                  Gli anni trascorsi in quest'azienda mi hanno fatto sviluppare
                  un grande <em>problem solving</em>, attraverso la
                  pianificazione e prontezza nello svolgimento della
                  manutenzione dell'impianto elettrico e la riparazione di
                  macchinari per le imprese clienti. Il gruppo era alla base del
                  lavoro che si svolgeva, con la distribuzione dei vari ruoli si
                  cooperava per la produzione dei prodotti (premiscelati,
                  idropitture).
                </p>
              </div>
            </div>
            <!-- /.malvin -->
          </div>
        </div>
      </section>
      <!-- /.experience -->

      <section
        id="works"
        class="projects py-5"
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
                    <img :src="project.image" :alt="project.name" />
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
        </div>
      </section>
      <!-- /.projects -->

      <section
        id="skills"
        class="skills py-5"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div class="container">
          <h2 class="orange text-center">Skills</h2>
          <!-- infinite sidebar -->
          <infinite-slide-bar :duration="'50s'">
            <div class="items d-flex">
              <div v-for="skill in skills" :key="skill.id">
                <div class="img_infinite">
                  <img
                    class="img-fluid me-5"
                    :src="skill.image"
                    :alt="skill.name"
                  />
                </div>
              </div>
            </div>
          </infinite-slide-bar>
        </div>
      </section>
      <!-- /.skills -->
    </main>
    <!-- /.site_main -->

    <footer class="site_footer">
      <h3 class="orange text-center mt-3 mb-5">Contacts</h3>
      <div class="container d-flex justify-content-center">
        <div class="row row-cols-1 row-cols-md-2">
          <div class="col">
            <div id="contacts" class="contacts opacity-100">
              <ul class="pe-5">
                <li>
                  <a href="https://github.com/DomenicoGalileo88">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      class="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      />
                    </svg>

                    <div class="show">
                      <strong>/DomenicoGalileo88</strong>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="https://ibb.co/N7RyT9M">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      class="bi bi-file-person"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"
                      />
                      <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>

                    <div class="show">
                      <strong>Domenico Galileo</strong>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/domenico-galileo/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                      />
                    </svg>

                    <div class="show">
                      <strong>/domenico-galileo</strong>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="mailto:domenico.galileo@gmail.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      class="bi bi-envelope-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                      />
                    </svg>

                    <div class="show">
                      <strong>Email me!</strong>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <!-- /.contacts -->
          </div>

          <div class="col">
            <div class="maps">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12050.159449237635!2d14.261092026632028!3d40.969657970715936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b00bdcff9cd71%3A0x4181610c1b2d5f27!2s81030%20Orta%20di%20Atella%2C%20Province%20of%20Caserta!5e0!3m2!1sen!2sit!4v1659522928693!5m2!1sen!2sit" width="300" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <!-- /.maps -->
          </div>
        </div>
      </div>
    </footer>
    <!-- /.site_footer -->
    </div>
    <!-- /.wrapper -->
  </div>
</template>

<script>
import PreLoadear from "@/components/PreLoader.vue";
export default {
  name: "App",
  components: {
    PreLoadear,
  },
  data() {
    return {
      show: true,
      flip_timerId: null,
      flip_index: 0,
      flip_data: [
        {
          title: "Jr Frontend Web",
        },
        {
          title: "Jr Backend Web",
        },
      ],
      skills: [
        {
          id: 1,
          name: "HTML",
          image: require("@/assets/img/html.png"),
        },
        {
          id: 2,
          name: "CSS",
          image: require("@/assets/img/css.png"),
        },
        {
          id: 3,
          name: "JS",
          image: require("@/assets/img/js.png"),
        },
        {
          id: 4,
          name: "SASS",
          image: require("@/assets/img/sass.png"),
        },
        {
          id: 5,
          name: "PHP",
          image: require("@/assets/img/php.png"),
        },
        {
          id: 6,
          name: "MY SQL",
          image: require("@/assets/img/mysql.png"),
        },
        {
          id: 7,
          name: "PHP MY ADMIN",
          image: require("@/assets/img/phpmyadmin.png"),
        },
        {
          id: 8,
          name: "VUE",
          image: require("@/assets/img/vue.png"),
        },
        {
          id: 9,
          name: "LARAVEL",
          image: require("@/assets/img/laravel.jpg"),
        },
        {
          id: 10,
          name: "BOOTSTRAP",
          image: require("@/assets/img/bootstrap.png"),
        },
        {
          id: 11,
          name: "GIT HUB",
          image: require("@/assets/img/github.png"),
        },
        {
          id: 12,
          name: "MAMP",
          image: require("@/assets/img/mamp.png"),
        },
      ],
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
      ],
    };
  },
  methods: {
    view_img() {
      let img = document.querySelector(".profile_img");
      console.log(img);
      //img.classList.add('zoom');

      if (img.classList.contains("zoom")) {
        img.classList.remove("zoom");
      } else {
        img.classList.add("zoom");
      }
    },

    nextText() {
      if (this.flip_index == 0) {
        this.flip_index = this.flip_data.length;
        //console.log(this.flip_index);
      }
      this.flip_index--;
    },
    startTimer() {
      this.flip_timerId = setInterval(this.nextText, 2580);

    },
    displayWrapper(){
      this.show = false;
    },

    delayDisplay(){
      setTimeout(this.displayWrapper, 6000);
    }
  },
  mounted() {
    this.startTimer();
    this.delayDisplay();
    
  },
};
</script>


<style lang="scss">
@import "@/assets/scss/style.scss";

  //scroolbar style
/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: black; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #808080; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ae4119; 
}

.display_none{
    visibility: hidden;
    height: 10px;
    width: 10px;
    object-fit: contain;
}

header {
  height: 100vh;
  nav {
    background-color: rgb(19, 18, 18);
    box-shadow: 0px 20px 20px 0px #131212;
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
      transition: all 0.7s !important;
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
      padding-top: 2rem;
      img {
        width: 200px;
      }
    }
  }
}

main {
  section {
    margin-top: 4rem;
  }
  .profile_img {
    max-height: 250px;
    border-radius: 0.5rem;
    transition: all 1s;
    &:hover {
      box-shadow: 0 0 12px rgb(157, 157, 157);
      transform: scale(1.05);
    }
  }

  .line {
    background-color: #8e3414;
    width: 100%;
    height: 4px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  /* FLIP BOX */

  .flip-container {
    perspective: 1000px;
    transform-style: preserve-3d;
  }

  .flip-container:hover .back {
    transform: rotateY(0deg);
  }

  .flip-container:hover .front {
    transform: rotateY(180deg);
  }

  .flip-container,
  .front,
  .back {
    width: 100%;
  }

  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
  }

  /* hide back of pane during swap */
  .front,
  .back {
    backface-visibility: hidden;
    transition: 1s;
    transform-style: preserve-3d;
    border-radius: 0.5rem;
  }

  .back {
    position: absolute;
    top: 0;
    bottom: 0;
    padding: 0.5rem;
  }

  .front {
    z-index: 2;
    transform: rotateY(0deg);

    img {
      max-width: 100%;
      max-height: 100%;
      border-radius: 0.5rem;
    }
  }

  .back {
    transform: rotateY(-180deg);
    background-color: #383838;
    color: #fdfdfdc0;
    .description_project {
      font-size: 0.8rem;
      margin: 0;
    }
  }

  .vertical.flip-container {
    position: relative;
  }

  .vertical .back {
    transform: rotateX(180deg);
  }

  .vertical.flip-container:hover .back {
    transform: rotateX(0deg);
  }

  .vertical.flip-container:hover .front {
    transform: rotateX(180deg);
  }

  .front {
    filter: blur(0.5);
    color: #fff;
  }

  small {
    font-size: 0.7rem;
  }

  .title_project {
    font-size: 0.9rem;
    font-weight: bold;
    text-align: center;
  }

  .link_project {
    .view_project {
      color: #fdfdfdc0;
      text-decoration: none;
    }
  }

  .img_infinite {
    padding: 2rem;
    width: 150px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}

footer {
  /* background-image: linear-gradient(to right, black, #692912); */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2587%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsRadialGradient2588)'%3e%3c/rect%3e%3cpath d='M-41.00707513542381 82.35367645242556L26.3962074576056 171.80085357772236 126.86533184903607 25.972341125529844z' fill='rgba(255%2c 80%2c 0%2c 0.14)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M3.928446593262464-29.985127869290118L-63.474835999766945 59.46204925600668 104.39757098469295 115.84338458290239z' fill='rgba(255%2c 80%2c 0%2c 0.14)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M-1.8620393066016305-62.63476147193752L-56.55748925540395 96.2123592287477 156.98508139408358-7.939311523135203z' fill='rgba(255%2c 80%2c 0%2c 0.14)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1316.0184424702093-57.14031137506199L1275.375564009465 105.8693706393054 1479.0281244845767-16.497432914317812z' fill='rgba(255%2c 80%2c 0%2c 0.14)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1290.6808817854035 57.628891267479744L1460.2841858391569 148.01600520061263 1457.3521815576933-19.958407585661092z' fill='rgba(255%2c 80%2c 0%2c 0.14)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1358.8144975521325 185.56817776240692L1498.0928097413794 91.62376997932138 1264.870089769047 46.28986557315997z' fill='rgba(255%2c 80%2c 0%2c 0.14)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M101.24889788965811 422.3688273336564L-61.83029097807012 524.0560402434168 85.10581982134838 605.5040564448013z' fill='rgba(255%2c 80%2c 0%2c 0.14)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M114.7365698313182 576.5336230693173L81.54436720426273 387.23653171322803-49.01615432050835 492.9623574096007z' fill='rgba(255%2c 80%2c 0%2c 0.14)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M62.66452380002395 403.69809068912093L-43.853806025033236 438.30799405911506 61.320213942486525 580.7805371117038z' fill='rgba(255%2c 80%2c 0%2c 0.14)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1418.7081164423373 598.3410596819541L1501.9403368958056 523.3984317697619 1347.9102848007833 436.0214150456559z' fill='rgba(255%2c 80%2c 0%2c 0.14)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1290.6666666666665 504.00000000000006L1458.6666666666665 597.3333333333334 1458.6666666666665 429.33333333333337z' fill='rgba(255%2c 80%2c 0%2c 0.14)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1469.063258003962 450.4357299439239L1378.4533546339678 384.60378168716693 1325.0103839338294 553.4346108705365z' fill='rgba(255%2c 80%2c 0%2c 0.14)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2587'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cradialGradient cx='50%25' cy='50%25' r='772.53' gradientUnits='userSpaceOnUse' id='SvgjsRadialGradient2588'%3e%3cstop stop-color='rgba(59%2c 18%2c 0%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 0%2c 0%2c 1)' offset='1'%3e%3c/stop%3e%3c/radialGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
  box-shadow: inset 1px 4px 20px #171717;
  background-position: center;
  background-size: contain;
  padding: 1rem;
  ul {
    display: flex;
    flex-direction: column;
    li {
      padding-bottom: 1rem;
      display: flex;
      list-style: none;
    }
  }
  a {
    color: white;
    text-decoration: none;
    transition: all 1.2s;
    &:hover {
      color: #ae4119;
    }
  }

  .show {
    opacity: 0;
    display: inline-block;
    margin-left: 0.5rem;
    color: #ae4119;
    transition: opacity 1.2s;
  }

  a {
    &:hover .show {
      opacity: 1;
    }
  }

}

@media screen and (max-width: 768px){
  header{
    height: auto;
  }

  section {
    margin-top: 2rem !important;
  }
  .welcome {
      font-size: 3rem !important;
    }

    .name {
      font-size: 3.5rem !important;
    }

    .junior {
      font-size: 2rem !important;
    }

    .developer {
      font-size: 2rem !important;
    }

    .profile_img{
      display: none !important;
    }

    .text_experience{
      padding: 1rem;
    }

    a .show{
      opacity: 1 !important;
      padding-left: 0.5rem;
      color: #cfcfcf;
    }

   
}
</style>
