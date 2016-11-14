const store = []

class Representative {
  constructor(name, title, party, email, phone, photo) {
    this.name = name
    this.title = title
    this.party = party
    this.email = email
    this.phone = phone
    this.photo = photo
    this.issues = {}
    // store = [...store, this] || [this]
  }
}

function createRepresentative(office, official){
  const rep = new Representative(official.name, office.name, official.party, official.emails,
    official.phones, official.photoUrl)

  if (official.channels) {
     var twitter = official.channels.filter(channel => channel.type === "Twitter")
     if (twitter.length > 0) {
       rep.twitter = twitter[0].id
     }
   }
   
   return rep
}
