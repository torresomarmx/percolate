# Percolate

[Run simulations](https://01omartorres.github.io/percolate)

Inspired by an assignment in Princeton's COS 226, Percolate is a web application that estimates the percolation threshold via a Monte Carlo simulation. 

The percolation threshold P* is the site vacancy percentage, or ratio of open to closed sites, at which any other P value above P* in a given system will almost always percolate. 

In the context of this application, a site is a small square, with a white fill-color representing an opened state, and black fill-color representing a closed state.

The system percolates if and only if any given site at the top-most row is connected to any given site at the bottom-most row. 

Sites can only be connected vertically or horizontally, never diagonally. 

To allow for a quick and efficient calculation of whether a system percolates in any given simulation, the application uses a **disjoint-set data structure with a union-find algorithm that leverages path compression and weighted union**. 

# How it works

* For every simulation, the system picks a random square to open.
* The system continues to open squares at random until the system percolates.
* Once the system percolates, the P values (ratio of open to closed sites) for the current simulation is stored. 
* This process repeats for n number of simulations. 
* Once all n sumulation are run, the mean, standard deviation, and a confidence interval for the percolation threshold are calculated. 

![Preview](https://raw.githubusercontent.com/01omartorres/percolation/master/docs/preview.png)

# Valid connections

![Connected Sites](https://raw.githubusercontent.com/01omartorres/percolation/master/docs/connected.png)

# Technologies 

The app was created using Javascript, HTML Canvas, CSS, & Webpack.

