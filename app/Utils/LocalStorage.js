import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";
import { Trip } from "../Models/Trip.js";





export function saveState() {
    console.log('save');
    let data = {
        trips: ProxyState.trips,
        reservations: ProxyState.reservations
    }
    window.localStorage.setItem('checkpoint-3', JSON.stringify(data))
}

export function loadState() {
    console.log('loading');
    let data = window.localStorage.getItem('checkpoint-3')
    if (data) {
        let obj = JSON.parse(data)
        ProxyState.trips = obj.trips.map(tp => new Trip(tp))
        ProxyState.reservations = obj.reservations.map(rez => new Reservation(rez))
    }
}