<template>
  <div 
    class="HomeView" 
    @click="showPosition" 
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :style="{ backgroundPosition: '40% 30%'}"
  >
    <div class="homeWrapper">
      <h1> This website is a documentation of Vue, built with Vue, to learn Vue </h1>
      <h2> Component examples, detailed write-ups, all broken down and explained simply</h2>
      <div class="buttonWrapper">
        <router-link to="/documentation"> <button class="viewDocumentationButton"> View Documentation </button> </router-link>
      </div>
    </div>  
  </div>

  <ContentPreview />
  <FooterBasic />

</template>

<script>

import vue_image from "@/assets/vue_background.jpg"
import ContentPreview from "@/components/ContentPreview"
import FooterBasic from "@/components/FooterBasic"

export default {

  name: 'HomeView',
  components: {
    ContentPreview,
    FooterBasic
  },
  data() {
    return {
      image: vue_image,
      hover: false
    }
  },
  mounted() {
    console.log("VIEWING Home Page")
  },
  methods: {
    showPosition(event) {
      console.log(event.clientX);
    }
  }
}
</script>

<style scoped>

/* Banner Section */
.HomeView {
  width: 100%;
  margin: 0 auto 0 auto;
  background: linear-gradient(
    to bottom,
    rgba(127, 127, 127, 0.404),
    #c7c79234
  ), url('@/assets/vue_background.jpg');
  background-size: cover;
}

.HomeView h1 {
  text-align: center;
  font-size: 3.3em;
  width: 80%;
  margin: 0 auto 0.8em auto;
  padding: 2em 0 0 0;
  text-shadow: 1px 0px 3px rgba(76, 108, 78, 0.75);
}

.HomeView h2 {
  text-align: center;
  font-size: 1.4em;
  color: #39425d;
}

.homeWrapper {
  width: 80%;
  margin: 0 auto 0 auto;
  padding: 2em 0 2em 0;
}

.SecondHomeView {
  width: 100%;
}

.SecondHomeView h2 {
  text-align: center;
  color: rgb(65, 75, 87);
  width: 70%;
}

.SecondHomeWrapper {
  display: flex; 
  flex-direction: row;
}

button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

.buttonWrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 6.4em
}

.viewDocumentationButton {
  background-color: #FCA311;
  margin-top: 2.2em;
  color: rgb(255, 255, 255);
  font-weight: 500;
  padding: 15px;
  border-radius: 10px;
}

.viewDocumentationButton:hover {
  transition: background-color 0.6s;
  background-color: #F29602;
  transition: color 0.1s;
  color: rgb(215, 215, 215);
}

</style>
