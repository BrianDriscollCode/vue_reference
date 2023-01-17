<template>
    <section class="gettingStartedDocumentation">
        <div class="pageWrapper">
            <div class="contentWrapper"> 
                <h1 id="Props"> Props </h1>

                <p> If you are from the React world, you will be very familiar with props. Vue offers 
                    similar functionality with their prop system.  </p>
                <p> If not, here’s a short explanation of what props are: props are pieces of data that 
                    you pass down to child components. </p>

                <img :src="photo" />
                <p> There are two ways to declare a prop in a child component so that it
                    can receive data from the parent component:
                </p>

                <ol>
                    <li> Using an Array of Strings </li>
                    <div class="codeSnippet">
                        <vue-code-highlight language="javascript"> 
                            <code> 
                                <pre>     
export default {
    props: ["firstString", "secondString", "thirdString"]
}
                                </pre> 
                            </code>
                        </vue-code-highlight>  
                    </div>

                    <p> Each string within the props array can now be used to pass down
                        data to another components. </p> 
                        

                    <li> Using Object and Type Syntax </li>
                    <div class="codeSnippet">
                        <vue-code-highlight language="javascript"> 
                            <code> 
                                <pre>     
export default {
    props: {
        firstProp: String,
        secondPropRandomName: Number
    }
}
                                </pre> 
                            </code>
                        </vue-code-highlight>  
                    </div>
                    <p> In this example we declare a prop name then specify a type for that
                        prop. This helps ensure type safety via static typing when passing data between components. </p> 
                </ol>
            
                <p> Now the component can display the prop to the template. Keep in mind though, it will show 
                    nothing because there is no data yet being displayed or passed yet.  Let’s now go to the 
                    parent component and pass data down to the child component.</p>

                <hr />

                <!-- ***STEP 1 -->

                <h2 id="PassingDataAsProps"> Passing Data as Props </h2>
                <p> You can pass any datatype as a prop. Of course, depending on the data-type and whether we
                    are passing something static or dynamic, there different things we will have to do.
                </p>
                <p> 
                    First, let's pass a static string from the parent to the child.
                </p>
                <p> 
                    In the parent:
                </p>
                
                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                            <code> 
                                <pre>     
&lt;Banner title="My Journey with Vue" /&gt;
                                </pre> 

                            </code>
                    </vue-code-highlight>  
                </div>

                <p> 
                    In the code snippet above, we are passing a string as a prop called "title". 
                </p>

                <p> But what if the data is going to change? </p>

                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                            <code> 
                                <pre>     
&lt;Banner :title="post.title" /&gt;
                                </pre> 

                            </code>
                    </vue-code-highlight>  
                </div>

                <p> Above we are accessing the title property of a post while also using colons to tell
                    Vue that we want this prop to be reactive.
                </p>

                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                            <code> 
                                <pre>     
&lt;Banner :title="post.title + ' by ' + post.author" /&gt;
                                </pre> 

                            </code>
                    </vue-code-highlight>  
                </div>
                
                <p> The code snippet above shows how you can use an expression inside of a reactive prop. Inside the <span class="variableHighlight">data</span>, 
                    or if you have made an external call to a database or api, you would receive an object. This expression is combining
                    two properties of the <span class="variableHighlight">post</span> object called <span class="variableHighlight">title</span> 
                    and <span class="variableHighlight">author</span>.
                </p>

                <p> To dive a little more in the v-bind syntax, specifically the <span class="variableHighlight">colon</span>,
                when passing all types of data v-bind is necessary except for strings that are not reactive. </p>

                <p> For example: </p>
                <div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                            <code> 
                                <pre>     
&lt;!-- no v-bind --&gt;
&lt;Banner title="hello world" /&gt;

&lt;!-- with v-bind --&gt;
&lt;Banner :title="32" /&gt;
&lt;Banner :title="[23, 23, 24]" /&gt;
                                </pre> 

                            </code>
                    </vue-code-highlight>  
                </div>
                
                <h2 id="OneWayDataFlow" > One-Way Data Flow </h2> 
                <p>On the main Vue documentation, it will explain that data only flows one way, from parent to child. 
                    It is created this way because it makes it simple to understand the data flow and you lower the 
                    risk of mutating data.  </p>

                <p>BUT, there is a way to pass data from a child component to a parent component.  You can pass a 
                    function down as a prop and allow that function to change data in the parent component.</p>

                <p>If you are just learning for the first time and need a way to overcome this hurdle, this is a 
                    quick band-aid fix.</p>

                <p> Although, if you are looking to expand your application further, a state solution like Vuex or 
                    Pinia should start being explored. </p>

            </div>
        </div>
        <div class="articleNavigation">
            <h3> In this Article </h3> 
            <div class="articleNavigationWrapper">
                <a class="innerLink" href="/documentation/props#Props"> Props </a>
                <a class="innerLink" href="/documentation/props#PassingDataAsProps"> Passing Data as Props </a>
                <a class="innerLink" href="/documentation/props#OneWayDataFlow"> OneWayDataFlow  </a>
            </div>
        </div>
    </section>
</template>

<script>
import VueCodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";

export default {
    name: "PropsDoc",
    components: {
        VueCodeHighlight,
    },
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
