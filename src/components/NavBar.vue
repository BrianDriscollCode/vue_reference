<template>
    <div class="NavBar">
        <div class="navWrapper">
            <div class="logoWrapper">
                <img src="../assets/logo.png" width="55" height="55"/>
                <p> Vue Reference </p>
            </div>

            <div class="navigationLinks">
                <router-link class="router-link" to="/"> Home </router-link>
                <router-link class="docs-link router-link" to="/documentation"> <span id="docsButton"> Documentation </span> </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    mounted() {
        console.log("NavBar Mounted, falsy emitted")
        this.$emit("docsTrue", false)
    }
}
</script>

<style scoped>

.NavBar {
    width: 100%;
    background-color: #14213D;
    color: white;
}

.navWrapper {
    width: 80%;
    margin: 0 auto 0 auto;    
    height: 75px;
    display: flex;
    justify-content: space-between;
}

.logoWrapper {
    height: 100%;
    display: flex;
    align-items: center;
}

.logoWrapper img {
}

.navigationLinks {
    display: flex;
    flex-direction: row;
    margin-top: auto;
    margin-bottom: auto;
}

.router-link {
    text-decoration: none;
    color: white;
    margin-left: 2em;
}

.router-link:hover {
    transition: color 0.1s;
    color: rgb(215, 215, 215);
    
}

#docsButton {
    background-color: #FCA311;
    padding: 8px;
    border-radius: 10px;
}

#docsButton:hover {
    transition: background-color 0.1s;
    background-color: #F29602;
    text-shadow: 1px 0px 2px rgba(150, 150, 150, 0.34);
}

h2 {
    margin: 0;
}
</style>