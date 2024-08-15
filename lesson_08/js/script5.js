// Задача 5. Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.

if(confirm('Почати тестування?')) { 
	// функція для генерування оцінок(2-5) для К кількості предметів
function generateGrates(schoolSubjectsNum, minGrate = 2, maxGrate = 5) {
	let arr = []
	for (let i = 0; i < schoolSubjectsNum; i++) {
		let num = minGrate + Math.floor(Math.random() * (maxGrate - minGrate + 1))
		arr.push(num)
	}
	return arr
}

let schoolSubjectsNum = parseInt(prompt('Скільки оцінок?'))
let studentGrades = generateGrates(schoolSubjectsNum)
document.write(`<div>Оцінки учня: ${studentGrades}</div>`)

//Функція Підрахувати кількість двійок
function getNumStudetGrateTwo(studentGrades) {
	count = 0
	for (let i = 0; i < studentGrades.length; i++) {
		if (studentGrades[i] === 2)
		count++
	}
	return count
}
document.write(`<div>Кількість двійок: ${getNumStudetGrateTwo(studentGrades)}</div>`)

//Функція Підрахувати кількість хороших оцінок (добре, відмінно)
function getNumStudetGrateFourAndFive(studentGrades) {
	count = 0
	for (let i = 0; i < studentGrades.length; i++) {
		if (studentGrades[i] === 4 || studentGrades[i] === 5)
		count++
	}
	return count
}
document.write(`<div>Кількість хороших оцінок (добре, відмінно): ${getNumStudetGrateFourAndFive(studentGrades)}</div>`)

//Функція Підрахувати кількість оцінок які нижче середнього
function getNumStudetGrateThreeAndTwo(studentGrades) {
	count = 0
	for (let i = 0; i < studentGrades.length; i++) {
		if (studentGrades[i] < 4)
		count++
	}
	return count
}
document.write(`<div>Кількість оцінок які нижче середнього: ${getNumStudetGrateThreeAndTwo(studentGrades)}</div>`)
}