import { ProxyState } from "../AppState.js";
import { reservationsService } from "../Services/ReservationsService.js";
import { Pop } from "../Utils/Pop.js";

export class ReservationsController {
    constructor() {
        console.log('reservation controller works', ProxyState.reservations);
    }

    addReservation(tripId) {
        window.event.preventDefault()
        // let reservations = ProxyState.reservations.sort((a,b)=> a.date - b.date)
        console.log('Adding to trip', tripId);
        let form = window.event.target
        let reservationData = {
            tripId: tripId,
            type: form.type.value,
            name: form.name.value,
            confirmation: form.confirmation.value,
            date: form.date.value,
            price: form.price.value
        }
        console.log(reservationData);
        reservationsService.addReservation(reservationData)
    }

    async deleteReservation(id) {
        if (await Pop.confirm('Delete it dummy')) {
            reservationsService.deleteReservation(id)
        }
    }
}