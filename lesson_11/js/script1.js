"use strict"
// Задача 1. Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
//1)	номери рядків від 0 до половини, стовпці від 0 до половини
//2)	номери рядків від 0 до половини, стовпці від половини до кінця
//3)номери рядків (від половини до кінця, стовпці від 0 до половини
//4) номери рядків від половини до кінця , стовпці від половини до кінця
//5) Суму парних рядків
//6) Суму непарних стовпців
//7) У парних рядках – непарні стовпці, у непарних – парні.




if(confirm('Почати тестування?')) { 

	// функція для формування двовімірного масиву
// function generateTwoDimensionalArr(row, column, min = 1, max = 500) {
// 	let arrRow = []
// 	for (let rowIndex = 0; rowIndex < row; rowIndex++) {
// 		 let arrColumn = []
// 		 for (let columnIndex = 0; columnIndex < column; columnIndex++) {
// 			  let num = min + Math.floor(Math.random() * (max - min + 1))
// 			  arrColumn.push(num)
// 		 }
// 		 arrRow.push(arrColumn)
// 	}
// 	return arrRow
// }

// let row = parseInt(prompt('Введіть кількість рядків', '10'))
// let column = parseInt(prompt('Введіть кількість колонок', '10'))
// let twoDimensionalArr = generateTwoDimensionalArr(row, column)

// console.log(twoDimensionalArr)


let twoDimensionalArr = [
// 0
		[111, 300, 93, 480, 423, 392, 430, 51, 485, 379],
// 1
		[495, 103, 302, 189, 138, 470, 145, 428, 212, 29],
// 2
		[127, 147, 409, 361, 63, 19, 15, 18, 174, 181],
// 3
		[321, 36, 257, 357, 172, 307, 179, 220, 218, 349],
// 4 
		[10, 158, 144, 280, 252, 370, 279, 160, 102, 43],
// 5
		[375, 163, 256, 138, 238, 16, 260, 320, 468, 418],
// 6
		[289, 73, 486, 365, 224, 125, 73, 188, 296, 132],
// 7
		[167, 170, 387, 71, 322, 440, 143, 229, 109, 5],
// 8
		[250, 58, 301, 65, 57, 483, 254, 303, 70, 121],
// 9
		[227, 352, 10, 174, 26, 495, 325, 127, 80, 177]
]

//1)	номери рядків від 0 до половини, стовпці від 0 до половини
function getSumElemRowAndColumnFromZeroToHalf(arr) {
	let sum = 0
	const halfRowArr = Math.floor(arr.length/2)
	for (let rowIndex = 0; rowIndex < halfRowArr; rowIndex++) {
		const halfColArr = Math.floor(arr[rowIndex].length/2)
		 for (let columnIndex = 0; columnIndex < halfColArr; columnIndex++) {
			  sum += arr[rowIndex][columnIndex]
		 }
	}
	return sum;
}

console.log('1) номери рядків від 0 до половини, стовпці від 0 до половини')
console.log(getSumElemRowAndColumnFromZeroToHalf(twoDimensionalArr))

//2)	номери рядків від 0 до половини, стовпці від половини до кінця
function getSumElemRowFromZeroToHalfAndColumnFromHalfToEnd(arr) {
	let sum = 0
	const halfRowArr = Math.floor(arr.length/2)
	for (let rowIndex = 0; rowIndex < halfRowArr; rowIndex++) {
		const halfColArr = Math.floor(arr[rowIndex].length/2)
		 for (let columnIndex = halfColArr; columnIndex < arr[rowIndex].length; columnIndex++) {
			  sum += arr[rowIndex][columnIndex]
		 }
	}
	return sum;
}

console.log('2) номери рядків від 0 до половини, стовпці від половини до кінця')
console.log(getSumElemRowFromZeroToHalfAndColumnFromHalfToEnd(twoDimensionalArr))

//3)номери рядків (від половини до кінця, стовпці від 0 до половини
function getSumElemRowFromHalfToZeroAndColumnFromZeroToHalf(arr) {
	let sum = 0
	const halfRowArr = Math.floor(arr.length/2)
	for (let rowIndex = halfRowArr; rowIndex < arr.length; rowIndex++) {
		const halfColArr = Math.floor(arr[rowIndex].length/2)
		 for (let columnIndex = 0; columnIndex < halfColArr; columnIndex++) {
			  sum += arr[rowIndex][columnIndex]
		 }
	}
	return sum;
}

console.log('3) номери рядків (від половини до кінця, стовпці від 0 до половини')
console.log(getSumElemRowFromHalfToZeroAndColumnFromZeroToHalf(twoDimensionalArr))

//4) номери рядків від половини до кінця , стовпці від половини до кінця
function getSumElemRowAndColumnFromHalfToZero(arr) {
	let sum = 0
	const halfRowArr = Math.floor(arr.length/2)
	for (let rowIndex = halfRowArr; rowIndex < arr.length; rowIndex++) {
		const halfColArr = Math.floor(arr[rowIndex].length/2)
		 for (let columnIndex = halfColArr; columnIndex < arr[rowIndex].length; columnIndex++) {
			  sum += arr[rowIndex][columnIndex]
		 }
	}
	return sum;
}

console.log('4) номери рядків від половини до кінця , стовпці від половини до кінця')
console.log(getSumElemRowAndColumnFromHalfToZero(twoDimensionalArr))

//5) Суму парних рядків
function getSumEvenRows(arr) {
	let evenSum = arr.reduce(
		(prevTotalSum, row, index) => 
			index % 2 === 0 ? prevTotalSum + row.reduce((prevRowSum, el) => prevRowSum + el, 0) : prevTotalSum,
		0
	)
	return evenSum
}

console.log('5) Суму парних рядків')
console.log(getSumEvenRows(twoDimensionalArr))
	

//6) Суму непарних стовпців
function getSumOddRows(arr) {
	let oddSum = arr.reduce(
		(prevTotalSum, row, index) => 
			index % 2 > 0 ? prevTotalSum + row.reduce((prevRowSum, el) => prevRowSum + el, 0) : prevTotalSum,
		0
	)
	return oddSum
}

console.log('6) Суму непарних стовпців')
console.log(getSumOddRows(twoDimensionalArr))
	
//7) У парних рядках – непарні стовпці, у непарних – парні.
function getSumEvenRowsOddColumsAndOddRowsEvenColums(arr) {
	let SumEvenRowsOddColums = arr.reduce(
		(prevTotalSum, row, index) => 
			index % 2 === 0 ? prevTotalSum + row.reduce((prevRowSum, el, index) => index % 2 > 0 ? prevRowSum + el : prevRowSum, 0) : prevTotalSum,
		0
	)
	let SumOddRowsEvenColums = arr.reduce(
		(prevTotalSum, row, index) => 
			index % 2 > 0 ? prevTotalSum + row.reduce((prevRowSum, el, index) => index % 2 === 0 ? prevRowSum + el : prevRowSum, 0) : prevTotalSum,
		0
	)
	return [SumEvenRowsOddColums, SumOddRowsEvenColums]
}

let SumEvenRowsOddColumsAndOddRowsEvenColums = getSumEvenRowsOddColumsAndOddRowsEvenColums(twoDimensionalArr)

console.log('7) У парних рядках – непарні стовпці, у непарних – парні.')
console.log(getSumEvenRowsOddColumsAndOddRowsEvenColums(twoDimensionalArr))
console.log('7.0) У парних рядках – непарні стовпці.')
console.log(SumEvenRowsOddColumsAndOddRowsEvenColums[0])
console.log('7.1) У непарних рядках – парні стовпці.')
console.log(SumEvenRowsOddColumsAndOddRowsEvenColums[1])

}

