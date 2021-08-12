import './style.css'
import selection from './selection.json'
import panel from './options.js'
import alpaca from './Alpaca.js'

const app = document.querySelector('#app')
app.appendChild(panel)
console.log(alpaca.allStyles)
