import Simulation from './simulation.js';


class Main{
    constructor(canvas, ctx, n_sites, number_of_simulations){
        this.canvas = canvas
        this.ctx = ctx
        this.current_sumulation = new Simulation(this.canvas, this.ctx, n_sites)
        this.number_of_simulations = number_of_simulations
    }

    displaySites(){
        for(let i = 0; i < this.current_sumulation.grid.length; i++ ){
            for(let j = 0; j < this.current_sumulation.grid.length; j++){
                this.current_sumulation.grid[i][j].display(this.ctx)
            }
        }
        return
    }

    runCurrentSimulation(){
        this.current_sumulation.start()
    }



}

Main.DIM_X = 500; 
Main.DIM_Y = 500; 
Main.N_SITES = 10;

export default Main