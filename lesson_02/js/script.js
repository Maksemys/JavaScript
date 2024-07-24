		// Вводимо необхідні данні
		let a = parseInt(prompt('Введіть значення a', '0'))
		let b = parseInt(prompt('Введіть значення b', '0'))
		let c = parseInt(prompt('Введіть значення c', '0'))

		// Знаходимо результат
		let s1 = a + 12 + b
		let s2 = Math.sqrt((a + b) / (2 * a))
		let s3 = Math.cbrt((a + b) * c)
		let s4 = Math.sin(a / -b)

		// Виводимо результат
		document.write(`
			<ol>
				<li>
					S<sub>1</sub> = ${s1}
				</li>
				<li>
					S<sub>2</sub> = ${s2}
				</li>
				<li>
					S<sub>3</sub> = ${s3}
				</li>
				<li>
					S<sub>4</sub> = ${s4}
				</li>
			</ol>
		`)