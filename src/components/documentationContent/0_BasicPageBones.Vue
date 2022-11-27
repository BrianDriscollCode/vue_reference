<template>
    <section class="gettingStartedDocumentation">
        <div class="pageWrapper">
            <div class="contentWrapper">
                <h1> Example Page </h1>

                <p> Example text </p>
                <p> Example text </p>
                <p> Example text </p>
                <p> Example text </p>
                <p> Example text </p>
                <p> Example text </p>
                <h2> Example Title </h2>
                
            </div>
            
            <div class="articleNavigation">
                <h3> In this Article </h3> 
                <div class="articleNavigationWrapper">
                    <p> Making a Component </p>
                    <p> What is Vue </p>
                    <p> Downloading Vue </p>
                    <p> Resources for Learning </p>
                    <p> Common Front-End Features </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>


export default {
    name: "GettingStarted",
    components: {
     
    }
    
}
</script>

<style scoped>

.gettingStartedDocumentation {
    display: flex;
    justify-content: center;
    margin-top: 2em
}

.pageWrapper {
    width: 80%;
    display: flex;
    flex-direction: row;

}

h1 {
    margin-top: 0;
    font-size: 35px;
    font-weight: 500;
}

.contentWrapper {
    width: 84%;
}

.codeSnippet {
    width: 600px;
}

.articleNavigation {
    width: 16%;
    padding-left: 1em;
    position: fixed;
    right: 0;
}

.articleNavigation p {
    margin-top: 0;
}

.articleNavigationWrapper {
    border-left: 1px solid black;
    padding: 2px 2px 2px 6px;
    font-size: 0.825em
}

</style>
