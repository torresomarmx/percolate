import DSUnionFind from './disjointset_unionfind.js';
import Site from './site.js'

class Simulation{
    // creates an nxn grid containing site objects and initializes a DSUnionFind data type
    constructor({canvas, ctx, n}){
        this.visualized = false
        this.n = n
        // + 2 to account for virtual sites (top and bottom)
        this.number_of_sites = (this.n * this.n) + 2
        this.store = new DSUnionFind(this.number_of_sites)
        this.grid = new Array(this.n).fill(null).map(() => new Array(this.n).fill(null))
        this.number_of_open_sites = 0

        // if simulation should be visualized (canvas and ctx passed in)
        if(Object.keys(arguments[0]).length == 3){
            this.visualized = true
            this.canvas = canvas 
            this.ctx = ctx
            this.open_sites_count_view = document.getElementById("open-sites-count")

            let site_width = (this.canvas.width / this.n)
            let site_height = (this.canvas.height / this.n)
            // id with respect to the store 
            let id = 1 // start at 1 since id(0) belongs to top virtual site 
            for (let i = 0; i < this.n; i++) {
                for (let j = 0; j < this.n; j++) {
                    this.grid[i][j] = new Site({x:j*site_width, y:i*site_height, width:site_width, height:site_height, root:id, id:id})
                    id += 1
                }
            }

        }else{  
            //if simulation should not be visualized
            let id = 1
            for(let i = 0; i < this.n; i++){
                for(let j = 0; j < this.n; j++){
                    this.grid[i][j] = new Site({root:id, id:id})
                    id += 1
                }
            }
        }
        
        
        // connect top virtual site to top sites (top most row)
        for(let i = 0; i<this.n; i++){
            // top virtual site id is 0
            this.store.connect(0, i+1)
            this.grid[0][i].root = 0 
        }

        // connect bottom virtual site to bottom sites (bottom most row)
        let bottom_virtual_site_id = this.number_of_sites - 1
        for(let i = 0; i < this.n; i++){
            let id = bottom_virtual_site_id - this.n
            this.store.connect(bottom_virtual_site_id, id+i) 
            this.grid[this.n-1][i].root = bottom_virtual_site_id
        }

    }

    openRandomSite(){
        let random_i = Math.floor(Math.random() * (this.n))
        let random_j = Math.floor(Math.random() * (this.n))
        let random_site = this.grid[random_i][random_j]

        if(random_site.isOpen()){ return }

        if(this.visualized){
            random_site.openVisualized(this.ctx, this.store)
            this.open_sites_count_view.innerHTML = this.number_of_open_sites
        }else{
            random_site.open()
        }

        this.number_of_open_sites += 1


        // check to see if there are any open neighboring sites

        // check right neighbor
        if(random_j + 1 <= this.n - 1){
            // debugger
            let right_neighbor_site = this.grid[random_i][random_j+1]
            if(right_neighbor_site.isOpen()){
                this.store.connect(random_site.id, right_neighbor_site.id)
            }
        }
        
        // check left neighbor
        if(random_j - 1 >= 0){
            let left_neighbor_site = this.grid[random_i][random_j-1]
            if(left_neighbor_site.isOpen()){
                this.store.connect(random_site.id, left_neighbor_site.id)
            }
        }   

        // check top neighbor
        if(random_i - 1 >= 0){
            let top_neighbor_site = this.grid[random_i - 1][random_j]
            if(top_neighbor_site.isOpen()){
                this.store.connect(random_site.id, top_neighbor_site.id)
            }
        }

        // check bottom neighbor
        if(random_i + 1 <= this.n - 1){
            let bottom_neighbor_site = this.grid[random_i + 1][random_j]
            if(bottom_neighbor_site.isOpen()){
                this.store.connect(random_site.id, bottom_neighbor_site.id)
            }
        }
    }

    // displaySites() {
    //     for (let i = 0; i < this.grid.length; i++) {
    //         for (let j = 0; j < this.grid.length; j++) {
    //             this.grid[i][j].display(this.ctx)      
    //         }
    //     }
    // }

    percolates(){
        // check to see if top and bottom virtual sites are connected
        return this.store.connected(0, this.number_of_sites - 1)
    }
    
}

export default Simulation