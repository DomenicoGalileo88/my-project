<template>
  <section
    id="experience"
    class="experience py-5 px-4"
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
          class="
            boolean
            col-11
            d-flex
            justify-content-center
            align-items-center
          "
        >
          <div class="text_experience">
            <h3 class="ms-3">Boolean Careers</h3>

            <div class="line"></div>
            <h3>Junior Full Stack Web Developer Trainee</h3>
            <small>Febbraio 2022 - Agosto 2022 Milano, Lombardia, Italia</small>
            <p>
              Durante i 6 mesi di corso intensivo ho avuto modo di fare molta
              pratica con diversi tipi di progetti ispirati alle più famose web
              applications come Whattsapp Web, Spotify Web, Netflix e molte
              altre. <br />
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
          class="malvin col-11 d-flex justify-content-center align-items-center"
        >
          <div class="text_experience">
            <h3 class="ms-3 pt-5">Malvin S.R.L</h3>

            <div class="line"></div>
            <h3>Operaio Specializzato</h3>
            <small>
              Settembre 2017 - Settembre 2021 Teverola (CE), Campania,
              Italia</small
            >
            <p>
              Gli anni trascorsi in quest'azienda mi hanno fatto sviluppare una
              grande attitudine al
              <em>problem solving</em>, attraverso la pianificazione e prontezza
              nello svolgimento delle mansioni di manutenzione dell'impianto
              elettrico e la riparazione di macchinari per le Aziende clienti.
              Il gruppo era alla base del lavoro che si svolgeva, con la
              distribuzione dei vari ruoli si cooperava per la produzione dei
              prodotti(premiscelati, idropitture) e la manutenzione degli
              impianti di produzione.
            </p>
          </div>
        </div>
        <!-- /.malvin -->
      </div>
      <!-- /.row -->
    </div>
  </section>
  <!-- /.experience -->
</template>

<script>
export default {
  name: "ExperienceComponent",
};
</script>
