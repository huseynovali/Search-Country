let InputCountry = document.getElementById("Country");
let Form = document.getElementById("Form");
let Container = document.querySelector(".showCountry");
let country = new AjaxCountry();
eventListeners();
function eventListeners() {
  Form.addEventListener("submit", formValidationController);
}

function formValidationController(e) {
  let Input = InputCountry.value.trim();
  if (Input === "") {
    alert("pls insert input !");
  } else {
    country.get(Input);
    clearInput(InputCountry);
  }
  e.preventDefault();
}

function clearInput(paramsIn) {
  paramsIn.value !== "" ? (paramsIn.value = "") : null;
}

function getCountry(response) {
  let [language] = response.languages;
  let [Currencie] = response.currencies;
  let [callingCode] = response.callingCodes;
  console.log(response);
  Container.innerHTML = `
  <div class="countryName">
    <h1>${response.name}</h1>
  </div>
  <div class="flag">
  <img src=${response.flag} >
  </div>
  <div class="countryAbout">
      <p>Capital : ${response.capital}</p>
      <p>Official languages : ${language.name}</p>
      <p>Population : ${response.population}</p>
      <p>Region : ${response.region}</p>
      <p>Currencies : ${Currencie.code}</p>
      <p>Calling Codes : +${callingCode}</p>
  </div>
`;
}
