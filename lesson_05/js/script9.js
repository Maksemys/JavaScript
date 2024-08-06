// Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком
let tdNumber = 1

document.write(`<div style="display:flex; gap:60px; padding:20px;">`)
for (let tableNumber = 1; tableNumber <= 3; tableNumber++) {
	document.write(`<table border="2px" style="min-width:150px; text-align:center;"><tbody>`)
		for (let trTable = 1; trTable <= 3; trTable++){
			document.write(`<tr>`)
			for (let tdTable = 1; tdTable <=3; tdTable++) {
				document.write(`<td>${tdNumber++}</td>`)
			}
			document.write(`</tr>`)
		}
	document.write(`</tbody></table>`)
}
document.write(`</div>`)
