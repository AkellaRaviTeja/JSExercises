// Get the details of an airport
// - Create an Airport class
// - Have a getInfoFromIATA() method on the Airport class which returns an airport details given its iata code
// - Have a getInfoFromICAO() method on the Airport class which returns an airport details given its icao code
// - Use Promises for async calls.
// - Use the following API : https://rapidapi.com/Active-api/api/airport-info

// Example :

// Airport.getInfoFromIATA("HYD")
// Airport.getInfoFromICAO("HYD")

// Returns
/*
{
    "id": 3081,
    "iata": "HYD",
    "icao": "VOHS",
    "name": "Rajiv Gandhi International Airport",
    "location": "Hyderabad, Telangana, India",
    "street_number": "",
    "street": "",
    "city": "Hyderabad",
    "county": "Ranga Reddy",
    "state": "Telangana",
    "country_iso": "IN",
    "country": "India",
    "postal_code": "500409",
    "phone": "+91 40 6654 6370",
    "latitude": 17.240263,
    "longitude": 78.42938,
    "uct": 330,
    "website": "http://www.hyderabad.aero/"
}


*/

class Airport{
    constructor(){}
    async getInfoFromIATA(iata) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ed5b223a5bmshf6082bda638c5e7p15d577jsn471e57cbe725',
                'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
            }
        };
        
        let f = await fetch(`https://airport-info.p.rapidapi.com/airport?iata=${iata}`, options)
        let result = await f.json()
        return result
        
    }
    async getInfoFromICAO(icao) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ed5b223a5bmshf6082bda638c5e7p15d577jsn471e57cbe725',
                'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
            }
        };
        
        let f = await fetch(`https://airport-info.p.rapidapi.com/airport?iata=${icao}`, options)
        let result = await f.json()
        return result
    }
}

async function display() {
    airport = new Airport()
    console.log(await airport.getInfoFromIATA("HYD"))
    console.log( await airport.getInfoFromICAO("HYD"))
}

display()
