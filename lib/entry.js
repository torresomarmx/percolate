"use strict" 
import Main from './main.js'

document.addEventListener('DOMContentLoaded', ()=>{
    const canvas = document.getElementById("canvas");
    canvas.width = Main.DIM_X
    canvas.height = Main.DIM_Y 

    const ctx = canvas.getContext('2d');

    const main = new Main(canvas, ctx, Main.N_SITES, 10)
    main.runCurrentSimulation()
})
