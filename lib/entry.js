"use strict" 
import Main from './main.js'
import "babel-polyfill";

document.addEventListener('DOMContentLoaded', ()=>{
    const canvas = document.getElementById("canvas");
    canvas.width = Main.DIM_X
    canvas.height = Main.DIM_Y 

    const ctx = canvas.getContext('2d');

    const form = document.getElementById("main-form")
    form.addEventListener("submit", function(e){
        e.preventDefault()
        
        let input = document.getElementById("number-of-simulations")

        if(input.length == 0){ return }
        let number_of_simulations = parseInt(input.value)

        let type = document.querySelector('input[name="type"]:checked').value;

        if(type == "viz"){
            const main = new Main({canvas:canvas, ctx:ctx, n_sites:Main.N_SITES, number_of_simulations:number_of_simulations})
            main.runSimulations()
            // main.toggleSubmitButton()
        }else{
            const main = new Main({n_sites:Main.N_SITES, number_of_simulations:number_of_simulations})
            main.runNoVizSimulations()
            // main.toggleSubmitButton()
        }
    })
})
