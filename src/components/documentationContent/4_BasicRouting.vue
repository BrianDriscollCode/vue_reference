<template>
    <section class="gettingStartedDocumentation">
        <div class="pageWrapper">
            <div class="contentWrapper"> 
                <h1 id="BasicRouting"> Basic Routing </h1>

                <p> Vue has an official library for routing web pages. To install this library: </p>

                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
npm install vue-router@4
                            </pre> </code>
                    </vue-code-highlight>  
                </div>
                <p> OR </p>
                <p> You can also install the router when creating a new project using 
                    the Vue CLI, which is covered in the <router-link to="/documentation/getting-started">Getting Started</router-link> section.
                </p>
                <hr />
                <p> There are two things you need to do so Vue Router will work in 
                    your project. Keep in mind, we are creating this in the context 
                    of a bundled project with webpack but should share the exact 
                    same concepts for non-bundled websites.
                </p>

                <!-- ***STEP 1 -->

                <h2 id="CreateTheRouter"> Step 1: Create the Router </h2>

                <p> This is a two part process. To create the router we need to have routes 
                    established because the router will accept this part of an object parameter. 
                </p>

                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
import { createRouter, createWebHistory } from “vue-router”;

const routes = [
    {
        path:  ‘/’, 
        name: ‘home’,
        component: () ⇒ import(’@views/HomeView.vue’)
    },
    {
        path: ‘/documentation’, 
        name: ‘documentation’,
        component: () ⇒ import(’@views/DocumentationView.vue’)
    },
];
                            </pre> </code>
                    </vue-code-highlight>  
                </div>
                
                <p> In both routes we create the url path, a name 
                    for the route, and connect it to a component. In 
                    this case, we connect it Vue’s “view” pages. </p>

                 <p> 
                    The first route points to home if the path is only a “/”. 
                    If the url follows a normal pattern: “https://www.WebsiteName.com/”, 
                    then our router will insert the page into the DOM without reloading.
                </p>

                <p> Now we need to create the router: </p>

                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
const router = createRouter({
    history: createWebHistory(),
    routes
})
                            </pre> </code>
                    </vue-code-highlight>  
                </div>

                <h2 id="InstantiateRouter"> Step 2: Instantiate the Router in Your App </h2>
                <p> Now that we have our route and router declared, we can 
                    instantiate it into our application. We call the “.use” 
                    property after we create the app and then mount the app 
                    to the DOM. Doing all the normal things to create an app
                     and just adding “.use” as a wrapper of sorts.</p>
                
                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
import {  CreateApp } from ‘vue’;
import App from ‘./App.vue’;
import router from ‘./router’;

createApp(App).use(router).mount(’#app’);
                            </pre> </code>
                    </vue-code-highlight>  
                </div>

                <p> Now we are ready to use the router! </p>
                <h2 id="DeclareRoutes"> Declare Routes in a Component &lt;RouterView&gt; </h2>
                
                <p> In the parent component of your application we need to show 
                    where to inject the components (App.vue) : 
                </p>

                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
&lt;template&gt; 
    &lt;div&gt;
        &lt;RouterView&gt;  &lt;RouterView /&gt;
    &lt;/div&gt;
  
&lt;/template&gt;

&lt;script&gt;
    export default {
        name: "PageOrComponentName",
    }
&lt;/script&gt;
                            </pre> </code>
                    </vue-code-highlight>  
                </div>
                
            <p> In the template, we add &lt;RouterView&gt; where our components 
                will be routed to within the page. Now this solves the
                problem of simple routing, what else can we do?
            </p>

            <h2 id="NestingComponents"> Nesting Components </h2>
            <h3 id="SendData"> 1. Send Data to the Page/Component With a Route </h3>
            <p> In this case, we need to change the routes:  </p>
            <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
{
    path: '/documentation/:documentationPage',
    name: 'documentationPages',
    components: {
        default: () => import('@/views/DocumentationView.vue')
    }
},
                            </pre> </code>
                    </vue-code-highlight>  
                </div>

            <p> If the URL is “https://www.WebsiteName.com/documentation/getting-started”, 
                the component that gets called will have access to a string that 
                points to the value “getting-started”. To access this parameter in 
                that component: </p>


            <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
data() {
    return {
        page: this.$route.params.documentationPage,
    }
}
                            </pre> </code>
                    </vue-code-highlight>  
                </div>

                <p> It’s kind of like passing props or parameters in a function, but instead 
                    of prop or function syntax, you pass a string via the URL slug.
                </p>

                <h3 id="IncludeSecondComponent"> We can include a second component in the route: </h3>

                <p> Route.js </p>

                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
{
    path: '/documentation/:documentationPage',
    name: 'documentationPages',
    components: {
        default: () => import('@/views/DocumentationView.vue'),
        component: () => import(@/components/NavBar.vue)
    }
},
                            </pre> </code>
                    </vue-code-highlight>  
                </div>

                <p> App.vue </p> 

                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
&lt;template&gt; 
    &lt;div&gt;
        &lt;RouterView name="NavBar" &gt;  &lt;RouterView /&gt;
        &lt;RouterView&gt;  &lt;RouterView /&gt;
    &lt;/div&gt;
  
&lt;/template&gt;

&lt;script&gt;
    export default {
        name: "PageOrComponentName",
    }
&lt;/script&gt;
                            </pre> </code>
                    </vue-code-highlight>  
                </div>

                <p> We add a component in the route and then we add another 
                    &lt;RouterView&gt; with a name to match up with the name of the 
                        component. This allows us to create dynamic pages and 
                        layouts by calling different components when needed. 
                </p>
                <p> In short, this allows us to manage some logic in-page for displaying 
                    our website. 
                </p>
                <p> For example, let’s say we have several pages of content for our documentation. 
                    We can use a dynamic route to send a string to the page to figure out 
                    which component to show. Let’s see it in action! </p>
                <p> Route: WebsiteName.com/documentation/getting-started </p>
                <p> DocumentationView.vue </p>

                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
&lt;template&gt; 
    &lt;div&gt;
        &lt;GettingStarted v-if="this.page === 'getting-started'" /&gt;
        &lt;MakingAComponent v-if="this.page === 'basic-routing' " /&gt;
    &lt;/div&gt;
  
&lt;/template&gt;

&lt;script&gt;
    import GettingStarted from "@/components/documentation/1_GettingStarted"
    import MakingAComponent from "@/components/documentation/2_MakingAComponent"
    
    export default {
    name: 'App',
	data() {
		return {
			page: this.$route.params.documentationPage	
		}
	}
}
&lt;/script&gt;
                            </pre> </code>
                    </vue-code-highlight>  
                </div>

            <p> We import 2 components in the script: (1) GettingStarted and (2) MakingAComponent. </p>
            <p> 
                The page has a route object that we access using this.$route and we dig into its 
                properties .params and then find specifically the data we passed in .documentationPage 
                (a string from the URL-slug). 
            </p>
            <p> 
                Then we do some v-if conditional rendering to decide which component renders to the page. 
            </p>
            <p> 
                This is a very simple way of doing things without having to dig further into the router’s 
                capabilities to manage complex routing.
            </p>
            <p> The downside, despite this being simple way of handling basic routing and routing 
                children components, is that you have routing logic in the router AND the documentation 
                page. For a smaller website this might be okay, but for a larger project one may want to 
                manage routing ALL in one place.
            </p>

            <h3 id="CreatingChildren"> 3. Creating Children Components Using Routes (STILL IN PROGRESS) </h3>

            <p> Vue Router also gives us tools to render children without parent components. </p>

            <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
const routes = [
{
    path: '/documentation/:docTitle',
    component: () => import('@/views/DocumentationView.vue'),
    children: [
        {
            path: 'getting-started',
            component: () => import(@/components/1_GettingStarted.vue) 
        },
        {
            path: 'basic-routing',
            component: () => import(@/components/2_MakingAComponent.vue) 
        }
    ]
},
];
                            </pre> </code>
                    </vue-code-highlight>  
                </div>

            <p> If :docTitle matches a path, the router will then route to the corresponding child component. </p>
            <p> These should be enough tools to manage quite a bit of complexity for a developer’s routing 
                needs. There will be further chapters on routing created that go in more depth. </p>

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
import VueCodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";

export default {
    name: "BasicRouting",
    components: {
        VueCodeHighlight,
    },
    data() {
        return {
            a: 10,
            b: 9,
        } 
    },
    computed: {
        age: function() {
            return this.a + this.b;
        }
    },
    methods: {
        changeAge() {
            console.log("change age called");
            this.a = 20;
        }
    },
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

</style>
