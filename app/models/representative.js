const store = {representatives: [], users:[]}

class Representative {
  constructor(name, title, party, email, phone, photo) {
    this.name = name
    this.title = title
    this.party = party
    this.email = email || ["No email listed"]
    this.phone = phone || ["No phone numbers listed"]
    this.photo = photo || "public/images/default.jpg"
    // this.issues = {pro: [], against: []}
    store.representatives.push(this)
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
     else {
       rep.twitter = "No Twitter listed"
     }
   }

   return rep
}
