

<template>
  <!-- ************** IMPORTANT NOTE **************
    This website is broken down into 2 layouts: 
    (1) Website Section (Home/About) 
    (2) Documentation Section (subjects/componentExamples)

    Description:

    The App.vue file (this file ) handles the logic for flipping the layouts. 
    The flip is accomplished by using CSS for positioning/flexbox, style bindings with 
    number values, and conditional rendering using the isPageDocumentation method
    and using reactivity via style bindings and state variables in data().

    Also listens for emitters from @LeftSideBar and @NavBar to receive boolean about isDocumentation

  -->

  <!-- **Future Change 1A: isDocumentation is too abstract 
       **refer to the next "1A" entry for future task description (located below in data()) -->
  <div 
    class="MainParentElement" 
    :style="{ flexDirection: isDocumentation }"
    @mousemove="findMousePosition($event)"
  > 

    <!-- These are repositioned based on if route is documentation  -->
    <div class="SecondaryNavigationElement" :style="{ width: navigationLength }">
      <RouterView name="LeftSideBar" @docsTrue="isPageDocumentation"></RouterView>
      <RouterView name="NavBar" @docsTrue="isPageDocumentation"></RouterView>
    </div>
  
    <div class="SecondaryContentElement" :style="{ width: contentWidth }">
      <RouterView name="TopBar"></RouterView>
      <!-- Main Content -->
      <RouterView :passingMousePosition="mousePosition" ></RouterView>
      <!-- End Main Content -->
    </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        // **Future Change 1A: Think about make isDocumentation boolean
        // **and then adding a better descriptor variable
        // **for flexDirection ("row" || "column")
        isDocumentation: this.isPageDocumentation(true, true),
        navigationLength: "18%",
        contentWidth: "100%",
        mousePosition: {x: 1280, y: 720}
      }
    },
    props: ['passingMousePosition'],
    methods: {     
      findMousePosition(event) {
        this.mousePosition.x = event.x
        this.mousePosition.y = event.y
      }, 
      // Based whether the page is documentation or not,
      // changes the layout conditions of a page from boolean param
      // @params: truthy - boolean
      //   -- This is set true if page IS documentation
      // @params: initial - boolean
      //   -- Indicates whether first run on mount (true)
      //   -- All other times when function isPageDocumentation 
      //      is called, should be false
      isPageDocumentation(truthy, initial) {
        if (truthy === true && initial === true) {
          console.log("row tt", truthy)
          this.navigationLength = "22%"
          return "row"
        } else if (truthy === true && initial === false) {
          console.log("row tf", truthy)
          this.isDocumentation = "row"
          this.navigationLength = "22%"
          return "row"
        } else {
          console.log("row f", truthy)
          this.isDocumentation = "column"
          this.navigationLength = "100%"
          return "column"
        }
      },
    },
    mounted() {
      console.log("********APP MOUNTED*********")
    }
  }

</script>

<style>

html {
  height: 100%;
  --vt-font-family-base: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  --vt-font-family-mono: Menlo, Monaco, Consolas, "Courier New", monospace;
}

body{
  height: 100%;
  margin: 0;
  font-family: var(--vt-font-family-base);
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
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
