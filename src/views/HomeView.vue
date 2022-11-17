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

  <div class="contentPreview">
    <h3> Latest Vue Content </h3>

    <div class="articles">
      <div class="singleArticle article1">
        <div class="bannerImage article1Image"> 
          <p class="imageText"> BANNERS </p>
          <div class="opaqueBackground">
          </div>
        </div>
        <h4> How to Make a Banner </h4>
      </div>

      <div class="singleArticle article2">
        <div class="bannerImage article2Image"> </div>
        <h4> How to Make a Banner </h4>
      </div>

      <div class="singleArticle article3">
        <div class="bannerImage article3Image"> </div>
        <h4> How to Make a Banner </h4>
      </div>
    </div>
  </div>
</template>

<script>

import vue_image from "@/assets/vue_background.jpg";

export default {

  name: 'HomeView',
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

/* Content Preview Section */

.contentPreview {

}

.contentPreview h3 {
  font-size: 2.2em;
  text-align: center;
}

.articles {
  width: 80%;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: row;
}

.singleArticle {
  margin: 1.25em;
  width: 33.33%;
  background-color: aquamarine;
}

.bannerImage {
  height: 300px;
}

.article1Image {
  background: linear-gradient(
    to bottom,
    rgba(127, 127, 127, 0.404),
    #c7c79234
  ), url('@/assets/banner_image_1280x720.jpg');
  background-size: cover;
}

.article2Image {
  background: linear-gradient(
    to bottom,
    rgba(127, 127, 127, 0.404),
    #c7c79234
  ), url('@/assets/banner_image_1280x720.jpg');
  background-size: cover;
}

.article3Image {
  background: linear-gradient(
    to bottom,
    rgba(127, 127, 127, 0.404),
    #c7c79234
  ), url('@/assets/banner_image_1280x720.jpg');
  background-size: cover;
}

.imageText {
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  position: absolute;
}

.opaqueBackground {
  background-color: black;
  height: 80%;
  width: 80%;
  margin: auto;
  opacity: 0.5;
}

</style>
