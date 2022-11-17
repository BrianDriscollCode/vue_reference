<template>
    <section class="DocumentationView">
        <h1> This is documentation </h1>
    </section>
</template>

<script>

export default {
    name: "DocumentationView",
    message: "This is a message 3",
    mounted() {
        console.log("VIEWING Documentation Page")
    }
}
</script>

<style scoped>

.DocumentationView {
    background-color: bisque;
    height: 93%;
}

h1 {
    margin: 0;
}

</style>
