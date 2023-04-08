// Get the details of an airport
// - Create an Airport class
// - Have a getInfoFromIATA() method on the Airport class which returns an airport details given its iata code
// - Have a method on the Airport class which returns an airport details given its icao code
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
  async getInfoFromIATA(city) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "248ce9b3e3mshcf11d11f8786caep18fd75jsn2b981f8fa9c1",
        "X-RapidAPI-Host": "airport-info.p.rapidapi.com",
      },
    };
    const baseUrl = "https://airport-info.p.rapidapi.com/airport";
    const res = await fetch(`${baseUrl}?iata=${city}`, options);
    const data = await res.json();
    return data;
  }
  async getInfoFromICAO(city) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "248ce9b3e3mshcf11d11f8786caep18fd75jsn2b981f8fa9c1",
        "X-RapidAPI-Host": "airport-info.p.rapidapi.com",
      },
    };
    const baseUrl = "https://airport-info.p.rapidapi.com/airport";
    const res = await fetch(`${baseUrl}?icao=${city}`, options);
    const data = await res.json();
    return data;
  }
}
let getDetails = new Airport();
getDetails
  .getInfoFromIATA("HYD")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
