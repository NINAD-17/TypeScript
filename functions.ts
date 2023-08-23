function addTwo(num: number): number {
    return num + 2;
    // return "Hello";
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}
 
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5);
getUpper("5");
signUpUser("Ninad", "ninad@kakao.com", true);
loginUser("Ninad", "ninad@naver.com");


// function getValue(myVal: number): boolean {
//     if(myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }

const getHello = (s: string): string => {
    return "Hello";
}

const btsMakhnaes = ["JK", "V", "Jimin"];

btsMakhnaes.map((btsMakhnae): string => {
    return `BTS Makhanae is ${btsMakhnae}`;
});

function consoleError(errMsg: string): void {
    console.log(errMsg);
};

function handlingError(errMsg: string): never {
    throw new Error(errMsg);
}

export {}