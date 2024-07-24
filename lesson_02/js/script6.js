// Вводимо необхідні данні
let productFirstPrice = parseInt(prompt('Введіть вартість першого товару', '0'))
let pruductFirstQuantity = parseInt(prompt('Введіть кількість першого товару', '0'))
let productSecondPrice = parseInt(prompt('Введіть вартість другого товару', '0'))
let pruductSecondQuantity = parseInt(prompt('Введіть кількість другого товару', '0'))
let productThirdPrice = parseInt(prompt('Введіть вартість третьго товару', '0'))
let pruductThirdQuantity = parseInt(prompt('Введіть кількість першого товару', '0'))

// Знаходимо результат
let resultOne = pruductFirstQuantity * productFirstPrice
let resultTwo = pruductSecondQuantity * productSecondPrice
let resultThree = pruductThirdQuantity * productThirdPrice
let totalPrice = resultOne + resultTwo + resultThree

// Виводимо результат
document.write (`
	<table style="min-width: 300px; text-align: center;">
		<tbody>
			<tr>
				<td>
					Найменування
				</td>
				<td>
					Кількість
				</td>

				<td>
					Ціна
				</td>

				<td>
					Сума
				</td>
			</tr>
			<tr>
				<td>
					Товар №1
				</td>
				<td>
					${pruductFirstQuantity}
				</td>

				<td>
					${productFirstPrice}
				</td>

				<td>
					${resultOne}
				</td>
			</tr>
			<tr>
				<td>
					Товар №2
				</td>
				<td>
					${pruductSecondQuantity}
				</td>
				<td>
					${productSecondPrice}
				</td>
				<td>
					${resultTwo}
				</td>
			</tr>
			<tr>
				<td>
					Товар №3
				</td>
				<td>
					${pruductThirdQuantity}
				</td>
				<td>
					${productThirdPrice}
				</td>
				<td>
					${resultThree}
				</td>
			</tr>
			<tr>
			<tr>
				<td>
					<b>Загальна сума</b>
				</td>
				<td>

				</td>
				<td>

				</td>
				<td>
					<b>${totalPrice}</b>
				</td>
			</tr>
		</tbody>
	</table>
	`)