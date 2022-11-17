<template>
  <div class="MainParentElement" :style="{ flexDirection: isDocumentation }">

    <!-- These are repositioned based and routed based on  -->
    <div class="SecondaryNavigationElement" :style="{ width: navigationLength }">
      <RouterView name="LeftSideBar" @docsTrue="isPageDocumentation"></RouterView>
      <RouterView name="NavBar" @docsTrue="isPageDocumentation"></RouterView>
    </div>
  
    <div class="SecondaryContentElement" :style="{ width: contentWidth }">
      <RouterView name="TopBar"></RouterView>
      <!-- Main Content -->
      <RouterView></RouterView>
      <!-- End Main Content -->
    </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        isDocumentation: this.isPageDocumentation(true, true),
        navigationLength: "18%",
        contentWidth: "100%"
      }
    },
    methods: {
      // Based on page whether the page is a doc or not,
      // changes the layout conditions of a page
      // @params: truthy - boolean
      //   -- This is set true if page IS documentation
      // @params: initial - boolean
      //   -- Indicates whether first run on mount (true)
      //   -- All other times when function isPageDocumentation 
      //      is called, should be false
      isPageDocumentation(truthy, initial) {
        if (truthy === true && initial === true) {
          console.log("row tt", truthy)
          this.navigationLength = "18%"
          return "row"
        } else if (truthy === true && initial === false) {
          console.log("row tf", truthy)
          this.isDocumentation = "row"
          this.navigationLength = "18%"
          return "row"
        } else {
          console.log("row f", truthy)
          this.isDocumentation = "column"
          this.navigationLength = "100%"
          return "column"
        }
      }
    },
    mounted() {
      console.log("********APP MOUNTED*********")
    }
  }

</script>

<style>

html {
  height: 100%;
}

body{
  height: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
}

.MainParentElement {
  height: 100%;
  display: flex;
}

/* LeftSideBar Parent for documentation & NavBar for 'home/about' */
.SecondaryContentElement {
  height: 100%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* Styling routed components  */

/* LeftSideBar via components/LeftSideBar.vue */

.LeftSideBar h2 {
  margin: 0;
}

.TopBar h2 {
  margin: 0;
}
</style>
