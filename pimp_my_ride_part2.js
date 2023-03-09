let trip = "Perdita 8 10 8"

class Trip {

    constructor(name,start,duration,price){
        this.name = name,
        this.start = start,
        this.duration = duration,
        this.price = price
    }
}

function parseTrip(trip) {
    let trip_object = new Trip()
    let trip_split = trip.split(' ')

    trip_object.name = trip_split[0]
    trip_object.start = parseInt(trip_split[1])
    trip_object.duration = parseInt(trip_split[2])
    trip_object.price = parseInt(trip_split[3])

    console.log(trip_object)
    console.log(trip_object.name)
    console.log(trip_object.start)
    console.log(trip_object.duration)
    console.log(trip_object.price)
}

parseTrip(trip)