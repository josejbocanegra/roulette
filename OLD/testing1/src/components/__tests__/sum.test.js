import sum from "../sum";

describe("sum", () => {
  it("adds 1 and 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
