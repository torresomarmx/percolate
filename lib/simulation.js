import DSUnionFind from './disjointset_unionfind.js';
import Site from './site.js'

class Simulation{
    // creates an nxn grid containing site objects and initializes a DSUnionFind data type
    constructor(ctx, n){
        this.ctx = ctx 
        this.n = n
        // + 2 to account for virtual sites (top and bottom)
        this.number_of_sites = this.n * this.n + 2
        this.store = DSUnionFind(this.number_of_sites)
        this.grid = Array(this.n).fill(null).map(()=> new Array())  
        this.number_of_open_sites = 0
        
        let site_width = ( ctx.width / this.n )
        let site_height = ( ctx.height / this.n )
        // id with respect to the store 
        let id = 1 // start at 1 since id(0) belongs to top virtual site 
        for(let i = 0; i<this.n; i++){
            for(let j = 0; j<this.n; j++){
                this.grid[i][j] = new Site(site_width, site_height, [i, j], id, id)
                id += 1
            }
        }

        // connect top virtual site to top sites (top most row)
        for(let i = 1; i<this.n; i++){
            // top virtual site id is 0
            this.store.connect(0, i)
            this.grid[0][1].root = 0 
        }

        // connect bottom virtual site to bottom sites (bottom most row)
        let bottom_virtual_site_id = this.number_of_sites - 1
        for(let i = bottom_virtual_site_id - this.n; i < bottom_virtual_site_id; i++){
            this.store.connect(bottom_virtual_site_id, i) 
            this.grid[this.n-1][i].root = bottom_virtual_site_id
        }

    }

    selectRandomSite(){
        let random_i = Math.floor(Math.random() * (this.n + 1))
        let random_j = Math.floor(Math.random() * (this.n + 1))
        let random_site = this.store[random_i][random_j]

        if(random_site.isOpen()){ return }

        random_site.open()

        // check right neighbor
        if(this.random_j + 1 <= this.n - 1){
            let right_neighbor_site = this.store[random_i][random_j+1]
            if(right_neighbor_site.isOpen()){
                this.store.connect(random_site.id, right_neighbor_site.id)
            }
        }

    }



    


}