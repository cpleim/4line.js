var tablero = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
var player1Name, player2Name, currentGameID, currentLocalStorageContent;
var numeroPos, numeroFila, numeroColumna;

var timer = new Timer();
timer.start();

$(document).ready(function() {
    //Constructor del tablero
    for (var i = 0; i < 7; i++) {
        for (var j = 0; j < 7; j++) {
            tablero[i][j] = 0;
        }
    } //Fin constructor de tablero
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
    var i = 0;
    while (i < tablero.length) {
        for (var j = 0; j < tablero.length; j++) {
            var cont = boardBody.rows.length;
            var fila = boardBody.insertRow(cont);
            var celda1 = fila.insertCell(0);
            celda1.innerText = "0";
            var celda2 = fila.insertCell(1);
            celda2.innerText = "0";
            var celda3 = fila.insertCell(2);
            celda3.innerText = "0";
            var celda4 = fila.insertCell(3);
            celda4.innerText = "0";
            var celda5 = fila.insertCell(4);
            celda5.innerText = "0";
            var celda6 = fila.insertCell(5);
            celda6.innerText = "0";
            var celda7 = fila.insertCell(6);
            celda7.innerText = "0";
            i++;
        }
    }
});