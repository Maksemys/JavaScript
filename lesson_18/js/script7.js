"use strict"
//Задача 7. Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус, літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons). Ціни визначте самі. Підрахувати загальну вартість.

// Ціни
const transportPrices = {
	auto: 500,
	bus: 300,
	plane: 1000
}

const mealPrices = {
	breakfast: 100,
	lunch: 150,
	dinner: 200
}

const guidePrices = {
	guide1: 300,
	guide2: 400,
	guide3: 500
}

function calculateTotal() {
	let total = 0

	// Проходимо через кожен етап подорожі
	document.querySelectorAll('.trip-stage').forEach((stage, index) => {
		// Транспорт
		const transport = stage.querySelector('.transport').value
		total += transportPrices[transport]

		// Харчування
		stage.querySelectorAll('.meal:checked').forEach(meal => {
				total += mealPrices[meal.value]
		})

		// Гід
		const guide = stage.querySelector(`input[name="guide${index+1}"]:checked`);
		if (guide) {
				total += guidePrices[guide.value]
		 }
	})

	// Виводимо загальну вартість
	document.getElementById('totalCost').innerText = `Загальна вартість: ${total} грн`
}

window.onload = function () {
	document.getElementById('calculate').onclick = calculateTotal
}
