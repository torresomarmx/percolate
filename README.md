# Percolate

[Run simulations](https://torresomarmx.github.io/percolate/)

A web application that estimates the percolation threshold via a Monte Carlo simulation.

The percolation threshold P* is the ratio of open to closed sites that must be exceeded in order to say with a high degree of confidence that a system percolates.

In the context of this application a site is a small square, with a white fill-color representing an opened state, and black fill-color representing a closed state.

The system percolates if and only if any open site at the top-most row is connected to any open site at the bottom-most row.

Sites can only be connected vertically or horizontally, never diagonally.

To allow for a quick and efficient calculation of whether a system percolates in any given simulation, the application uses a **disjoint-set data structure with a union-find algorithm that leverages path compression and weighted union**.

# How it works

* For every simulation the system picks a random square to open.
* The system continues to open squares at random until the system percolates.
* Once the system percolates, the P value (ratio of open to closed sites) for the current simulation is stored.
* The grid then highlights the final site that was opened to allow percolation.
* This process repeats for n number of simulations.
* Once all n sumulation are run, the mean, standard deviation, and a confidence interval for the percolation threshold are calculated.

![Preview](https://raw.githubusercontent.com/torresomarmx/percolate/master/docs/preview.png)

