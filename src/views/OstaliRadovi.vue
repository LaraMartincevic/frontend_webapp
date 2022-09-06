<template>
  <div>
    <section>
      <h1>Galerija radova</h1>
      <br />
      <h3>Pozdrav {{ korisnik.ime }}, uživaj u galeriji!</h3>
      <v-container>
        <div class="block galleryBlock">
          <v-row>
            <v-col
              v-for="item in items"
              :key="item.id"
              class="d-flex child-flex"
              cols="4"
            >
              <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "Gallery",

  data() {
    return {
      korisnik: {
        ime: "",
        email: "",
      },

      items: [
        {
          id: 1,
          src: require("../assets/rotkvica_1.jpeg"),
        },
        {
          id: 2,
          src: require("../assets/lubenica_1.jpeg"),
        },
        {
          id: 3,
          src: require("../assets/kape_2.jpeg"),
        },
        {
          id: 4,
          src: require("../assets/cvijece_nausnice.jpeg"),
        },
        {
          id: 5,
          src: require("../assets/donut_1.jpeg"),
        },
        {
          id: 6,
          src: require("../assets/gljiva_deform.jpeg"),
        },
        {
          id: 7,
          src: require("../assets/zeko_1.jpeg"),
        },
        {
          id: 8,
          src: require("../assets/jagoda_nausnice.jpeg"),
        },
        {
          id: 9,
          src: require("../assets/kruska_3.jpeg"),
        },
      ],
    };
  },

  created() {
    this.korisnik.ime = localStorage.getItem("ime");
    this.korisnik.email = localStorage.getItem("email");
  },
};
</script>

<style scoped>
.block {
  padding-top: 50px;
  padding-left: 100px;
  padding-right: 100px;
  /*padding: 100px 100px;*/
}
h1 {
  font-size: 50px;
  text-shadow: 0.05em 0 white, 0 0.05em white;
  padding-top: 50px;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
}
h3 {
  font-size: 30px;
  text-shadow: 0.05em 0 white, 0 0.05em white;
  padding-top: 50px;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
}

/*section {
  padding-top: 50px;
  padding-left: 700px;
  margin: auto;
}*/

section {
  background: fixed;
  background-image: url(../assets/zid_2.jpg);
  background-size: cover;
  min-height: 1800px;
  position: relative;
}
.child-flex {
  padding: 70px;
}
</style>
