import selection from './selection.json'
import alpaca from './Alpaca.js'

let accessoryState = 'neck'
const panel = document.createElement('div')

panel.className = 'panel'

const accessoryElem = accessory()
const styleElem = style()

changeAccessory(accessoryState)

panel.appendChild(accessoryElem)
panel.appendChild(styleElem)

export default panel

// initial accessory panel DOM element
function accessory () {
  const accessory = document.createElement('section')

  accessory.className = 'accessories'
  accessory.innerHTML = '<h4 class="title">Accessorize the alpaca\'s</h4>'

  accessory.addEventListener('click', event => {
    const { target } = event
    if (target.tagName === 'INPUT') {
      changeAccessory(target.id)
    }
  })

  Object.keys(selection).reverse().forEach(key => {
    accessory.innerHTML += optionButton(key, accessoryState)
  })
  return accessory
}

// initial style panel
function style () {
  const style = document.createElement('section')

  style.className = 'style'
  style.innerHTML = '<h4 class="title">style</h4>'

  style.addEventListener('click', event => {
    const { target } = event
    if (target.tagName !== 'INPUT') return false
    alpaca[accessoryState] = target.id
  })

  style.renderOptions = (key) => {
    const content = selection[key].map(style => {
      return optionButton(style, alpaca[key])
    }).join('')
    style.innerHTML = '<h4 class="title">style</h4>' + content
  }

  return style
}

function optionButton (elem, checkItem) {
  const isSelected = elem === checkItem ? 'checked' : ''
  return `<div>
          <input type="radio" name="${checkItem}" id="${elem}" ${isSelected}>
          <label for="${elem}" class="btn">${elem}</label>
        </div>`
}

function changeAccessory (prop) {
  accessoryState = prop
  styleElem.renderOptions(prop)
}
