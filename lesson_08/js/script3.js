// Задача 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
if(confirm('Почати тестування?')) { 
	let studentNamesNum = parseInt(prompt('Скільки учнів?'))

// функція для вводу імен учнів
function pushStudentNames(studentNamesNum) {
	let arr = []
	for (let i = 1; i <= studentNamesNum; i++) {
		let studentName = prompt(`Введіть ім'я учня №${i}`, "Іван")
		arr.push(studentName)
	}
	return arr
}

let studentNames = pushStudentNames(studentNamesNum)


// функція для підрахунку кількості унів з ім'ям Іван
function getNumbersNameIvan(studentNames) {
	let nameIvan = "Іван"
	let countNameIvan = 0
	for (let index = 0; index < studentNames.length; index++) {
		if (studentNames[index] === nameIvan) {
			countNameIvan++
		}
	}
	return countNameIvan
}

document.write(`Введені імена: ${studentNames}<br><br>`)
document.write(`Ім'я Іван зустрічається ${getNumbersNameIvan(studentNames)} разів`)
}