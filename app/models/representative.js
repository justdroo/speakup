const store = {representatives: [], citizens:[], messages: [], issues: {}}

const Representative = function(){
  let id = 0

  return class Representative {
    constructor(office, official) {
      this.id = ++id
      this.name = official.name
      this.title = office.name
      this.party = official.party
      this.email = official.email
      this.phone = official.phones[0]
      this.photo = official.photoUrl
      this.channels = official.channels
    }
  }
}()

function parseRepresentatives(response) {
  const repList = []

  response.offices.map(office => {
    const index = office.officialIndices
    if (index.length > 1) {
      index.map(i => {
        repList.push(new Representative(office, response.officials[i]))
      })
    } else {
      repList.push(new Representative(office, response.officials[index]))
    }
  })
  return repList
}
