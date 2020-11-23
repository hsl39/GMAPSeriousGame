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

	sessionStorage.setItem("players", JSON.stringify(players));

	window.location.href = "prompt.html";
}

function updateStats(){

	if(document.getElementById("playerStats") == null){
		const div = document.createElement('div');
		div.id = "playerStats";
		document.getElementsByTagName("BODY")[0].appendChild(div);
	}

	document.getElementById("playerStats").innerHTML = "";
  
	var players = JSON.parse(sessionStorage.getItem("players"));
	var numPlayers = players.length;
	
	for(i = 0; i < numPlayers; i++){
		document.getElementById("playerStats").innerHTML += `<div>Player ${i + 1}, Mental Health : ${players[i]["mh"]}, Money : ${players[i]["money"]}, Job : ${players[i]["job"]}</div><br>`;
	}
}




