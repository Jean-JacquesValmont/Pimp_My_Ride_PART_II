class Trip {

    constructor(name,start,duration,price){
        this.name = name,
        this.start = start,
        this.duration = duration,
        this.price = price
        this.end
    }

    isCompatible(trip) {
		if (trip.end <= this.end) {
			return true
		} else {
			return false
		}
	}
}

let tripsToParse = [
    "Roger 0 5 10",
    "Pongo 3 7 14",
    "Perdita 8 10 8",
    "Anita 16 3 7"
]

//let trip = "Perdita 8 10 8"
array_ticket = []

function parseTrip(trip) {
    let trip_object = new Trip()
    let trip_index = trip[i]
    let trip_split = trip_index.split(' ')

    trip_object.name = trip_split[0]
    trip_object.start = parseInt(trip_split[1])
    trip_object.duration = parseInt(trip_split[2])
    trip_object.price = parseInt(trip_split[3])
    trip_object.end = trip_object.start + trip_object.duration

    array_ticket[i] = trip_object

    console.log(trip_object)
    // console.log(trip_object.name)
    // console.log(trip_object.start)
    // console.log(trip_object.duration)
    // console.log(trip_object.price)

    return array_ticket
}

function parseTrips(trips) {

    for (i = 0; i < trips.length; i++)
    {
        parseTrip(trips)
    }
    console.log(array_ticket) 
}

parseTrips(tripsToParse)

// Test de la méthode de compatibilité
let trip = new Trip("Roger", 0, 5, 10)
let anotherTrip = new Trip("Pongo", 3, 7, 14)

console.log(trip.isCompatible(anotherTrip))