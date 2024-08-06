// Вивести таблицю з 3 рядків і 7 стовпців

document.write(`<table border="2px"><tbody>`)

for (let trTable = 1; trTable <= 3; trTable++){
	document.write(`<tr>`)
	for (let tdTable = 1; tdTable <=7; tdTable++) {
		document.write(`<td>${tdTable}</td>`)
	}
	document.write(`</tr>`)
}

document.write(`</tbody></table>`)


