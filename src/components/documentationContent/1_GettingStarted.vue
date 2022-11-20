<template>
    <section class="gettingStartedDocumentation">
        <div class="pageWrapper">
            <div class="contentWrapper">
                <h1> Getting Started With Vue </h1>
                <p> You can utilize basic html and JavaScript or Webpack/Vite to utilize Vue. In this section we will
                    focus on using npm, the Vue CLI, and webpack to spin up the Vue framework.
                </p>

                <h2> What is Vue? </h2>
                <p> Vue is a JavaScript framework used for creating user interfaces. It allows you to break
                    down your application into much smaller components. This allows for more seperation of
                    concerns and an intuitive way to structure an application.
                </p>

                <h2> Downloading Vue </h2>
                <p> To continue, you will need: </p>
                <ul>
                    <li> Node.js: <a href="https://nodejs.org/en/download/"> https://nodejs.org/en/download/ </a> </li>
                    <li> npm: <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"> https://docs.npmjs.com/downloading-and-installing-node-js-and-npm </a> </li>

                </ul>
                <p> Now with the terminal, we are going to get some native tooling. Install the Vue eco-system command-line interface, Vue CLI: </p>
                
                <div class="codeSnippet">
                    <!-- <vue-code-highlight language="javascript"> 
                 
                        npm install -g @vue/cli

                    </vue-code-highlight> -->
                </div>
                
                <p> Then pick a folder you want your project to be located in. </p>
                <p> In that folder, type this in the terminal: </p>

                <div class="codeSnippet">
                    <!-- <vue-code-highlight language="javascript"> 
                 
                        vue create project-name 

                    </vue-code-highlight> -->
                </div>
                
                <p> After it is done downloading. You can now spin up your project: </p>
                
                <div class="codeSnippet">
                    <!-- <vue-code-highlight language="javascript"> 
                 
                        npm run serve

                    </vue-code-highlight> -->
                </div>

                <h2> Resources for Learning </h2>
                <p> There are many resources to learn Vue from due to its large community! </p>
                <ul> 
                    <li> <a href="https://vuejs.org/guide/introduction.html"> Main Vue Documentation </a> </li>
                    <li> <a href="https://www.vuemastery.com/courses/"> Vue Mastery (paid courses) </a> </li>
                    <li> <a href="https://www.youtube.com/watch?v=YrxBCBibVo0&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1"> The Net Ninja YouTube Video Course (free) </a> </li>
                    
                </ul>

                <h2> Common Front-End Features </h2>
                <p> Why should you use Vue!? Vue is another Frontend Framework like
                    React, Angular, and Svelte. All frameworks have their own unique system
                    and way of doing things... Vue is no different. It has been described
                    as "easy to pickup", but I think a better description would be "easier
                    to collaborate with non-Vue and Vue developers alike".
                </p>
                <p> 
                    If you already know a concept like conditional rendering
                    or using html with added functionality, then Vue is easy-to-understand.
                </p>
                <p> 
                    If you just know JavaScript, it's almost as easy to get started.
                    <strong> Because Vue looks like html/css/JavaScript! </strong>
                </p>

                <p> let jan = 10 </p>

                <div class="codeSnippet">
                    
                </div>

                <div class="codeSnippet">
                    <!-- vue-code-highlight language="javascript"> 
                            <pre> <code> &lt;html lang="en"&gt; </code></pre>
                            &lt;head&gt;
                            &lt;title&gt;Title&lt;/title&gt;
                            &lt;/head&gt;
                            &lt;body&gt;
                            Some content.
                            &lt;/body&gt;
                            &lt;/html&gt;
                        
                        </vue-code-highlight> -->

                    
                </div>
            </div>
            
            <div class="articleNavigation">
                <h3> In this Article </h3> 
                <div class="articleNavigationWrapper">
                    <p> Making a Component </p>
                    <p> What is Vue </p>
                    <p> Downloading Vue </p>
                    <p> Resources for Learning </p>
                    <p> Common Front-End Features </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>


export default {
    name: "GettingStarted",
    components: {
     
    }
    
}
</script>

<style scoped>

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
    width: 600px;
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

.articleNavigationWrapper {
    border-left: 1px solid black;
    padding: 2px 2px 2px 6px;
    font-size: 0.825em
}

</style>
