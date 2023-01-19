<template>
    <section class="gettingStartedDocumentation">
        <div class="pageWrapper">
            <div class="contentWrapper"> 
                <h1 id="Directives"> Conditional Rendering </h1>

                <p> Depending on the conditions of certain variables 
                    you may set in the data or logic you include inline,
                     you are doing to render certain elements based on 
                     this logic. 
                </p>

                <p> Vue gives the user several tools to accomplish this. </p>

                <h3> *v-if </h3> 
                <p> v-if is a directive used to conditionally render an element based on the 
                    truthiness of an expression. For example: </p>



                <CodeBlock> 
                        <pre> 
&lt;button @click=”number++”&gt; Add &lt;/button&gt;  

&lt;p&gt; Count is: &#123;&#123; number &#125;&#125; &lt;p&gt;

&lt;template&gt;
    &lt;div&gt;
        &lt;p v-if="showMessage">This is a message&lt;/p&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        data() {
            return {
                showMessage: true
            }
        }
    }
&lt;/script&gt;
                    </pre> 
                </CodeBlock>


            <p> In this example, the 'p' element will only be rendered if 
                the 'showMessage' data property is 'true'.
            </p>


            <h3> *v-else </h3>
            <p> v-else is used in conjunction with v-if to create an "if-else" 
                style of conditional rendering. For example: </p>

            <CodeBlock>
                <pre>

&lt;template&gt;
    &lt;div&gt;
        &lt;p v-if="showMessage">This is a message&lt;/p&gt;
        &lt;p v-else>This is not a message/p&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data() {
        return {
            showMessage: false
        }
    }
}
&lt;/script&gt;
                
                </pre>
            </CodeBlock>

            <p> In this example, if showMessageis true, the first pelement will be rendered, 
                otherwise the second pelement with v-else will be rendered. 
            </p>

            <h3> *v-show </h3>
                <p> 
                    v-show is similar to v-if, but it's used to toggle the display property of an element rather than rendering it. For example:
                </p>

            <CodeBlock>
                <pre>
&lt;template&gt;
    &lt;div&gt;
        &lt;p v-show="showMessage">This is a message&lt;/p&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        data() {
            return {
                showMessage: true
            }
        }
    }
&lt;/script&gt;
                </pre>
            </CodeBlock>

            <h3> Conclusion </h3>

            <p> It's important to note that v-if, v-else, and v-show directives 
                have slightly different uses cases and performance implications. 
                v-if has the most overhead and it will fully render the component
                 only when the condition is met. v-show is less expensive 
                 but it will always render the component and just toggle 
                 the display property.
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
import CodeBlock from "../slotComponents/codeBlock";

export default {
    name: "ConditionalRendering",
    components: {
        CodeBlock

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
