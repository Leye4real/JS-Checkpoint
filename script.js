

// import sumData from "./numbers.js";
// console.log(sumData);






// // // Write a function that converts hours into seconds.

// // // Examples
// // // howManySeconds(2) ➞ 7200

// // // howManySeconds(10) ➞ 36000

// // // howManySeconds(24) ➞ 86400

// // function howManySeconds(hours) {
// // 	return hours*60*60;
// // }


// // // Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// // // Examples
// // // cubes(3) ➞ 27

// // // cubes(5) ➞ 125

// // // cubes(10) ➞ 1000

// // function cubes(a) {
// // 	return a*a*a
// // }






// // Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

// // Examples
// // sumPolygon(3) ➞ 180

// // sumPolygon(4) ➞ 360

// // sumPolygon(6) ➞ 720
// // Notes
// // n will always be greater than 2.
// // The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.

// // function sumPolygon(n) {
// // 	if (n>2){
// // 	return (n-2)*180
// // }
// // }



// // Write a function that takes an integer minutes and converts it to seconds.

// // Examples
// // convert(5) ➞ 300

// // convert(3) ➞ 180

// // // convert(2) ➞ 120

// // function convert(minutes) {
// // 	return minutes*60
// // }





// // Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// // Examples
// // addition(0) ➞ 1

// // addition(9) ➞ 10

// // addition(-3) ➞ -2

// // function addition(num) {
// // 	return num+1
// // }





// // Is the Number Less than or Equal to Zero?
// // Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// // Examples
// // lessThanOrEqualToZero(5) ➞ false

// // lessThanOrEqualToZero(0) ➞ true

// // lessThanOrEqualToZero(-2) ➞ true

// // function lessThanOrEqualToZero(num) {
// // 	if (num<=0){
// // 		return true
// // 	} else {
// // 		return false
// // 	}
// // }


// // const lessThanOrEqualToZero = (n) => {
// // 	if (n<=0) {
// // 		return true;
// // 		} else {
// // 		return false;
// // 		}
// // }

// // console.log(lessThanOrEqualToZero(0))






// // Less Than 100?
// // Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// // Examples
// // lessThan100(22, 15) ➞ true
// // // 22 + 15 = 37

// // lessThan100(83, 34) ➞ false
// // // 83 + 34 = 117

// // lessThan100(3, 77) ➞ true

// // function lessThan100(a, b) {
// // 	if(a+b<100){
// // 		return true
// // 	} else {
// // 		return false
// // 	}
// // }





// // Find the Perimeter of a Rectangle
// // Create a function that takes length and width and finds the perimeter of a rectangle.

// // Examples
// // findPerimeter(6, 7) ➞ 26

// // findPerimeter(20, 10) ➞ 60

// // findPerimeter(2, 9) ➞ 22

// // function findPerimeter(length, width) {
// // 	var sum = length + width;
// // 	return 2*sum;
// // }


// // const findPerimeter = (length, width) => {
// // 	var sum = length + width;
// // 	return 2*sum;
// // }

// // console.log(findPerimeter(2,3))
// // const numbers = [{age: 1}, {age: 2}, {age: 3}, {age: 4}, {age: 5}]
// // const findNumber = (n) => {
// // 	 return numbers.find(number => {
// // 		return number.age == n;
// // 	})
// // }

// // console.log(findNumber(6))


// // AlertForEach
// // let numbers = [{age: 1}, {age: 2}, {age: 3}, {age: 4}, {age: 5}, {age: 6}]
// // function alertEachAge(){
// // 	numbers.forEach(number => {
// // 		return alert(number.age);
// // 	})
// // }

// // alertEachAge()



// // const Numbers = [{age: 1}, {age: 2}, {age: 3}, {age: 4}, {age: 5}, {age: 6}]

// // const deleteNumber = (age) => {
// // return Numbers.filter(number => {
// // 	return number.age !== age;
// // })
// // }

// // const filteredNumbers = deleteNumber(3)
// // console.log(filteredNumbers);



// // const Numbers = [{age: 1}, {age: 2}, {age: 3}, {age: 4}, {age: 5}, {age: 6}]

// // const changeAge = () => {
// // return Numbers.map(number => {
// // 	return number.age -=1;
// // })
// // }

// // console.log(changeAge());



// // const Numbers = [9, 10, 5, 6, 3, 4, 7];

// // const sumData = () => {
// // return Numbers.reduce((sum, currentNumber) => {
// // 	return sum + currentNumber;
// // })
// // }






// // Return Something to Me!
// // Write a function that returns the string "something" joined with a space " " and the given argument a.

// // Examples
// // giveMeSomething("is better than nothing") ➞ "something is better than nothing"

// // giveMeSomething("Bob Jane") ➞ "something Bob Jane"

// // giveMeSomething("something") ➞ "something something"

// // function giveMeSomething(a) {
// // 	return "something "+ a
// // }

// // //program to check pass or fail 
// // let age = prompt ('Enter your age:'); 

// //  // check the condition
// // let result = ( age >=40 ) ? 'pass' : 'fail';
// // console.log (`You ${result} the age exam.`);


// // Buggy Code (Part 7)
// // Mubashir wants to swap two given numbers!

// // It is not returning the right values. Can you help him fix it?

// // a = 100
// // b = 200
// // a, b = swap(a, b)
// // print(a, b) // Should print out "200, 100", but the function prints out "100, 100"
// // Examples
// // swap(100, 200) ➞ [200, 100]

// // swap(44, 33) ➞ [33, 44]

// // swap(21, 12) ➞ [12, 21]

// // function swap(a, b) {
// // 	var el=a
// // 	a = b
// // 	b = el
// // 	return [a, b]
// // }


// const data = {
// 	age: 1, 
// 	firstName: "Ade", 
// 	lastName: "Cole"
// }

// const { age, firstName, lastName} = data;
// console.log(lastName)


// // console.log(data.age)

// // console.log(data.firstName)

// // console.log(data.lastName)


// const array1 = [1, 2, 3, 4, 5];
// const array2 = [5, 6, 7, 8, 9];
// const array3 = [12, 11, 13, 14, 15];

// const newArray = [...array1, ...array2, ...array3];
// console.log(newArray);

// const obj1 = {
// 	firstName: "Wale",
// 	lastName: "Jude"
// }

// const obj2 = {
// 	sex: "Male",
// 	age: 19
// }

// const obj3 = {
// 	dateOfBirth: "30-01-1990",
// 	stateOfOrigin: "Abia"
// }

// const newObject = {...obj1, ...obj2, ...obj3};
// console.log(newObject)