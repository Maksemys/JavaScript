"use strict"
//Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком .


if(confirm('Почати тестування?')) { 
function generateArr(length, min, max) {
	let arr = []
	for (let i = 0; i < length; i++) {
		let randomNumber = min + Math.floor(Math.random() * (max - min + 1))
		arr.push(randomNumber)
	}
	return arr
}
let randomNumbers = generateArr(5, 1, 6)
console.log(randomNumbers)




function bubbleSort(arr) {
	let changed
	let step = 1 // Для відображення кроку
	do {
		changed = false
		for (let i = 1; i < arr.length; i++) {
			if (arr[i - 1] > arr[i]) {
				let tmp = arr[i - 1]
				arr[i - 1] = arr[i]
				arr[i] = tmp
				changed = true
				console.log(`bubbleSort шаг номер ${step}: [${arr}]`)
				step++
			}
		}
	} while (changed)
}

bubbleSort([...randomNumbers])


// 2. Сортування змішуванням


function cocktailSort(arr) {
	let leftIndex = 0
	let rightIndex = arr.length - 1
	let step = 1

	while (leftIndex < rightIndex) {
		for (let index = leftIndex; index < rightIndex; index++) {
			if (arr[index] > arr[index + 1]) {
				let tmp = arr[index]
				arr[index] = arr[index + 1]
				arr[index + 1] = tmp
				console.log(`cocktailSort шаг номер ${step}: [${arr}]`)
				step++
			}
		}
		rightIndex--

		for (let index = rightIndex; index > leftIndex; index--) {
			if (arr[index] < arr[index - 1]) {
				let tmp = arr[index]
				arr[index] = arr[index - 1]
				arr[index - 1] = tmp
				console.log(`cocktailSort шаг номер ${step}: [${arr}]`)
				step++
			}
		}
		leftIndex++
	}
}

cocktailSort([...randomNumbers]);


// 3. Сортування включеннями

function insertSort(arr) {
	let step = 1
	for (let k = 1; k < arr.length; k++) {
		const currentElement = arr[k]
		let i = k - 1
		while (i >= 0 && arr[i] > currentElement) {
			arr[i + 1] = arr[i]
			i = i - 1
			console.log(`insertionSort шаг номер ${step}: [${arr}]`)
			step++
		}
		arr[i + 1] = currentElement
	}
}

insertSort([...randomNumbers])
}
