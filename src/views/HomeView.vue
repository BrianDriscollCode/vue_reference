<template>
  <div 
    class="HomeView" 
    :style="{ 
      backgroundPositionX: `${this.xPositionOffset}px`, 
      backgroundPositionY: `${this.yPositionOffset}px`, 
      backgroundSize: `${this.stateClientWidth}px ${this.stateClientHeight}px`,
    }"
  >
    <div 
      class="homeWrapper" 
    >
      <h1> This website is a documentation of Vue, built with Vue, to learn Vue </h1>
      <h2> Component examples, detailed write-ups, all broken down and explained simply</h2>
      <div class="buttonWrapper">
        <router-link to="/documentation"> <button class="viewDocumentationButton"> View Documentation </button> </router-link>
      </div>
    </div>  
  </div>

  <p> {{ passingMousePosition.x  }} - x position </p>
  <p> {{ passingMousePosition.y  }} - y position </p>

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
  props: {
    passingMousePosition: Object
  },
  data() {
    return {
      image: vue_image,
      xPositionOffset: 0,
      yPositionOffset: 0,
      stateClientWidth: 1580,
      stateClientHeight: 1020
    }
  },
  watch: {
    xPositionOffset() {
      this.xPositionOffset = this.passingMousePosition.x
      this.yPositionOffset = this.passingMousePosition.y
    }
  },
  updated() {
      console.log("-before-", this.xPositionOffset, this.yPositionOffset)
      this.xPositionOffset = this.passingMousePosition.x
      this.yPositionOffset = this.passingMousePosition.y
      console.log("-after-",this.xPositionOffset, this.yPositionOffset)
  },
  mounted() {
    console.log("VIEWING Home Page")
    const banner = document.querySelector(".homeWrapper")
    this.stateClientWidth = banner.clientWidth * 1.9
    this.stateClientHeight = banner.clientHeight * 1.5
  },
  methods: {
    // calculatePosition() {
    //   console.log(this.mousePosition)

    //   const banner = document.querySelector(".homeWrapper")
    //   const clientWidth = banner.clientWidth
    //   const clientHeight = banner.clientHeight
    //   const mousePosition = {
    //     x: event.clientX, 
    //     y: event.clientY
    //   }
    //   const screenMidpoint = {
    //     width: clientWidth / 2,
    //     height: clientHeight / 2
    //   }
    //   let leftOrRight = ''
    //   let upOrDown = ''
    //   let moveX = 0
    //   let moveY = 0

    //   if (screenMidpoint.width > mousePosition.x) {
    //     leftOrRight = 'left'
    //     moveX = (mousePosition.x - screenMidpoint.width) * -1
    //   } else {
    //     leftOrRight = 'right'
    //     moveX = (mousePosition.x - screenMidpoint.width) * -1
    //   }

    //   if (screenMidpoint.height > mousePosition.y) {
    //     upOrDown = 'up'
    //     moveY = (mousePosition.y - screenMidpoint.height)
    //   } else {
    //     upOrDown = 'down'
    //     moveY = (mousePosition.y - screenMidpoint.height)
    //   }

    //   this.xPositionOffset = `${(moveX / 50)}px`
    //   this.yPositionOffset = `${moveY / 50}px`


    //   console.log(leftOrRight);
    //   console.log(moveX, "-movex")
    //   console.log(upOrDown)
    //   console.log(moveY, "-movey")
      
    //   // console.log(event.clientX, "-x");
    //   // console.log(event.clientY, "-y");

    //   // console.log(event.clientX / (event.clientX / 2))
    //   // console.log(event)
    //   // console.log(document.querySelector(".homeWrapper").clientWidth)
    // }
  },
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
  transition: background 0.3s ease;
 
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
