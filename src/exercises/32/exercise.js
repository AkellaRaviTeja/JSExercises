// Create a currency convertor
// - Create a CurrencyConvertor class
// - Use Promises to achieve this.
// - Use the following API : https://rapidapi.com/warting/api/currency-converter/

// Example :

// CurrencyConvertor.convert(1,"USD","INR") should return ~83.5

// Declaration of convert
let request = () => {
  return new Promise((resolve, reject) => {
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
        resolve(this.responseText);
      } else {
        reject(this.readyState);
      }
    });

    xhr.open("GET", "https://airport-info.p.rapidapi.com/airport?iata=hyd");
    xhr.setRequestHeader(
      "X-RapidAPI-Key",
      "cb405502e6msh0c7375c09c15a26p118a01jsn421fac85451a"
    );
    xhr.setRequestHeader("X-RapidAPI-Host", "airport-info.p.rapidapi.com");

    xhr.send(data);
  });
};
request().then((data) => {
  console.log(JSON.parse(data));
});
