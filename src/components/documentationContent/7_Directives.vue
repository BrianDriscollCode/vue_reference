<template>
    <section class="gettingStartedDocumentation">
        <div class="pageWrapper">
            <div class="contentWrapper"> 
                <h1 id="Directives"> Directives </h1>

                <p>
                    There are quite a few directives built-in to Vue. But for 
                    the sake of simplicity, only ones that I think are necessary 
                    and often used will be included. For example, v-html can be 
                    used to add HTML to your component, but it comes with security 
                    risks AND scoped stylings will not apply. Therefore it isn’t included. 
                </p>

                <h3>* v-text </h3>
                <p> Sets the element’s text content. In JavaScript terms, it changes 
                    this part of an element: document.getElementById(”divA”).textContent
                </p>
                <ul>
                    <li> Type Input: string </li>
                </ul>
                <p> Can either be implemented within the element: &lt;span v-text=”varName”&gt; &lt;/span&gt; </p>
                <p> Or you can use mustache interpolations: &lt;span&gt; &#123;&#123; varName &#125;&#125; &lt;/span&gt; </p> 
                
                <h3>* v-show</h3>
                <p> Show and element whether or not the expression within is truthy. </p>
                <ul>
                    <li> Type Input: any </li>
                </ul>
                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
&lt;div v-show=”isItTruthy”&gt; &lt;/div&gt;
                            </pre> </code>
                    </vue-code-highlight>  
                </div>
                <p>
                    Sets the inline style of an element and it will do it’s best to respect the initial display 
                    value. Unlike changing display: block to display: none, it will allow transitions when changed.
                </p>
                
                <h3> * v-if</h3>
                <p> Renders the elements based on whether the expression is truthy. </p>
                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
&lt;div v-if=”isItTruthy”&gt; &lt;/div&gt;
                            </pre> </code>
                    </vue-code-highlight>  
                </div>

                <p> 
                    When the logic is triggered, the element is destroyed and re-constructed. This is more expensive 
                    after the render, where v-show is more expensive during the render.
                </p>
                <p> 
                    If false, then the element won’t be rendered. This will also allow transitions, unlick toggling 
                    display: none → display: block.
                </p>

                <h3> * v-else-if </h3>
                <p> Part of a logical chain of if, else-if, and else statements. Renders if condition is truthy. </p>
                <ul>
                    <li> Type Input: any </li>
                </ul>
                
                <h3> * v-else </h3>
                <p> The last part of the logical chain of an if-else. Renders if the other parts do not meet 
                    truthy requirements. 
                </p>
                <ul>
                    <li> Type Input: any </li>
                </ul>

                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
&lt;div v-if=”participants === 1”&gt; 

    1 Player

&lt;/div&gt;

&lt;div v-else-if=”participants === 2”&gt; 

    2 Player

&lt;/div&gt;

&lt;div v-else=”participants === 3”&gt; 

    3 Player

&lt;/div&gt;
                            </pre> </code>
                    </vue-code-highlight>  
                </div>

            <h3> * v-for </h3>
        <p> 
            Takes in a piece of data and iterates through it to render multiple times based on the amount of elements in the source.
        </p> 
        <ul>
            <li> Type Input: Array, Object, number, string </li>
        </ul>

        <h3> * v-on </h3>
        <p> Also appears as the shorthand “@” and attaches an event listener to an element. </p>

        <ul>
            <li> Type Input: Function, Inline Statement, Object </li>
            <li> Common Modifiers: </li>
            <ul>
                <li> .prevent - call event.preventDefault() </li>
                <li> .once - trigger handler one time </li>
                <li> .left - only trigger from left button mouse events. </li>
                <li> .right - only trigger from right button mouse events. </li>
                <li> .passive - Makes a <a href="https://stackoverflow.com/questions/37721782/what-are-passive-event-listeners"> DOM event passive.</a> </li>
            </ul>
            <li> Examples: </li>
            <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
&lt;button v-on:click="aMethod"&gt; &lt;/button&gt;  
&lt;button @click="aMethod"&gt; &lt;/button&gt;  
                            </pre> </code>
                    </vue-code-highlight>  
            </div>
            <p> These are both the same, just one uses the shorthand "@" syntax. </p> 

            <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
&lt;button @[event]="aMethod"&gt;  &lt;/button&gt; 
                            </pre> </code>
                    </vue-code-highlight>  
            </div>
            <p> This is a dynamic event so you can run different pieces of logic depending 
                on what you choose to insert. 
            </p>
            <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
&lt;button @submit.prevent&gt;  &lt;/button&gt; 
                            </pre> </code>
                    </vue-code-highlight>  
            </div>
            <p> Submits (a form for example) and adds the event.preventDefault() so a page 
                refresh does not occur. 
            </p>
            <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
&lt;button @keyup.enter="aMethod"&gt;  &lt;/button&gt; 
                            </pre> </code>
                    </vue-code-highlight>  
            </div>
            <p> Listens for when the user let’s the “enter” key up. 
            </p>
        </ul>

        <h3> * v-bind </h3> 
        <p> This will be one of the most commonly used directives. Instead of only allowing 
            a hard-coded string, v-bind will allow you to input variables allowing for
             more dynamic use. It can be used on a class, style, src, or an object of 
             multiple attributes. 
        </p>
        <ul>
            <li> Type Input: any </li>
        </ul>
        <p> This directive is fairly complex with modifiers that will force bindings 
            into a DOM property or attribute, but to keep it straight forward, you 
            will use this directive whenever wanting to input a variable (number, 
            string, array, object, etc) into an element’s attribute within the 
            template. 
        </p>
        <ul>
            <li> Examples: </li>
            <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
&lt;img v-bind:src="imagePath" /&gt;
&lt;img :src="imagePath" /&gt;
                            </pre> </code>
                    </vue-code-highlight>  
            </div>
            <p> These are the same. </p>

            <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>     
&lt;div :class="className: true"&gt; &lt;/div&gt;
                            </pre> </code>
                    </vue-code-highlight>  
            </div>
            <p> 
                This defines the class name as “className” and accepts a truthy 
                value. To make this more usable, the truthy value would instead 
                be a variable in data or a computed property.
            </p>

            <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>    
&lt;!-- Without binding --&gt;
&lt;div style="fontSize: 35px"&gt; &lt;/div&gt;

&lt;!-- With binding --&gt;
&lt;div :style="{ display: displayType }"&gt; &lt;/div&gt;
&lt;div :style="{ marginTop: size + 'px'}"&gt; &lt;/div&gt;
                            </pre> </code>
                    </vue-code-highlight>  
            </div>
            <p> 
                You can also use expressions to make your style bindings reactive 
                as shown in the binded divs above. The displayType and sizes can be 
                changed depending on how you choose to compute those properties.
            </p>
        </ul>

        <h3> *v-model </h3>
        <p> When creating forms, it’s very useful to create a binding between the 
            user’s input and a state variable in your program. V-model allows us 
            to simplify this process to create a two-way binding of data.  
        </p>
        <ul>
            <li> Can be used with: &lt;input&gt;, &lt;textarea&gt;, &lt;select&gt;, and &lt;components&gt; </li>
            <li> Example: </li>

        </ul>
        <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>    
&lt;input v-model=”searchText” /&gt;

&lt;p&gt; &#123;&#123; searchText &#125;&#125; &lt;/p&gt;
                            </pre> </code>
                    </vue-code-highlight>  
        </div>

        <p> In the example, assume we have already declared a variable called “searchText” in options 
            api via “data”. We then enter this variable into the v-model which now binds 
            that input’s value to the searchText state variable. 
        </p>
        <p> Whatever we enter into the input will also display in the paragraph tag. </p>
        <p> We can bind data between components using props. </p>
        <p> Parent component: </p> 
        <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>    
&lt;input v-model=”searchText” /&gt;

&lt;ComponentName :inputText="searchText" /&gt;
                            </pre> </code>
                    </vue-code-highlight>  
        </div>

        <p> Child component: </p>

        <p> In template -</p>
         <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>    
&lt;p&gt; { { inputText } } &lt;/p&gt;

&lt;ComponentName :inputText="searchText" /&gt;
                            </pre> </code>
                    </vue-code-highlight>  
        </div>

        <p> In script -</p>
         <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> <pre>    
props: {
    inputText: String
}
                            </pre> </code>
                    </vue-code-highlight>  
        </div>

        <p> We declare v-model in the parent component, declare the searchText data 
            variable, and then we send a prop down to the child component which is 
            also using v-bind (because we sending a variable through).  
        </p>

        <p> Then in the child component, we handle the data just like a regular prop. 
            Declare the props with it’s type and then you can use it with mustache syntax.
        </p>

        <h3> *v-slot </h3>
        <h3> *v-pre </h3>
        <h3> *v-once </h3>
        <h3> *v-memo </h3>
        <h3> *v-cloak </h3>

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
