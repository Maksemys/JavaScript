"use strict"
//Задача 1. Розробити калькулятор

function addition() {
	const firstNum = parseFloat(document.getElementById('first').value)
	const secondNum = parseFloat(document.getElementById('second').value)

	const sum = parseFloat(firstNum + secondNum)
	document.getElementById('result').innerText = sum
	// або інпутом
	const inputElement = document.getElementById('res')
	inputElement.value = sum
}

function subtraction() {
	const firstNum = parseFloat(document.getElementById('first').value)
	const secondNum = parseFloat(document.getElementById('second').value)

	const subtract = firstNum - secondNum
	document.getElementById('result').innerText = subtract
	// або інпутом
	const inputElement = document.getElementById('res')
	inputElement.value = subtract
}

function multiply() {
	const firstNum = parseFloat(document.getElementById('first').value)
	const secondNum = parseFloat(document.getElementById('second').value)

	const multipl = firstNum * secondNum
	document.getElementById('result').innerText = multipl
	// або інпутом
	const inputElement = document.getElementById('res')
	inputElement.value = multipl
}

function degree() {
	const firstNum = parseFloat(document.getElementById('first').value)
	const secondNum = parseFloat(document.getElementById('second').value)

	const degre = firstNum / secondNum
	document.getElementById('result').innerText = degre.toFixed(2)
	// або інпутом
	const inputElement = document.getElementById('res')
	inputElement.value = degre.toFixed(2)
}

window.onload = function () {
	document.querySelector('#sum').onclick = addition
	document.querySelector('#subtraction').onclick = subtraction
	document.querySelector('#multiply').onclick = multiply
	document.querySelector('#degree').onclick = degree
}