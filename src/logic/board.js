/*
 * Provides a representation of the board.
 */

// enum-like constants
export const EMPTY_POINT = 0;
export const PLAYER_ONE_FILLED_POINT = 1;
export const PLAYER_TWO_FILLED_POINT = 2;

class Board {    
    /** For now, instances will do.
     * @param {Number} dimensions The length of the sides.
     */
    constructor(dimensions = 9) {
        this.dimensions = dimensions; // default dimensions is 9x9
        this.gridPoints = []; // 2D array to contain grid points
                
        // Create a 2D array to represent the board.
        for (let i = 0; i < dimensions; i++) {
            this.gridPoints.push([]);
            for (let j = 0; j < dimensions; j++) {
                this.gridPoints[i].push(EMPTY_POINT);
            }
        }
    }
}