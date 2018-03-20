import * as ss from 'simple-statistics';

// for nodeJS
// const ss = require("simple-statistics");

class Stats{
    constructor(nums){
        this.nums = nums 
    }

    mean(){
        return ss.mean(this.nums)
    }

    standardDeviation(){
        return ss.sampleStandardDeviation(this.nums)
    }

    confidenceLow(){
        return 
    }

    confidenceHigh(){
        return
    }

    display(){
        let mean_view = document.getElementById("mean") 
        let stnd_dev_view = document.getElementById("stnd-dev")

        mean_view.innerHTML = this.mean()
        stnd_dev_view.innerHTML = this.standardDeviation()
    }
}


let test = new Stats([1,2,3,4])
console.log(test.mean())
