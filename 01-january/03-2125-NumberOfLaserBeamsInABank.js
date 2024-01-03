/**
 * @author: ValentinTT
 * @brief 2125. Number of Laser Beams in a Bank
 * @version 0.1
 * @date 03-01-2023
 */

/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  let total = 0;
  bank.reduce((acc, row) => {
    let devPerRow = row
      .split("")
      .reduce((acc, cell) => (cell === "1" ? acc + 1 : acc), 0);
    if (devPerRow === 0) return acc;
    total += acc * devPerRow;
    return devPerRow;
  }, 0);
  return total;
};
