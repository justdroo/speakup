function renderRepresentatives(){
  let address = document.getElementById('address').value
  let request = new CivicAdapter(address)
  request.getRepresentatives().done(response => {
    let repList = parseRepresentatives(response)
    let resultsDropdown = new Results(repList)
    resultsDropdown.render()
  }
  );
}
