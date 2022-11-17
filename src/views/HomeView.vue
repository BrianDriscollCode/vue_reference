<template>
  <div class="HomeView" :style="{ backgroundImage: 'url(image)' }">
    <h1> This website is a documentation of Vue, built with Vue, to learn Vue </h1>
    <h2> Component examples, detailed write-ups, and the simplest examples... 100% FREE! </h2>
  </div>
</template>

<script>

import vue_image from "@/assets/vue_background.jpg";

export default {

  name: 'HomeView',
  data() {
    return {
      image: vue_image
    }
  },
  mounted() {
    console.log("VIEWING Home Page")
  }
}
</script>

<style scoped>
.HomeView {
  width: 80%;
  margin: 0 auto 0 auto;
}

.HomeView h1 {
  text-align: center;
  font-size: 3.3em;
  width: 60%;
  margin: 1.2em auto 1.2em auto;
}

.HomeView h2 {
  text-align: center;
}
</style>
