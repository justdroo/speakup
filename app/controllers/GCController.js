const rootURL = "https://www.googleapis.com/civicinfo/v2/representatives?address="

function representativesAdapter(){
  const address = $("#address").val().split(" ").join("+")
  const searchURL = rootURL + address + "&key=" + APIKey
  event.preventDefault()
  return $.ajax({
    method: "GET",
    url: searchURL
  }).done(function(response) {
    displayRepresentatives(response)
    // const template = Handlebars.compile($('#results-template').html())
    // const offices = response.offices
    // template(response)
  })
}

function displayRepresentatives(response) {
  const repList = []
  response.offices.map(office => {
    const index = office.officialIndices
    if (index.length > 1) {
      index.map(i => {
        repList.push(createRepresentative(office, response.officials[i]))
      })
    } else {
      repList.push(createRepresentative(office, response.officials[index]))
    }
  })
  const display = repList.map(function(rep) {
    return `<tr>
      <td><img src=${rep.photo} width="128"></td>
      <td>${rep.name} - ${rep.title}</td>
      <td>${rep.party}</td>
      </tr>
      <tr>
      <td>Phones: ${rep.phone.join(", ")}</td>
      <td>Emails: ${rep.email}</td>
      <td>Twitter: ${rep.twitter}</td>
      </tr>`
  }).join(" ")
  $("#results").html("<tbody>" + display + "</tbody>")
}

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}
