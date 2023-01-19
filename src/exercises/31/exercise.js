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


class Translator {
   constructor() { }
   async translate(sourceString, targetLanguage) {
      const encodedParams = new URLSearchParams();
      encodedParams.append("q", sourceString);
      encodedParams.append("target", targetLanguage);
      encodedParams.append("source", "en");

      const options = {
         method: 'POST',
         headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'ed5b223a5bmshf6082bda638c5e7p15d577jsn471e57cbe725',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
         },
         body: encodedParams
      };

      let f = await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
      let res = await f.json()
      return res.data.translations[0].translatedText
      
   }
}
async function display() {
   T = new Translator()
   console.log(await T.translate("Hello", "fr"));
}

display()