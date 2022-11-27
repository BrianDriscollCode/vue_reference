<template>

    <div 
        @mouseover="changeCurrentColor()" 
        @mouseout="changeCurrentColor()"
        class="bannerContainer"
        :style="{backgroundColor: currentColor}"
    >
        <div class="bannerWrapper">
            <h3> This is a Title </h3>
            <p> This is a Subtitle for hover banner </p>
        </div>
    </div>

</template>

<script>
export default {
    name: "BannerExample",
    props: ["insideColor"],
    data() {
        return {
            currentColor: '#bff4ff',
            active: false
        }
    },
    methods: {
        changeCurrentColor() {
            if (this.active) 
            {
                this.currentColor = '#bff4ff'
            }
            else 
            {
                this.currentColor = '#FFC427'
            }

            this.active = !this.active;
            
        }
    }
}
</script>

<style scoped>

    .bannerContainer {
        width: 100%;
        margin-top: 2em;
        display: flex;
        justify-content: center;
        background-size: cover;
        height: 350px;
        align-items: center;
        transition: background 2s;
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
