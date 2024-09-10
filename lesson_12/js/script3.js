"use strict"
// Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування включеннями.

if(confirm('Почати тестування?')) { 

let randomNumbers = [
	17,  7, 56, 53, 55, 53, 70, 73, 20,
	82,  1, 68, 74, 98, 26, 65, 60, 68,
	 4, 27, 13, 14, 80, 21, 14, 47,  0,
	35, 68, 26
]

function insertSort(arr) {
	let comparisonCount = 0 // Лічильник порівнянь
	let swapCount = 0 		// Лічильник обмінів

	for (let k = 1; k < arr.length; k++) {  // Починаємо з другого елементу
		const currentElement = arr[k]
		let i = k - 1

		// Порівнюємо і знаходимо місце для поточного елемента
		while (i >= 0) {
			comparisonCount++  // Порівняння
			if (arr[i] > currentElement) {
				arr[i + 1] = arr[i]
				swapCount++  // Обмін
			} else
				break
			i = i - 1
		}
		arr[i + 1] = currentElement
	}

	console.log("Кількість порівнянь:", comparisonCount)
	console.log("Кількість обмінів:", swapCount)
}

insertSort(randomNumbers)
console.log("Відсортований масив:", randomNumbers)
}