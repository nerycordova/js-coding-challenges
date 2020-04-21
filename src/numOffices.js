var height, width, grid;

/**
 * Function to check if a given point [row,col] is valid
 * @param {number} row 
 * @param {number} col 
 * @returns {boolean} if point is valid or not
 */
const isValidPoint = (row, col) =>{
    return ( row >= 0 && row < height) && (col>=0 && col < width)
}

/**
 * This function recursively checks neighbor points in the matrix and tags them with the office number.
 * 
 * @param {number} officeNumber - current office number 
 * @param {number} row - row from where to start checking
 * @param {number} col - col from where to start checking
 */
const tagNeighbors = (officeNumber, row, col) =>{
    let left  = isValidPoint (row, col-1) ? {r: row, c: col-1} : null;
    let right = isValidPoint (row, col+1) ? {r: row, c: col+1} : null;
    let up    = isValidPoint (row-1, col) ? {r: row-1, c: col} : null;
    let down  = isValidPoint (row+1, col) ? {r: row+1, c: col} : null;

    points = [left, up, right, down];

    for (let p of points){
        if (p){
            if ( grid[p.r][p.c] === 1) { //found neighbor
                grid[p.r][p.c] = officeNumber;
                tagNeighbors(officeNumber, p.r, p.c); //recursive
            }
        }
    }
}

/**
 * This method returns the number of offices found in a given matrix.
 * @param {int[][]} array - the matrix where to look for offices
 * @returns {int} number of offices found
 */
const numOffices = (matrix) => {

    grid = matrix;
    height = grid.length;
    width = grid[0].length;

    let result = 0;
    let baseOfficeCount = 1;

    for (let row =0; row < height; row++){
        for (let col = 0; col < width; col++){
            //office was found
            if (grid[row][col] === 1){
                baseOfficeCount++;
                //assign office number
                grid[row][col] = baseOfficeCount;
                tagNeighbors(baseOfficeCount, row, col);
            }

        }
    }

    result = baseOfficeCount-1;
    
    return result;
};

module.exports = numOffices;