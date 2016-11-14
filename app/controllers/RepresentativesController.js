const rootURL = "https://www.googleapis.com/civicinfo/v2/representatives?address="

function representativesAdapter(){
  const address = $("#address").val().split(" ").join("+")
  const searchURL = rootURL + address + "&key=" + APIKey
  event.preventDefault()
  return $.ajax({
    method: "GET",
    url: searchURL
  }).done(parseRepresentatives, formSetup)
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

function renderPage(repList) {
  $('#results').empty().append(repList.map(function(rep) {
    return `<div class="row">
      <div class="col-lg-2">
        <img src=${rep.photo} class="img-responsive">
      </div>

      <div class="col-lg-2">
        <h4>${rep.name}</h4> <h4>${rep.title}</h4>
        <p>${rep.party}</p>
      </div>

      <div class="col-lg-2 rightSpaceM">
        <p> Phone:<br>${rep.phone.join("<br>")}</p>
      </div>

      <div class="col-lg-2">
        <p> Emails:<br>${rep.email.join("<br>")}</p>
      </div>

      <div class="col-lg-1">
        <p>Twitter: <a href="https://twitter.com/${rep.twitter}" target="_blank">@${rep.twitter}</a></p>
      </div>

      <div class="col-lg-2">
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
  }).join(" "))
}
