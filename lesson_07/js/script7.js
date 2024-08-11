// Задача 6. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).

function createTable(trNum = 3, tdNum = 5, text = "hi" ) {
	let Number = 1
	document.write(`<table border="2px"><tbody>`)
		for (let trTable = 1; trTable <= trNum; trTable++){
			document.write(`<tr>`)
			for (let tdTable = 1; tdTable <= tdNum; tdTable++) {
				document.write(`<td>${text}</td>`)
			}
			document.write(`</tr>`)
		}
	document.write(`</tbody></table>`)
}

let rows = parseFloat(prompt('Введіть кількість рядків'))
let columns = parseFloat(prompt('Введіть кількість стовбців'))
let text = prompt('Введіть текст')

createTable(rows, columns, text)


