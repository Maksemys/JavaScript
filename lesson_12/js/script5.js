"use strict"
// Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.

if(confirm('Почати тестування?')) { 
 let randomNames = [
	"Olivia",
	"Liam",
	"Emma",
	"Noah",
	"Sophia",
	"James",
	"Isabella",
	"Olga",
	"Mia",
	"Elijah"
]

// Функція для сортування масиву імен (сортуємо за алфавітом)
function sortNames(arr) {
	return arr.sort()
}

// Функція для бінарного пошуку
function binarySearch(arr, target) {
	let left = 0
	let right = arr.length - 1

	while (left <= right) {
		let mid = Math.floor((left + right) / 2)

		if (arr[mid] === target) {
			return mid; // Повертаємо індекс, якщо знайдено
		}
		if (arr[mid] < target) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return -1 // Повертаємо -1, якщо ім'я не знайдено
}

// Сортуємо масив
let sortedNames = sortNames(randomNames)
console.log("Відсортований масив імен:", sortedNames)

// Шукаємо ім'я "Olga" у відсортованому масиві
let index = binarySearch(sortedNames, "Olga")

if (index !== -1) {
	console.log(`Ім'я "Olga" знайдено на індексі ${index}`)
} else {
	console.log('Ім\'я "Olga" не знайдено')
}
}