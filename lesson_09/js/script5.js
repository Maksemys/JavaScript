"use strict"
// 5 Дано масив елементів. Знайти добуток додатних елементів. Використати цикл for..of

if(confirm('Почати тестування?')) { 

// функція для генерування єлементів(1-10)
function generateElements(elementNumbers, minNum = 1, maxNum = 10) {
	let arr = []
	for (let i = 0; i < elementNumbers; i++) {
		let num = minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
		arr.push(num)
	}
	return arr
}

let elementNumbers = parseInt(prompt('Скільки елементів масиву сгенерувати?'))
let arrElements = generateElements(elementNumbers)

document.write(`Сгенерований масив: [${arrElements}] <br><br>`)

let productPositiveElem = 1
for (let el of arrElements) {
	if(el > 0) {
		productPositiveElem *= el
	}
}
document.write(`Добуток додатних елементів дорівнює: ${productPositiveElem} <br>`)
}
