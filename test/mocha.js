require("chai").should();

const foo = "bar";
const beverages = {
  tea: ["chai", "matcha", "oolong"]
};
describe("String", () => {
  it("foo should be a string", () => {
    foo.should.be.a("string");
  });
});

describe("Array", () => {
  describe("#indexOf", () => {
    it("should return -1 when the value is not present", () => {
      beverages.tea.indexOf("puer").should.equal(-1);
    });
  });
});

describe("Asynchronous", () => {
  it("done should be executed after 200ms", done => {
    const fn = () => {
      foo.should.be.a("string");
      done();
    };
    setTimeout(fn, 200);
  });
});

describe("Promise", () => {
  it("promise will resolve", () => {
    return new Promise(resolve => {
      foo.should.be.a("string");
      resolve();
    });
  });
});

describe("Async/Await", () => {
  it("async and await", async () => {
    await foo.should.be.a("string");
  });
});

