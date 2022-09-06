<template>
  <div>
    <section>
      <div class="text">
        <h1>
          <div class="waviy">
            <span style="--i: 1">j</span>
            <span style="--i: 2">a</span>
            <span style="--i: 3">g</span>
            <span style="--i: 4">o</span>
            <span style="--i: 5">d</span>
            <span style="--i: 6">a</span>
          </div>
        </h1>
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/RzUHYMwWwfo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>
        Na ovoj stranici pronaći će te video tutorial od HappyBerryCrochet kako
        napraviti mini jagodu. Video je brz i jednostavan za pratiti, a ispod
        vidjeti će te primjere kako su jagode ispale.
      </p>

      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/jagoda_nausnice.jpeg"),
        },
        {
          src: require("../assets/jagode.jpeg"),
        },
        {
          src: require("../assets/jagoda_deform.jpeg"),
        },
        {
          src: require("../assets/jagoda_sky.jpeg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  padding-top: 50px;
  padding-left: 700px;
  margin: auto;
}
section {
  background: fixed;
  background-image: url(../assets/jagodak.jpg);
  background-size: cover;
  min-height: 1800px;
  position: relative;
}

body {
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.waviy {
  position: relative;
  padding: 70px;
  padding-left: 150px;
}
.waviy span {
  position: relative;
  display: inline-block;
  font-size: 60px;
  color: white;
  text-transform: uppercase;
  animation: flip 2s infinite;
  animation-delay: calc(0.2s * var(--i));
}
@keyframes flip {
  0%,
  80% {
    transform: rotateY(360deg);
  }
}

p {
  text-align: justify;
  margin-right: 650px;
  color: white;
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
  text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black;
  padding-top: 50px;
}

.v-carousel {
  padding-top: 50px;
  margin-right: 500px;
  margin-left: -150px;
  width: 900px;
}
</style>
