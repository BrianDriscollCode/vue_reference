<template>
    <section class="gettingStartedDocumentation">
        <div class="pageWrapper">
            <div class="contentWrapper"> 
                <h1 id="Lifecycle"> LifeCycle </h1>

                <p> At different stages in an applications rendering and initialization, you will 
                    want to run logic or even make api calls. That is what lifecycle methods are 
                    used for. </p>
                
                <p> Vue provides several methods at different stages of the application lifecycle. 
                    This is an image taken directly from <a href="https://vuejs.org/assets/lifecycle.16e4c08e.png"> Vue JS Organization website:</a>
                </p>

                <div class="image_container">
                    <img class="image" src="../../assets/lifecycle_diagram.png" /> 
                </div>

                <p> 
                    For now, we are going to skip the composition api setup lifecycle. 
                </p>
                
                <h3> *beforeCreate </h3>

                <p> The first lifecycle methods is “beforeCreate”. This is ran at the initialization stage of the component. At this point you do not 
                    have access to data or events. This is a good method to access local storage to see if a user is currently logged in to your website.
                </p>

                <h3> *created </h3>

                <p> The “created” method has access to data and events. It runs before the Virtual DOM and templates have been created. Here you can call 
                    an API and set the information to your data. 
                </p>

                <h3> *beforeMount </h3>

                <p>The “beforeMount” method runs after the first render. Also it runs after the template has been compiled. 
                </p>

                <h3> *mounted </h3> 

                <p> The “mounted” method runs after the DOM nodes are created and inserted. You have access to the template, rendered DOM, and reactive 
                    component. You can use this.$el to see what is available. This the most commonly used lifecycle method. 
                </p>

                <h2> Update Methods </h2>
                <p>
                    These methods are part of the rerender cycle triggered by updates in reactive properties.
                </p>

                <h3> *beforeUpdate </h3>
                <p>
                  The “beforeUpdate” method is called before the DOM is re-rendered. It’s useful for changing any reactive data 
                  that needs to be displayed before the render.  
                </p>

                <h3> *updated </h3>
                <p> 
                    The “updated” runs after the rerender and gives you access to the DOM after a property change.
                </p>

                <h2> Unmount Methods </h2>

                <h3> *beforeUnmount </h3>
                <p> This fires right before a component unmounts from the DOM. You still have access to DOM elements here 
                    and this.$el, watchers, and methods. This is useful for notifying a server about deletion events.
                </p>

                <h3> *unmount </h3> 
                <p> This fires after the component is removed. You still have access to this.$el and can be used to clean up data 
                    or event listeners or timers.
                </p>

                <h2> Conclusion </h2>
                <p> These lifecycle methods in Vue give you ways to access your component at different stages of rendering, updating, 
                    and so on. This really helps when needing to fire logic depending on the stage of your application.  
                </p>                
            </div>
        </div>
        <div class="articleNavigation">
            <h3> In this Article </h3> 
            <div class="articleNavigationWrapper">
                <a class="innerLink" href="/documentation/basic-routing#BasicRouting"> Basic Routing </a>
                <a class="innerLink" href="/documentation/basic-routing#CreateTheRouter"> Create the Router </a>
                <a class="innerLink" href="/documentation/basic-routing#InstantiateRouter"> Instantiate the Router  </a>
                <a class="innerLink" href="/documentation/basic-routing#DeclareRoutes"> Declare Routes in Component </a>
                <a class="innerLink" href="/documentation/basic-routing#NestingComponents"> Nesting Components</a>
                <a class="innerLink" href="/documentation/basic-routing#SendData"> Send Data With a Route </a>
                <a class="innerLink" href="/documentation/basic-routing#IncludeSecondComponent"> Include Second Component </a>
                <a class="innerLink" href="/documentation/basic-routing#CreatingChildren"> Creating Children Components </a>
            </div>
        </div>
    </section>
</template>

<script>

import "vue-code-highlight/themes/duotone-sea.css";

export default {
    name: "PropsDoc",
    computed: {
        photo() {
            return require("../../assets/props_to_child.png")
        }
    },
    methods: {
        showProps() {
            console.log(this.test);
        }
    },
    created() {
        console.log(this);
    }
}
</script>

<style scoped>

.variableHighlight {
    background-color: rgb(221, 221, 221);
}

.gettingStartedDocumentation {
    display: flex;
    justify-content: center;
    margin-top: 2em
}

.pageWrapper {
    width: 80%;
    display: flex;
    flex-direction: row;

}

h1 {
    margin-top: 0;
    font-size: 35px;
    font-weight: 500;
}

.contentWrapper {
    width: 84%;
}

.codeSnippet {
    width: 550px;
}

.innerLink {
    margin-bottom: 0.625em;
}

.articleNavigation {
    width: 16%;
    padding-left: 1em;
    position: fixed;
    right: 0;
}

.articleNavigation p {
    margin-top: 0;
}

.router-link {
    margin-bottom: 0.625em;
}

.articleNavigationWrapper {
    border-left: 1px solid black;
    padding: 2px 2px 2px 6px;
    font-size: 0.825em;
    display: flex;
    flex-direction: column;
}

.image {
    width: 70%;
}

.image_container {
    display: flex;
    justify-content: center;
    margin: 2em 0 2em 0;
}

@media only screen and (max-width: 1040px) {
    .articleNavigation {
        display: none;
    }
    .pageWrapper {
        width: 95%;
    }
    .contentWrapper {
        width: 100%;
    }
}

</style>
