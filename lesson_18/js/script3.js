"use strict"
//Задача 3. Користувач задає рік народження. Визначити кількість років користувача.

function userYears() {
	const currentYear = new Date().getFullYear()
	const userBirthYear = parseInt(document.getElementById('birthYear').value)
	const numberOfUserYears = currentYear - userBirthYear

	document.getElementById('yearsNum').value = numberOfUserYears
	
}

window.onload = function () {
	document.getElementById('convert').onclick = userYears
}