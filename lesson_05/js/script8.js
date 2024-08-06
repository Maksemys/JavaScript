// Вивести таблицю з 3 рядків і 7 стовпців

let tdNumber = 1

document.write(`<table border="2px" style="width:200px; text-align:center;"><tbody>`)

for (let trTable = 1; trTable <= 3; trTable++){
	document.write(`<tr>`)
	for (let tdTable = 1; tdTable <=3; tdTable++) {
		document.write(`<td>${tdNumber++}</td>`)
	}
	document.write(`</tr>`)
}

document.write(`</tbody></table>`)


