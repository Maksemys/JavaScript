// Вивести на екран N абзаців (N вводиться користувачем) за зразком:

let numberParagraphs = parseInt(prompt('Скільки вивести абзаців?'))

document.write(`<div><style>
	div > *{margin-bottom:10px;}
	h2 {
	color: blue;
	}
	p {
	color: green;
	}
	</style>`)

for (let header = 1; header <= numberParagraphs; header++) {
	document.write(`<h2>Заголовок ${header}</h2>`)
	for (let paragraphs = 1; paragraphs <= header; paragraphs++) {
		document.write(`<p>Розділ ${header}, параграф ${paragraphs}</p>`)
		
	}
	document.write(`<hr>`)
}

document.write(`</div>`)
