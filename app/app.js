function renderRepresentatives(){
  event.preventDefault
  let address = document.getElementById('address').value
  let request = new CivicAdapter(address)
  let repList = request.getRepresentatives()

  let resultsDropdown = new Results(repList)
  resultsDropdown.render()
}
