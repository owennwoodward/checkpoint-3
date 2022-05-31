import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"


export class Trip {
    constructor(tripData) {
        this.id = tripData.id || generateId()
        this.name = tripData.name,
            this.date = new Date(tripData.date),
            this.days = tripData.days,
            this.notes = tripData.notes
    }

    get Template() {
        return `
    <div class="col-6 my-3">
      <div class="card p-3 shadow" bg-dark>
        <h4 class="d-flex justify-content-between">${this.name} <span>Trip days: ${this.days}</span><i
            class="mdi mdi-close selectable" onclick="app.tripsController.deleteTrip('${this.id}')"></i></h4>
            <h5 class="text-muted"> ${this.date.toDateString()}</h5>
            ${this.Reservations}
            <form class="reservation-form" onsubmit="app.reservationsController.addReservation('${this.id}')">
            <select name="type" id="type">
              <option value="Gas">⛽Gas</option>
              <option value="Food">🍔Food</option>
              <option value="Hotel">🏨 Hotel</option>
              <option value="Other">😎 Etc</option>
            </select>
            <input type="text" name="name" id="name" placeholder="Name">
            <input type="text" name="confirmation" id="confirmation" placeholder="Confirmation">
            <input type="text" name="date" id="date" placeholder="Date">
            <input type="number" name="price" id="price" placeholder="price">
            <button class="btn btn-success" title="add reservation"> Click to Submit </button>
          </form>
          <textarea onblur="app.tripsController.updateTrip('${this.id}')" class="border-0"> ${this.notes}</textarea>
        <h4 class="text-end">Total : $${this.Total}</h4>
      </div>
    </div>
    `
    }

    get Reservations() {
        let reservations = ProxyState.reservations.filter(re => re.tripId == this.id)
        let template = ''
        reservations.forEach(re => template += re.Template)
        return template
    }

    get Total() {
        let reservations = ProxyState.reservations.filter(re => re.tripId == this.id)
        let subTotal = 0
        reservations.forEach(re => subTotal += parseInt(re.price))
        return subTotal
    }
}