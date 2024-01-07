function cacher(){
	document.getElementById("repl").innerHTML = ""
	document.getElementById("cacher").innerHTML = ""
	document.getElementById("afficher").innerHTML = "Afficher Le Repl"
}
function afficher(){
	document.getElementById("repl").innerHTML = 'texte'
	document.getElementById("cacher").innerHTML = "Cacher Le Repl"
	document.getElementById("afficher").innerHTML = ""
}