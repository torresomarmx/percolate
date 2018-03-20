"use strict" 
import Main from './main.js'
import "babel-polyfill";

document.addEventListener('DOMContentLoaded', ()=>{
    const canvas = document.getElementById("canvas");
    canvas.width = Main.DIM_X
    canvas.height = Main.DIM_Y 

    const ctx = canvas.getContext('2d');

    const form_with_visualization = document.getElementById("simulations-form-with-viz")
    const form_without_visualization = document.getElementById("simulations-form-no-viz")

    form_with_visualization.addEventListener("submit", function(e){
        e.preventDefault()
        let input = document.getElementById('number-of-simulations-with-viz').value

        if(input.length == 0){ return }
        
        const main = new Main(canvas, ctx, Main.N_SITES, input)
        main.runSimulations()
    })

    form_without_visualization.addEventListener("submit", function(e){
        e.preventDefault()
        let input = document.getElementById("number-of-simulations-no-ciz")

        if(input.length == 0){ return }

        const main = new Main(input)
        main.runNoVizSimulations()
    })

    



})
