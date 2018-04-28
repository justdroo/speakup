function createMessage(htmlElement){

	let citizen = store.citizens[store.citizens.length-1]
	let repArray = $.grep(store.representatives, function(e){ return e.id === parseInt(htmlElement.dataset.id); });
	let rep = repArray[0]

	let issue = $(`#${rep.id} [name=issues]`).val()
	let stance = $(`#${rep.id} [name=stance]`).val()
	let sendClient = $(`#${rep.id} [name=method]`).val()
	citizen.issues[issue] = stance

	let message = new Message(citizen, rep, issue, stance, sendClient)
	messageRelay(message)
}

function messageRelay(message){
	if (message.sendClient === "email") {
		emailer(message)
	} else if (message.sendClient === "tweet") {
		tweeter(message)
	} else {
		alert("Please select email or twitter to send your message!")
	}
}

function emailer(message){
	if (message.rep.email == "No email listed") {
		alert("Sorry! This representative doesn't have an email!")
	} else {
		let repEmail = message.rep.email
		let subject = message.issue
		let body = email[message.stance][subject]
		window.location.href = `mailto:${repEmail}?subject=${subject}&body=${body}`
	}
}

function tweeter(message){
	if (message.rep.twitter == "No Twitter listed") {
		alert("Sorry! This representative doesn't have a Twitter!")
	} else {
		let base = 'https://twitter.com/intent/tweet?'
		let text = `${message.rep.twitter}, ${tweets[message.stance][message.issue]}`
		let hashtags = 'speakup,democracy'
		let via = ''
		let url = `${base}text=${text}&hashtags=${hashtags}`
		window.open(url)
	}
}
