function callAPI(address){
  $.ajax({
    method: 'GET',
    url: `https://www.googleapis.com/civicinfo/v2/representatives?address=10001&key=AIzaSyDk5sk3q7VI2FSxfSR2lZw8V-pduLf0N_A`
  }).done(function(response) {
    console.log(response)
  })
}

callAPI('10001')
