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
				{"text" : "Go into work", "risk" : "30", "mhReduction" : "0", "cost" : "0" },
				{"text" : "Stay home", "risk" : "0", "mhReduction" : "0", "cost" : "0" }  
			]
	},
	{
		"prompt" : "Your friend calls you and asks you to meet them at the park for lunch later.",
		"options" : 
			[ 
				{"text" : "Go to the park - maintain a safe distance", "risk" : "5", "mhReduction" : "0", "cost" : "0" },
				{"text" : "Go to the park - sit with them", "risk" : "15", "mhReduction" : "0", "cost" : "0" },  
				{"text" : "Stay home", "risk" : "0", "mhReduction" : "0", "cost" : "0" }
			]
	}

	
]

var daysEnum = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];