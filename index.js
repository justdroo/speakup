function representativesAdapter(){
  const address = $("#address").val()
  $.get(`https://www.googleapis.com/civicinfo/v2/representatives?address=${address}&key=${APIKey}`,
  data => {
    const template = Handlebars.compile($('#results-template').html())
    $('#results').html(template(data))
  }).fail(error => {
    displayError()
  })
}

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

// function searchRepositories() {
//   const searchTerms = $('#searchTerms').val()
//   $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
//       const template = Handlebars.compile($('#results-template').html())
//       $('#results').html(template(data))
//     }).fail(error => {
//       displayError()
//     })
// }


// $(function(){
//   $('form').on('submit', function(event){
//     event.preventDefault()
//     let address = $('#address').val()
//     representativesAdapter(address).done(function() {
//       $('#results').html = (`<img src='${artist.imageUrl}' />`)
//     })
//   })
// }
