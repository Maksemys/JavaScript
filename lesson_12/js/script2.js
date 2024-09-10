"use strict"
// Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування змішуванням.

if(confirm('Почати тестування?')) { 

let randomNumbers = [
	17,  7, 56, 53, 55, 53, 70, 73, 20,
	82,  1, 68, 74, 98, 26, 65, 60, 68,
	 4, 27, 13, 14, 80, 21, 14, 47,  0,
	35, 68, 26
 ]

function swap(arr, i, j) {
	let temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

let leftIndex = 0
let rightIndex = randomNumbers.length - 1
let comparisonCount = 0	// Лічильник порівнянь
let swapCount = 0			// Лічильник обмінів

while (leftIndex < rightIndex) {
	// Прохід зліва направо
	for (let index = leftIndex; index < rightIndex; index++) {
		comparisonCount++  // Порівняння
		if (randomNumbers[index] > randomNumbers[index + 1]) {
			swap(randomNumbers, index, index + 1)
			swapCount++ // Обмін
		}
	}
	rightIndex--

	// Прохід справа наліво
	for (let index = rightIndex; index > leftIndex; index--) {
		comparisonCount++  // Порівняння
		if (randomNumbers[index] < randomNumbers[index - 1]) {
			swap(randomNumbers, index, index - 1)
			swapCount++ // Обмін
		}
	}
	leftIndex++
}

console.log("Відсортований масив:", randomNumbers)
console.log("Кількість порівнянь:", comparisonCount)
console.log("Кількість обмінів:", swapCount)
}