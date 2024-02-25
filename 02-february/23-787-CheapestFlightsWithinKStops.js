//787. Cheapest Flights Within K Stops
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  let prices = Array.from({ length: n }).fill(Number.MAX_SAFE_INTEGER);
  prices[src] = 0;

  for (let i = 0; i < k + 1; i++) {
    let temp = [...prices];
    for (let [s, d, p] of flights) {
      if (prices[s] === Number.MAX_SAFE_INTEGER) continue;
      if (prices[s] + p < temp[d]) temp[d] = prices[s] + p;
    }
    prices = [...temp];
  }
  return prices[dst] === Number.MAX_SAFE_INTEGER ? -1 : prices[dst];
};
