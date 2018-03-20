/*
instance state can be either 1, 2 or 3. 
1 => closed 
2 => open 
*/

class Site{
    constructor(x, y, width, height, root, id){
        this.root = root 
        this.id = id
        this.state = 0

        if(arguments.length == 6){
            this.x = x 
            this.y = y
            this.width = width
            this.height = height 
            this.fill_color = "black"
        }

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
    
    openVisualized(ctx, store){
        this.fill_color = "white"
        this.state = 1
        this.display(ctx)
    }

    open(){
        this.state = 1
    }
}

export default Site;