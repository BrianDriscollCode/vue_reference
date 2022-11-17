export default class Utils {

    constructor() {
        this.description = "Basic utilities for creating applications"
        this.name = "utils"
    }    
    
    static defineMe() {
        console.log("Basic utilities for creating applications")
        return "Basic utilities for creating applications"
    } 

    log(input) {
        console.log(input)
    }

    logTextArray(array) {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i])
        }
    }
    
}