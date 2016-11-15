const rootURL = "https://www.googleapis.com/civicinfo/v2/representatives?address="

function representativesAdapter(){

  const address = $("#address").val().split(" ").join("+")
  new Citizen(address)
  const searchURL = rootURL + address + "&key=" + APIKey
  event.preventDefault()

  return $.ajax({
    method: "GET",
    url: searchURL
  }).done(parseRepresentatives, formSetup).done(function(){
    $('#results').hide().slideDown(2500)
  }).done(function(){
    $('.contact').on('submit', function(){
    event.preventDefault()
    initiateMessage(this)
  })
  }).fail(function() {
    alert("Please enter a valid U.S. address.")
  })
}

function parseRepresentatives(response) {
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
  renderPage(repList)
}
