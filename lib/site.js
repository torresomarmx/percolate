/*
instance state can be either 1, 2 or 3. 
1 => closed 
2 => open 
*/

class Site{
    constructor(x, y, width, height, root, id){
        this.x = x 
        this.y = y
        this.width = width
        this.height = height 
        this.root = root 
        this.state = 0
        this.id = id
        this.fill_color = "black"
    }

    display(ctx){ 
        ctx.fillStyle = this.fill_color
        ctx.strokeStyle = "black"
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.strokeRect(this.x, this.y, this.width, this.height)
    }

    isOpen(){
        return this.state == 1
    }
    
    open(ctx, store){
        this.fill_color = "white"
        this.state = 1
        if(this.connectedToTop(store)){ 
            this.fill_color = "blue"
        }
        this.display(ctx)
    }

    connectedToTop(store){
        return store.root(this.id) == 0
    }

}

export default Site;