// Відобразити трикутник за допомогою символів «о»

document.write(`<div class="container">`)
for (let stringIndex = 7; stringIndex >= 1; stringIndex--) {
	document.write(`<div class="item">`)
	for(let j = stringIndex; j <= 7; j++ ){
		let result = 'o'
		document.write(`${result}`)
	}
	document.write(`</div>`)
}
document.write(`</div>`)
