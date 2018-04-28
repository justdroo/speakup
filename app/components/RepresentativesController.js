function renderPage(repList) {

  $('#results').empty().append(repList.map(function(rep) {

    if (rep.twitter == "No Twitter listed"){
      var twitterLink = `<p>${rep.twitter}</p>`
    } else {
      var twitterLink = `<p><a href="https://twitter.com/${rep.twitter}" target="_blank" class="twitter">${rep.twitter}</a></p>`
    }

    return `<div class="row rowFormat darkBox">
      <figure class="col-lg-2 col-md-6 col-sm-6">
        <img src=${rep.photo} class="img-responsive img-circle">
      </figure>

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
        ${twitterLink}
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
            <select name="method" class="btn btn-default dropdown-toggle">
              <option value="0">Select Tweet or Email</option>
              <option value="tweet">Tweet Them!</option>
              <option value="email">Email Them!</option>
            </select>
          </div>

          <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-bullhorn", aria-hidden="true"></span> Contact Now</button>

        </form>
      </div>
    </div>`
  }).join(" "))
}
