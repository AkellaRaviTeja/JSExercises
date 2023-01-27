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

class Translator{
  translate(inputString,targetLanguage,sourceLanguage="en") {
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", inputString);
    encodedParams.append("target", targetLanguage);
    encodedParams.append("source", sourceLanguage);
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '668e5ef8a4msh174236d9df7dce4p121bc7jsncd08a03c8072',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      body: encodedParams
    };
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
    .then(response => response.json())
    .then(response => console.log(response.data.translations[0].translatedText))
    .catch(err => console.error(err));
  }
}
let translator=new Translator();
translator.translate("Hello","fr");