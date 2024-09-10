"use strict"
// Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.

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

// Сортування за довжиною імен
randomNames.sort(function(a, b) {
	return a.length - b.length
})

console.log(randomNames)

// Функція для бінарного пошуку
function binarySearch(arr, targetLength) {
	let left = 0
	let right = arr.length - 1

	while (left <= right) {
		let mid = Math.floor((left + right) / 2)

		if (arr[mid].length === targetLength) {
			return mid; // Повертаємо індекс, якщо знайдено
		}
		if (arr[mid].length < targetLength) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return -1 // Повертаємо -1, якщо ім'я не знайдено
}

// Шукаємо ім’я довжиною 5 символів у відсортованому масиві
let index = binarySearch(randomNames, 5)

if (index !== -1) {
	console.log(`ім’я довжиною 5 символів на індексі ${index}`)
} else {
	console.log('ім’я довжиною 5 символів не знайдено')
}
}