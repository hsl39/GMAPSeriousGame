function newPrompt(){
	// returns a random integer from 0 to 2
	var rand = Math.floor(Math.random() * promptJSON.length); 
	return promptJSON[rand];
}


var promptJSON = [

	{
		"prompt" : "Your coworker calls out of work and your boss asks you to come into work during a busy day.",
		"options" : 
			[ 
				{"text" : "Go into work", "risk" : "20", "mhReduction" : "5", "cost" : "0", "infect" : "5" },
				{"text" : "Stay home", "risk" : "0", "mhReduction" : "10", "cost" : "0", "infect" : "0" }  
			]
	}

	
]

