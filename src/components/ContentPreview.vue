<template>
    <section class="contentPreview">
        <h3> Latest Vue Content </h3>

    <div class="articles">
      <div class="singleArticle article1">
        <router-link to="/documentation" class="routerLinkContent">
        <div class="bannerImage article1Image"> 
          <div class="opaqueBackground">
            <p class="imageText"> banners </p>
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

      
        <div class="singleArticle article2">
          <router-link to="/documentation" class="routerLinkContent">
          <div class="bannerImage article2Image"> 
            <div class="opaqueBackground">
              <p class="imageText"> router-view </p>
            </div>
          </div>
          <div class="contentPreviewContainer">
            <h4> Routing Multiple Components With Vue </h4>
            <p> Vue allows you to use the official library "Vue Router", to route pages and components. We cover
              the ways to route pages, multiple components, and switch between layouts.  </p>
          </div>
          </router-link>
        </div>
    

      <div class="singleArticle article3">
        <router-link to="/documentation" class="routerLinkContent">
        <div class="bannerImage article3Image"> 
          <div class="opaqueBackground">
            <p class="imageText"> v:bind </p>
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
  color: white;
  font-size: 4em;
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
</style>
