<template>
    <div class="TopBar">
        <h2> Top Bar  </h2>
    </div>
</template>

<script>
export default {
    name: "TopBar",
    data() {
        return {
            message: "This is a message 2",
        }
    },
    mounted() {
        console.log("TopBar Mounted")
    }     
}
</script>

<style scoped>

.TopBar {
    height: 7%;
    background-color: rgb(85, 255, 29);
}

</style>