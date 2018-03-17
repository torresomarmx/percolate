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
        ctx.fillRect(this.x, this.y, this.width, this.height)
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

    set root(id){
        this.root = id
    }

}

export default Site;