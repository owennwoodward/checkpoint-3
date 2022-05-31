import { Trip } from "./Models/Trip.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/Trip').Trip[]} */
  trips = [
    new Trip({
      name: 'Miami',
      date: '5/23/22',
      notes: 'Someone feed the dog',
      days: 32,
    }),
    new Trip({
      name: 'Florida',
      date: '5/22/22',
      notes: 'My feet stink',
      days: 38,
    })
  ]
  /** @type {import('./Models/Reservation').Reservation[]} */
  reservations = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
