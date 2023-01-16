<template>
    <div class="LeftSideBar">
        <router-link to="/" class="homeLink">
        <div class="logoWrapper">
                <img src="../assets/logo.png" width="45" height="45"/>
                <p> Vue Reference </p>
        </div>
        </router-link>

        <section class="documentationShelf">
            <div class="vueFundamentalsWrapper">
                <h2 class="docsSectionTitle"> Vue Fundamentals </h2> 
                
                    <div class="itemContainer">
                        <div class="iconContainer">
                            <img src="@/assets/angle_right.png" width="24" height="24" />
                        </div>
                        <router-link to="/documentation/introduction" class="routerLinkText"> Introduction </router-link>
                    </div>
                    <div class="itemContainer">
                        <div class="iconContainer">
                            <img src="@/assets/angle_right.png" width="24" height="24" />
                        </div>
                        <router-link to="/documentation/getting-started" class="routerLinkText"> Getting Started </router-link>
                    </div>
                    <div class="itemContainer">
                        <div class="iconContainer">
                            <img src="@/assets/angle_right.png" width="24" height="24" />
                        </div>
                        <router-link to="/documentation/making-a-component" class="routerLinkText"> Making a Component </router-link>
                    </div>
                    <div class="itemContainer">
                        <div class="iconContainer">
                            <img src="@/assets/angle_right.png" width="24" height="24" />
                        </div>
                        <router-link to="/documentation/computed-properties" class="routerLinkText"> Computed Properties </router-link>
                    </div>
                    <div class="itemContainer">
                        <div class="iconContainer">
                            <img src="@/assets/angle_right.png" width="24" height="24" />
                        </div>
                        <router-link to="/documentation/basic-routing" class="routerLinkText"> Basic Routing </router-link>
                    </div>
                    <div class="itemContainer">
                        <div class="iconContainer">
                            <img src="@/assets/angle_right.png" width="24" height="24" />
                        </div>
                        <router-link to="/documentation/props" class="routerLinkText"> Props </router-link>
                    </div>
                    <div class="itemContainer">
                        <div class="iconContainer">
                            <img src="@/assets/angle_right.png" width="24" height="24" />
                        </div>
                        <router-link to="/documentation/lifecycle" class="routerLinkText"> Lifecycle </router-link>
                    </div>
                    <div class="itemContainer">
                        <div class="iconContainer">
                            <img src="@/assets/angle_right.png" width="24" height="24" />
                        </div>
                        <router-link to="/documentation/directives" class="routerLinkText"> Directives </router-link>
                    </div>
                    <div class="itemContainer">
                        <div class="iconContainer">
                            <img src="@/assets/angle_right.png" width="24" height="24" />
                        </div>
                        <router-link to="/documentation/event-handling" class="routerLinkText"> Event Handling </router-link>
                    </div>
                    <div class="itemContainer">
                        <div class="iconContainer">
                            <img src="@/assets/angle_right.png" width="24" height="24" />
                        </div>
                        <router-link to="/documentation/conditional-rendering" class="routerLinkText"> <del> Conditional Rendering </del></router-link>
                    </div>
                    <div class="itemContainer">
                        <div class="iconContainer">
                            <img src="@/assets/angle_right.png" width="24" height="24" />
                        </div>
                        <router-link to="/documentation/api-reference" class="routerLinkText"> <del> Vue's API Reference </del></router-link>
                    </div>
                    <div class="itemContainer">
                        <div class="iconContainer">
                            <img src="@/assets/angle_right.png" width="24" height="24" />
                        </div>
                        <router-link to="/documentation/reactivity-and-state" class="routerLinkText"> <del> Reactivity and State </del></router-link>
                    </div>
                    <div class="itemContainer">
                        <div class="iconContainer">
                            <img src="@/assets/angle_right.png" width="24" height="24" />
                        </div>
                        <router-link to="/documentation/working-inline" class="routerLinkText"> <del> Working Inline the Template </del></router-link>
                    </div>
                    <div class="itemContainer">
                        <div class="iconContainer">
                            <img src="@/assets/angle_right.png" width="24" height="24" />
                        </div>
                        <router-link to="/documentation/shared-state-solution" class="routerLinkText"> <del> Shared State Solution </del></router-link>
                    </div>
            </div>
            <div class="vueComponentsWrapper">
                <h2 class="docsSectionTitle"> Vue Components </h2> 

                    <div class="itemContainer">
                        <div class="iconContainer">
                            <img src="@/assets/angle_right.png" width="24" height="24" />
                        </div>
                        <router-link to="/documentation/components/banner" class="routerLinkText"> Banner </router-link>
                    </div>

                    <div class="itemContainer">
                        <div class="iconContainer">
                            <img src="@/assets/angle_right.png" width="24" height="24" />
                        </div>
                        <router-link to="/documentation/components/article-preview" class="routerLinkText"> <del> Article Preview </del></router-link>
                    </div>

                    <div class="itemContainer">
                        <div class="iconContainer">
                            <img src="@/assets/angle_right.png" width="24" height="24" />
                        </div>
                        <router-link to="/documentation/components/article-preview" class="routerLinkText"> <del> Multiple Layout </del></router-link>
                    </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "LeftSideBar",
    data() {
        return {
            message: "Left Side Bar"
        }
    },
    mounted() {
        console.log("LeftSideBar Mounted, truthy emitted")
        this.$emit("docsTrue", true, false)
    },
    computed() {
        
    }
}
</script>

<style scoped>

.homeLink {
    text-decoration: none;
}

.logoWrapper {
    padding: 0.375em;
    display: flex;
}

.LeftSideBar {
    height: 100%;
    background-color: rgb(250, 250, 249);
    position: fixed;
    width: 18%
}

.documentationShelf {
    padding: 0.575em;
}

.documentationShelf h2 {
    font-size: 1.3em;
}

.docsSectionTitle {
    margin-top: .725em;
    margin-bottom: .725em;
}

.itemContainer {
    display: flex;
    flex-direction: row;
    margin-top: .125em;
}

.routerLinkText {
    text-decoration: none;
}

</style>