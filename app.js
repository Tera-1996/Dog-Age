//This variable can be assigned to any human age, it will be coverted to Dog years
const myAge = 26;

//The first two years of a dog’s life count as 10.5 dog years each.
let earlyYears = 2;
earlyYears *= 10.5;

//Since we already accounted for the first two years, we are going to subtract two from the original human years, to a later years of dog years
let laterYears = myAge - 2;

//Each year following equates to 4 dog years
laterYears *= 4;

console.log(earlyYears, laterYears);

//coverted to dog years
const myAgeInDogYears = earlyYears + laterYears;

//The human name in lowe-case
let myName = 'Maha Adel'.toLowerCase();

//The final statement that displays your name and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);







