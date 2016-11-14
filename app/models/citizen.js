const Citizen = function(){
	let id = 0

return class Citizen{
    constructor(address){
            this.id = ++id
            this.address = address
            this.issues = {}
            this.messages = []
            store.citizens = [...store.citizens, this]
        }
    }
}()




function initiateMessage(htmlElement){
	
	let citizen = store.citizens[store.citizens.length-1]
	let repArray = $.grep(store.representatives, function(e){ return e.id === parseInt(htmlElement.dataset.id); });
	let rep = repArray[0]
	let issue = $(`#${rep.id} [name=issues]`).val()
	let stance = $(`#${rep.id} [name=stance]`).val()
	citizen.issues[issue] = stance
	let message = new Message(citizen, rep, issue)
	message.stance = stance
	showMessageOptions(message)
}

function showMessageOptions(message){
	// div id = message.rep.id
	
}