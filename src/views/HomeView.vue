<template>
  <body>
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <v-img
            :src="require('../assets/logo1.png')"
            class="my-3"
            contain
            height="200"
          />
        </v-col>

        <v-col class="mb-4">
          <div class="waviy">
            <span style="--i: 1">D</span>
            <span style="--i: 2">o</span>
            <span style="--i: 3">b</span>
            <span style="--i: 4">r</span>
            <span style="--i: 5">o</span>
            <span style="--i: 6">d</span>
            <span style="--i: 7">o</span>
            <span style="--i: 8">š</span>
            <span style="--i: 8">l</span>
            <span style="--i: 8">i</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </body>
</template>

<script></script>
<style scoped>
body {
  margin-top: 0%;
  padding: 0%;
  background: fixed;
  background-image: url(../assets/konci2.jpg);
  background-size: cover;
  min-height: 1800px;
}

h1 {
  font-family: "Times New Roman", Times, serif;
  font-size: 100px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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
}
.waviy span {
  position: relative;
  display: inline-block;
  font-size: 60px;
  color: #fff;
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
</style>
