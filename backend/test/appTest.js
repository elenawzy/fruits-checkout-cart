const assert = require("chai").assert;
const calculateTotal = require("../app").calculateTotal;
const app = require("../app");

describe("Testing the calculateTotal function", () => {
  it("total price of 10 and tax should return 11.30", () => {
    assert.equal(calculateTotal(10, 1, 1.13), "11.30");
  });
  it("total price of 10 and tax and 80% discount should return 9.04", () => {
    assert.equal(calculateTotal(10, 0.8, 1.13), "9.04");
  });
});
