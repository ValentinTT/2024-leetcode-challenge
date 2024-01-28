/**
 * @author: ValentinTT
 * @brief 1074. Number of Submatrices That Sum to Target
 * @version 0.1
 * @date 28-01-2023
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function (matrix, target) {
  const calcSubmatrixTotal = (r1, c1, r2, c2) => {
    /*a matrix subtotal is calculated using:
      * the sum from (0, 0) to (r2, c2)
                - - c1 - c2
              [+ + + + +
              + + + + +
        r1     + +(+)+ +
              + + + + + 
        r2     + + + + (+)]
      * substract all from (r2, c1-1)
                - - c1 - c2
              [- -  . . .
              - -  . . .
        r1     - - (.). .
              - -  . . . 
        r2     - -  . . (.)]
      * substract all from (r1-1, c2)
                - - c1 - c2
              [- -  - - -
              - -  - - -
        r1     . . (.). .
              . .  . . . 
        r2     . .  . . (.)]
      * if we make both previus substraction, we need to add up (r1-1, c1-1) because
      * we substracte it twice
                - - c1 - c2
              [+ +  . . . 
              + +  . . . 
        r1     . . (.). .
              . .  . . . 
        r2     . .  . . (.)]
      */
    let total = matrix[r2][c2];
    if (r1 > 0) total -= matrix[r1 - 1][c2];
    if (c1 > 0) total -= matrix[r2][c1 - 1];
    if (r1 > 0 && c1 > 0) total += matrix[r1 - 1][c1 - 1];
    return total;
  };

  const calcAllSubmatrix = (r1, c1) => {
    let res = 0;
    for (let r2 = r1; r2 < matrix.length; r2++) {
      for (let c2 = c1; c2 < matrix[r2].length; c2++) {
        // for each submatrix calculate the total
        if (calcSubmatrixTotal(r1, c1, r2, c2) === target) {
          res += 1;
        }
      }
    }

    return res;
  };

  // Rewrite matrix to store in each cell (r, c) the sum of the submatrix
  // from (0, 0) to (r, c)
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j !== 0) matrix[i][j] += matrix[i][j - 1];
      if (i !== 0) matrix[i][j] += matrix[i - 1][j];
      if (j !== 0 && i !== 0) matrix[i][j] -= matrix[i - 1][j - 1];
    }
  }

  let res = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // for each cell calculate all submatrices
      res += calcAllSubmatrix(i, j);
    }
  }

  return res;
};
