test("damm.Digit", async () => {
  const damm = require("../src/index.js")

  expect(damm.Digit("0012301476470096832")).toBe(5)
  expect(damm.Digit("xy-1")).toBe(undefined)
})

test("damm.Validate", async () => {
  const damm = require("../src/index.js")

  expect(damm.Validate("00123014764700968325")).toBe(true)
  expect(damm.Validate("1234567812345678")).toBe(false)
  expect(damm.Validate("xy-1")).toBe(false)
})

test("damm.Generate", async () => {
  const damm = require("../src/index.js")

  let generated = damm.Generate("0012301476470096832")

  expect(generated).toBe("00123014764700968325")
  expect(damm.Validate(generated)).toBe(true)

  expect(damm.Generate("xy-1")).toBe(undefined)
})
