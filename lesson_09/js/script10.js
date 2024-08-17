"use strict"
// 10. Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.

if(confirm('Почати тестування?')) { 

// функція для генерування єлементів(500-3000)
function generateElements(elementNumbers, minNum = 500, maxNum = 3000) {
	let arr = []
	for (let i = 0; i < elementNumbers; i++) {
		let num = minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
		arr.push(num)
	}
	return arr
}

let elementNumbers = parseInt(prompt('Скільки елементів масиву з цінами сгенерувати?', '10'))
let arrElementsPrices = generateElements(elementNumbers)

document.write(`Сгенерований масив з цінами: [${arrElementsPrices}] <br><br>`)
console.log(arrElementsPrices)


// створюємо новий масів з податком 20% з використанням map
let arrElementsTax = arrElementsPrices.map(el => 
	 Math.round(el * 0.2)
)

document.write(`Величина сплаченого податку у грн.: [${arrElementsTax}] <br><br>`)
console.log(arrElementsTax)

}