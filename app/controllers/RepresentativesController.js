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
    $('#results').hide().slideDown(2000)
  }).done(function(){
    $('.contact').on('submit', function(){
    event.preventDefault()
    initiateMessage(this)
  })
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

function renderPage(repList) {
  $('#results').empty().append(repList.map(function(rep) {
    return `<div class="row rowFormat darkBox">
      <div class="col-lg-2 col-md-6 col-sm-6">
        <img src=${rep.photo} class="img-responsive img-rounded">
      </div>

      <div class="col-lg-2 col-md-6 col-sm-6">
        <h4>${rep.title}</h4>
        <h3>${rep.name}</h3>
        <p>${rep.party}</p>
      </div>

      <div class="col-lg-2 rightSpaceM">
         <h4>Phone:<h4>
         <p>${rep.phone.join("<br>")}</p>
      </div>

      <div class="col-lg-2">
         <h4>Emails:</h4>
        <p>${rep.email.join("<br>")}</p>
      </div>

      <div class="col-lg-1">
        <h4>Twitter:</h4>
        <p><a href="https://twitter.com/${rep.twitter}" target="_blank" class="twitter">@${rep.twitter}</a></p>
      </div>

      <div id ="${rep.id}" class="col-lg-2 leftSpaceL text-right">
        <form class='contact' action="#" data-id="${rep.id}">

          <div class="form-group">
            <select name="issues">
              <option value="0">Select Issue</option>
            </select>
          </div>

          <div class="form-group">
            <select name="stance">
              <option value="0">Select Stance</option>
              <option value="pro">Pro</option>
              <option value="against">Against</option>
            </select>
          </div>

          <div class="form-group">
            <select name="method">
              <option value="0">Select Tweet or Email</option>
              <option value="tweet">Tweet Them!</option>
              <option value="email">Email Them!</option>
            </select>
          </div>

          <input type="submit" value="Submit" class="btn btn-success">

        </form>
      </div>
    </div>`
  }).join(" "))
}
