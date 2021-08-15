import './style.css'
import panel from './options.js'
import alpaca from './Alpaca.js'

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
