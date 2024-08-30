"use strict"
// Ці задачі надсилайте на перевірку
// При розв’язанні задач намагайтесь використовувати відповідні методи (map, filter, reduce,…) всюди, де це можливо
// Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
//       1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
//       2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
//       3)Сформувати список з тих цін, які більші за попереднє значення
//       4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
//       5)Підрахувати кількість змін цін
//       6)Визначити, чи є ціна, що менше 1000
//       7)Визначати, чи усі ціни більше за 1000
//       8)Підрахувати кількість цін, що більше за 1000
//       9)Підрахувати суму цін, що більше за 1000
//       10)Знайти першу ціну, що більше за 1000
//       11)Знайти індекс першої ціни, що більше за 1000
//       12)Знайти останню ціну, що більше за 1000
//       13)Знайти індекс останньої ціни, що більше за 1000



if(confirm('Почати тестування?')) { 

	// функція для генерування массиву цін
function generatePrices(periodNum, min = 1, max = 10000) {
	let arr = []
	for (let i = 0; i < periodNum; i++) {
		let num = min + Math.floor(Math.random() * (max - min + 1))
		arr.push(num)
	}
	return arr
}

let periodNum = parseInt(prompt('Який період? Введіть кількість цін', '10'))
let pricesHistory = generatePrices(periodNum)

document.write(`масив з цінами [${pricesHistory}]<br><br>`)

//1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
let moreThanThousand = pricesHistory.filter((el) => el > 1000)

document.write(`більші за 1000 грн. ${moreThanThousand}<br><br>`)

//2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
let moreThanThousandIndex = pricesHistory.reduce((newArr, el, index) => {
	if (el > 1000) newArr.push(index)
	return newArr
 },[])
 document.write(`номери тільки тих, що більші за 1000 грн. ${moreThanThousandIndex}<br><br>`)

//  3)Сформувати список з тих цін, які більші за попереднє значення
let moreThanPrevious = pricesHistory.reduce((newArr, el, index, arr) => {
	if (index > 0 && el  > arr[index-1]) newArr.push(el)
	return newArr
 },[])
 document.write(`більші за попереднє значення ${moreThanPrevious}<br><br>`)

//  4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
function getMaxPrice(pricesHistory) {
	let max = pricesHistory[0] // беремо перший елемента для порівняння як початковий
	for (let i = 1; i < pricesHistory.length; i++) {
		//як змінюються номери елементів
		if (pricesHistory[i] > max) max = pricesHistory[i] //що треба зробити з кожним із елементів
	}
	return max
}

let percentOfMaximum = pricesHistory.map((el) => (el / getMaxPrice(pricesHistory)) * 100)
console.log(getMaxPrice(pricesHistory))
document.write(`значення цін у відсотках стосовно максимального ${percentOfMaximum}<br><br>`)

// 5)Підрахувати кількість змін цін
let pricesHistory1 = [7447,2258,1502,9895,8154,4467,9539,9539,9539,4348]
let sumCountChangePrice = pricesHistory1.reduce((totalCountChange, el, index, arr) => {
	if (index > 0 && el != arr[index-1]) 
	  totalCountChange ++
	return totalCountChange
 }, 0)

document.write(`у масиві [${pricesHistory1}]<br> кількість змін цін ${sumCountChangePrice}<br><br>`)

// 6)Визначити, чи є ціна, що менше 1000
let priceLessThanThousand = pricesHistory.some((el) => el < 1000)
document.write(`чи є ціна, що менше 1000: ${priceLessThanThousand}<br><br>`)

// 7)Визначати, чи усі ціни більше за 1000
let allPricesMoreThanThousand = pricesHistory.every((el) => el > 1000)
document.write(`чи усі ціни більше за 1000: ${allPricesMoreThanThousand}<br><br>`)

// 8)Підрахувати кількість цін, що більше за 1000
let totalCountMoreThanThousand  = pricesHistory.reduce((totalCount, el) => {
	if (el > 1000) 
	  totalCount ++
	return totalCount
 }, 0)

 document.write(`кількість цін, що більше за 1000: ${totalCountMoreThanThousand}<br><br>`)

//  9)Підрахувати суму цін, що більше за 1000
let sumPricesMoreThanThousand = pricesHistory.reduce((prev, el, index, arr) => {
	if (el > 1000) {
		prev += el
	}
	return prev 
}, 0
)
document.write(`сума цін, що більше за 1000: ${sumPricesMoreThanThousand}<br><br>`)

// 10)Знайти першу ціну, що більше за 1000
let firstPriceMoreThanThousand = pricesHistory.find(el => el > 1000)
document.write(`першу ціну, що більше за 1000: ${firstPriceMoreThanThousand}<br><br>`)

// 11)Знайти індекс першої ціни, що більше за 1000
let firstPriceIndexMoreThanThousand = pricesHistory.findIndex(el => el > 1000 )
document.write(`індекс першої ціни, що більше за 1000: ${firstPriceIndexMoreThanThousand}<br><br>`)

// 12)Знайти останню ціну, що більше за 1000
let lastPriceMoreThanThousand = pricesHistory.findLast((el, index, arr) => (el > 1000))
document.write(`останню ціну, що більше за 1000: ${lastPriceMoreThanThousand}<br><br>`)

// 13)Знайти індекс останньої ціни, що більше за 1000
let lastPriceIndexMoreThanThousand = pricesHistory.findLastIndex(el => el > 1000 )
document.write(`індекс останньої ціни, що більше за 1000: ${lastPriceIndexMoreThanThousand}<br><br>`)



}

