"use strict"
// Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
//1) загальний прибуток кожного масиву за тиждень;
//2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
//3) загальний прибуток за робочі дні
//4) загальний прибуток за вихідні дні
//5) максимальний прибуток за середу
//6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
//7) відсортувати кожен тиждень за зростанням
//8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
//9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).





if(confirm('Почати тестування?')) { 

// 	// функція для формування двовімірного масиву
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

// // let row = parseInt(prompt('Введіть кількість рядків', '10'))
// // let column = parseInt(prompt('Введіть кількість колонок', '10'))
// let twoDimensionalArr = generateTwoDimensionalArr(5, 7)

// console.log(twoDimensionalArr)


let profitOfStoresForWeek = [
	[112, 426, 216, 331, 427, 118, 487],
	[474, 336, 416, 393, 119, 70, 60],
	[72, 169, 294, 186, 133, 268, 43],
	[488, 279, 290, 3, 110, 47, 30],
	[385, 346, 423, 215, 396, 481, 392]
 ]

 //1) загальний прибуток кожного масиву за тиждень;
 let totalProfitOfStores = profitOfStoresForWeek.map(weekProfit => 
	weekProfit.reduce((total, dailyProfit) => total + dailyProfit, 
	0)
)
console.log('1) загальний прибуток кожного масиву за тиждень')
console.log(totalProfitOfStores)

//2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
function getTotalSumProfitPerEachDayOfWeek(profitOfStoresForWeek) {
	let totalColumns = profitOfStoresForWeek[0].length
	let totalSumProfitPerEachDay = []
	for (let columnIndex = 0; columnIndex < totalColumns; columnIndex++) {
		let columnSum = 0
		for (let rowIndex = 0; rowIndex < profitOfStoresForWeek.length; rowIndex++) {
			columnSum += profitOfStoresForWeek[rowIndex][columnIndex]
		}
		totalSumProfitPerEachDay.push(columnSum)
	}
	return totalSumProfitPerEachDay
}
console.log('2) загальний прибуток усіх магазинів по дням')
console.log(getTotalSumProfitPerEachDayOfWeek(profitOfStoresForWeek))

//3) загальний прибуток за робочі дні
function getTotalSumProfitWorkDays(profitOfStoresForWeek) {
	let totalSumProfitWorkDays = []
	for (let columnIndex = 0; columnIndex < 5; columnIndex++) {
		let columnSum = 0
		for (let rowIndex = 0; rowIndex < profitOfStoresForWeek.length; rowIndex++) {
			columnSum += profitOfStoresForWeek[rowIndex][columnIndex]
		}
		totalSumProfitWorkDays.push(columnSum)
	}
	return totalSumProfitWorkDays
}
console.log('3) загальний прибуток за робочі дні')
console.log(getTotalSumProfitWorkDays(profitOfStoresForWeek))

//4) загальний прибуток за вихідні дні
function getTotalSumProfitWeekends(profitOfStoresForWeek) {
	let totalSumProfitWeekends = []
	for (let columnIndex = 5; columnIndex < 7; columnIndex++) {
		let columnSum = 0
		for (let rowIndex = 0; rowIndex < profitOfStoresForWeek.length; rowIndex++) {
			columnSum += profitOfStoresForWeek[rowIndex][columnIndex]
		}
		totalSumProfitWeekends.push(columnSum)
	}
	return totalSumProfitWeekends
}
console.log('4) загальний прибуток за вихідні дні')
console.log(getTotalSumProfitWeekends(profitOfStoresForWeek))

//5) максимальний прибуток за середу
function getMaxPrice(profitOfStoresForWeek, columnIndex) {
	let max = profitOfStoresForWeek[0][columnIndex] // беремо перший елемента для порівняння як початковий
	for (let rowIndex = 1; rowIndex < profitOfStoresForWeek.length; rowIndex++) { //як змінюються номери елементів
		if (profitOfStoresForWeek[rowIndex][columnIndex] > max) max = profitOfStoresForWeek[rowIndex][columnIndex] //що треба зробити з кожним із елементів
	}
	return max
}
console.log('5) максимальний прибуток за середу')
console.log(getMaxPrice(profitOfStoresForWeek, 2))


//6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200

// let newArr = profitOfStoresForWeek.flat(Infinity)
// let arrMoreThan200 = []
// for (let index = 0; index < newArr.length; index++) {
// 	if (newArr[index] > 200) {
// 		arrMoreThan200.push(newArr[index])
// 	}
// }
// console.log(arrMoreThan200)
//=====або
// let newArr = profitOfStoresForWeek.flat(Infinity)
// let arrMoreThan200 = []
// for (const element of newArr) {
// 	if (element > 200) {
// 		arrMoreThan200.push(element)
// 	}
// }
// console.log(arrMoreThan200)
//=====або
// let newArr = profitOfStoresForWeek.flat(Infinity)
// let arrMoreThan200 = []
// newArr.forEach(element => {
// 	if (element > 200) {
// 		arrMoreThan200.push(element)
// 	}
// })
// console.log(arrMoreThan200)
//=====або
let arrMoreThan200 = profitOfStoresForWeek.flat(Infinity).filter(el => el > 200)
console.log('6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200')
console.log(arrMoreThan200)


//7) відсортувати кожен тиждень за зростанням
let sortedProfitOfStores = profitOfStoresForWeek.map(weekProfit => 
	weekProfit.sort((a, b) => a - b)
)
console.log('7) відсортувати кожен тиждень за зростанням')
console.log(sortedProfitOfStores)

//8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
function findMax(arr) {
	return arr.reduce((max, current) => (current > max ? current : max), arr[0])
}

profitOfStoresForWeek.sort((a, b) => findMax(b) - findMax(a))

console.log('8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку)')
console.log(profitOfStoresForWeek);

//9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
let totalProfitSumOfStores = profitOfStoresForWeek.map(weekProfit => 
	weekProfit.reduce((total, dailyProfit) => total + dailyProfit, 
	0)
)
totalProfitSumOfStores.sort((a, b) => b - a)

console.log('9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку ')
console.log(totalProfitSumOfStores)

}

