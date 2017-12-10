## Performant and straight-forward implementation of damm checksum algorithm

### Usage ###

```
const damm = requite("damm")

let ok = damm.Validate("00123014764700968325")

let digit := damm.Digit("x")

let signed = damm.Generate("1")
```

### Resources ###

* [Wikipedia - Damm algorithm](https://en.wikipedia.org/wiki/Damm_algorithm)
