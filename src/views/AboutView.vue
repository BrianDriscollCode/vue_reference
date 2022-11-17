<template>
  <div class="AboutView">
    <h1>This is an about page</h1>
    <p> {{ description }} </p>
    <ul>
      <li @v-for="single in listOfNames"> {{ single }} </li>
    </ul>
  </div>
</template>

<script>
import Utils from "../utils.js"

export default {
  data() {
    return {
      name: 'Joey',
      description: "Joey is a person. This person can do many things! Now will there be spaces? Who knows!",
      listOfNames: ["Ryan", "Dyson", "Kai"]
    }
  },
  methods: {
    intialize() {
      this.reformObjectCreate() 
    },
    reformObjectCreate() {
      Object.create = function(o) {
            var F = function() {}
            F.prototype = o
            return new F()
        }

    },
  },
  mounted() {
    console.log("VIEWING About Page")
    this.intialize()
    let utils = Object.create(new Utils);
    utils.log(utils)
    utils.log("util log")
    utils.logTextArray(["Hello 1", "Runaway 2", "Crablegs 3"])
    Utils.defineMe()
  },
}
</script>
