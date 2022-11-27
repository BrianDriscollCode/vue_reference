<template>

    <div class="bannerContainer">
        <div class="bannerWrapper" :style="{backgroundColor: insideColor}">
            <h3> This is a Title </h3>
            <p> This is a Subtitle with details </p>
        </div>
    </div>

</template>

<script>
export default {
    name: "BannerExample",
    props: ["insideColor"],
}
</script>

<style scoped>

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

</style>
