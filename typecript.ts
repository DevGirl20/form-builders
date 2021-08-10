//Задавание типов 
let str: any  = 'Hello TypeScript';
let num: number = 42 ;
let isActive: boolean = false ;

//Задавание типов массивы 

let strArray: string [] = ['H', 'e', 'l', 'l', 'o'];
let numArray: Array<number> = [1, 2, 3, 4, 5];

//Функции 

function logInfo(name: string, age: number): void {
    console.log (`Info: ${name}, ${age}`)
}
logInfo('Karina', 25);


function calc(a: number, b: number | string): number {
    if (typeof b === 'string') b = +b
    return a + b

}
console.log(calc(2,6));

//Классы 

