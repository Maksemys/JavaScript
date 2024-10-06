"use strict"
//Задача 6. Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується таблиця з input, куди користувач вводить оцінки. Після цього натискає на кнопку “get sum” і знаходить середнє значення.

function getTable(columnsNum) {
	const elemTable = document.createElement('table')
	const elemTr = document.createElement('tr')
	
	for (let colInd = 0; colInd < columnsNum; colInd++) {
		 const elemTd = document.createElement('td')
		 const elemInput = document.createElement('input')
		 elemInput.type = 'number'  // Додаємо тип інпуту
		 elemInput.classList.add('gradeInput')  // Додаємо клас
		 elemTd.append(elemInput)
		 elemTr.append(elemTd)
	}
	
	elemTable.append(elemTr)
	return elemTable
}

function calculateAverage() {
	const inputs = document.querySelectorAll('.gradeInput')
	let sum = 0
	let count = 0

	Array.from(inputs).forEach(input => {
		const value = parseFloat(input.value)
		if (!isNaN(value)){
			sum += value
			count++
		}
	})

	const average = sum / count
	document.getElementById('result').innerText = average.toFixed(2)
}

window.onload = function () {
	document.getElementById('createBtn').onclick = function () {
		 const columnsNum = parseFloat(document.getElementById('cellNum').value)  // Отримуємо кількість інпутів
		 const tableContainer = document.getElementById('tableInput')
		 tableContainer.innerHTML = ''  // Очищаємо контейнер перед додаванням нових інпутів
		 tableContainer.append(getTable(columnsNum))  // Додаємо інпути
	}

	document.getElementById('calcBtn').onclick = function () {
		 calculateAverage()  // Викликаємо функцію для обчислення середнього
	}
}