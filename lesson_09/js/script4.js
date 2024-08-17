"use strict"
// 4 Дано масив елементів. Вивести на екран елементи, що більші за 100. Використати цикл for..of

if(confirm('Почати тестування?')) { 

// функція для генерування єлементів(1-150)
function generateElements(elementNumbers, minNum = 1, maxNum = 150) {
	let arr = []
	for (let i = 0; i < elementNumbers; i++) {
		let num = minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
		arr.push(num)
	}
	return arr
}

let elementNumbers = parseInt(prompt('Скільки елементів масиву сгенерувати?', '10'))
let arrElements = generateElements(elementNumbers)

document.write(`Сгенерований масив: ${arrElements} <br><br>`)

for (let el of arrElements) {
	if(el > 100) document.write(`${el} <br>`)
}

}
