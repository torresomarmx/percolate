/*
instance state can be either 1, 2 or 3. 
1 => closed 
2 => open 
*/

class Site{
    constructor(width, height, address, root, id){
        this.width = width
        this.height = height 
        this.address = address 
        this.root = root 
        this.state = 0
        this.id = id
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

    connectedToTop(){
        return this.root == 0 
    }

    get root(){
        return this.root 
    }

    set root(root_address){
        this.root = root_address
    }

}

export default Site;