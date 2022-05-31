import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";
import { Pop } from "../Utils/Pop.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";

function _drawTrips() {
    let trips = ProxyState.trips.sort((a, b) => a.date - b.date)
    let template = ''
    trips.forEach(t => template += t.Template)
    document.getElementById('trips').innerHTML = template
}


//try to get reservations to sort using above line?


export class TripsController {
    constructor() {
        console.log('trips cont works', ProxyState.trips);
        ProxyState.on('trips', _drawTrips)
        ProxyState.on('reservations', _drawTrips)
        ProxyState.on('trips', saveState)
        ProxyState.on('reservations', saveState)
        loadState()
        _drawTrips()
    }

    bookTrip() {
        window.event.preventDefault()
        console.log('book trip');
        let form = window.event.target
        let tripData = {
            name: form.name.value,
            days: form.days.value,
            date: form.date.value,
            notes: form.notes.value
        }
        console.log('tripData', tripData);
        tripsService.bookTrip(tripData)
    }

    updateTrip(id) {
        let textarea = window.event.target
        console.log(textarea.value, id);
        tripsService.updateTrip(textarea.value, id)
        Pop.toast('Trip updated good for you!')
    }


    deleteTrip(id) {
        if (confirm('its gone forever dummy')) {
            tripsService.deleteTrip(id)
        }
    }
}