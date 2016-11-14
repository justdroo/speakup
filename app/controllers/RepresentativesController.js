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
  }).done(function(){
    formSetup();
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
    return `<div class="row">
      <div class="col-lg-2">
        <img src=${rep.photo} class="img-responsive">
      </div>

      <div class="col-lg-2">
        <h4>${rep.name} - ${rep.title}</h4>
      </div>

      <div class="col-lg-1">
        <p>${rep.party}</p>
      </div>

      <div class="col-lg-1">
        <p> Phone:<br>${rep.phone.join("<br>")}</p>
      </div>

      <div class="col-lg-1">
        <p> Emails:<br>${rep.email.join("<br>")}</p>
      </div>

      <div class="col-lg-1">
        <p>Twitter: ${rep.twitter}</p>
      </div>

      <div class="col-lg-3">
        <form action="#" data-id="${rep.twitter}">

          <div class="form-group">
            <select name="issues">
              <option value="0">Select Issue</option>
            </select>
          </div>

          <div class="form-group">
            <select>
              <option value="0">Select Stance</option>
              <option value="pro">Pro</option>
              <option value="against">Against</option>
            </select>
          </div>

          <input type="submit" value="Submit">

        </form>
      </div>

    </div>`
  }).join(" ")
  $("#results").append(display)
}

// function displayError() {
//   $('#errors').html("I'm sorry, there's been an error. Please try again.")
// }
