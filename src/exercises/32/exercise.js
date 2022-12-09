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
  async getInfoFromIATA(IATAcode) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "00f1f0b8femsh3ac84db90091267p1abf61jsn5a72a6ac83dd",
        "X-RapidAPI-Host": "airport-info.p.rapidapi.com",
      },
    };
    let response = await fetch(
      `https://airport-info.p.rapidapi.com/airport?iata=${IATAcode}`,
      options
    );
    return await response.json();

    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error("error"));
  }
  async getInfoFromICAO(ICAOCode) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "00f1f0b8femsh3ac84db90091267p1abf61jsn5a72a6ac83dd",
        "X-RapidAPI-Host": "airport-info.p.rapidapi.com",
      },
    };

    let response = await fetch(
      `https://airport-info.p.rapidapi.com/airport?icao=${ICAOCode}`,
      options
    );
    return await response.json();
  }
}

let button = document.querySelector("#enter");
button.addEventListener("click", async () => {
  let obj = new Airport();
  var Iata = document.getElementById("IATAText").value;
  var Icao = document.getElementById("ICAOText").value;
  if (Iata === "" && Icao === "") {
    alert("enter any one text feild");
    return;
  }
  if (Iata) {
    console.log(obj.getInfoFromIATA(Iata));
  } else {
    console.log(obj.getInfoFromICAO(Icao));
  }
});
