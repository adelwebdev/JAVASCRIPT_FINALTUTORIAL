const fusionArray = require("./fusionArray");

test("fusionne 2 tableaux", () => {
  let arr1 = [2, 4];
  let arr2 = [5, 6];

  expect(fusionArray(arr1, arr2)).toEqual([2, 4, 5, 6]);
});
