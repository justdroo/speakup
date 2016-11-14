//SHOULD BE STORED AS A SERVICE OBJECT

function tweetCompiler(rep, issue, stance){
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

class Message{
    constructor(citizen, rep, issue, method){
        this.citizen = citizen,
        this.rep = rep,
        this.issue = issue,
        this.method = method
    }


    activate(message){
        message.citizen.messages = [...message.citizen.messages, message]
        let messagePosition = message.citizen.issues[message.issue]
        switch (message.method) {
         case 'email':
         if(messagePosition == "pro"){
                     message.rep.issues[message.issue][messagePosition] = [...message.rep.messages, message]
                       sendEmailPro(message)

                   }
         else {
                     message.rep.issues[message.issue][messagePosition] = [...message.rep.messages, message]
                     sendEmailAnti(message)
             }
         case 'tweet':
         if(messagePosition == "pro"){
                     message.rep.issues[message.issue][messagePosition] = [...message.rep.messages, message]
                       sendTweetPro(message)
                   }
         else {
                     message.rep.issues[message.issue][messagePosition] = [...message.rep.messages, message]
                     sendTweetAnti(message)
              }

        }
    }
}
