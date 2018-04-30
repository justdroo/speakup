const Card = class {
  constructor(rep) {

    this.id = rep.id
    this.name = rep.name
    this.title = rep.title
    this.party = rep.party
    this.email = rep.email || "No email listed"
    this.phone = rep.phone || "No phone numbers listed"
    this.photo = rep.photo || "public/images/default.jpg"
    this.channels = rep.channels
  }

  twitter() {
      if (this.channels) {
         let twitter = this.channels.filter(channel => channel.type === "Twitter")
         if (twitter.length > 0) {
           return "@" + twitter[0].id
         } else {
           return "No Twitter listed"
         }
      } else {
        return "No Twitter listed"
      }
  }

  partyShadow() {
    if (this.party == "Democratic") {
      return "blueShadow"
    } else if (this.party == "Republican") {
      return "redShadow"
    } else {
      return "grayShadow"
    }
  }

  render() {
    let fragment = document.createDocumentFragment();

    let section = document.createElement('section')
      let partyShadow = this.partyShadow()
      section.classList.add('card', 'darkBox', partyShadow);

    let figure = document.createElement('figure')
      figure.classList.add('flex-row', 'center-content')
      let image = document.createElement('IMG')
        image.setAttribute('src', this.photo)
        image.classList.add('profileImage')
          figure.appendChild(image)

    let header = document.createElement('header')
      header.appendChild(document.createElement('h2').appendChild(document.createTextNode(this.title)))
      header.classList.add('darkerBox', 'cardTitle', 'center-content')

    let additionalDetails = document.createElement('ul')
      let nameLine = document.createElement('li')
        nameLine.appendChild(document.createTextNode(this.name))
      let partyLine = document.createElement('li')
        partyLine.appendChild(document.createTextNode(this.party + " party"))
      let emailLine = document.createElement('li')
        emailLine.appendChild(document.createTextNode(this.email))
      let phoneLine = document.createElement('li')
        phoneLine.appendChild(document.createTextNode(this.phone))
      let twitterLine = document.createElement('li')
        twitterLine.appendChild(document.createTextNode(this.twitter()))
      additionalDetails.appendChild(nameLine)
      additionalDetails.appendChild(partyLine)
      additionalDetails.appendChild(emailLine)
      additionalDetails.appendChild(phoneLine)
      additionalDetails.appendChild(twitterLine)

    section.appendChild(header)
    section.appendChild(figure)
    section.appendChild(additionalDetails)

    fragment.appendChild(section)
    return fragment
    // `<section class="card">
    //   <figure>
    //     <img src="${photo}" alt="an american flag">
    //   </figure>
    //   <header>
    //     ${title}
    //   </header>
    //   <ul>
    //     <li>${name}</li>
    //     <li>${party}</li>
    //   </ul>
    //   <button>Contact</button>
    // </section>`
  }
}
