import mergeImages from 'merge-images'
import selection from './selection.json'
import { styleElem } from './options.js'

class Alpaca {
  constructor () {
    this.backgrounds = 'blue50'
    this.ears = 'default'
    this.neck = 'default'
    this.hair = 'default'
    this.accessories = 'headphone'
    this.nose = 'nose'
    this.eyes = 'default'
    this.leg = 'default'
    this.mouth = 'default'
    return new Proxy(this, {
      get: (object, key) => {
        if (!object[key]) return
        return object[key]
      },
      set: async (object, prop, value, proxy) => {
        if (!selection[prop].includes(value)) {
          throw new TypeError('The value not include in options.')
        }
        object[prop] = value
        const src = await object.imagePreview()
        const preview = document.querySelector('img')
        const download = document.querySelector('a.footer-btn')
        preview.src = src
        download.href = src
        return true
      }
    })
  }

  get allStyles () {
    return Object.entries(this).map(([accessorize, style]) => {
      return `/alpaca/${accessorize}/${style}.png`
    })
  }

  randomStyles () {
    for (const prop of Object.keys(selection)) {
      this[prop] = selection[prop][~~(Math.random() * selection[prop].length)]
    }
    styleElem.renderOptions()
  }

  imagePreview () {
    return mergeImages(this.allStyles).then(b64 => b64)
  }
}

export default new Alpaca()
