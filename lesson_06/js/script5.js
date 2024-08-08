// 0. Вивести на екран
// A B C D E 
// B C D E F 
// C D E F G 
// D E F G H 
// E F G H I

let charString = "ABCDEFGHI"
document.write(`Результат: `)
for (let rowNum = 0; rowNum < 5; rowNum++) {
	document.write(`<div>`)
	for (let char = rowNum; char < rowNum + 5; char++) {
		let string = charString.charAt(`${char}`)
		document.write(`${string} `)
		
	}
	document.write(`</div>`)
}