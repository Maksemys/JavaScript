"use strict"
//Задача 2. Зробити конвертер валют (курси валют – константи у скрипті)

function convert() {
	let dollarRate = 42
	let euroRate = 46
	const grnVal = parseFloat(document.getElementById('grn').value)

	//обчислимо кількість доларів
	const dollarsAmount = (grnVal / dollarRate).toFixed(2)
	//обчислимо кількість евро
	const euroAmount = (grnVal / euroRate).toFixed(2)

	document.getElementById('dol').value = dollarsAmount
	document.getElementById('euro').value = euroAmount

}



window.onload = function () {
	document.getElementById('convert').onclick = convert
}

// window.onload = function () {
// 	document.querySelector('button').onclick = convert
//  }