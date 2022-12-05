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

function getLanguages() {
    let select = document.getElementById('lang')
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', {
        method: 'GET',
        headers: {
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'd1dd18b801mshac813251f1cb31cp1950bdjsnffac2a264649',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
          }
    })
    .then(async (res) => {
        let data = await res.json()
        data.data.languages.forEach(element => {
            var opt = document.createElement('option');
            opt.value = element.language;
            opt.innerHTML = element.language;
            select.appendChild(opt);
        });
    })
}

getLanguages();

class Translator {
    async translate(sourceString, targetLanguage) {
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", sourceString);
        encodedParams.append("target", targetLanguage);
    
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': 'd1dd18b801mshac813251f1cb31cp1950bdjsnffac2a264649',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            body: encodedParams
        };
        
        let res = await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options);
        res = await res.json()
        let text = await res.data.translations[0].translatedText
        return text
    }
}


document.getElementById("btn").addEventListener('click', async() => {
    text = document.getElementById('input-text').value;
    lang = document.getElementById('lang').value;
    const translator = new Translator()
    document.getElementById('text-translate').innerHTML = await translator.translate(text, lang)
})
