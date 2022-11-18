<template>
<div class="footerBasic">
    <div class="footerWrapper">
    <hr />
    
    <div class="footerContentContainer">
        <div class="footerLinks">
        <p> <router-link to="/about" class="footerLinkRouter"> About </router-link> </p>
        <p> <router-link to="/documentation" class="footerLinkRouter"> Documentation </router-link> </p>
        <p> <router-link to="/contact" class="footerLinkRouter"> Contact us </router-link> </p>
        </div>
    
        <p class="footerInc"> © All rights reserved by VueReference </p>
    </div>

    </div>
</div>
</template>

<script>
export default {
    name: "FooterBasic",
    data() {
        return {
            message: "Hello 2"
        }
    }
}
</script>

<style> 

/* Footer Area  */

.footerWrapper {
  margin: 0 auto 0 auto;
  width: 80%;
}

.footerWrapper hr {
  border: 1px solid #14213D
}

.footerContentContainer {
  display: flex;
  justify-content: space-between;
}

.footerLinks {
  display: flex;
  flex-direction: row;
  font-size: 1em; 
}

.footerLinks p:not(:first-child) {
  padding-left: 2em;
}

.footerInc {
  font-size: 1em;
}

.footerLinkRouter {
  text-decoration: none;
  color: #14213D;
}
</style>
