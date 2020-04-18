import { noopTemplate } from "../noopTemplate"

describe("isNil()", () => {
  it("should be noop", () => {
    expect(noopTemplate`hello there`).toBe(`hello there`)
  })

  it("should be noop with interpolations", () => {
    expect(noopTemplate`hello ${"there"} testing`).toBe(
      `hello ${"there"} testing`,
    )
  })
})
