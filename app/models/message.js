class Message{
  constructor(citizen, rep, issue, stance, sendClient){
    this.citizen = citizen,
    this.rep = rep,
    this.issue = issue,
    this.sendClient = sendClient,
    this.stance = stance
    store.messages = [...store.messages, this]
    store.issues[issue] = store.issues[issue] || {pro: [], against: []}
    store.issues[issue][stance] =  [...store.issues[issue][stance], this]
    // activate(this)
  }
}

var tweets =   {pro: {"Environment": "Stop the destruction of the rainforest! Now.",
                  "Lil' Bub 4 Prez": "You have to make Lil' Bub president",
                  "Gay Marriage": "Denying marriage to same-sex couples is a form of discrimination!",
                  "Gun Control": "The fact that anyone can so easily access guns is so scary & after all of the devastating loss our representatives should not fail us!!!",
                  "Planned Parenthood": "Empower us to make responsible choices—respect the choices we make!",
                  "Free Ice Cream": "Raise moral with increased blood sugar!"},
                  against: {"Environment": "damn those trees! Nobody cares!", "Lil' Bub 4 Prez": "Cats are not qualified!!!!!", "Gay Marriage": "Nontraditional forms of marriage result in children growing up in an environment that often lacks a biological parent",
                  "Gun Control": "personal safety is my freedom, and we deserve to keep ourselves safe and free!",
                  "Planned Parenthood": "Please don't delete the unborn from the human race when applying human rights",
                  "Free Ice Cream": "Obesity is a national epidemic, do not support it further!"}
                  }

var email =   {pro: {"Environment": "I would like to inform you of my stance on the issue of the  rainforest. It is our duty to protect mother nature, and I urge you as strongly as possible to do this. My votes for or against you will be determined by the actions you take on this.",
                  "Lil' Bub 4 Prez": "You have to make Lil' Bub president! It is so important to the people of this country and as a cat he can not run an electrion and a federal bill is the only way to make this happen!!! People will like you if you help Lil' Bub!",
                  "Gay Marriage": "Harvard University historian Nancy F. Cott stated that until two centuries ago, 'monogamous households were a tiny, tiny portion' of the world's population, and were found only in 'Western Europe and little settlements in North America.' The concept of 'traditional marriage' has changed over time, and the definition of marriage as always being between one man and one woman is historically inaccurate. I encourage you to get with the times and support this issue!",
                  "Gun Control": "More gun control laws are needed to protect women from domestic abusers and stalkers. Five women are murdered with guns every day in the United States. A woman's risk of being murdered increases 500% if a gun is present during a domestic dispute. In the first 14 years of the Iraq and Afghanistan wars more women were killed with a gun by an intimate partner in the United States than US soldiers fighting abroad.",
                  "Planned Parenthood": "Planned Parenthood supports people in making healthy choices throughout their lives, whether they are women seeking basic health care or birth control, teens wanting information about how their bodies work, or parents trying to keep their kids safe. Regardless of age or income, Planned Parenthood offers the information and services people need to direct their lives and plan their futures.",
                  "Free Ice Cream": "Can you remember a time in life that wasn't so great, and a little pick-me-up was just what was needed? Well, for America that time is now. Free Ice Cream would greatly benefit the people of this country by allowing them one sure treat in a time when they need it most. Please support this issue"
                  },
                  against: {"Environment": "I like nature, I really do, but I don't like nature than my family and the ability to put food on the table for them. I wish there were a way to both preserve the rainforest and provide for them, but as it stands I can not do that. Thus, I hope you abolish this policy of preserving the rainforest.",
                  "Lil' Bub 4 Prez": "In regards to the issue of Lil' Bub becoming president, I feel obligated to state the harsh reality that he is a cat, and cat's are simply not fit for the presidency.",
                  "Gay Marriage": "Legal proceedings and legislative action in a number of countries have given civil recognition to same-sex marriage relationships, and the question of same-sex marriage continues to be widely debated. As we confront this and other issues, we encourage all to bear in mind our Heavenly Father’s purposes in creating the earth and providing for our mortal birth and experience here as His children. “God created man in his own image, in the image of God created he him; male and female created he them.",
                  "Gun Control": "the attention being given to the issue of gun control is highly out of proportion with the effects any kind of control could have. Please focus your attention on issues that actually have bearing on human life, like poverty, infrastructure and education, and leave our rights the way they are.",
                  "Planned Parenthood": "Children are not devastating consequences.  Neither is a child a “mistake” nor a mother “punished with a baby” as President Obama, the most pro-abortion President in our nation’s history, put it.  They are precious human beings who are to be celebrated and protected",
                  "Free Ice Cream": "Research shows that the Free Ice Cream movement is a marketing scheme setup between sugar manufacturers and the international association of physical trainers. I urge you to not support their bogus program and stop them from exploiting the people."}}
