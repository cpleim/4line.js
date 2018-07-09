var tablero = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

var fichas = [{
    player1: 'assets/Ficha1.png'
}, {
    player2: 'assets/Ficha2.png'
}];

var player1Name, player2Name, currentGameID, currentLocalStorageContent;
var numeroFila, numeroColumna;
var numeroPos = 0;

var timer = new Timer();
timer.start();

$(document).ready(function() {
    //Constructor array tablero
    for (var i = 0; i < 7; i++) {
        for (var j = 0; j < 6; j++) {
           // numeroPos = numeroPos + 1
           // tablero[i][j] = numeroPos;
           tablero[i][j] = 0;
        }
    }


    //Fin constructor array tablero

    //Get del contenido del localStorage
    currentGameID = sessionStorage["4line_current_session_ID"];
    currentLocalStorageContent = JSON.parse(localStorage.getItem("4line_games_sessions_ID:" + currentGameID));
    player1Name = currentLocalStorageContent[0].currentGameSession.setupData.player1Name;
    player2Name = currentLocalStorageContent[0].currentGameSession.setupData.player2Name;

    //Set del contenido del localStorage
    $('#currentSessionID').text(currentGameID);
    $('#jugador1').text(player1Name);
    $('#jugador2').text(player2Name);

    //Set de colores de los nombres de los jugadores
    $('#jugador1').css('color', 'lightgreen');
    $('#jugador2').css('color', 'red');
});


//Inicializador Timer
timer.addEventListener('secondsUpdated', function(e) {
    $('#currentTime').html(timer.getTimeValues().toString());
});
