import { isNil } from "../isNil"

describe("isNil()", () => {
  it("should return true for undefined", () => {
    expect(isNil(undefined)).toBe(true)
  })

  it("should return true for null", () => {
    expect(isNil(null)).toBe(true)
  })

  it("should not return true for other types", () => {
    expect(isNil("string")).toBe(false)
    expect(isNil(5)).toBe(false)
    expect(isNil({})).toBe(false)
    expect(isNil([])).toBe(false)
    expect(isNil(true)).toBe(false)
  })
})
