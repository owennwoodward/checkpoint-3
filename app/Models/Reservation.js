import { generateId } from "../Utils/generateId.js";


export class Reservation {
    constructor(data) {
        this.id = data.id || generateId(),
            this.tripId = data.tripId
        this.type = data.type
        this.price = data.price
        this.name = data.name
        this.date = new Date(data.date)
        this.confirmation = data.confirmation
    }

    get Template() {
        return `
    <p class="d-flex justify-content-between"> ${this.type} <span> ${this.name}</span><span> ${this.confirmation}</span><span> ${this.date.toDateString()}</span><span>${this.price}</span>
    <i class="mdi mdi-minus selectable px-3" onclick="app.reservationsController.deleteReservation('${this.id}')"></i>
    </p>
    `
    }
}