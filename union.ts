let score: number | string = 33;
score = 44;
score = "55";

type User = {
    name: string
    id: number
}

type Admin = {
    userName: string
    id: number
}

let ninad: User | Admin = { name: "Ninad", id: 123 };

ninad = { userName: "Ninad", id: 456 } // Now I'm Admin

// function getDbId(id: number | string) {
//     console.log(id);
// }

function getDbId(id: number | string) {
    if(typeof id === "string") {
        id.toLowerCase();
    } 
}

getDbId(123);
getDbId("123");


const data1: number[] = [1, 2, 3]; // Only Array of Numbers
const data2: string[] = ["a", "b", "c"]; // Only Array of Strings
const data3: number[] | string[] = ["a", "b", "c"]; // Either only Array of Numbers / String
const data4: (number | string)[] = ["a", 1, "b", 2]; // Multiple types in one array.

let pi: 3.14 = 3.14;
// pi = 3.145; // Not allowed

export {}
