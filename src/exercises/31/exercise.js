// Create a Translator class
// - It should have a translate method to translate a string in any language to any other target language.
// - Use fetch API to do this.
// - Use the following API to translate : https://rapidapi.com/googlecloud/api/google-translate1/
// - Understand what are locales.
// - Refer this to get the list of locales : https://www.oracle.com/java/technologies/javase/jdk8-jre8-suported-locales.html

// Example :

// Translator.translate("Hello","fr") should return "Bonjour"

// Declaration of translate
// function translate(sourceString:string, targetLanguage:string)

const options = {
  method: "GET",
  headers: {
    "Accept-Encoding": "application/gzip",
    "X-RapidAPI-Key": "00f1f0b8femsh3ac84db90091267p1abf61jsn5a72a6ac83dd",
    "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
  },
};

fetch(
  "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
  options
)
  .then((response) => response.json())
  .then((response) => {
    var opt = "";
    response.data.languages.forEach((element) => {
      opt += `<option>${element.language}</option>`;
    });
    document.querySelector("#languageTo").innerHTML = opt;
  });

class Translator {
  translate(sourceText, targetLanguage) {
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", sourceText);
    encodedParams.append("target", targetLanguage);
    encodedParams.append("source", "en");

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": "00f1f0b8femsh3ac84db90091267p1abf61jsn5a72a6ac83dd",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      body: encodedParams,
    };

    fetch(
      "https://google-translate1.p.rapidapi.com/language/translate/v2",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        document.querySelector("#textAreaOutput").innerHTML =
          response.data.translations[0].translatedText;
      })
      .catch((err) => console.error(err));
  }
}

let dummy = document.querySelector("#enter");
dummy.addEventListener("click", () => {
  text = document.getElementById("textAreaInput").value;
  lang = document.getElementById("languageTo").value;
  const translator = new Translator();
  translator.translate(text, lang);
});
