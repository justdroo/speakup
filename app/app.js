function renderRepresentatives(formValue){
  address = document.getElementById('address').value
  repList = CivicAdapter.newRequest(address)

  resultsDropdown = new Results(repList)
  resultsDropdown.render()
}
