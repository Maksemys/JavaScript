// Вивести на екран 8 кнопок з написом “Hello”.

for (let buttonNum = 1; buttonNum <= 8; buttonNum++) {
	// document.write(`<button class="button">Hello</button><br>`)
	let target = document.querySelector('.target');
	target.insertAdjacentHTML('afterbegin', '<button class="button">Hello</button>');
	
}
