// 2864. Maximum Odd Binary Number
/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  // let res = Array.from({length: s.length}).fill("1");
  // let i = res.length-2;
  // for(let c of s) {
  //     if(c === "0") {
  //         res[i--] = "0"
  //     }
  // }
  // return res.join("")
  // option2
  let z = s.split("").filter((c) => c === "0").length;
  return `${"1".repeat(s.length - 1 - z)}${"0".repeat(z)}1`;
};
