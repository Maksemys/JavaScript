"use strict"
// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.



function getYearPerMonthN(object, N) {
	return Math.floor(( object.month - 1 + N) / 12) + object.year
}

let date = {
	day: 15,
	month: 3,
	year: 2020
}

console.log(getYearPerMonthN(date, 66))