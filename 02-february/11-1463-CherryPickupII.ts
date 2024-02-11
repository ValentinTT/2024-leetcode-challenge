//1463. Cherry Pickup II
function cherryPickup(grid: number[][]): number {
  const [rows, cols] = [grid.length, grid[0].length];
  const memo: { [key: string]: number } = {};
  function dfs(r: number, c1: number, c2: number): number {
    if (r === rows || c1 < 0 || c1 === cols || c2 < 0 || c2 === cols) return 0;
    if (`${r}-${c1}-${c2}` in memo) return memo[`${r}-${c1}-${c2}`];

    let res = grid[r][c1] + (c1 !== c2 ? grid[r][c2] : 0);

    let max = 0;

    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        max = Math.max(max, dfs(r + 1, c1 + i, c2 + j));
      }
    }

    res += max;
    memo[`${r}-${c1}-${c2}`] = res;
    return res;
  }

  return dfs(0, 0, cols - 1);
}
