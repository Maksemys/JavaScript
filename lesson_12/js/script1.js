"use strict"
// Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування бульбашкою

if(confirm('Почати тестування?')) { 
// let randomNumbers = [];

// for (let i = 0; i < 30; i++) {
//   randomNumbers.push(Math.floor(Math.random() * 100));
// }

// console.log(randomNumbers);

let randomNumbers = [
	17,  7, 56, 53, 55, 53, 70, 73, 20,
	82,  1, 68, 74, 98, 26, 65, 60, 68,
	 4, 27, 13, 14, 80, 21, 14, 47,  0,
	35, 68, 26
 ]

let changed
let comparisonCount = 0
let swapCount = 0

do {
	changed = false;
	for (let i = 1; i < randomNumbers.length; i++) {
		comparisonCount++ // Збільшуємо лічильник порівнянь
		if (randomNumbers[i - 1] > randomNumbers[i]) {
			let tmp = randomNumbers[i - 1]
			randomNumbers[i - 1] = randomNumbers[i]
			randomNumbers[i] = tmp
			changed = true
			swapCount++ // Збільшуємо лічильник обмінів
			console.log(randomNumbers)
		}
	}
} while (changed)

console.log('Відсортований масив:', randomNumbers)
console.log('Кількість порівнянь:', comparisonCount)
console.log('Кількість обмінів:', swapCount)
}