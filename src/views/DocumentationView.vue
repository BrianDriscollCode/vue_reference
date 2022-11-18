<template>
    <section class="DocumentationView">
        
        <!-- All documentation pages "as components" @/components/documentationContent-->
        <!-- 1a: Not sure if "undefined" is the best way to conditionally render this -->
        <div v-if="this.page === undefined">
            <h1> Documentation Home </h1>
        </div>
        <GettingStarted v-if="this.page === 'getting-started'"/>
        <MakingAComponent v-if="this.page === 'making-a-component'"/>
        <MethodsDoc v-if="this.page === 'methods'"/>
        
        <!--  Component examples "as components" @/components/componentContent -->
        <BannerComponent v-if="this.page === 'banner'"/>
        <ArticlePreviewComponent v-if="this.page === 'article-preview'"/>

        <!-- Random log for error checking -->
        <p> {{ $route.params.documentationPage }} </p>
        
        <FooterBasic />
    </section>
</template>

<script>
import FooterBasic from "@/components/FooterBasic"
import GettingStarted from "@/components/documentationContent/1_GettingStarted"
import MakingAComponent from "@/components/documentationContent/2_MakingAComponent"
import MethodsDoc from "@/components/documentationContent/3_MethodsDoc"
import BannerComponent from "@/components/componentContent/1C_BannerComponent"
import ArticlePreviewComponent from "@/components/componentContent/2C_ArticlePreviewComponent"

export default {
    name: "DocumentationView",
    components: {
        // Page Element
        FooterBasic,
        // Documentation 
        GettingStarted,
        MakingAComponent,
        MethodsDoc,
        // Component Documentation
        BannerComponent,
        ArticlePreviewComponent
    },
    data() {
        return { 
            // Used as a comparison operator to select page based on route parameter
            page: this.$route.params.documentationPage,
        }
    },
    message: "This is a message 3",
    mounted() {
        console.log("VIEWING Documentation Page")
    },
    updated() {
        // everytime route changes, the page variable in data() changes
        this.page = this.$route.params.documentationPage
    }
}
</script>

<style scoped>

.DocumentationView {
    background-color: white;
    height: 93%;
}

h1 {
    margin: 0;
}

</style>
