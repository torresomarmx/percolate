import * as ss from 'simple-statistics';

// for nodeJS
// const ss = require("simple-statistics");

class Stats{
    constructor(nums){
        this.nums = nums
        this.mean = null 
        this.stnd_dev = null 
        this.z_score = 1.960
    }

    sampleMean(){
        this.mean = ss.mean(this.nums)
        return this.mean
    }

    standardDeviation(){
        this.stnd_dev = ss.sampleStandardDeviation(this.nums)
        return this.stnd_dev
    }

    confidenceLow(){
        return this.mean - ((this.z_score) * (this.stnd_dev / Math.sqrt(this.nums.length)))
    }

    confidenceHigh(){
        return this.mean + ((this.z_score) * (this.stnd_dev / Math.sqrt(this.nums.length)))
    }

    display(){
        let mean_view = document.getElementById("mean") 
        let stnd_dev_view = document.getElementById("stnd-dev")
        let confidence_low = document.getElementById("confidence-low")
        let confidence_high = document.getElementById("confidence-high")
        
        mean_view.innerHTML = this.sampleMean()
        stnd_dev_view.innerHTML = this.standardDeviation()
        confidence_low.innerHTML = "Low: " + this.confidenceLow()
        confidence_high.innerHTML = "High: " + this.confidenceHigh()
    }
}


export default Stats
