/*
 * Provides a representation of the board.
 */

class Board {
    /** For now, instances will do.
     * @param {Number} dimensions The length of the sides.
     */
    constructor(dimensions = 9) {
        this.dimensions = dimensions; // default dimensions is 9x9
        // Use an array to contain the binary search tree that represents the grid.
        this.grid = new Array(dimensions * dimensions);
    }
}