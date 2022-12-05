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
    async getInfoFromIATA(code) {
        
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd1dd18b801mshac813251f1cb31cp1950bdjsnffac2a264649',
                'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
            },
        };
        
        let res = await fetch(`https://airport-info.p.rapidapi.com/airport?iata=${code}`, options)
        return await res.json()
    }
    
    
    async getInfoFromICAO(code) {
        
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd1dd18b801mshac813251f1cb31cp1950bdjsnffac2a264649',
                'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
            },
        };
        
        let res = await fetch(`https://airport-info.p.rapidapi.com/airport?icao=${code}`, options)
        return await res.json()
    }
}


document.getElementById('btn').addEventListener('click', async () => {
    let airport = new Airport()
    let iata = document.getElementById('iata').value
    let icao = document.getElementById('icao').value
    if(iata === '' && icao === '') {
        alert("Enter IATA/ICAO code to get airport data.")
        return;
    }
    if(iata) {
        console.log(await airport.getInfoFromIATA(iata))
    }
    if(icao) {
        console.log(await airport.getInfoFromICAO(icao))
    }
    
})