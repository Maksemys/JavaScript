// Задача 9. Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>))

function showBanner(imageBan, titleBan, linkBan){
	document.write(`<div class="bunner">
		<a href=${linkBan} class="link" target="_blank"><img src=${imageBan} alt="Bunner"></a>
		<h2 class="title">${titleBan}</h2>
		</div>`)
}

const imageBan = "../img/bunner.jpg"
const titleBan = "2024"
const linkBan = "https://www.google.com.ua/"

showBanner(imageBan, titleBan, linkBan)

