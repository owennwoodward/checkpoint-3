import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";



class ReservationsService {
    addReservation(reservationData) {
        console.log('res services works', reservationData);
        ProxyState.reservations = [...ProxyState.reservations, new Reservation(reservationData)]
    }

    deleteReservation(id) {
        console.log('deleting reservation', id);
        ProxyState.reservations = ProxyState.reservations.filter(re => re.id != id)
    }
}

export const reservationsService = new ReservationsService()