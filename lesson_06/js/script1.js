// Вертикальну діаграму з 10 рандомними значеннями (0-100)

      document.write(`<div class="container">`)
      for (let itemIndex = 0; itemIndex < 10; itemIndex++) {
        const randNum = Math.floor(Math.random() * 101)
        document.write(
          `<div class="item" style="height: ${randNum}%">${randNum}</div>`
        )
      }
      document.write(`</div>`)
