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

class Translator  {
  async translate(translateString , targetLanguage) { 
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", translateString);
    encodedParams.append("target", targetLanguage);
    encodedParams.append("source", "en");

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '5e9a174c11msh25e8bc2b6b4f77bp1b5864jsn87f56e2753dd',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: encodedParams
    };
    let res = await (await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)).json()
    return res.data.translations[0].translatedText

  }
}

async function Ins () {
  const translator = new Translator();
  let k = await translator.translate("Hello","fr")
  console.log(k)
} 
Ins()

