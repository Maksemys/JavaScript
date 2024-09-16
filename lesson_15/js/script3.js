"use strict"
// Задача 3. Розробити клас MultChecker для перевірки таблиці множення
// Поля	Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
// Кількість правильних відповідей
// Кількість неправильних відповідей
// Методи	Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
// Перевірка правильності вказаної відповіді
// render - виведення інформації про тестування на екран

class MultChecker {
	constructor(initNumber) {
		this.number = initNumber
		this.correctAnswersNum = 0
		this.wrongAnswersNum = 0
	}

	getGeneratedSecondNum(minNum = 1, maxNum = 9) {
		return minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
	}
	checkCorectAnswer(userAnswer, secondNum) {
		let correctAnswer = this.number * secondNum
		if (userAnswer === correctAnswer)
			this.correctAnswersNum++ 
		else
			this.wrongAnswersNum++
	}
	render(){
		document.write(`<div>Кількість правильних відповідей: ${this.correctAnswersNum}</div>`)
		document.write(`<div>Кількість неправильних відповідей: ${this.wrongAnswersNum}</div>`)
	}
}

if (confirm('Почати тестування?')) {

const cheker = new MultChecker(3)

let userAnswer = 0
let contin = true
while (contin === true) {
	const secondNum = cheker.getGeneratedSecondNum()
	userAnswer = parseInt(prompt(`${cheker.number} x ${secondNum} =`))
	cheker.checkCorectAnswer(userAnswer, secondNum)
	contin = confirm('Продовжуемо?')
}
cheker.render()

}