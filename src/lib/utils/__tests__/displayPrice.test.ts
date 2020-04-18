import { displayPrice } from "../displayPrice"

describe("displayPrice()", () => {
  it("Should turn cents into dollar string", () => {
    expect(displayPrice(123)).toBe("$1.23")
  })

  it("Should always have 2 decimal places", () => {
    expect(displayPrice(100)).toBe("$1.00")
  })

  it("Should be able to display 0 cents", () => {
    expect(displayPrice(0)).toBe("$0.00")
  })
})
