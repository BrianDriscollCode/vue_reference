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
      stateClientHeight: 1020,
      currentBannerXPosition: 0,
      currentBannerYPosition: 0,
      futureBannerXPosition: 0,
      futureBannerYPositon: 0,
    }
  },
  updated() {
      // this.xPositionOffset = (this.passingMousePosition.x / 10) - 400
      // this.yPositionOffset = (this.passingMousePosition.y / 10) - 100
      
      this.calculateQuadrant(this.passingMousePosition.x, this.passingMousePosition.y)

      const banner = document.querySelector(".homeWrapper")
      this.stateClientWidth = banner.clientWidth * 1.9
      this.stateClientHeight = banner.clientHeight * 1.5
  },
  mounted() {
    console.log("VIEWING Home Page")
    const banner = document.querySelector(".homeWrapper")
    this.stateClientWidth = banner.clientWidth * 1.9
    this.stateClientHeight = banner.clientHeight * 1.5
  },
  methods: {

    //The banner has 4 quadrants, or more specific, 2 states for the
    //mouse position: [horizontal: up || down, vertical: left || right]
    //The 2 states cause the background position to be a
    //positive or negative integer causing opposite movement to the mouse
    //@params: [x position, y position ]from App.vue (positions on whole page)
    //
    //             Horizontal midPoint
    //             |  
    //   __________v__________
    //  |          |          |     **represents banner
    //  |  top     |  top     |
    //  |  left    |  right   |
    //  |          |          |
    //  ----------------------- vertical midPoint
    //  |          |          |
    //  |  bottom  |  bottom  |
    //  |  left    |  right   |
    //  |__________|__________|
    //
    //  state: [horizontalStatus, verticalStatus]
    //
    // The mouse position exists simultaenously in two quadrants
    // as indicated by the 2 states [horizontalStatus, verticalStatus]
    // EVEN THOUGH the x and y positions are taken from the whole page
    // via App.vue, the banner is used for midPoint calculations
  
    calculateQuadrant(mousePositionX, mousePositionY) {
      const banner = document.querySelector(".homeWrapper")
      const height = banner.clientHeight;
      const width = banner.clientWidth;

      const midPoints = {
        vertical: width / 2,
        horizontal: height / 2
      }

      //This is just some step by step math created from logically
      //thinking about the screen, half-points, and the mouse position.
      //There is no definitive equation, just experimentation with logic.
      //** Use the Method notes for help in this  */

      if (mousePositionX < midPoints.vertical) 
      {
        //left quadrant move banner right
        let futurePosition = (((mousePositionX - midPoints.vertical) / 10) + 400) * -1
        this.futureBannerXPosition = futurePosition;
        
        if (futurePosition > this.currentBannerXPosition) {
          console.log("adding left quad")
          this.currentBannerXPosition += 0.5;
          this.xPositionOffset += 0.5;
        }
        console.log("futurePosition: ", futurePosition)
        console.log("currentBannerXPosition: ", this.currentBannerXPosition)
        console.log("xPositionOffset: ", this.xPositionOffset)
      } 
      else 
      {
        //right quadrant move banner left
        let futurePosition = (((mousePositionX - midPoints.vertical) / 10) + 400) * -1

       
        this.xPositionOffset = futurePosition
        

      }

      if (mousePositionY < midPoints.horizontal) 
      {
        //bottom quadrant move banner up
        this.yPositionOffset = (((mousePositionY - midPoints.horizontal) / 10) + 200) * -1
      }
      else {
        //top quadrant move banner down
        this.yPositionOffset = (((mousePositionY - midPoints.horizontal) / 10) + 200) * -1
      }
    }

    // I need one more step. IF the resulting calculation equals 
    // CONDITIONS which are created in relation to current position
    //, increment that offset towards the result of the calculation
    //
    // currentPosition += 1 UNTIL === calculation AND THEN
    // Think about acceleration
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
