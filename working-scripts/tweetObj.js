//SHOULD BE STORED AS A SERVICE OBJECT

function tweetCompilier(rep, issue, stance){
  //should take in a rep, an issue and a stance and return a link tag to send a tweet
  let position = ""
  if (stance === true) {
    position = "for"
  } else {
    position = "against"
  }

  let base = 'https://twitter.com/intent/tweet?'
  let text = `${rep.twitter}, I am ${position} ${issue}.`
  let hashtags = 'speakup,democracy'
  let via = 'speakup'

  let url = `${base}text=${text}&hashtags=${hashtags}&via=${via}`

  return `<a href = "${url}" target="_blank">Tweet Them</a>`
}
