<template>
    <section class="gettingStartedDocumentation">
        <div class="pageWrapper">
            <div class="contentWrapper"> 
                <h1 id="Directives"> Event Handling </h1>

                <p> Events are handled using the v-on directive. This directive, or 
                    @ for short, contain either an inline handler or a method handler.
                </p>
                <hr />
                
                <h2> Inline Handlers </h2>
                <p> An inline handler... handles all the logic inline. This example 
                    is fairly similar to the official docs because this example 
                    explains it in a very straightforward way. 
                </p>

                <span> Template: </span>
                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> 
                            <pre>     
&lt;button @click=”number++”&gt; Add &lt;/button&gt;  

&lt;p&gt; Count is: &#123;&#123; number &#125;&#125; &lt;p&gt;
                            </pre> 
                        </code>
                    </vue-code-highlight>  
                </div>
                <span> Script: </span>
                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> 
                            <pre>     
data() {
    return {
        number: 1
    }
}
                            </pre> 
                        </code>
                    </vue-code-highlight>  
                </div>

                <p> When clicking the button, the number will be incremented and then displayed 
                    within the paragraph tag.  
                </p>
                
                <hr />
                <h2> Method Handlers </h2>
                <p> These handlers will involve calling a method from the script. For example, 
                    let’s say I want to change an inline styling of a component using a '
                    button/method handler:
                </p>

                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> 
                            <pre>     
&lt;script&gt;
export default {

    data() {
        return {
            colorChoice: “green”
        }
    },

    methods: {
        changeColor(currentColor) {
            currentColor === “blue” ?

            this.colorChoice = “green”;
            this.colorChoice = “blue”;
        }  
    }
}
&lt;/script&gt;
                            </pre> 
                        </code>
                    </vue-code-highlight>  
                </div>

                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> 
                            <pre>     
&lt;template&gt;
    &lt;h1> Event Handler &lt;/h1&gt;

    &lt;p :style=”{backgroundColor: colorChoice}”> color background &lt;/p&gt;

    &lt;button @click=”changeColor(colorChoice)”> switch color &lt;/button&gt;
&lt;/template&gt;
                            </pre> 
                        </code>
                    </vue-code-highlight>  
                </div>

                <p>In the template, the p tag has an inline style for the background 
                    color. Instead of background-color like in CSS, this is instead 
                    backgroundColor. Inserted as the value for the backgroundColor is 
                    colorChoice which you can see is initialized in the script under 
                    the data section as “green”. This means the background will be the 
                    color green for the p tag.
                </p>

                <p>
                    The button is referring to a method called changeColor and accepts 
                    a parameter called currentColor. Using a ternary operator (JavaScript), 
                    we figure out if the currentColor matches “blue”. If it does, we toggle 
                    the color to green. If not, we toggle the color to blue.  
                </p>

                <hr />
                <h2> Event Modifiers </h2>

                <p>In an effort to separate out method logic from ingrained browser logic, 
                    Vue has created event modifiers for your events. The most common of 
                    these is event.preventDefault() which prevents the page from 
                    refreshing (usually used during form submits). 
                </p>

                <p> Instead of including the event.preventDefault() syntax within the 
                    method you are calling, it would be done inline within the template 
                    and element that is being clicked.
                </p>

                <h3> *prevent </h3> 
                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> 
                            <pre>     
&lt;form @submit.prevent&gt; &lt;/form&gt; 
                            </pre> 
                        </code>
                    </vue-code-highlight>  
                </div>
                
                <h3> *passive </h3>
                <p> This event modifier prevents event.preventDefault() from being called 
                    and is used for a smooth scrolling experience on mobile devices.
                </p>

                <h3> *once </h3>
                <p> 
                    Only trigger the event once.
                </p>

                <h3> *self </h3>
                <p> 
                    Only triggers if the event being called derives from the element 
                    itself, not a child of that element.
                </p>
                <p>
                    Just a quick example using the previous method handler example: 
                </p>

                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> 
                            <pre>     
&lt;button @click.self="changeColor(colorChoice)"&gt;         
        
        switch color 
        
        &lt;button> Embed button &lt;/button&gt;    
&lt;/button&gt; 
                            </pre> 
                        </code>
                    </vue-code-highlight>  
                </div>

                <p> We embed a button within a button just to make the logic explicit. </p>

                <p> If you click the button within the button with the text “Embed button”, 
                    the method will not fire. Only when click the button itself outside of 
                    the “Embed button” will it fire.
                </p>

                <hr />
                <h3> Key Modifiers </h3>
                <p> Vue allows us to listen for specific key presses using kebab casing of 
                    the deprecated KeyboardEvent.key. via the v-on directive.
                </p>
                <p> Here are a few examples: </p>
                
                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> 
                            <pre>     
&lt;input :keyup.page-down="nextPage"&gt; 

&lt;input :keypress.q="quit"&gt; 
                            </pre> 
                        </code>
                    </vue-code-highlight>  
                </div>

                <p> Some other modifiers: </p>
                <ul>
                    <li> .enter </li>
                    <li> .tab </li>
                    <li> .delete </li>
                    <li> .esc </li>
                    <li> .space </li>
                    <li> .up </li>
                    <li> .down </li>
                    <li> .left </li>
                    <li> .right </li>
                </ul>

                <h3> System Modifiers </h3>
                <p> These serve as a type of "and" operator. A system modifier must be pressed along
                    with another key or click modifier.
                </p>
                <ul>
                    <li> .ctrl </li>
                    <li> .alt </li>
                    <li> .shift </li>
                    <li> .meta (command key for Macintosh) </li>
                </ul>

                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> 
                            <pre>     
&lt;input @keypress.ctrl.q="exit"/&gt; 
                            </pre> 
                        </code>
                    </vue-code-highlight>  
                </div>
                <hr />
                <h3> Mouse Button Modifiers </h3>
                <ul>
                    <li> .left </li>
                    <li> .right </li>
                    <li> .middle </li>
                </ul>
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
    name: "DirectivesDoc",
    components: {
        VueCodeHighlight,
    },
    props: {
        Joe: String
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
