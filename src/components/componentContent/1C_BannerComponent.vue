<template>
    <section class="gettingStartedDocumentation">
        <div class="pageWrapper">
            <div class="contentWrapper">
                <h1 id="bannerComponent"> Banner Component </h1>
                <p> You will see several examples of banners with code, examples, and explanations.</p> 

                <h2 id="imageBanner">Background Image Banner </h2>

                <p> *Note: I found it much easier whether in Vue or React that getting the
                    background image from css styles is much easier than doing it inline. No worries
                    about instantiation, pulling the image, etc.
                </p>
                <Banner insideColor="none" />

                <vue-code-highlight language="javascript" class="codeSnippet">
                    <code> 
                        <pre> 
&lt;template&gt;
    &lt;div class="bannerContainer"&gt;
            &lt;div class="bannerWrapper"&gt;
                &lt;h3> This is a Title &lt;/h3&gt;
                &lt;p> This is a Subtitle with details &lt;/p&gt;
            &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    name: "BannerExample"
}
&lt;/script&gt;

&lt;style scoped&gt;

    .bannerContainer {
        width: 100%;
        margin-top: 2em;
        background: linear-gradient(
            to bottom,
            rgba(127, 127, 127, 0.404),
            #c7c79234
        ), url('@/assets/vue_background.jpg');
        display: flex;
        background-size: cover;
        justify-content: center;
        height: 350px;
        align-items: center;
    }

    .bannerWrapper {
        text-align: center;
        width: 80%;
        padding: 2em;
    }

    .bannerWrapper h3 {
        margin-top: 0;
    }

&lt;/style&gt;

                        </pre>
                    </code>
                </vue-code-highlight>

                <h2 id="hoverBanner"> Hover Effect Banner </h2>
                <Banner2 />
                <p> Some things to notice: </p>
                <ul>
                    <li> Using @mouseover and @mouseout to call a method. [Event Handling] </li>
                    <li> Storing 2 variables as data: (1) currentColor and (2) active. [Reactivity and State] </li>
                </ul>
                <p> Still in progress... </p>
                
                <vue-code-highlight language="javascript" class="codeSnippet">
                    <code> 
                        <pre> 
&lt;template&gt;
    &lt;div 
        @mouseover="changeCurrentColor()" 
        @mouseout="changeCurrentColor()"
        class="bannerContainer"&gt;
        :style="{backgroundColor: currentColor}"
    &gt;
        &lt;div class="bannerWrapper"&gt;
                &lt;h3> This is a Title &lt;/h3&gt;
                &lt;p> This is a Subtitle with details &lt;/p&gt;
            &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    name: "BannerExample",
    data() {
        return {
            currentColor: '#bff4ff',
            active: false
        }
    },
    methods: {
        //Toggle color using bool this.active
        changeCurrentColor() {
            if (this.active) 
            {
                this.currentColor = '#bff4ff'
            }
            else 
            {
                this.currentColor = '#FFC427'
            }

            this.active = !this.active;
            
        }
    }
}
&lt;/script&gt;

&lt;style scoped&gt;

    .bannerContainer {
        width: 100%;
        margin-top: 2em;
        display: flex;
        justify-content: center;
        background-size: cover;
        height: 350px;
        align-items: center;
        transition: background 2s;
    }

    .bannerWrapper {
        text-align: center;
        width: 80%;
        padding: 2em;
    }

    .bannerWrapper h3 {
        margin-top: 0;
    }

&lt;/style&gt;

                        </pre>
                    </code>
                </vue-code-highlight>

                <div class="bannerExplanationContent">
                    <h2 id="simpleBanner"> How to Create a Simple Banner in Vue </h2>
                    <p> A banner usually has 3 parts: (1) Title (2) Subtitle (3) Background </p>
                    <p> I recommend <strong>wrapping the content inside of your banner for 
                        more control over the position.</strong> You will notice that I did 
                        this with the examples above under the class "bannerWrapper".</p>
                    <p> Below is a visual representation of this wrapping: </p>
                    <Banner insideColor="#FF9781" />
                </div>
            </div>
            
            <div class="articleNavigation">
                <h3> In this Article </h3> 
                <div class="articleNavigationWrapper">
                    <a class="innerLink" href="/documentation/components/banner#bannerComponent"> Banner Component </a>
                    <a class="innerLink" href="/documentation/components/banner#imageBanner"> Background Image Banner </a>
                    <a class="innerLink" href="/documentation/components/banner#hoverBanner"> Hover Effect Banner </a>
                    <a class="innerLink" href="/documentation/components/banner#simpleBanner"> Create a Simple Banner </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Banner from "../components/bannerExample.vue";
import Banner2 from "../components/bannerExample2.vue";
import VueCodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";

export default {
    name: "GettingStarted",
    components: {
        Banner: Banner,
        Banner2: Banner2,
        VueCodeHighlight

    },
    props: {
        insideColor: String, 
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

.innerLink {
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
