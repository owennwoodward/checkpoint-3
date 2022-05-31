import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js";


class TripsService {
    bookTrip(tripData) {
        console.log('service bookTrip', tripData);
        ProxyState.trips = [...ProxyState.trips, new Trip(tripData)]
    }
    updateTrip(newText, id) {
        let trip = ProxyState.trips.find(t => t.id == id)
        console.log('updating trip service', newText, trip);
        trip.notes = newText
        ProxyState.trips = ProxyState.trips
    }
    deleteTrip(id) {
        console.log('delete', id);
        ProxyState.trips = ProxyState.trips.filter(t => t.id != id)
    }

}

export const tripsService = new TripsService()