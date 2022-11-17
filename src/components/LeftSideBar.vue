<template>
    <div class="LeftSideBar">
        <h2> {{ message }}  </h2>


    </div>
</template>

<script>
export default {
    name: "LeftSideBar",
    data() {
        return {
            message: "This is a message 2"
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

.LeftSideBar {
    height: 100%;
    background-color: aqua;
}

</style>