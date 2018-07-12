var tablero = [
    [],
    [],
    [],
    [],
    [],
    [],
];

//var fichas = [{player1: 'assets/Ficha1.png'}, {player2: 'assets/Ficha2.png'}];

var playerActions = [{
    playerSelectedButton: selectedButton
}, {
    playerSelectedColumn: selectedColumn
}];

var player1Name, player2Name, currentGameID, currentLocalStorageContent;
var numeroFila, numeroColumna;
var numeroPos = 0;
var selectedButton, selectedColumn, intervaloResultante, largestNumber, foundedIndex, playerCode;
var countButtonPlayer1 = 0;
var countButtonPlayer2 = 0;
var currentColumn = 0;

var sumaColumna = 0;
var player1Column = [];
var player2Culumn = [];

var timer = new Timer();
timer.start();

$(document).ready(function() {
    //Constructor array tablero
    for (var i = 0; i < tablero.length; i++) {
        for (var j = 0; j < 7; j++) {
            //numeroPos = numeroPos + 1
            //tablero[i][j] = numeroPos;
            tablero[i][j] = '';
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

    //Default turno del jugador1 al empezar la partida
    $('#currentPlayer').text(player1Name);

    //Constructor para el cambio de fichas de jugador
    var btnSrc;
    var buttonState = 0;
    var currentColumn = 0;
    $('#buttonFichas0').click(function() {
        btnSrc = $('img[alt="btnFichas0"]').attr('src');
        //console.log("btnFichas0= " + btnSrc);
        if (buttonState == 0) {
            $('img[alt="btnFichas0"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas1"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas2"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas3"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas4"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas5"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas6"]').attr('src', 'assets/Ficha2.png');
            $('#currentPlayer').text(player2Name);
            buttonState = 1;
            selectedButton = "btn0-player1";
            playerCode = 1;
            // currentColumn = "0";
            playerActions.playerSelectedButton = selectedButton;
            //playerActions.playerSelectedColumn = 
            if(countButtonPlayer1 == 3 || countButtonPlayer2 == 3){
                alert("Culumna llena!");
            $('#buttonFichas0').prop("disabled",true);
                return;
            }
            countButtonPlayer1 = countButtonPlayer1 + 1;
            calculateInterval();
            console.log(sumaColumna);
            sumaColumna = 0;
            //droopFicha();
        } else {
            $('img[alt="btnFichas0"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas1"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas2"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas3"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas4"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas5"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas6"]').attr('src', 'assets/Ficha1.png');
            $('#currentPlayer').text(player1Name);
            buttonState = 0;
            playerCode = 2;
            selectedButton = "btn0-player2";
            // currentColumn = "0";
            playerActions.playerSelectedButton = selectedButton;
            //playerActions.playerSelectedColumn = 
            countButtonPlayer2 = countButtonPlayer2 + 1;
            if(countButtonPlayer1 == 5 && countButtonPlayer2 == 5){
                alert("Columna llena!");
                $('#buttonFichas0').prop("disabled",true);
                return;

            }
            calculateInterval();
            console.log(sumaColumna);
            sumaColumna = 0;
        }
    });
    $('#buttonFichas1').click(function() {
        btnSrc = $('img[alt="btnFichas1"]').attr('src');
        //console.log("btnFichas1= " + btnSrc);
        if (buttonState == 0) {
            $('img[alt="btnFichas0"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas1"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas2"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas3"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas4"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas5"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas6"]').attr('src', 'assets/Ficha2.png');
            $('#currentPlayer').text(player2Name);
            buttonState = 1;
            selectedButton = "btn1-player1";
            //currentColumn = "1";
            playerActions.playerSelectedButton = selectedButton;
            //playerActions.playerSelectedColumn = 
            calculateInterval();
            console.log(sumaColumna);
            sumaColumna = 0;
            //droopFicha();
        } else {
            $('img[alt="btnFichas0"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas1"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas2"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas3"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas4"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas5"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas6"]').attr('src', 'assets/Ficha1.png');
            $('#currentPlayer').text(player1Name);
            buttonState = 0;
            selectedButton = "btn1-player2";
            // currentColumn = "1";
            playerActions.playerSelectedButton = selectedButton;
            //playerActions.playerSelectedColumn = 
            calculateInterval();
            console.log(sumaColumna);
            sumaColumna = 0;
            //droopFicha();
        }
    });
    $('#buttonFichas2').click(function() {
        btnSrc = $('img[alt="btnFichas2"]').attr('src');
        //console.log("btnFichas2= " + btnSrc);
        if (buttonState == 0) {
            $('img[alt="btnFichas0"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas1"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas2"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas3"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas4"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas5"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas6"]').attr('src', 'assets/Ficha2.png');
            $('#currentPlayer').text(player2Name);
            buttonState = 1;
            selectedButton = "btn2-player1";
            currentColumn = "2";
            playerActions.playerSelectedButton = selectedButton;
            //playerActions.playerSelectedColumn = 
            calculateInterval();
            console.log(sumaColumna);
            sumaColumna = 0;
            //droopFicha();
        } else {
            $('img[alt="btnFichas0"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas1"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas2"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas3"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas4"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas5"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas6"]').attr('src', 'assets/Ficha1.png');
            $('#currentPlayer').text(player1Name);
            buttonState = 0;
            selectedButton = "btn2-player2";
            currentColumn = "2";
            playerActions.playerSelectedButton = selectedButton;
            //playerActions.playerSelectedColumn = 
            calculateInterval();
            console.log(sumaColumna);
            sumaColumna = 0;
            //droopFicha();
        }
    });
    $('#buttonFichas3').click(function() {
        btnSrc = $('img[alt="btnFichas3"]').attr('src');
        //console.log("btnFichas3= " + btnSrc);
        if (buttonState == 0) {
            $('img[alt="btnFichas0"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas1"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas2"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas3"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas4"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas5"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas6"]').attr('src', 'assets/Ficha2.png');
            $('#currentPlayer').text(player2Name);
            buttonState = 1;
            selectedButton = "btn3-player1";
            currentColumn = "3";
            playerActions.playerSelectedButton = selectedButton;
            //playerActions.playerSelectedColumn = 
            calculateInterval();
            console.log(sumaColumna);
            sumaColumna = 0;
            //droopFicha();
        } else {
            $('img[alt="btnFichas0"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas1"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas2"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas3"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas4"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas5"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas6"]').attr('src', 'assets/Ficha1.png');
            $('#currentPlayer').text(player1Name);
            buttonState = 0;
            selectedButton = "btn3-player2";
            currentColumn = "3";
            playerActions.playerSelectedButton = selectedButton;
            //playerActions.playerSelectedColumn = 
            calculateInterval();
            console.log(sumaColumna);
            sumaColumna = 0;
            //droopFicha();
        }
    });
    $('#buttonFichas4').click(function() {
        btnSrc = $('img[alt="btnFichas4"]').attr('src');
        //console.log("btnFichas4= " + btnSrc);
        if (buttonState == 0) {
            $('img[alt="btnFichas0"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas1"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas2"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas3"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas4"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas5"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas6"]').attr('src', 'assets/Ficha2.png');
            $('#currentPlayer').text(player2Name);
            buttonState = 1;
            selectedButton = "btn4-player1";
            currentColumn = "4";
            playerActions.playerSelectedButton = selectedButton;
            //playerActions.playerSelectedColumn = 
            calculateInterval();
            console.log(sumaColumna);
            sumaColumna = 0;
            //droopFicha();
        } else {
            $('img[alt="btnFichas0"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas1"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas2"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas3"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas4"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas5"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas6"]').attr('src', 'assets/Ficha1.png');
            $('#currentPlayer').text(player1Name);
            buttonState = 0;
            selectedButton = "btn4-player2";
            currentColumn = "4";
            playerActions.playerSelectedButton = selectedButton;
            //playerActions.playerSelectedColumn = 
            calculateInterval();
            console.log(sumaColumna);
            sumaColumna = 0;
            //droopFicha();
        }
    });
    $('#buttonFichas5').click(function() {
        btnSrc = $('img[alt="btnFichas5"]').attr('src');
        //console.log("btnFichas5= " + btnSrc);
        if (buttonState == 0) {
            $('img[alt="btnFichas0"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas1"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas2"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas3"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas4"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas5"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas6"]').attr('src', 'assets/Ficha2.png');
            $('#currentPlayer').text(player2Name);
            buttonState = 1;
            selectedButton = "btn5-player1";
            currentColumn = "5";
            playerActions.playerSelectedButton = selectedButton;
            //playerActions.playerSelectedColumn = 
            calculateInterval();
            console.log(sumaColumna);
            sumaColumna = 0;
            //droopFicha();
        } else {
            $('img[alt="btnFichas0"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas1"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas2"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas3"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas4"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas5"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas6"]').attr('src', 'assets/Ficha1.png');
            $('#currentPlayer').text(player1Name);
            buttonState = 0;
            selectedButton = "btn5-player2";
            currentColumn = "5";
            playerActions.playerSelectedButton = selectedButton;
            //playerActions.playerSelectedColumn = 
            calculateInterval();
            console.log(sumaColumna);
            sumaColumna = 0;
            //droopFicha();
        }
    });

 $('#buttonFichas6').click(function() {
        btnSrc = $('img[alt="btnFichas6"]').attr('src');
        //console.log("btnFichas6= " + btnSrc);
        if (buttonState == 0) {
            $('img[alt="btnFichas0"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas1"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas2"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas3"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas4"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas5"]').attr('src', 'assets/Ficha2.png');
            $('img[alt="btnFichas6"]').attr('src', 'assets/Ficha2.png');
            $('#currentPlayer').text(player2Name);
            buttonState = 1;
            selectedButton = "btn6-player1";
            currentColumn = "6";
            playerActions.playerSelectedButton = selectedButton;
            //playerActions.playerSelectedColumn = 
            calculateInterval();
            console.log(sumaColumna);
            sumaColumna = 0;
            //droopFicha();
        } else {
            $('img[alt="btnFichas0"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas1"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas2"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas3"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas4"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas5"]').attr('src', 'assets/Ficha1.png');
            $('img[alt="btnFichas6"]').attr('src', 'assets/Ficha1.png');
            $('#currentPlayer').text(player1Name);
            buttonState = 0;
            selectedButton = "btn6-player2";
            currentColumn = "6";
            playerActions.playerSelectedButton = selectedButton;
            //playerActions.playerSelectedColumn = 
            calculateInterval();
            console.log(sumaColumna);
            sumaColumna = 0;
            //droopFicha();
        }
    });

    //Fin constructor
});


/*
$(document).ready(function() {
    tablero[5][0] = "";
    tablero[4][1] = 1;
    tablero[3][2] = 1;
    tablero[2][3] = 1;
});
*/


function checkColumna() {
    var i, p;
    var tempColumn = [];
    for (i = 0; i < tablero.length; i++) {
        for (p = intervaloResultante - 1; p < 7; p++) {
            sumaColumna = sumaColumna + tablero[i][p];
            console.log(tablero[i][p]);
            tempColumn.push(tablero[i][p]);
            i++;
            p--;
            if (i == 6) {
                largestNumber = Math.max.apply(Math, tempColumn);
                console.log("LARGEST: " + largestNumber);
                getIndexOf();
            }
        }
    }
}

function getIndexOf() {
    for (var i = 0; i < tablero.length; i++) {
        var index = tablero[i].indexOf(largestNumber);
        if (index > -1) {
            foundedIndex = [i, index];
            console.log(foundedIndex);
            if (playerCode == 1) {
                tablero[foundedIndex[0]][foundedIndex[1]] = 1;
                reloadGameBoard();
                break;
            }
            if (playerCode == 2) {
                tablero[foundedIndex[0]][foundedIndex[1]] = 2;
                reloadGameBoard();
                break;
            }

        }
    }
    throw new Error("Index already founded!");
}


function calculateInterval() {
    if (selectedButton == "btn0-player1" || selectedButton == "btn0-player2") {
        intervaloResultante = 1;
        saveficha();
        return;
    }
    if (selectedButton == "btn1-player1" || selectedButton == "btn1-player2") {
        intervaloResultante = 2;
        saveficha();
        return;
    }
    if (selectedButton == "btn2-player1" || selectedButton == "btn2-player2") {
        intervaloResultante = 3;
        saveficha();
        return;
    }
    if (selectedButton == "btn3-player1" || selectedButton == "btn3-player2") {
        intervaloResultante = 4;
        saveficha();
        return;
    }
    if (selectedButton == "btn4-player1" || selectedButton == "btn4-player2") {
        intervaloResultante = 5;
        saveficha();
        return;
    }
    if (selectedButton == "btn5-player1" || selectedButton == "btn5-player2") {
        intervaloResultante = 6;
        saveficha();
        return;
    }
    if (selectedButton == "btn6-player1" || selectedButton == "btn6-player2") {
        intervaloResultante = 7;
        saveficha();
        return;
    }
}

function reloadGameBoard(){
    var tabla = document.getElementById("boardBody");
                var cont = tabla.rows.length;
                for (var i = cont - 1; i > -1; i--) {
                    tabla.deleteRow(i);
                }
                var boardBody = document.getElementById("boardBody");
                var contador = 0;
                cont = 0;
                for (var i = 0; i < tablero.length; i++) {
                    contador = 0;
                    var fila = boardBody.insertRow(cont);
                    for (var j = 0; j < 7; j++) {
                        var cont = boardBody.rows.length;
                        var celda = fila.insertCell(contador);
                        celda.innerHTML = tablero[i][j];
                        contador++;
                    }
                }
}

    function saveficha(){
        for (var i= tablero.length - 1; i >= 0 ; i--) {
            for (var j = intervaloResultante - 1; j < 7; j++ ){
                
                if (tablero[i][j]== ""){
                    tablero[i][j]=playerCode;
                    reloadGameBoard();
                    return;
                }
                i--;
                j--;
            }
        } 
    }

//Inicializador Timer
timer.addEventListener('secondsUpdated', function(e) {
    $('#currentTime').html(timer.getTimeValues().toString());
});