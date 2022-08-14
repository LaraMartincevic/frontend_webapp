<template>
  <section>
    <div class="text">
      <h1>
        <div class="waviy">
          <span style="--i: 1">m</span>
          <span style="--i: 2">a</span>
          <span style="--i: 3">t</span>
          <span style="--i: 4">e</span>
          <span style="--i: 5">r</span>
          <span style="--i: 6">i</span>
          <span style="--i: 7">j</span>
          <span style="--i: 8">a</span>
          <span style="--i: 8">l</span>
          <span style="--i: 8">i</span>
        </div>
      </h1>
      <p>Za početak vašeg rada potrebne su vam:</p>
      <p>KUKICE, ŠKARE, IGLE, VUNA, PUNJENJE</p>
      <v-img
        :src="require('../assets/punjenje.jpg')"
        class="my-3"
        contain
        height="325"
      />
      <p>Ako se pitate gdje nabaviti materijale, možete ovdje:</p>
      <p>
        <a href="https://www.tedi.com/hr/" target="_blank">Tedi </a>
        <a href="https://www.mueller.hr/" target="_blank">- Muller </a>
        <a href="https://reproistra.hr/shop/" target="_blank">- Repro </a>
      </p>
    </div>
    <!--
    <div>
      <textarea name="text" id="t" cols="30" rows="10"></textarea>
    </div>
    -->
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
/*
textarea {
  width: 100%;
  height: 150px;
  padding: 150px 100px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
  position: absolute;
}*/

section {
  background: fixed;
  background-image: url(../assets/alat3.jpg);
  background-size: cover;
  min-height: 1800px;
  position: relative;
}

h1 {
  text-align: center;
  padding: 50px;
}

p {
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  font-size: 25px;
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
  padding: 70px;
}
.waviy span {
  position: relative;
  display: inline-block;
  font-size: 60px;
  color: purple;
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
