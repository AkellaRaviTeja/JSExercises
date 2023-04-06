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
    static translate(sourceString, targetLanguage) {
        // Your code here
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", sourceString);
        encodedParams.append("target", targetLanguage);
        encodedParams.append("source", "en");

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '26e8a0f98fmshdcd189ad8bdba07p129d5djsnf0c06a093d31',
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
Translator.translate("Hello", "fr");
