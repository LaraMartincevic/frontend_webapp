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
    </section>
  </div>
</template>

<script></script>

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
</style>
