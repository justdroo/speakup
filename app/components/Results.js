const Results = class {
  constructor(repList) {
    this.repList = repList
  }

  render() {
    let cards = this.repList.map(rep =>
      new Card(rep)
    );

    let cardsDiv = document.createElement('div')
      cardsDiv.classList.add('cards')

    cards.map(card => cardsDiv.appendChild(card.render()));

    let fragment = document.createDocumentFragment();
    let resultsDiv = document.getElementById('results');

    fragment.appendChild(cardsDiv)
    resultsDiv.appendChild(fragment)
  }
}
