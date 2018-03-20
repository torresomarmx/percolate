import Simulation from './simulation.js';


class Main{
    constructor(canvas, ctx, n_sites, number_of_simulations){
        this.canvas = canvas
        this.ctx = ctx
        this.current_sumulation = new Simulation(this.canvas, this.ctx, n_sites)
        this.number_of_simulations = number_of_simulations
    }

    runCurrentSimulation(){
        this.current_sumulation.start()
    }



}

Main.DIM_X = 500; 
Main.DIM_Y = 500; 
Main.N_SITES = 20;

export default Main