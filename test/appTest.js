const assert = require("chai").assert;
const expect = require("chai").expect;
const calculateTotal = require("../app").calculateTotal;
const app = require("../app");

const firstTestPrice = calculateTotal(10, 1, 1.13);
const secondTestPrice = calculateTotal(10, 0.8, 1.13);

describe("Testing the calculateTotal function", function () {
  it("total price of 10 and tax should return 11.30", function () {
    expect(firstTestPrice).to.be.equal("11.30");
  });
  it("total price of 10 and tax and 80% discount should return 9.04", () => {
    expect(secondTestPrice).to.be.equal("9.04");
  });
});
