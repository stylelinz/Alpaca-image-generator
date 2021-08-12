import selection from './selection.json'
import alpaca from './Alpaca.js'

const panel = document.createElement('div')
const categories = document.createElement('div')
const options = document.createElement('div')
panel.id = 'panel'
categories.id = 'categories'
options.id = 'options'

Object.keys(selection).forEach(key => {
  categories.innerHTML += `<button class="btn">${key}</button>`
})

categories.addEventListener('click', event => {
  const { target } = event
  if (target.tagName === 'BUTTON') {
    renderOptions(target.innerText)
  }
})

panel.appendChild(categories)
panel.appendChild(options)

export default panel

function renderOptions (prop) {
  let content = ''
  selection[prop].forEach(option => {
    const isSelected = option === alpaca[prop] ? 'checked' : ''
    content +=
      `<input type="radio" name="options" id="${option}" ${isSelected}>
      <label for="${option}" class="button-label">${option}</label>`
  })
  options.innerHTML = content
}
