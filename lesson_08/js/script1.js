// Задача 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).

if(confirm('Почати тестування?')) { 
	// функція для генерування оцінок(2-5) для К кількості предметів
// function generateGrates(schoolSubjectsNum, minGrate = 2, maxGrate = 5) {
// 	let arr = []
// 	for (let i = 0; i < schoolSubjectsNum; i++) {
// 		let num = minGrate + Math.floor(Math.random() * (maxGrate - minGrate + 1))
// 		arr.push(num)
// 	}
// 	return arr
// }

let schoolSubjectsNum = parseInt(prompt('Скільки предметів?'))
// let studentGrades = generateGrates(schoolSubjectsNum)

// функція для вводу оцінок
function generateGrates(schoolSubjectsNum) {
	let arr = []
	for (let i = 0; i < schoolSubjectsNum; i++) {
		let num = parseInt(prompt(`Введіть оцінку предмета №${i+1} від 1 до 5`, '5'))
		arr.push(num)
	}
	return arr
}

let studentGrades = generateGrates(schoolSubjectsNum)


// функція для генерування середньої оцінки для К кількості предметів
function getAverageGrades(studentGrades) {
	let sumGrades = 0
	let averageGrades = 0
	for (let i = 0; i < studentGrades.length; i++) {
	sumGrades += studentGrades[i]
}
// обчислення середнього бала
	averageGrades = sumGrades / studentGrades.length
	return averageGrades
}

document.write(`<div>Оцінки учня: ${studentGrades}</div>`)
document.write(`<div>Середній бал: ${getAverageGrades(studentGrades).toFixed(1)}</div>`)

// функція для визначення категорії учня
function showStudentCategory(studentGrades) {
	let hasTwo = false;
	let hasThree = false;
	let allFoursAndFives = true;
	let allFives = true;

	// перебір оцінок
	for (let i = 0; i < studentGrades.length; i++) {
		const grade = studentGrades[i];
		if (grade === 2) {
			hasTwo = true
		}
		if (grade === 3) {
			hasThree = true
		}
		if (grade < 4) {
			allFoursAndFives = false
		}
		if (grade !== 5) {
			allFives = false
		}
	}

	// визначення категорії
	let studentCategory
	if (hasTwo) {
		studentCategory = "Двійочник"
	} else if (hasThree) {
		studentCategory = "Трійочник"
	} else if (allFoursAndFives) {
		if (allFives) {
			studentCategory = "Відмінник"
		} else {
			studentCategory = "Хорошист"
		}
	}
	return studentCategory
}

document.write(`Категорія: ${showStudentCategory(studentGrades)}`)
}

