/* OBJECT */
// const User = {
//     name: "ninad",
//     email: "ninad@naver.com",
//     isActive: true
// }

// function createUser({ name: string, isPaid: boolean }) {}

// createUser({
//     name: "Ninad",
//     isPaid: false
// });

// function createCourse(): { name: string, price: number } {
//     return { 
//         name: "react.js",
//         price: 399
//     }
// };

// // WEIRD BEHAVIOUR
// let newUser = { name: "Ninad", isPaid: false, email: "nd@kakao.com" };
// createUser(newUser); // Here we can able to pass more info than actual parameters of create user function.


/* Type Aliases */
// type myString = string;

// type User = {
//     name: myString;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User {
//     return { name: "", email: "", isActive: true }; 
// }

// createUser({ name: "", email: "", isActive: true });


/* READONLY and optional */
type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number
}

let myUser: User = {
    _id: "1234",
    name: "n",
    email: "n@n.com",
    isActive: false 
}

myUser.email = "n@kakao.com";
// myUser._id = "9876"; // It's not possible

type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}

export {};