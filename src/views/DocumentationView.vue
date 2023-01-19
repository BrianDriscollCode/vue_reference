<template>
    <main class="DocumentationView">
        
        <!-- All documentation pages "as components" @/components/documentationContent-->
        <!-- 1a: Not sure if "undefined" is the best way to conditionally render this -->
        <div v-if="this.page === undefined">
            <h1> Documentation Home </h1>
        </div>
        <GettingStarted v-if="this.page === 'getting-started'"/>
        <MakingAComponent v-if="this.page === 'making-a-component'"/>
        <ComputedProperties v-if="this.page === 'computed-properties'"/>
        <IntroductionDoc v-if="this.page === 'introduction'"/>
        <BasicRouting v-if="this.page === 'basic-routing'" /> 
        <PropsDoc v-if="this.page === 'props'" />
        <LifecycleDoc v-if="this.page === 'lifecycle'" />
        <DirectivesDoc v-if="this.page === 'directives'" />
        <EventHandlingDoc v-if="this.page === 'event-handling'" />
        

        <!--  Component examples "as components" @/components/componentContent -->
        <BannerComponent v-if="this.page === 'banner'"/>
        <ArticlePreviewComponent v-if="this.page === 'article-preview'"/>

        <!-- Random log for error checking -->
        <!-- <p> {{ $route.params.documentationPage }} </p> -->
        
        <FooterBasic />
    </main>
</template>

<script>
import FooterBasic from "@/components/FooterBasic";
import IntroductionDoc from "@/components/documentationContent/1_A_Introduction";
import GettingStarted from "@/components/documentationContent/1_GettingStarted";
import MakingAComponent from "@/components/documentationContent/2_MakingAComponent";
import ComputedProperties from "@/components/documentationContent/3_ComputedProperties";
import BasicRouting from "@/components/documentationContent/4_BasicRouting.vue";
import PropsDoc from "@/components/documentationContent/5_Props.vue";
import LifecycleDoc from "@/components/documentationContent/6_Lifecycle.vue";
import DirectivesDoc from "@/components/documentationContent/7_Directives.vue";
import EventHandlingDoc from "@/components/documentationContent/8_EventHandling.vue";

import BannerComponent from "@/components/componentContent/1C_BannerComponent";
import ArticlePreviewComponent from "@/components/componentContent/2C_ArticlePreviewComponent";


export default {
    name: "DocumentationView",
    components: {
        // Page Element
        FooterBasic,

        // Documentation 
        IntroductionDoc,
        GettingStarted,
        MakingAComponent,
        ComputedProperties,
        BasicRouting,
        PropsDoc,
        LifecycleDoc,
        DirectivesDoc,
        EventHandlingDoc,

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
    overflow-wrap: break-word;
    margin-top: 6em;
}

h1 {
    margin: 0;
}

</style>
