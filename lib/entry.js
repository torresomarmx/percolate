"use strict" 
import Main from './main.js'
import "babel-polyfill";

document.addEventListener('DOMContentLoaded', ()=>{
    const canvas = document.getElementById("canvas");
    canvas.width = Main.DIM_X
    canvas.height = Main.DIM_Y 

    const ctx = canvas.getContext('2d');

    const form = document.getElementById("simulations-form")
    form.addEventListener("submit", function(e){
        e.preventDefault()
        let input = document.getElementById('number-of-simulations').value

        if(input.length == 0){ return }
        
        const main = new Main(canvas, ctx, Main.N_SITES, input)
        main.runSimulations()
    })
    
})
