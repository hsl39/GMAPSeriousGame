function newPrompt(){
	
	// returns a random integer from 0 to 2
	var rand = Math.floor(Math.random() * 3); 
	document.getElementById("prompt").innerHTML = testPrompts[rand]["prompt"];
	
}


var testPrompts = [
	{"prompt" : "Party with the gang!!!"},
	{"prompt" : "Second Prompt"	},
	{"prompt" : "Third Prompt"}
]