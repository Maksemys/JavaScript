"use strict"
// 7 Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.

if(confirm('Почати тестування?')) { 

// функція для генерування єлементів(500-2000)
function generateElements(elementNumbers, minNum = 500, maxNum = 2000) {
	let arr = []
	for (let i = 0; i < elementNumbers; i++) {
		let num = minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
		arr.push(num)
	}
	return arr
}

let elementNumbers = parseInt(prompt('Скільки елементів масиву сгенерувати?', '10'))
let arrElements = generateElements(elementNumbers)

document.write(`Сгенерований масив: [${arrElements}] <br><br>`)

// з використанням циклу forEach
arrElements.forEach((el, ind, arr) => {
	if (el > 1000) arr[ind] = el - el * 0.3
 })

document.write(`Більші за 1000 з знижкою 30%: [${arrElements}] <br><br>`)

}