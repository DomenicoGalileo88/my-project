<template>
  <div id="app">
    <header class="site_header">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
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
                <a class="nav-link" aria-current="page" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Experience</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Works</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"
                  >Contacts</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- /.navbar -->

      <div class="jumbo p-5 d-flex justify-content-center align-items-center">
        <div class="container mt-5">
          <div class="row align-items-center">
            <div class="col-sm-12 col-lg-8">
              <h1 class="display-1 orange">Welcome</h1>
              <h2 class="display-3 name">I am Domenico</h2>
              <div
                class="
                  display-5
                  orange
                  junior
                  animate__animated animate__flipOutX animate__infinite
                "
              >
                {{ flip_data[flip_index].title }}
              </div>
              <div class="display-5 developer">Developer</div>
            </div>
            <div class="col-sm-12 col-lg-2">
              <img
                class="my_img img-fluid"
                src="@/assets/img/coding.png"
                alt="logo"
              />
            </div>
          </div>
          <!-- /.row -->
        </div>
      </div>
      <!-- /.jumbo -->
    </header>
    <!-- /.site_header -->

    <main class="site_main">
      <section class="about" data-aos="zoom-in-up">
        <div class="container">
          <div class="row row-cols-sm-1 row-cols-md-2">
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

            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              class="col d-flex justify-content-center align-items-center"
            >
              <img
                @click="view_img()"
                class="img-fluid profile_img"
                src="@/assets/img/dom-2.jpeg"
                alt="profile_photo"
              />
            </div>
          </div>
        </div>
      </section>
      <!-- /.about -->

      <section class="experience" data-aos="zoom-in-up">
        <div class="container">
          <h2 class="orange text-center mt-5 mb-4">Experience</h2>
          <div class="row">
            <div class="col-1">
              <img
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                width="50"
                src="@/assets/img/boolean.jpg"
                alt="logo-boolean"
              />
            </div>

            <div
              class="col-11 d-flex justify-content-center align-items-center"
            >
              <div
                class="text_experience"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
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
                  Le principali tecnologie che ho utilizzato sonno:
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
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                width="50"
                src="@/assets/img/malvin.png"
                alt="logo"
              />
            </div>

            <div
              class="col-11 d-flex justify-content-center align-items-center"
            >
              <div
                class="text_experience"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
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

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ut
        suscipit in temporibus ipsa aliquid nulla odio, esse blanditiis dolor
        soluta quam! Commodi tempore suscipit nemo non velit dolores doloribus!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit
        asperiores laudantium sit voluptates, quo quaerat? Ratione molestiae
        dignissimos placeat temporibus ad corporis voluptate, minus, dolores
        aliquid totam enim! Sint minus consectetur explicabo minima dolores
        officiis suscipit! Doloremque sed incidunt eius aspernatur adipisci
        soluta vel quod excepturi esse, explicabo ab nihil quibusdam facilis
        voluptas deleniti enim. Odit neque eligendi ipsam quia similique
        quisquam laborum at perspiciatis, commodi ab blanditiis nulla fugit,
        minus porro dolorum. Ex quae iusto accusamus, minima magnam soluta vitae
        numquam, et inventore eius rerum, animi consequuntur architecto tenetur
        qui. Impedit quo consectetur praesentium dignissimos error repellat
        recusandae nihil. Culpa nulla voluptates, deleniti quis et labore
        consequatur, quia saepe quisquam dicta, voluptate odit. Corporis id
        dolorem illo recusandae! Alias voluptatibus nisi, esse est, iste
        distinctio, amet excepturi expedita neque recusandae quibusdam. Nisi
        consequuntur, eaque eum corporis, fuga fugiat accusamus dolor obcaecati
        modi necessitatibus sapiente facere. Est sequi vitae illum magnam
        doloribus delectus. Ipsum facilis laudantium voluptatum, deleniti
        recusandae sit cumque tempora, eos ratione delectus incidunt iste,
        facere aliquid earum possimus explicabo non nostrum molestias illum
        dolorem mollitia ab est! Ipsa nisi aliquam amet illo quidem quo,
        incidunt beatae velit distinctio? Tempora recusandae corrupti nihil
        voluptates ducimus ea cum quae vero officiis eius at repellendus nostrum
        pariatur sapiente beatae quod illo maiores molestiae, impedit doloremque
        cumque temporibus. Repudiandae autem odio officia in possimus molestiae
        quas aperiam illo commodi aliquid? Reiciendis consequuntur fugit
        exercitationem voluptatibus pariatur corporis sapiente veritatis quidem
        vero labore. Inventore officiis asperiores repellendus delectus ut
        accusamus distinctio repellat, quisquam sapiente placeat aspernatur, aut
        ex hic aperiam ea cum. Provident ullam incidunt odio quasi, magnam sit
        qui ducimus veniam, quaerat reprehenderit, ratione officia
        necessitatibus commodi corrupti dolorem nostrum et perferendis minima
        quos dolores soluta itaque doloremque? Eligendi illum in officiis ullam,
        eum vero quo officia facilis similique, laboriosam alias itaque fugiat
        nesciunt voluptatem deleniti unde iusto, molestiae ex rerum quasi minima
        deserunt adipisci? Facere suscipit, beatae impedit tenetur, sunt saepe
        ut, labore dignissimos omnis ipsum sit. Nulla maiores rem ad atque iusto
        numquam nobis voluptatibus vitae alias provident excepturi qui, aliquam
        eligendi, eaque incidunt doloremque reprehenderit quia assumenda ut
        fugit exercitationem rerum quod. Omnis aut labore doloremque ullam harum
        sed! Quam adipisci, repellat eligendi odio minima, nemo magnam a
        quibusdam perferendis maiores tenetur incidunt odit praesentium
        aspernatur, atque excepturi quidem possimus ea debitis deleniti?
        Voluptatem incidunt sed accusamus beatae, quidem soluta in. Dignissimos,
        voluptatum culpa. Ut optio magnam repudiandae sed ullam. Quibusdam autem
        eius, vero, qui architecto nisi aspernatur tenetur dicta, at odit magnam
        deleniti possimus ea commodi fuga officiis neque ad ducimus
        reprehenderit cumque nostrum eveniet! Sunt aut ex incidunt reiciendis
        unde dignissimos consectetur optio dolorum, ipsam, magnam, a soluta
        tenetur culpa? Nobis ipsum ad deserunt obcaecati pariatur nemo voluptate
        dolores veritatis rerum iure dolorum alias numquam accusantium quibusdam
        natus corporis fugit consectetur optio, necessitatibus quo sint quos
        illum autem rem? Et est expedita molestias vel necessitatibus quam?
        Dolorum, temporibus provident eaque odit error illum unde aliquid veniam
        fugiat laboriosam totam voluptatum aspernatur officia explicabo illo
        repudiandae.
      </p>
    </main>
    <!-- /.site_main -->

    <footer class="site_footer"></footer>
    <!-- /.site_footer -->

    <!-- <ul class="d-flex flex-wrap my-5">
                <li class="m-2" v-for="skill in skills" :key="skill.id">
                  <img width="80" :src="skill.image" :alt="skill.name" />
                </li>
              </ul> -->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
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
          image: require("@/assets/img/laravel.png"),
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
      }
      this.flip_index--;
    },
    startTimer() {
      this.flip_timerId = setInterval(this.nextText, 3000);
    },
  },
  mounted() {
    this.startTimer();
  },
};
</script>


<style lang="scss">
@import "@/assets/scss/style.scss";

header {
  height: 100vh;

  nav {
    box-shadow: 0px 20px 20px 0px #030303;
    width: 100%;
    position: fixed !important;
    z-index: 1;
    .navbar-toggler-icon {
      background-color: #ae4119;
      border-radius: 0.5rem;
    }

    a {
      color: #808080 !important;
      &:hover {
        color: #ae4119 !important;
      }
    }

    .img_profile {
      height: 150px;
      aspect-ratio: 1/1;
      object-fit: cover;
      object-position: top;
      border-radius: 1.5rem;
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
    .name {
      padding-left: 7rem;
    }

    .developer {
      padding-left: 21rem;
    }
    .junior {
      padding-left: 14rem;
      --animate-duration: 4s;
    }
  }
}

main {
  .profile_img {
    max-height: 250px;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgb(157, 157, 157);
    transition: all 1s;
    &:hover {
      transform: scale(1.1);
    }
  }

  .line {
    background-color: #8e3414;
    width: 100%;
    height: 4px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
