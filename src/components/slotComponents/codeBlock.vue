<template>

<div class="codeSnippet">
                    <vue-code-highlight language="javascript"> 
                        <code> 
                            <slot> </slot>
                        </code>
                    </vue-code-highlight>  
                </div>

</template>

<script> 
import VueCodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";

export default {
    name: "codeBlock",
    components: {
        VueCodeHighlight
    }
}

</script>

<style scoped> </style>
