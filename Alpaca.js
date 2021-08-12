import selection from './selection.json'

class Alpaca {
  constructor() {
    this.hair = 'default'
    this.ears = 'default'
    this.eyes = 'default'
    this.mouth = 'default'
    this.neck = 'default'
    this.leg = 'default'
    this.accessories = 'headphone'
    this.backgrounds = 'blue50'
    return new Proxy(this, {
      get: (object, key) => {
        if (!object[key]) return
        return object[key]
      },
      set: (object, prop, value, proxy) => {
        if (!selection[prop].includes(value)) {
          throw new TypeError('The value not include in options.')
        }
        object[prop] = value
        return true
      }
    })
  }

  get allStyles () {
    return this
  }

  randomStyles () {
    for (const prop of Object.keys(selection)) {
      this[prop] = selection[prop][~~(Math.random() * selection[prop].length)]
    }
  }
}

export default new Alpaca()
