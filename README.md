# Percolation

[Run simulations](https://01omartorres.github.io/percolation)

Inspired by an assignment in Princeton's COS 226, Percolation is a web application that estimates the percolation threshold via a Monte Carlo simulation. 

The percolation threshold P* is the site vacancy percentage, or ratio of open to closed sites, at which any other P value above P* in a given system will almost always percolate. 

In the context of this application, a site is a small square, with a white fill-color representing an opened state, and black fill-color representing a closed state.

The system percolates if and only if any given site at the top-most row is connected to any given site at the bottom-most row. 

Sites can only be connected vertically or horizontally, never diagonally. 

To allow for a quick and efficient calculation of whether a system percolates in any given simulation, the application uses a disjoint-set data structure with a union-find algorithm that leverages path compression and weighted union. 

![Preview](https://raw.githubusercontent.com/01omartorres/percolation/master/docs/preview.png)

![Connected Sites](https://raw.githubusercontent.com/01omartorres/percolation/master/docs/connected.png)

# Technologies 

The app was created using Javascript, HTML Canvas, CSS, & Webpack.

