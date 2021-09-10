// JavaScript source code





// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);    
}
// Calling that async function
let api_url = "https://employeedetails.free.beeceptor.com/my/api/path";
let SourceCurrency = "aud"
var TargetCurrency = "sgd.json"
let delimiter = "/"

api_url += delimiter
api_url += SourceCurrency
api_url += delimiter
api_url += TargetCurrency
getapi(api_url);

