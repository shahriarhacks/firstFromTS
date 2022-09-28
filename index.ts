var num1: number = 1;

function varDeclaration() {
    var num2: number = 2;

    if (num2 > num1) {
        var num3: number = 3;
        num3++;
    }

    while (num1 < num2) {
        var num4: number = 4;
        num1++;
    }

    console.log(num1); //2
    console.log(num2); //2 
    console.log(num3); //4
    console.log(num4); //4
}

varDeclaration();

//object
const playerCodes = {
    player1: 9,
    player2: 10,
    player3: 13,
    player4: 20
};
playerCodes.player2 = 11;


let first: number = 123; // number 
let second: number = 0x37CF;  // hexadecimal
let third: number = 0o377;      // octal
let fourth: number = 0b111001;// binary  

console.log(first);  // 123 
console.log(second); // 14287
console.log(third);  // 255
console.log(fourth); // 57 

let myNumber: number = 123456;

myNumber.toExponential(); // returns 1.23456e+5
myNumber.toExponential(1); //returns 1.2e+5
myNumber.toExponential(2); //returns 1.23e+5
myNumber.toExponential(3); //returns 1.235e+5

let Num: number = 10.8788;

Num.toFixed(); // returns 11
Num.toFixed(1); //returns 10.9
Num.toFixed(2); //returns 10.88
Num.toFixed(3); //returns 10.879
Num.toFixed(4); //returns 10.8788

let myNum: number = 10667.987;

myNum.toLocaleString(); // returns 10,667.987 - US English
myNum.toLocaleString('de-DE'); // returns 10.667,987 - German
myNum.toLocaleString('ar-EG'); // returns 10667.987 in Arebic