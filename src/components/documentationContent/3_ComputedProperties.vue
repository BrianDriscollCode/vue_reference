<template>
    <section class="gettingStartedDocumentation">
        <div class="pageWrapper">
            <div class="contentWrapper">
                <h1 id="ComputedProperties"> Computed Properties </h1>
                <p> At first, computed properties can be confusing. It may seem as if this is 
                    the section for functions and variables. 
                </p>
                <p>
                    I will recommend looking at computed properties as a set of tools that 
                    allow you to add computation to your template. Each tool has its uses and 
                    they are very flexible. So much so that you can accomplish close to the 
                    same things using different tools. 
                </p>
                <p>
                    But for now, it is time to be explicit. Here are some ways to use your 
                    script to manipulate the template of your page: 
                </p>

                <h3 id="Methods" @click="changeAge"> Methods </h3>
                <p> You write and store your functions in the methods section of your script. 
                    In short, this section is good for writing function logic and you need 
                    to call the functions for them to be used. 
                </p>

                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
&lt;template&gt; 
    &lt;h1&gt;Title&lt;/h1&gt;
    &lt;p&gt;{ { message } }&lt;/p&gt;
    //click directive is attached to a method
    &lt;button @click="ChangeMessage" &gt;Wake John&lt;/button&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name: "PageOrComponentName",
        data() {
            return: {
                message: "John is sleeping.",
            }
        },
        //functions are placed in the methods section
        methods: {
            changeMessage() {
                this.message = "John is awake,"
            },
            logToConsole() {
                console.log("Testing Page")
            }
        },
    }
&lt;/script&gt;
                            </pre> </code>
                    </vue-code-highlight>  
                </div>
                <p> When clicking the <span class="variableHighlight">button</span>, the function <span class="variableHighlight">changeMessage</span> gets called
                    because the v-on:click directive (or <span class="variableHighlight">@click</span> for short) ties that
                    button to it. </p>
                <p> In that function, <span class="variableHighlight">this.message</span> is changed and this change will also
                    appear in the template because it is a reactive dependancy (because it is declared in the <span class="variableHighlight">data()</span> section).
                </p>
                <!-- EXAMPLE  -->


                <!-- EXAMPLE  -->

                <h3 id="Computed"> Computed </h3>
                <p> This may seem similar to methods, but instead this is how you declare 
                    a piece of logic that is connected to a reactive property. To clarify, 
                    a reactive property is a piece of data that is automatically updated 
                    if any of its properties change, as illustrated in the example. 
                </p>

                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
&lt;template&gt; 
    &lt;h1&gt;Title&lt;/h1&gt;
    &lt;p&gt;{ { age } }&lt;/p&gt;
    &lt;button @click="ChangeAge" &gt;Change Age&lt;/button&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name: "PageOrComponentName",
        data() {
            return: {
                a: 10,
                b: 9,
            }
        },
        computed: {
            age: function() {
                return this.a + this.b
            }
        },
        methods: {
            changeAge() {
                this a = 20;
            }
        }
    }
&lt;/script&gt;
                            </pre> </code>
                    </vue-code-highlight>  
                </div>
                <p> The <span class="variableHighlight">age</span> is established in the computed section
                    of the script. Because <span class="variableHighlight">a</span> is "10" and <span class="variableHighlight">b</span> is "9", <span class="variableHighlight">age</span> will print out as
                    "19" in the template.
                </p>
                <p> 
                    The button has a directive attached to the <span class="variableHighlight">"changeAge"</span> function in the methods
                    section of the script. Clicking this button causes the function to 
                    change the value of <span class="variableHighlight">a</span> from "10" to "20". <span class="variableHighlight">Age</span> is automatically
                    updated to "29" in the template because <span class="variableHighlight">a</span> is "20" and <span class="variableHighlight">b</span> is "9".
                </p>
                <!-- EXAMPLE  -->

                <h3 id="Data" > Data </h3>
                <p>  This is where you store your reactive properties/variables. The 
                    information you add here will return the initial state of our 
                    component and Vue will make the properties reactive. 
                </p>

                <p>
                    What does it mean when Vue makes a property reactive?
                </p>
                <h3 id="ReactiveAndImperative" > Difference Between Reactive and Imperative </h3>

                <p>NEED TO FIX: Typically, JavaScript has ways of doing things Imperatively 
                    (do these things in this order) or declaratively (this is what 
                    I want for when these things are happening).</p>

                <p> 
                        
                </p>

                <p> Take the expression: </p>

                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
let a = 2;
let b =3;
let age = a + b;
                            </pre> </code>
                    </vue-code-highlight>  
                </div>
                <p> In JavaScript, age will point to the number 5. BUT, if right after, I was to change the variable a: </p>
                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
let a = 2;
let b =3;
let age = a + b;
a = 10;
                            </pre> </code>
                    </vue-code-highlight>  
                </div>
                <p> The variable age still points to 5. </p>

                <p> BUT, as we've shown in the computed section, Vue will automatically
                    update age is we make it a reactive dependancy by using the data
                    and computed section. 
                </p>

                <p> Which all can be manipulated with your methods.  </p>

                <h3 id="UseMethods"> Ways to Use Methods </h3>
                <p> Here are just a few suggestions to utilize methods in Vue:</p>
                <ol>
                    <li> Changing the values of either inline styles or the class of 
                        an element so that it uses a new style based on a condition 
                        like hover, click, or moving the mouse.
                    </li>
                    <li>Call for and manipulate data from either within the application 
                        or an external source.
                    </li>
                    <li> Use reactivity and computation to keep track of client width/height 
                        so you can use those variables to adjust background sizes and more.
                    </li>
                </ol>
            </div>
            
           <div class="articleNavigation">
                <h3> In this Article </h3> 
                <div class="articleNavigationWrapper">
                    <a class="innerLink" href="/documentation/computed-properties#ComputedProperties"> Computed Properties </a>
                    <a class="innerLink" href="/documentation/computed-properties#Methods"> Methods </a>
                    <a class="innerLink" href="/documentation/computed-properties#Computed"> Computed  </a>
                    <a class="innerLink" href="/documentation/computed-properties#Data"> Data </a>
                    <a class="innerLink" href="/documentation/computed-properties#ReactiveAndImperative"> Reactive and Imperative Differences</a>
                    <a class="innerLink" href="/documentation/computed-properties#UseMethods"> Ways to Use Methods </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VueCodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";

export default {
    name: "ComputedProperties",
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
    width: 500px;
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
