// Part - 1 
let name1 = "Jason", name2 = "Tony", name3 = "Robert";

const greeting = (name1, name2, name3) => {
    console.log(`Welcome ${name1}, ${name2}, ${name3}`);
}

// Part - 2
let age1 = 2019, age2 = 2020, age3 = 1955;
const whatAge = (yourBirthYear) => {
    let currentYear = new Date().getFullYear();
    if (currentYear < yourBirthYear) return null;
    return currentYear - yourBirthYear;
}

// Part - 3
const printOut = (name1, name2, name3, age1, age2, age3) => {
    console.log( `Welcome ${name1}, you are ${whatAge(age1)}. Welcome ${name2}, you are ${whatAge(age2)}. Welcome ${name3}, you are ${whatAge(age3)}.`);
}


// testing
greeting(name1, name2, name3);
printOut(name1, name2, name3, age1, age2, age3);