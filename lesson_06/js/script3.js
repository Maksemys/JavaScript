// Відобразити трикутник за допомогою символів «о»

document.write(`<div class="container">`)
for (let stringIndex = 1; stringIndex <= 12; stringIndex++) {
	document.write(`<div class="item">`)
	for(let j = stringIndex; j <= 12; j++ ){
		let result = 'o'
		document.write(`${result}`)
	}
	document.write(`</div>`)
}
document.write(`</div>`)
