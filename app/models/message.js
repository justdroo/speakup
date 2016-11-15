class Message{
  constructor(citizen, rep, issue, stance, method){
    this.citizen = citizen,
    this.rep = rep,
    this.issue = issue,
    this.method = method,
    this.stance = stance
    store.messages = [...store.messages, this]
    activate(this)
  }
}

var proTweets =   {Environment: "Stop the destruction of the rainforest! Now",
                  "Lil' Bub 4 Prez": "You have to make lilbub president",
                  }
var antiTweets =   {Environment: "damn those trees! Nobody cares!",
                  "Lil' Bub 4 Prez": "Cats are not qualified!!!!!",
                  }

var antiEmail =   {Environment: "I like nature, I really do, but I don't like nature than my family and the ability to put food on the table for them. I wish there were a way to both preserve the rainforest and provide for them, but as it stands I can not do that. Thus, I hope you abolish this policy of preserving the rainforest.",
                  "Lil' Bub 4 Prez": "In regards to the issue of lil'bub becomming president, I feel obligated to state the harsh reality that he is a cat, and cat's are simply not fit for the presidency.",
                  }
var proEmail =   {Environment: "I would like to inform you of my stance on the issue of the rainforest. It is our duty to protect mother nature, and I urge you as strongly as possible to do this. My votes for or against you will be determined by the actions you take on this.",
                  "Lil' Bub 4 Prez": "You have to make lilbub president",
                  }
