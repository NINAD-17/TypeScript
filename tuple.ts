// const User: (string | number | boolean)[] = [1, "abc", true];
// But in User you can able to change order [true, 1, "abc"] like that

// Tuple - Order matters
const User: [string, number, boolean] = ["nd", 1, true];

let rgb: [number, number, number] = [255, 255, 255];

type tUser = [number, string];
const newUser: tUser = [123, "abc"];
