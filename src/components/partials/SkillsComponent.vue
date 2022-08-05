<template>
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
            <!-- /infinite-slide-bar component -->
          </div>
        </section>
        <!-- /.skills -->
</template>

<script>
export default {
    name: "SkillsComponent",
    data(){
        return {
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
        }
    }
}
</script>

