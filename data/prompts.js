function newPrompt(){
	// returns a random integer from 0 to 2
	var rand = Math.floor(Math.random() * promptJSON.length); 
	return promptJSON[rand];
}


var promptJSON = [
	{
		"prompt" : "Your coworker calls out of work and your boss asks you to come into work during a busy day. You need the money but aren’t sure what to do.",
		"options" : 
			[ 
				{"text" : "Go into work", "risk" : "20", "mhReduction" : "0", "cost" : "-2", "infected" : "15" },
				{"text" : "Stay home", "risk" : "0", "mhReduction" : "10", "cost" : "0" , "infected" : "0"}  
			]
	},
	{
		"prompt" : "Your friend calls you and asks you to meet them at the park for lunch later.",
		"options" : 
			[ 
				{"text" : "Go to the park - sit with them", "risk" : "25", "mhReduction" : "-10", "cost" : "0", "infected" : "1" },
				{"text" : "Go to the park - maintain a safe distance", "risk" : "10", "mhReduction" : "-5", "cost" : "0" , "infected" : "1"},
	{"text" : "Stay Home", "risk" : "0", "mhReduction" : "10", "cost" : "0", "infected" : "0" }  
			]
	},
	{
		"prompt" : "A lot of your relatives want to gather for a family dinner, there will be fifteen people present other than you.",
		"options" : 
			[ 
				{"text" : "Go to the dinner party", "risk" : "20", "mhReduction" : "-15", "cost" : "0", "infected" : "15" },
				{"text" : "Buy dinner for yourself", "risk" : "0", "mhReduction" : "5", "cost" : "10" , "infected" : "1"}  
			]
	},
	{
		"prompt" : "A friend of yours wants you to join him in going to a party. They don’t know how many people will be there.",
		"options" : 
			[ 
				{"text" : "Go to the party", "risk" : "40", "mhReduction" : "-20", "cost" : "0", "infected" : "30" },
				{"text" : "Go to the party and leave if things get risky", "risk" : "15", "mhReduction" : "-10", "cost" : "0" , "infected" : "10"},
	{"text" : "Stay home and buy yourself dinner", "risk" : "0", "mhReduction" : "5", "cost" : "10", "infected": "0" }  
			]
	},
	{
		"prompt" : "You have a doctor’s appointment, how do you get there:",
		"options" : 
			[ 
				{"text" : "Take the bus", "risk" : "30", "mhReduction" : "0", "cost" : "5", "infected" : "20" },
				{"text" : "Drive and get gas", "risk" : "0", "mhReduction" : "0", "cost" : "20" , "infected" : "0"},
	{"text" : "Don’t go", "risk" : "0", "mhReduction" : "15", "cost" : "0", "infected" : "0" }  
			]
	},
	{
		"prompt" : "Three coworkers ask you to grab lunch with them during your lunch break",
		"options" : 
			[ 
				{"text" : "Eat lunch with them", "risk" : "15", "mhReduction" : "-10", "cost" : "10", "infected" : "0" },
				{"text" : "Eat Lunch Alone", "risk" : "0", "mhReduction" : "10", "cost" : "10" , "infected" : "0"},
				{"text" : "Skip lunch", "risk" : "0", "mhReduction" : "25", "cost" : "0" , "infected" : "0"}  
			]
	},
	{
		"prompt" : "It’s the biggest party of the year and you had been waiting in anticipation for it for months on end. You even splurged on an outfit to impress your crush who will also be there. Your friend tells you that it’s not a good idea to go, but this is the last chance you can see everyone there until you go back to school.",
		"options" : 
			[ 
				{"text" : "Go to the party", "risk" : "35", "mhReduction" : "-30", "cost" : "0", "infected" : "40" },
				{"text" : "Stay home and eat dinner alone", "risk" : "0", "mhReduction" : "15", "cost" : "10" , "infected" : "0"},
				{"text" : "Stay home and skip dinner", "risk" : "0", "mhReduction" : "30", "cost" : "0" , "infected" : "0"}
			]
	}
	]
	

