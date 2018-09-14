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
        if(this.number_of_simulations > 1){
            let statistics = new Stats(this.open_to_closed_ratios)
            statistics.display()
        }
    }

    runFrame(){
        this.current_sumulation.openRandomSite() 
        if(this.current_sumulation.percolates()){
            // for (let i = 0; i < this.n_sites; i++) {
            //     for (let y = 0; y < this.n_sites; y++) {
            //         if(this.current_sumulation.grid[i][y].isOpen()){
            //             if (this.current_sumulation.store.connected(this.current_sumulation.grid[i][y].id, this.current_sumulation.number_of_sites - 1)){
            //                 this.current_sumulation.grid[i][y].fill_color = "blue"
            //                 this.current_sumulation.grid[i][y].display(this.ctx);
            //             }
            //         }
            //     }
            // }
            clearInterval(this.simulation_interval_id)
            let ratio = this.current_sumulation.number_of_open_sites / this.current_sumulation.number_of_sites
            this.open_to_closed_ratios.push(ratio)
            window.setTimeout(this.runSimulations.bind(this), 1000)
        }
    }

    runSimulations(){
        if(this.simulation_index == this.number_of_simulations){
            if(this.number_of_simulations > 1){
                let statistics = new Stats(this.open_to_closed_ratios)
                statistics.display()
            }
            this.enableSubmitButton()
            return 
        } 
        this.simulation_index += 1

        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
        this.current_sumulation = new Simulation({canvas:this.canvas, ctx:this.ctx, n:this.n_sites})
        this.simulation_interval_id = window.setInterval(this.runFrame.bind(this), 1)
    }

    clearStats(){
        document.getElementById("mean").innerHTML = ""
        document.getElementById("stnd-dev").innerHTML = ""
        document.getElementById("confidence-low").innerHTML = ""
        document.getElementById("confidence-high").innerHTML = ""
    }

    disableSubmitButton(){
        document.getElementById("submit-button").disabled = true
    }

    enableSubmitButton(){
        document.getElementById("submit-button").disabled = false
    }

}

Main.DIM_X = 500; 
Main.DIM_Y = 500; 
Main.N_SITES = 20;

export default Main
