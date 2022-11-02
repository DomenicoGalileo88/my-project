<template>
  <div id="app">
    <PreLoadear />
    <div class="my_wrapper" v-if="show == false">
      <header class="site_header">
        <NavComponent />
        <JumboComponent />
      </header>
      <!-- /.site_header -->

      <main class="site_main">
        <AboutComponent />
        <ExperienceComponent />
        <WorksComponent />
        <SkillsComponent />
      </main>
      <!-- /.site_main -->

      <footer class="site_footer">
        <h3 class="orange text-center mt-3 mb-5">Contacts</h3>
        <div class="container d-flex justify-content-center">
          <div class="row row-cols-1 row-cols-md-2">
            <div class="col">
              <ContactsComponent />
            </div>

            <div class="col">
              <MapsComponent />
            </div>
          </div>
          <!-- /.row -->
        </div>
      </footer>
      <!-- /.site_footer -->
      <div class="property py-3">
        Logo Malvin di proprietà di Marlvin S.r.l | Logo Boolean di proprietà di
        Boolean S.r.l |
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-c-circle"
          viewBox="0 0 16 16"
        >
          <path
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z"
          />
        </svg>
        2022
      </div>
      <!-- /.property -->
    </div>
    <!-- /.my_wrapper -->
  </div>
  <!-- /.app -->
</template>

<script>
import PreLoadear from "@/components/PreLoader.vue";
import NavComponent from "@/components/partials/NavComponent.vue";
import JumboComponent from "@/components/partials/JumboComponent.vue";
import AboutComponent from "@/components/partials/AboutComponent.vue";
import ExperienceComponent from "@/components/partials/ExperienceComponent.vue";
import WorksComponent from "@/components/partials/WorksComponent.vue";
import SkillsComponent from "@/components/partials/SkillsComponent.vue";
import ContactsComponent from "@/components/partials/ContactsComponent.vue";
import MapsComponent from "@/components/partials/MapsComponent.vue";
export default {
  name: "App",
  components: {
    PreLoadear,
    NavComponent,
    JumboComponent,
    AboutComponent,
    ExperienceComponent,
    WorksComponent,
    SkillsComponent,
    ContactsComponent,
    MapsComponent,
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    /**
     * Aggiunge la classe zoom all'immagine profilo
     */
    view_img() {
      // salvo il valore dell'immagine profilo in una variabile
      let img = document.querySelector(".profile_img");
      console.log(img);
      // se img contiene la classe zoom
      if (img.classList.contains("zoom")) {
        // rimuovi la classe zoom
        img.classList.remove("zoom");
      } else {
        // altrimenti aggiungi la classe zoom
        img.classList.add("zoom");
      }
    },

    // funzione che dichiara il valore di show su false, per far vedere il wrapper dopo il loader e non prima
    displayWrapper() {
      this.show = false;
    },
    // funzione che fa partire le funzioni displayWrapper e Back dopo un numero di secondi
    delayDisplayAndText() {
      setTimeout(this.displayWrapper, 6000);
      setTimeout(this.back, 6300);
    },
    /**
     * Funzione che fa visualizzare il testo front dopo 2.5sec
     */
    front() {
      // seleziono i tag attraverso le classi
      let front = document.querySelector(".front_text");
      let back = document.querySelector(".back_text");
      let rotate_max = document.querySelector(".rotate_max");
      let rotate_zero = document.querySelector(".rotate_zero");

      if (rotate_max != null && rotate_zero != null) {
        //rimuovo le classi presenti
        front.classList.remove("rotate_max");
        back.classList.remove("rotate_zero");
        // aggiungo le classi per far si che front si veda
        front.classList.add("rotate_zero");
        back.classList.add("rotate_min");
        //console.log("front", front);
        //console.log("back", back);
        // attivare la funzione di back dopo 2.5sec
        setTimeout(this.back, 2500);
      }
    },
    /**
     * Funzione che fa visualizzare il testo back dopo 2.5sec
     */
    back() {
      // seleziono i tag attraverso le classi
      let front = document.querySelector(".front_text");
      let back = document.querySelector(".back_text");
      let rotate_min = document.querySelector(".rotate_min");
      let rotate_zero = document.querySelector(".rotate_zero");

      if (rotate_min != null && rotate_zero != null) {
        //rimuovo le classi presenti
        front.classList.remove("rotate_zero");
        back.classList.remove("rotate_min");
        // aggiungo le classi per far si che back si veda
        front.classList.add("rotate_max");
        back.classList.add("rotate_zero");
        //console.log("front", front);
        //console.log("back", back);
        // attivare la funzione di front dopo 2.5sec
        setTimeout(this.front, 2500);
      }
    },
  },
  mounted() {
    this.delayDisplayAndText();
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
//end scroolbar style

.display_none {
  visibility: hidden;
  height: 10px;
  width: 10px;
  object-fit: contain;
}

header {
  height: 100vh;
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
  .flipper_text {
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
  .front {
    filter: blur(0.5);
    color: #fff;
  }
  /* END FLIP BOX */

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

.property {
  font-size: 10px;
  text-align: center;
}

footer {
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

@media screen and (max-width: 768px) {
  header {
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

  .profile_img {
    display: none !important;
  }

  .text_experience {
    padding: 1rem;
  }

  a .show {
    opacity: 1 !important;
    padding-left: 0.5rem;
    color: #cfcfcf;
  }
}
</style>
