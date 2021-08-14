import selection from './selection.json'
import alpaca from './Alpaca.js'

let accessoryState = 'neck'
const panel = document.createElement('div')

panel.className = 'panel'

const accessoryElem = accessory()
const styleElem = style()

panel.appendChild(accessoryElem)
panel.appendChild(styleElem)

export default panel

function accessory () {
  const accessory = document.createElement('section')

  accessory.id = 'accessories'
  accessory.innerHTML = '<h4 class="title">Accessorize the alpaca\'s</h4>'

  accessory.addEventListener('click', event => {
    const { target } = event
    if (target.tagName === 'BUTTON') {
      changeAccessory(target.innerText.toLowerCase())
    }
  })

  Object.keys(selection).reverse().forEach(key => {
    accessory.innerHTML += `<button class="btn">${key}</button>`
  })
  return accessory
}

function style () {
  const style = document.createElement('section')

  style.id = 'style'
  style.innerHTML = '<h4 class="title">style</h4>'

  style.addEventListener('click', event => {
    const { target } = event
    if (target.tagName !== 'INPUT') return false
    alpaca[accessoryState] = target.id
  })

  style.renderOptions = (key) => {
    const content = selection[key].map(style => {
      const isSelected = style === alpaca[key] ? 'checked' : ''
      return `<div>
          <input type="radio" name="options" id="${style}" ${isSelected}>
          <label for="${style}" class="btn">${style}</label>
        </div>`
    }).join('')
    style.innerHTML = '<h4 class="title">style</h4>' + content
  }

  return style
}

function changeAccessory (prop) {
  accessoryState = prop
  styleElem.renderOptions(prop)
}
