import Simulation from './simulation.js';
import Stats from './stats.js'


class Main{
    constructor({canvas, ctx, n_sites, number_of_simulations}){
        this.number_of_simulations = number_of_simulations
        this.n_sites = n_sites
        this.open_to_closed_ratios = []

        if(Object.keys(arguments[0]).length == 4){
            this.canvas = canvas
            this.ctx = ctx
            this.simulation_index = 0
            this.current_sumulation = null
            this.simulation_interval_id = null
        }
    }

    runNoVizSimulations(){
        for(let i = 0; i<this.number_of_simulations; i++){
            let current_sumulation = new Simulation({n:this.n_sites})
            while(!current_sumulation.percolates()){
                current_sumulation.openRandomSite()
            }
            let ratio = current_sumulation.number_of_open_sites / current_sumulation.number_of_sites
            this.open_to_closed_ratios.push(ratio)
        }
        let statistics = new Stats(this.open_to_closed_ratios)
        statistics.display()
    }

    runFrame(){
        this.current_sumulation.openRandomSite() 
        if(this.current_sumulation.percolates()){
            clearInterval(this.simulation_interval_id)
            let ratio = this.current_sumulation.number_of_open_sites / this.current_sumulation.number_of_sites
            this.open_to_closed_ratios.push(ratio)
            window.setTimeout(this.runSimulations.bind(this), 1000)
        }
    }

    runSimulations(){
        if(this.simulation_index == this.number_of_simulations){
            let statistics = new Stats(this.open_to_closed_ratios)
            statistics.display()
            return 
        } 
        this.simulation_index += 1

        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
        this.current_sumulation = new Simulation({canvas:this.canvas, ctx:this.ctx, n:this.n_sites})
        this.simulation_interval_id = window.setInterval(this.runFrame.bind(this), 1)
    }

    toggleSubmitButton(){
        let button = document.getElementById("submit-button")
        button.disabled ? button.disabled = true : button.disabled = false
    }





}

Main.DIM_X = 500; 
Main.DIM_Y = 500; 
Main.N_SITES = 20;

export default Main