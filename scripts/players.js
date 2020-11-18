var players = [];
var numPlayers;

var jobs = [
	{"name" : "Nurse"},
	{"name" : "Cashier"},
	{"name" : "CEO"}
]

function Player(mentalHealth, money, jobTitle){
	this.mh = mentalHealth;
	this.money = money;
	this.job = jobTitle;
}

//I don't want to maintain "objects" in their own file
function setUpPlayers(){
	numPlayers = document.getElementById("numberOfPlayers").value;

	for(i = 0; i < numPlayers; i++){
		var jobRandom = Math.floor(Math.random() * jobs.length);
		players[i] = new Player(100,100, jobs[jobRandom]["name"]);
	}
	
	updateStats();
}

function updateStats(){
	
	//Clear the stats first
	document.getElementById("playerStats").innerHTML = "";
	
	for(i = 0; i < numPlayers; i++){
		document.getElementById("playerStats").innerHTML += `<div>Player ${i}, Mental Health : ${players[i]["mh"]}, Money : ${players[i]["money"]}, Job : ${players[i]["job"]}</div><br>`;
	}
}


