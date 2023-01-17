<template>
    <section class="gettingStartedDocumentation">
        <div class="pageWrapper">
            <div class="contentWrapper">
                <h1 id="introduction"> Introduction </h1>
                <p> This website a documentation of a single web developer's reading,
                    implementation, and knowledge of Vue. These are not the official
                    documents for reference. 
                </p>

                <p> However, I do think the information inside is valuable for as a quick 
                    reference for learning particular parts of Vue and for having
                    it broken down that less seasoned programmers can understand it.
                </p>

                <h2 id="#theFocus"> The Focus </h2>

                <p> This website will look at Vue from the perspective of using WebPack, Vue CLI,
                    and NPM. All the necessary tools to get started are in the "Getting-Started" Page.
                </p>
                
                <p> I am also focusing on the <b>Options API</b>. In the future after I get a good handle on this part of Vue I will explore the <b> Composition API</b>. </p>

                <p> One last thing! On top of concepts, the documentation also covers
                    creating simple components from scratch. I think these maybe 
                    helpful for those new to Vue!
                </p>
            
            </div>
            
            <div class="articleNavigation">
                <h3> In this Article </h3> 
                <div class="articleNavigationWrapper">
                    <a class="innerLink" href="/documentation/introduction#introduction"> Introduction </a>
                    <a class="innerLink" href="/documentation/introduction#theFocus"> The Focus </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: "IntroductionDoc",
    
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
