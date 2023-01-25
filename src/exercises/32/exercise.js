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
  options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5e9a174c11msh25e8bc2b6b4f77bp1b5864jsn87f56e2753dd',
      'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
    }
  };

  getInfoFromIATA(cityCode) {

    return fetch(`https://airport-info.p.rapidapi.com/airport?iata=${cityCode}`, this.options)
      .then(response => response.json())
      .then(response => {
        return response
      })
      .catch(err => console.error(err));
  }

  getInfoFromICAO(cityCode) {

    return fetch(`https://airport-info.p.rapidapi.com/airport?icao=${cityCode}`, this.options)
      .then(response => response.json())
      .then(response => {
        return response
      })
      .catch(err => console.error(err));
  }
}

(async function (){
  const airport = new Airport();
  let res1 = await airport.getInfoFromIATA("HYD")
  let res2 = await airport.getInfoFromICAO("VOHS")
  console.log(res1)
  console.log(res2)
})()

