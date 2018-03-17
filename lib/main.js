import Simulation from './simulation.js';


class Main{
    constructor(ctx, n_sites, number_of_simulations){
        this.ctx = ctx
        this.current_sumulation = new Simulation(ctx, n_sites)
        this.number_of_simulations = number_of_simulations
    }

    displaySites(){
        this.current_sumulation.store.forEach((site)=>{
            stie.display(ctx)
        })
    }

}

Main.DIM_X = 1000; 
Main.DIM_Y = 1000; 
Main.N_SITES = 10;

export default Main