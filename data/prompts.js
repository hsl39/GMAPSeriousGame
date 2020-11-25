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
				{"text" : "Go into work", "risk" : "20", "mhReduction" : "5", "cost" : "0" },
				{"text" : "Stay home", "risk" : "0", "mhReduction" : "10", "cost" : "0" }  
			]
	},

	{
		"prompt" : "Your friend calls you and asks you to meet them at the park for lunch later.",
		"options" : 
			[ 
				{"text" : "Go to the park - maintain a safe distance", "risk" : "5", "mhReduction" : "-5", "cost" : "0" },
				{"text" : "Go to the park - sit with them", "risk" : "15", "mhReduction" : "-10", "cost" : "0" },  
				{"text" : "Stay home", "risk" : "0", "mhReduction" : "10", "cost" : "0" }
			]
	},

	{
		"prompt" : "Your friends want you to come over on a Saturday night for a gathering. They said it would only be a couple people but you don’t know who they are or how many people will actually show up.",
		"options" : 
			[ 
				{"text" : "Go to the party", "risk" : "30", "mhReduction" : "-20", "cost" : "0" },
				{"text" : "Stay home", "risk" : "0", "mhReduction" : "10", "cost" : "0" }
			]
	},

	{
		"prompt" : "Your friends want you to come over on a Saturday night for a gathering. They said it would only be a couple people but you don’t know who they are or how many people will actually show up.",
		"options" : 
			[ 
				{"text" : "Go to the party", "risk" : "30", "mhReduction" : "-20", "cost" : "0" },
				{"text" : "Stay home", "risk" : "0", "mhReduction" : "10", "cost" : "0" }
			]
	},
	
	{
		"prompt" : "Your coworkers ask you to grab lunch with them during your lunch break",
		"options" : 
			[ 
				{"text" : "Get lunch with them", "risk" : "10", "mhReduction" : "-10", "cost" : "5" },
				{"text" : "Eat by yourself", "risk" : "0", "mhReduction" : "5", "cost" : "0" }
			]
	}

	
]

