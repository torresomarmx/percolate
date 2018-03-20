import Simulation from './simulation.js';


class Main{
    constructor(canvas, ctx, n_sites, number_of_simulations){
        this.canvas = canvas
        this.ctx = ctx
        this.n_sites = n_sites
        this.number_of_simulations = number_of_simulations
        this.simulation_index = 0
        this.current_sumulation = null
        this.simulation_interval_id = null
    }

    runFrame(){
        this.current_sumulation.openRandomSite() 
        if(this.current_sumulation.percolates()){
            clearInterval(this.simulation_interval_id)
            window.setTimeout(this.runSimulations.bind(this), 1000)
        }
    }

    runSimulations(){
        if(this.simulation_index == this.number_of_simulations){ return } 
        this.simulation_index += 1

        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
        this.current_sumulation = new Simulation(this.canvas, this.ctx, this.n_sites)
        this.simulation_interval_id = window.setInterval(this.runFrame.bind(this), 2.5)
    }





}

Main.DIM_X = 500; 
Main.DIM_Y = 500; 
Main.N_SITES = 20;

export default Main