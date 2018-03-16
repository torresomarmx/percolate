/*
instance state can be either 1, 2 or 3. 
1 => closed 
2 => open 
3 => fully open (connected to the top)

*/

class Site{
    constructor(width, height, address, root){
        this.width = width
        this.height = height 
        this.address = address 
        this.root = root 
        this.state = 0
    }

    display(ctx, x, y){ 
        ctx.fillStyle = "black"
        ctx.fillRect(x, y, this.width, this.height)
    }

    isOpen(){
        return this.state == 0
    }

    open(){
        this.state = 2
    }

    get root(){
        return this.root 
    }

    set root(root_address){
        this.root = root_address
    }

}

export default Site;