// Вивести таблицю з одним рядком і  7 стовпцями.


document.write(`<table border="2px" ><tbody><tr>`)
for (let i = 1; i <=7; i++){
	document.write(`<td>${i}</td>`)
}
document.write(`</tr></tbody></table>`)