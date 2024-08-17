"use strict"
// 4 Дано масив елементів. Вивести на екран елементи, що більші за 100. Використати цикл for..of

if(confirm('Почати тестування?')) { 

// функція для генерування єлементів(1-1000)
function generateElements(elementNumbers, minNum = 1, maxNum = 1000) {
	let arr = []
	for (let i = 0; i < elementNumbers; i++) {
		let num = minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
		arr.push(num)
	}
	return arr
}

let elementNumbers = parseInt(prompt('Скільки елементів масиву сгенерувати?'))
let arrElements = generateElements(elementNumbers)

document.write(`Сгенерований масив: ${arrElements} <br><br>`)

for (let el of arrElements) {
	if(el > 100) document.write(`${el} <br>`)
}

}
