import './style.css'
import panel from './options.js'
import alpaca from './Alpaca.js'

document.querySelector('#app').innerHTML = `
    <h1 class="title">Alpaca Generator</h1>
    <div class="container">
      <div class="preview">
        <img src="" alt="alpaca-preview">
        <div class="footer">
          <button class="footer-btn random">Random</button>
          <a class="footer-btn">Download</a>
        </div>
      </div>
    </div>
`

const container = document.querySelector('.container')
container.appendChild(panel)

const preview = document.querySelector('img')
const downloadLink = document.querySelector('a.footer-btn')

alpaca.imagePreview().then(image => {
  preview.src = image
  downloadLink.href = image
  downloadLink.download = 'my-alpaca.png'
})

const randomBtn = document.querySelector('.random')

randomBtn.addEventListener('click', () => {
  alpaca.randomStyles()
})
