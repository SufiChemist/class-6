"use strict";
// // Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
let sum = 0;
let list = [];
for (let a = 0; a <= 100; a++) {
    if (a % 2 == 0) {
        sum = sum + a;
        list.push(a);
    }
}
console.log("sum", sum, list);
// // Implement a program that uses a for loop to  through an array of numbers and print only the even numbers.
let a = [21, 22, 23, 24, 25, 36, 37, 38, 39, 40, 45, 52, 56, 57, 60, 61, 62];
let b = [];
console.log("Even Numbers:");
for (let i = 0; i <= a.length; i++) {
    if (a[i] % 2 == 0) {
        b.push(a[i]);
    }
}
console.log(b);
//Implement a program that use a loop to iterate through an array of numbers and remove all the even numbers from them and just leaves the odd numbers
let num = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 36, 37, 38, 39, 40, 45, 52, 56, 57, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
let num1 = [];
console.log("Odd Numbers:");
for (let i = 0; i <= num.length; i++) {
    if (num[i] % 2 != 0) {
        num1.push(num[i]);
    }
}
console.log(num1);
//Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function areaOfCircle(radius) {
    const pi = 3.14;
    var area = pi * radius ** 2;
    console.log("The area of circle is", area);
}
areaOfCircle(12);
areaOfCircle(15);
// Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
function removeFailingGrades(grades) {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 50) {
            grades.splice(i, 1);
        }
    }
}
let gradesList = [85, 60, 45, 70, 30, 90, 40, 65, 78, 42, 95, 55];
console.log("Original grades:", gradesList);
removeFailingGrades(gradesList);
console.log("Grades after removing failing grades:", gradesList);
//     Write a typescript program that uses a function to find the largest element in an array of numbers
function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}
let numberArray = [56, 48, 78, 36, 67, 23, 95];
let largestNumber = largestElement(numberArray);
console.log("The largest number in the array is:", largestNumber);
