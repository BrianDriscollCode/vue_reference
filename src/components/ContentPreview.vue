<template>
    <section class="contentPreview">
        <h3> Latest Vue Content </h3>

    <div class="articles">
      <div 
        class="singleArticle article1" 
        @mousemove="resizePreviewImage('article1', '960px 540px', true)"
        @mouseout="resizePreviewImage('article1', '640px 360px', false)"

      >
        <router-link to="/documentation/components/banner" class="routerLinkContent">
        <div class="bannerImage article1Image" id="article1Image"> 
          <div class="opaqueBackground">
            <p class="imageText"> Banners </p>
          </div>
        </div>
        <div class="contentPreviewContainer">
          <h4 class="articleTitle"> How to Make a Cross-Fade Banner </h4>
          <p> Making a banner can be simple or it can be complex. We will make
            a regular banner and then upgrade it to cross-fade different images
            and text.
          </p>
        </div>
        </router-link>
      </div>

      
        <div 
          class="singleArticle article2"
          @mousemove="resizePreviewImage('article2', '960px 540px', true)"
          @mouseout="resizePreviewImage('article2', '640px 360px', false)"
        >
          <router-link to="/documentation/making-a-component" class="routerLinkContent">
          <div class="bannerImage article2Image" id="article2Image"> 
            <div class="opaqueBackground">
              <p class="imageText"> Components </p>
            </div>
          </div>
          <div class="contentPreviewContainer">
            <h4> Routing Multiple Components With Vue </h4>
            <p> Vue allows you to use the official library "Vue Router", to route pages and components. We cover
              the ways to route pages, multiple components, and switch between layouts.  </p>
          </div>
          </router-link>
        </div>
    

      <div 
        class="singleArticle article3"
        @mousemove="resizePreviewImage('article3', '960px 540px', true)"
        @mouseout="resizePreviewImage('article3', '640px 360px', false)"
      >
        <router-link to="/documentation/getting-started" class="routerLinkContent">
        <div class="bannerImage article3Image" id="article3Image"> 
          <div class="opaqueBackground">
            <p class="imageText"> Get Started </p>
          </div>
        </div>
        <div class="contentPreviewContainer">
          <h4> Using v:bind In Vue 3 </h4>
          <p> Binding to and HTML element is a fundamental concept for Reactivitiy 
            in Vue. Binding elements will help bring your HTML code to life.  
          </p>
        </div>
        </router-link>
      </div>
    </div>
    </section>
</template>

<script>

export default {
    name: "ContentPreview",
    methods: {
        tempLog() {
            console.log("Content Preview Mounted")
        },
        resizePreviewImage(imageLocation, sizes, isHovering) {

          const article1 = document.querySelector(".article1Image");
          const article2 = document.querySelector(".article2Image");
          const article3 = document.querySelector(".article3Image");

          const article1Div = document.querySelector(".article1");
          const article2Div = document.querySelector(".article2");
          const article3Div = document.querySelector(".article3");

          let gradientValue = "";

          if (isHovering) 
          {
            gradientValue = "linear-gradient(184deg, rgb(101, 190, 159) 0%, rgb(84, 224, 192) 100%)"
          } 
          else 
          {
            gradientValue = "linear-gradient(184deg, rgb(114, 233, 191) 0%, rgba(97,254,218,1) 100%)" 
          }
          
          switch (imageLocation) {
            case "article1":
              article1.style.backgroundSize = sizes;
              article1Div.style.background = gradientValue;
              break;
            case "article2":
              article2.style.backgroundSize = sizes;
              article2Div.style.background = gradientValue;
              break;
            case "article3":
              article3.style.backgroundSize = sizes;
              article3Div.style.background = gradientValue;
              break;
            default:
              console.log("broke");
              break;
          }

        }
    },
    mounted() {
        this.tempLog();
    }
}
</script>

<style>


.contentPreview {
  padding-bottom: 5em;
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
  justify-content: space-between;
}

.singleArticle {
  width: 30%;
  background: linear-gradient(184deg, rgb(114, 233, 191) 0%, rgba(97,254,218,1) 100%);
  transition: background 0.8s;
}

.routerLinkContent {
  text-decoration: none;
  color:#39425d;
}

.bannerImage {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

.article1Image {
  background: linear-gradient(
    to bottom,
    rgba(127, 127, 127, 0.404),
    #c7c79234
  ), url('@/assets/futuristic_wave.jpg');
  background-size: 640px 360px;
  background-position: center;
  transition: background 0.7s;
}

.article2Image {
  background: linear-gradient(
    to bottom,
    rgba(127, 127, 127, 0.404),
    #c7c79234
  ), url('@/assets/futuristic_hall.jpg');
  background-size: 640px 360px;
  background-position: center;
  transition: background 0.7s;
}

.article3Image {
  background: linear-gradient(
    to bottom,
    rgba(127, 127, 127, 0.404),
    #c7c79234
  ), url('@/assets/futuristic_geometry.jpg');
  background-size: 640px 360px;
  background-position: center;
  transition: background 0.7s;
}

.imageText {
  color: white;
  font-size: 2.5em;
  font-weight: 700;
  margin-top: auto;
  margin-bottom: auto;
  z-index: 1;
  text-shadow: 1px 1px 2px rgba(150, 150, 150, 1);
}

.contentPreviewContainer {
  padding: 1.3em;
}

.contentPreviewContainer h4 {
  margin-top: 0;
  font-size: 1.2em;
}

.opaqueBackground {
    width: 80%;
    height: 80%;
    position:relative;
    display: flex;
    justify-content: center;
}

.opaqueBackground:after {
    content:'';
    background-color: black;
    width: 100%;
    height: 100%;
    position:absolute;
    top:0;
    left:0;
    opacity:0.5;
}

@media screen and (max-width: 1120px) {
  .articles {
    width: 80%;
    justify-content: center;
    flex-direction: column;
  }
  .singleArticle {
      width: 50%;
      align-self: center;
      margin-bottom: 2em;
  }
}

@media screen and (max-width: 850px) {
  .articles {
    width: 80%;
  }
  .singleArticle {
    width: 70%;
  }
}

@media screen and (max-width: 580px) {
  .articles {
    width: 100%;
  }
  .singleArticle {
    width: 90%;
  }
}
</style>
