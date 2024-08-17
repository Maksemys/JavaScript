"use strict"
// 6 Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2

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

// з використанням циклу for
// for (let i = 0; i < arrElements.length; i++) {
// 	if (arrElements[0] < arrElements[i])
// 		arrElements[i] *= 2
// }

// з використанням циклу forEach
arrElements.forEach((el, ind, arr) => {
	if (el > arr[0]) arr[ind] *= 2
 })

document.write(`Більші за перший помножені на 2: [${arrElements}] <br><br>`)

}