function callAPI(address){
  $.ajax({
    method: 'GET',
    url: `https://www.googleapis.com/civicinfo/v2/representatives?address=10001&key=APIKEY`
  }).done(function(response) {
    console.log(response)
  })
}

callAPI('10001')
