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
class Airport {
    async getInfoFromIATA(iata) {
        // Your code here
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '26e8a0f98fmshdcd189ad8bdba07p129d5djsnf0c06a093d31',
                'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
            }
        };
        const res = await fetch(`https://airport-info.p.rapidapi.com/airport?iata=${iata}`, options);
        const data = await res.json();
        return data
    }

    async getInfoFromICAO(icao) {
        // Your code here
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '26e8a0f98fmshdcd189ad8bdba07p129d5djsnf0c06a093d31',
                'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
            }
        };

        fetch(`https://airport-info.p.rapidapi.com/airport?icao=${icao}`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
}
let temp = new Airport()
temp.getInfoFromIATA("hyd").then(response => console.log(response))
    .catch(err => console.error(err));
temp.getInfoFromICAO("hyd");