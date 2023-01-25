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
    options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '668e5ef8a4msh174236d9df7dce4p121bc7jsncd08a03c8072',
            'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
        }
    }
    printInfo(codeType,code){
        fetch(`https://airport-info.p.rapidapi.com/airport?${codeType}=${code}`, this.options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
    getInfoFromIATA(code){
        this.printInfo("iata",code);
    }
    getInfoFromICAO(code){
        this.printInfo("icao",code);
    }
}

let airport=new Airport();
airport.getInfoFromIATA("HYD");
airport.getInfoFromICAO("HYD");