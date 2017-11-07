let button = document.querySelector("button");
button.addEventListener("click", function() {
  fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(json => showData(json));
});

function showData(json) {
  console.log(json.results[0])
  const person = json.results[0].name
  const nameJson = `${person.title.slice(0, 1).toUpperCase()}${person.title.slice(1)} ${person.first} ${person.last}`;
  const nameResults = document.querySelector("#fullname");
  nameResults.append(nameJson);

  const emailJson = json.results[0].email;
  const emailResults = document.querySelector("#email");
  emailResults.append(emailJson);

  const locationJson = json.results[0].location.street;
  const locationResults = document.querySelector("#street");
  locationResults.append(locationJson);

  const cityJson = json.results[0].location.city;
  const cityResults = document.querySelector("#city");
  cityResults.append(cityJson);

  const stateJson = json.results[0].location.state;
  const stateResults = document.querySelector("#state");
  stateResults.append(stateJson);

  const postcodeJson = json.results[0].location.postcode;
  const postcodeResults = document.querySelector("#postcode");
  postcodeResults.append(postcodeJson);

  const phoneJson = json.results[0].phone;
  const phoneResults = document.querySelector("#phone");
  phoneResults.append(phoneJson);

  const cellJson = json.results[0].cell;
  const cellResults = document.querySelector("#cell");
  cellResults.append(cellJson);

  const birthdateJson = json.results[0].dob;
  const birthdateResults = document.querySelector("#date_of_birth");
  birthdateResults.append(birthdateJson);
}
