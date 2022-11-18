<template>
    <section class="DocumentationView">
        
        <!-- All documentation pages "as components" @/components/documentationContent-->
        <GettingStarted v-if="this.currentPage === GettingStarted"/>
        <MakingAComponent />
        
        <FooterBasic />
    </section>
</template>

<script>
import FooterBasic from "@/components/FooterBasic"
import GettingStarted from "@/components/documentationContent/1_GettingStarted"
import MakingAComponent from "@/components/documentationContent/2_MakingAComponent"

export default {
    name: "DocumentationView",
    components: {
        FooterBasic,
        GettingStarted,
        MakingAComponent
    },
    data() {
        return {
            currentPage: GettingStarted
        }
    },
    message: "This is a message 3",
    mounted() {
        console.log("VIEWING Documentation Page")
        console.log(GettingStarted, "**", this.currentPage)
        console.log()
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
