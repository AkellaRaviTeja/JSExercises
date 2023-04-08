// Create a Translator class
// - It should have a translate method to translate a string in any language to any other targetLangauge language.
// - Use fetch API to do this.
// - Use the following API to translate : https://rapidapi.com/googlecloud/api/google-translate1/
// - Understand what are locales.
// - Refer this to get the list of locales : https://www.oracle.com/java/technologies/javase/jdk8-jre8-suported-locales.html

// Example :

// Translator.translate("Hello","fr") should return "Bonjour"

// Declaration of translate
// function translate(sourceString:string, targetLangaugeLanguage:string)

class Translator {
  async translate(str, targetLangauge) {
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", str);
    encodedParams.append("target", targetLangauge);

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": "248ce9b3e3mshcf11d11f8786caep18fd75jsn2b981f8fa9c1",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      body: encodedParams,
    };
    let res = await fetch(
      "https://google-translate1.p.rapidapi.com/language/translate/v2",
      options
    );
    let data = await res.json();
    return data.data.translations[0].translatedText;
  }
}
const translator = new Translator();
translator.translate("Hello", "fr")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
