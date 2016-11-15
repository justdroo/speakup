rep1 = {handle: "@justdroo"}
issue1 = "Gay Marriage"

function formSetup(){

  function issuesSelectFormat() {
    let issues = ["Gay Marriage", "Gun Control", "Planned Parenthood", "Environment", "Free Ice Cream", "Lil' Bub 4 Prez"]

    let formatted = issues.map(function(issue, index){
      return `<option value ="${issue}"> ${issue}</option>`
    })

    return formatted
  } //end issuesSelectFormat

  function appendIssuesSelect(issuesSelectFormat){
    let formatted = issuesSelectFormat()
    let selector = $('[name="issues"]')
    formatted.forEach(function(issueOption) {
      selector.append(issueOption)
    })

  } //end appendIssuesSelect

  let x = issuesSelectFormat
  appendIssuesSelect(x)

}
