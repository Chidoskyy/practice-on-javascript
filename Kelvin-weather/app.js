// Declare a variable named Kelvin with a value 293
const kelvin = 0; 
// convert kelvin to celsius
const celsius = kelvin - 273; 
// convert celsius to fehrenheit
let fahrenheit = celsius * (9/5) + 32; 
// Round down the value of fahrenheit and re-assign it back to fahrenheit
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
