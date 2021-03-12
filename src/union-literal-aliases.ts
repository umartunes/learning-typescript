// --------------------------------------
// Union, Literal Types, Type Aliases

// Type Aliases: created custom Alias for storing only string or number in a variable
type Combinable = number | string

let abc1: number | string; //Union Types we can store number or string in this variable
let abc2: number | string; //Union Types we can store number or string in this variable
let abc3: "Umar" | "Umair"; //Literal Types we can store only Umar or Umair in this variable
let abc4: Combinable; //we can store any type which is defined in Combinable Type Alias above

abc1 = 25
abc2 = "Hello World"
abc3 = "Umar"
