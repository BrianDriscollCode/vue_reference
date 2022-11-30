<template>
    <section class="gettingStartedDocumentation">
        <div class="pageWrapper">
            <div class="contentWrapper">
                
                <h1> Making a Component </h1>

                <p> There are <u>three parts</u> of a Vue Component/Page: </p>
                <ol>
                    <li> 
                        <b>Template</b> - Holds HTML that is reactive. In 
                        other words, Vue let’s you use syntatic sugar to 
                        add conditional rendering, variables, and other 
                        logic to your HTML. 
                    </li>
                    <li>
                       <b>Script</b> - Different hooks and ways to create 
                       JavaScript logic using methods, data (and state), 
                       and lifecycle methods to program logic for 
                       rendering your page. 
                    </li>
                    <li>
                        <b>Style</b> - Where you create CSS. If the word 
                        “scoped” is added to the styles tag the styles 
                        will only apply to the HTML in the template in 
                        the current component.
                    </li>

                </ol>

                <p> Vue takes this code and compiles it down into JavaScript code. </p>
                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>        
&lt;template&gt; 
    &lt;h1&gt;Title&lt;/h1&gt;
    &lt;p @click="logToConsole()" &gt;Click Me&lt;/p&gt;

&lt;/template&gt;

&lt;script&gt;
    export default {
        //Some code
        name: "PageOrComponentName",
        methods: {
            logToConsole() {
                console.log("this is a console log!!!")
            }
        },
        data() {
            return: {
                isHover: false
            }
        },
    }
&lt;/script&gt;

&lt;style scoped&gt;
    //Styles local to template on this file
&lt;/style&gt;
                            </pre> </code>
                    </vue-code-highlight>  
                </div>

            <h2> A Quick Review of Template </h2>
            <p> To add variables to your HTML, you can use text 
                interpolation. This allows you to use mustache syntax 
                to change text output. </p>

            <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>        
&lt;template&gt; 
    &lt;span&gt; Hello &#123;&#123; textVariable &#125;&#125; &lt;/span&gt;
&lt;/template&gt;

                            </pre> </code>
                    </vue-code-highlight>  
            </div>
            <p>The word “textVariable” is now capable of printing whatever the value inside it is. </p>
            <p> Binding to HTML attributes is important to. To accomplish this, use v-bind (or its shorthand): </p>

            <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>   
//v-bind     
&lt;div v-bind:id="dynamicId"&gt; &lt;/div&gt;
//short hand for v-bind
&lt;div :id="dynamicId"&gt; &lt;/div&gt;
                            </pre> </code>
                    </vue-code-highlight>  
            </div>

            <p>This is pretty similar to the main documentation, but I 
                would add one extra use to know about right here. 
                Conditionally rendering attributes for style purposes.  
            </p>

            <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>   
&lt;div :style=”{ backgroundImage: ImageVariable }”&gt; &lt;/div&gt;
                            </pre> </code>
                    </vue-code-highlight>  
            </div>

            <p> Or you can you template literals: </p>

            <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>   
&lt;div :style=”{isChecking ? {backgroundColor: ‘red’}: {backgroundColor: ’green’}”&gt; &lt;/div&gt;
                            </pre> </code>
                    </vue-code-highlight>  
            </div>
        
            <h2> The Script Area </h2>

            There are many important functions of the script area. To name a few: 

            <ol>
                <li> Give your component a name </li>
                <li> Store data </li>
                <li> Create methods </li>
                <li> Instantiate other components </li>
                <li> Pass or Receive Props </li>
                <li> And more! </li>
            </ol>

            <p> That's alot to go over! You may not understand all of it, but here's an example of doing all of this now: </p>
        
            <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
&lt;template&gt; 
    &lt;h1&gt;Title&lt;/h1&gt;
    //On click calls function from 'method' area in script
    &lt;p @click="logToConsole()" &gt;Click Me&lt;/p&gt;

    //Instatiated from 'components' in the script area
    &lt;ComponentName1/&gt; 
    //passes prop 'details'
    &lt;ComponentName2 details="Great Worker" /&gt;

&lt;/template&gt;

&lt;script&gt;
    import componentName1 from "/folder/path";
    import componentName2 from "/folder/path";

    export default {
        name: "PageOrComponentName",
        data() {
            return: {
                username: "John",
            }
        },
        methods: {
            logToConsole() {
                console.log(this.username)
            }
        },
        components: {
            componentName1,
            componentName2,
        },
        props: ['details'] //Declaring a prop
        
    }
&lt;/script&gt;

                            </pre> </code>
                    </vue-code-highlight>  
                </div>
                <h2> The Style Area </h2>

                <p> To target specific elements in your template you can add classes or even call the elements themselves.
                    In both cases, the CSS only affects HTML tags in this template/file.  </p>

                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
&lt;template&gt; 
    &lt;h1&gt;Title&lt;/h1&gt;
    &lt;p class="paragraph" &gt;Some random text&lt;/p&gt;

&lt;/template&gt;

&lt;style scoped&gt;

    //If an h1 exists on another component currently rendered,
    //this style would stay local to this component
    h1 {
        font-size: 5em;
    }

    .paragraph {
        background-color: green;
    }
    
&lt;/style&gt;

                            </pre> </code>
                    </vue-code-highlight>  
                </div>

                <p> That is all three areas of a component in Vue. The template, script, and styles area. The concepts for each part
                    will be gone over in more detail in the further sections. At this point, you should have a basic understanding of how 
                    a simple application looks!
                </p>
        </div> 
        <!-- End of content  -->
        
        

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
import VueCodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";

export default {
    name: "GettingStarted",
    components: {
        VueCodeHighlight,
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
    width: 500px;
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
