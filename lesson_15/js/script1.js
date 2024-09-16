"use strict"
// Задача 1. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
// Тир		
// Поля(властивості)	Масив, у якому зберігається поле з зайцями
// Методи (дії)	Метод пострілу (задається позиція пострілу)
// Виведення ігрового поля

const shootingRange = {
	// Поля(властивості)
	fieldWithRabits: [0, 1, 0, 1, 1, 0, 0, 1],
	// Методи (дії)
	shot: function (position) {
		if(this.fieldWithRabits[position] === 1){
			alert(`Ви влучили`)
			this.fieldWithRabits[position] = 'X'
		}
		else alert(`Не влучили`)
	},
	userShot: function () {
		let attempts = 5
		while (attempts > 0) {
			let userShot = parseInt(prompt(`Введіть позицію для пострілу від 0 до 7. Пострілів залишилося ${attempts}`))
			this.shot(userShot)
			attempts--
		}
		// Виведення оновленого поля
		this.showFieldWithRabits()
	},
	showFieldWithRabits: function () {
		document.write(`<div> ${this.fieldWithRabits.join(' | ')} </div>`)
	}
}

if (confirm('Почати тестування?')) {
// Виведення початкового поля і початок гри
shootingRange.showFieldWithRabits()
shootingRange.userShot()
}