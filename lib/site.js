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
        this.fill_color = "black"
    }

    display(ctx, x, y){ 
        ctx.fillStyle = this.fill_color
        ctx.fillRect(x, y, this.width, this.height)
    }

    isOpen(){
        this.fill_color = "white"
        return this.state == 1
    }

    open(){
        this.state = 1
    }

    connectedToTop(store){
        if(store.root(this.root) == 0){
            this.fill_color = "blue"
            return true
        }else{
            return false
        }
    }

    get root(){
        return this.root 
    }

    set root(root_address){
        this.root = root_address
    }

}

export default Site;