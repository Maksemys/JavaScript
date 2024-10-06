"use strict"
//Задача 5. Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку)

function getTable(rows, columns, minRandNum=1, maxRandNum=1000) {
	const elemTable = document.createElement('table')
	elemTable.style.border = '2px solid black'
	elemTable.style.borderCollapse = 'collapse'
	for (let rowInd  = 0; rowInd  < rows; rowInd ++) {
		const elemTr = document.createElement('tr')
		for (let colInd = 0; colInd < columns; colInd++) {
			const elemTd = document.createElement('td')
			elemTd.style.border = '1px solid black'
			elemTd.style.padding = '10px'
			elemTd.innerText = minRandNum + Math.floor(Math.random()*(maxRandNum - minRandNum + 1))
			elemTr.append(elemTd)
		}
		elemTable.append(elemTr)
	}
	return elemTable
}

window.onload = function () {
	document.getElementById('table').append(getTable(3, 4))
}