class Message{
  constructor(citizen, rep, issue){
    this.citizen = citizen,
    this.rep = rep,
    this.issue = issue,
    this.method = "tweet"
    store.messages = [...store.messages, this]
  }
}


function activate(message){
    if(store.messages.indexOf(message) === -1){
          alert("you've already contacted this representative about this issue!")
        }
    message.rep.issues[message.issue] = message.rep.issues[message.issue] || {pro: [], against: []}
    message.citizen.messages = [...message.citizen.messages, message]
    let messagePosition = message.citizen.issues[message.issue]
    debugger
    // let similarMessages = message.rep.issues[message.issue][messagePosition]

    switch (message.method) {
      case 'email':
      if(messagePosition == "pro"){
            // similarMessages = [...similarMessages, message]
            sendEmailPro(message)

            }
      else {
            // similarMessages = [...similarMessages, message]
            sendEmailAnti(message)
        }
      case 'tweet':
      if(messagePosition === "pro"){
            // similarMessages = [...similarMessages, message]
            sendTweetPro(message)
            }
      else {
            // similarMessages = [...similarMessages, message]
            sendTweetAnti(message)
        }

    }
  }

var proTweets =   {environment: "Stop the destruction of the rainforest! Now",
                  "Lil' Bub 4 Prez": "You have to make lilbub president",
                  }
var antiTweets =   {environment: "damn those trees! Nobody cares!",
                  "Lil' Bub 4 Prez": "Cats are not qualified!!!!!",
                  }

var antiEmail =   {environment: "I like nature, I really do, but I don't like nature than my family and the ability to put food on the table for them. I wish there were a way to both preserve the rainforest and provide for them, but as it stands I can not do that. Thus, I hope you abolish this policy of preserving the rainforest.",
                  "Lil' Bub 4 Prez": "In regards to the issue of lil'bub becomming president, I feel obligated to state the harsh reality that he is a cat, and cat's are simply not fit for the presidency.",
                  }
var proEmail =   {environment: "I would like to inform you of my stance on the issue of the rainforest. It is our duty to protect mother nature, and I urge you as strongly as possible to do this. My votes for or against you will be determined by the actions you take on this.",
                  "Lil' Bub 4 Prez": "You have to make lilbub president",
                  }                  



function sendTweetPro(message){
  debugger

  let base = 'https://twitter.com/intent/tweet?'
  let text = `${message.rep.twitter}, ${proTweets[message.issue]}`
  let hashtags = 'speakup,democracy'
  let via = 'speakup'

  let url = `${base}text=${text}&hashtags=${hashtags}&via=${via}`

  alert(text)
  return `<a href = "${url}" target="_blank">Tweet Them</a>`
}

function sendTweetAnti(message){

  let base = 'https://twitter.com/intent/tweet?'
  let text = `${message.rep.twitter}, ${antiTweets[message.issue]}`
  let hashtags = 'speakup,democracy'
  let via = 'speakup'

  let url = `${base}text=${text}&hashtags=${hashtags}&via=${via}`

  alert(text)
  return `<a href = "${url}" target="_blank">Tweet Them</a>`
}
