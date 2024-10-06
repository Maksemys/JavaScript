"use strict"
//Задача 4. Наперед задано у скрипті масив зі списком бажань. Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку)

const wishlist = [
	"Подорожувати по Європі",
	"Навчитися грати на гітарі",
	"Засвоїти нову мову",
	"Зайнятися серфінгом",
	"Написати книгу",
	"Запустити свій бізнес",
	"Пройти курс із кулінарії",
	"Відвідати концерт улюбленого гурту",
	"Зайнятися волонтерською діяльністю",
	"Побудувати свій будинок"
 ]

function randomWish(wishlist) {
	let container = document.getElementById('wishList')
	for (let i = 0; i < 3; i++) {
		const element = document.createElement('div')
		let randomIndex = Math.floor(Math.random() * wishlist.length)
		element.innerText = wishlist.splice(randomIndex, 1)[0] // Видаляємо за допомогою методу splice елемент масиву с randomIndex щоб не було поторів по виводимим на єкран бажанням
		container.append(element)
	}
	
}


window.onload = function () {
	randomWish(wishlist) 
}