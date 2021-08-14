import './style.css'
import panel from './options.js'
import alpaca from './Alpaca.js'

const container = document.querySelector('.container')
container.appendChild(panel)

const preview = document.querySelector('img')

alpaca.imagePreview().then(image => {
  preview.src = image
})

const randomBtn = document.querySelector('.random')

randomBtn.addEventListener('click', () => {
  alpaca.randomStyles()
})
