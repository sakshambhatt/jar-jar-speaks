var textInput = document.querySelector("#txt-input");
var outputField = document.querySelector("#output");
var btnTranslate = document.querySelector("#btn-translate");

function constructUrl(text) {

    return "https://api.funtranslations.com/translate/gungan.json?text=" + text;
}

function fectchPerformer(text) {

    fetch(constructUrl(text))
    .then(function responseHandler(response) {
        return response.json();
    })
    .then(function displayOutput(json) {
        outputField.innerText = json.contents.translated;
    })
    .catch((error) => {
        console.log(error);
    });
}

btnTranslate.addEventListener("click", function clickHandler() {

    fectchPerformer(textInput.value);
});