/*
A disjoint-set data structure implemented using a union-find algorithm that uses path compression and weighted union to 
optimize a find operation on the data structure itself.
*/

class DSUnionFind{
    constructor(size = 10){
        this.store = Array(size).fill(null).map((e, i)=> i)
        this.tree_size = Array(size).fill(1)
    }

    root(id){
        let current_id = id
        let start_id = id
        // find the root and store it in current_id
        while(this.store[current_id] != current_id){
            current_id = this.store[current_id]
        }
        // path compression: every element in a tree points to its root
        // current_id at this point is the root 
        while(this.store[start_id] != current_id){
            let next_id = this.store[start_id]
            this.store[start_id] = id 
            start_id = next_id
        }
        // return current id (root)
        return current_id
    }

    connected(p, q){
        let p_root = this.root(p)
        let q_root = this.root(q)

        return p_root == q_root 
    }

    connect(p, q){
        let p_root = this.root(p) 
        let q_root = this.root(q)

        // weighted union
        if(this.tree_size[p_root] < this.tree_size[q_root]){
            this.tree_size[q_root] += this.tree_size[p_root] 
            this.store[p_root] = q_root
        }else{
            this.tree_size[p_root] += this.tree_size[q_root]
            this.store[q_root] = p_root
        }

    }

}
