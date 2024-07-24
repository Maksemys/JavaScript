// Вводимо необхідні данні
let a = parseInt(prompt('Введіть значення a', '0'))
let b = parseInt(prompt('Введіть значення b', '0'))

// Знаходимо результат
s1 = a + b
s2 = a * b
s3 = a / b

// Виводимо результат
document.write (`
		<table border="1px">
			<thead>
				<tr>
					<td>
						Задача
					</td>
					<td>
						Результат
					</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						Сума
					</td>
					<td>
						${s1}
					</td>
				</tr>
				<tr>
					<td>
						Добуток
					</td>
					<td>
						${s2}
					</td>
				</tr>
				<tr>
					<td>
						Частка
					</td>
					<td>
						${s3}
					</td>
				</tr>
			</tbody>
		</table>
	`)