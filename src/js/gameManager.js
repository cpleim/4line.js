var tablero = [
    [],
    [],
    [],
    [],
    [],
    [],
];
var player1Name, player2Name, currentGameID, currentLocalStorageContent;
var numeroFila, numeroColumna;
var numeroPos = 0;

var timer = new Timer();
timer.start();

$(document).ready(function() {
    //Constructor del tablero
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            numeroPos = numeroPos + 1
            tablero[i][j] = numeroPos;
        }
    }
    //Fin constructor de tablero
    //Get del contenido del localStorage
    currentGameID = sessionStorage["4line_current_session_ID"];
    currentLocalStorageContent = JSON.parse(localStorage.getItem("4line_games_sessions_ID:" + currentGameID));
    player1Name = currentLocalStorageContent[0].currentGameSession.setupData.player1Name;
    player2Name = currentLocalStorageContent[0].currentGameSession.setupData.player2Name;
    //Set del contenido del localStorage
    $('#currentSessionID').text(currentGameID);
    $('#jugador1').text(player1Name);
    $('#jugador2').text(player2Name);
});

timer.addEventListener('secondsUpdated', function(e) {
    $('#currentTime').html(timer.getTimeValues().toString());
});

$(document).ready(function() {
    var boardBody = document.getElementById("boardBody");
    var contador = 0;
    for (var i = 0; i < tablero.length; i++) {
        contador = 0;
        var fila = boardBody.insertRow(cont);
        for (var j = 0; j < 6; j++) {
            var cont = boardBody.rows.length;
            var celda = fila.insertCell(contador);
            celda.innerText = tablero[i][j];
            contador++;
        }
    }
});