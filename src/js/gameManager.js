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
var buttonState = 0;
var sumaColumna = 0;
var player1Column = [];
var player2Culumn = [];

/*EXPERIMENTAL*/
var turno = 0;
var idButton;
var clickCantBtn0 = 0;
var clickCantBtn1 = 0;
var clickCantBtn2 = 0;
var clickCantBtn3 = 0;
var clickCantBtn4 = 0;
var clickCantBtn5 = 0;
var clickCantBtn6 = 0;
/**/

var timer = new Timer();
timer.start();

$(document).ready(function () {
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
    var currentColumn = 0;

    $('#buttonFichas0').click(function () {
        selectedButton = "btn0-player1";
        idButton = "btnFichas0";
        clickCantBtn0++;
        if (turno == 0) {
            buttonState = 1;
            playerCode = 1;
            countButtonPlayer1 = countButtonPlayer1 + 1;
            calculateInterval();
            reloadButtonImage();
            turno = 1;
            if (clickCantBtn0 >= 6) {
                $('img[alt=btnFichas0]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                $('#buttonFichas0').prop("disabled", true);
                throw new Error("Columna llena!");
            }
            return;
        }

        if (turno == 1) {
            selectedButton = "btn0-player2";
            buttonState = 0;
            playerCode = 2;
            countButtonPlayer2 = countButtonPlayer2 + 1;
            calculateInterval();
            reloadButtonImage();
            turno = 0;
            if (clickCantBtn0 >= 6) {
                $('img[alt=btnFichas0]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                $('#buttonFichas0').prop("disabled", true);
                throw new Error("Columna llena!");
            }
            return;
        }
    });

    $('#buttonFichas1').click(function () {
        selectedButton = "btn1-player1";
        idButton = "btnFichas1";
        clickCantBtn1++;
        if (turno == 0) {
            buttonState = 1;
            playerCode = 1;
            countButtonPlayer1 = countButtonPlayer1 + 1;
            calculateInterval();
            reloadButtonImage();
            turno = 1;
            if (clickCantBtn1 >= 6) {
                $('img[alt=btnFichas1]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                $('#buttonFichas1').prop("disabled", true);
                throw new Error("Columna llena!");
            }
            return;
        }

        if (turno == 1) {
            selectedButton = "btn1-player2";
            buttonState = 0;
            playerCode = 2;
            countButtonPlayer2 = countButtonPlayer2 + 1;
            calculateInterval();
            reloadButtonImage();
            turno = 0;
            if (clickCantBtn1 >= 6) {
                $('img[alt=btnFichas1]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                $('#buttonFichas1').prop("disabled", true);
                throw new Error("Columna llena!");
            }
            return;
        }
    });

    $('#buttonFichas2').click(function () {
        selectedButton = "btn2-player1";
        idButton = "btnFichas2";
        clickCantBtn2++;
        if (turno == 0) {
            buttonState = 1;
            playerCode = 1;
            countButtonPlayer1 = countButtonPlayer1 + 1;
            calculateInterval();
            reloadButtonImage();
            turno = 1;
            if (clickCantBtn2 >= 6) {
                $('img[alt=btnFichas2]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                $('#buttonFichas2').prop("disabled", true);
                throw new Error("Columna llena!");
            }
            return;
        }

        if (turno == 1) {
            selectedButton = "btn2-player2";
            buttonState = 0;
            playerCode = 2;
            countButtonPlayer2 = countButtonPlayer2 + 1;
            calculateInterval();
            reloadButtonImage();
            turno = 0;
            if (clickCantBtn1 >= 6) {
                $('img[alt=btnFichas2]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                $('#buttonFichas2').prop("disabled", true);
                throw new Error("Columna llena!");
            }
            return;
        }
    });

    $('#buttonFichas3').click(function () {
        selectedButton = "btn3-player1";
        idButton = "btnFichas3";
        clickCantBtn3++;
        if (turno == 0) {
            buttonState = 1;
            playerCode = 1;
            countButtonPlayer1 = countButtonPlayer1 + 1;
            calculateInterval();
            reloadButtonImage();
            turno = 1;
            if (clickCantBtn3 >= 6) {
                $('img[alt=btnFichas3]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                $('#buttonFichas3').prop("disabled", true);
                throw new Error("Columna llena!");
            }
            return;
        }

        if (turno == 1) {
            selectedButton = "btn3-player2";
            buttonState = 0;
            playerCode = 2;
            countButtonPlayer2 = countButtonPlayer2 + 1;
            calculateInterval();
            reloadButtonImage();
            turno = 0;
            if (clickCantBtn3 >= 6) {
                $('img[alt=btnFichas3]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                $('#buttonFichas3').prop("disabled", true);
                throw new Error("Columna llena!");
            }
            return;
        }
    });

    $('#buttonFichas4').click(function () {
        selectedButton = "btn4-player1";
        idButton = "btnFichas4";
        clickCantBtn4++;
        if (turno == 0) {
            buttonState = 1;
            playerCode = 1;
            countButtonPlayer1 = countButtonPlayer1 + 1;
            calculateInterval();
            reloadButtonImage();
            turno = 1;
            if (clickCantBtn4 >= 6) {
                $('img[alt=btnFichas4]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                $('#buttonFichas4').prop("disabled", true);
                throw new Error("Columna llena!");
            }
            return;
        }

        if (turno == 1) {
            selectedButton = "btn4-player2";
            buttonState = 0;
            playerCode = 2;
            countButtonPlayer2 = countButtonPlayer2 + 1;
            calculateInterval();
            reloadButtonImage();
            turno = 0;
            if (clickCantBtn4 >= 6) {
                $('img[alt=btnFichas4]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                $('#buttonFichas4').prop("disabled", true);
                throw new Error("Columna llena!");
            }
            return;
        }
    });

    $('#buttonFichas5').click(function () {
        selectedButton = "btn5-player1";
        idButton = "btnFichas5";
        clickCantBtn5++;
        if (turno == 0) {
            buttonState = 1;
            playerCode = 1;
            countButtonPlayer1 = countButtonPlayer1 + 1;
            calculateInterval();
            reloadButtonImage();
            turno = 1;
            if (clickCantBtn5 >= 6) {
                $('img[alt=btnFichas5]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                $('#buttonFichas5').prop("disabled", true);
                throw new Error("Columna llena!");
            }
            return;
        }

        if (turno == 1) {
            selectedButton = "btn5-player2";
            buttonState = 0;
            playerCode = 2;
            countButtonPlayer2 = countButtonPlayer2 + 1;
            calculateInterval();
            reloadButtonImage();
            turno = 0;
            if (clickCantBtn5 >= 6) {
                $('img[alt=btnFichas5]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                $('#buttonFichas5').prop("disabled", true);
                throw new Error("Columna llena!");
            }
            return;
        }
    });

    $('#buttonFichas6').click(function () {
        selectedButton = "btn6-player1";
        idButton = "btnFichas6";
        clickCantBtn6++;
        if (turno == 0) {
            buttonState = 1;
            playerCode = 1;
            countButtonPlayer1 = countButtonPlayer1 + 1;
            calculateInterval();
            reloadButtonImage();
            turno = 1;
            if (clickCantBtn6 >= 6) {
                $('img[alt=btnFichas6]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                $('#buttonFichas6').prop("disabled", true);
                throw new Error("Columna llena!");
            }
            return;
        }

        if (turno == 1) {
            selectedButton = "btn6-player2";
            buttonState = 0;
            playerCode = 2;
            countButtonPlayer2 = countButtonPlayer2 + 1;
            calculateInterval();
            reloadButtonImage();
            turno = 0;
            if (clickCantBtn6 >= 6) {
                $('img[alt=btnFichas6]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                $('#buttonFichas6').prop("disabled", true);
                throw new Error("Columna llena!");
            }
            return;
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
        evaluacolumns();
        evaluaFilas();
        diagonalIzq();
        diagonalDer();
        return;
    }
    if (selectedButton == "btn1-player1" || selectedButton == "btn1-player2") {
        intervaloResultante = 2;
        saveficha();
        evaluacolumns();
        evaluaFilas();
        diagonalIzq();
        diagonalDer();
        return;
    }
    if (selectedButton == "btn2-player1" || selectedButton == "btn2-player2") {
        intervaloResultante = 3;
        saveficha();
        evaluacolumns();
        evaluaFilas();
        diagonalIzq();
        diagonalDer();
        return;
    }
    if (selectedButton == "btn3-player1" || selectedButton == "btn3-player2") {
        intervaloResultante = 4;
        saveficha();
        evaluacolumns();
        evaluaFilas();
        diagonalIzq();
        diagonalDer();
        return;
    }
    if (selectedButton == "btn4-player1" || selectedButton == "btn4-player2") {
        intervaloResultante = 5;
        saveficha();
        evaluacolumns();
        evaluaFilas();
        diagonalIzq();
        diagonalDer();
        return;
    }
    if (selectedButton == "btn5-player1" || selectedButton == "btn5-player2") {
        intervaloResultante = 6;
        saveficha();
        evaluacolumns();
        evaluaFilas();
        diagonalIzq();
        diagonalDer();
        return;
    }
    if (selectedButton == "btn6-player1" || selectedButton == "btn6-player2") {
        intervaloResultante = 7;
        saveficha();
        evaluacolumns();
        evaluaFilas();
        diagonalIzq();
        diagonalDer();
        return;
    }
}

function reloadGameBoard() {
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

function reloadButtonImage() {
    if (buttonState == 1) {
        $('img[alt="btnFichas0"]').attr('src', 'assets/Ficha2.png');
        $('img[alt="btnFichas1"]').attr('src', 'assets/Ficha2.png');
        $('img[alt="btnFichas2"]').attr('src', 'assets/Ficha2.png');
        $('img[alt="btnFichas3"]').attr('src', 'assets/Ficha2.png');
        $('img[alt="btnFichas4"]').attr('src', 'assets/Ficha2.png');
        $('img[alt="btnFichas5"]').attr('src', 'assets/Ficha2.png');
        $('img[alt="btnFichas6"]').attr('src', 'assets/Ficha2.png');
        $('#currentPlayer').text(player2Name);
    }

    if (buttonState == 0) {
        $('img[alt="btnFichas0"]').attr('src', 'assets/Ficha1.png');
        $('img[alt="btnFichas1"]').attr('src', 'assets/Ficha1.png');
        $('img[alt="btnFichas2"]').attr('src', 'assets/Ficha1.png');
        $('img[alt="btnFichas3"]').attr('src', 'assets/Ficha1.png');
        $('img[alt="btnFichas4"]').attr('src', 'assets/Ficha1.png');
        $('img[alt="btnFichas5"]').attr('src', 'assets/Ficha1.png');
        $('img[alt="btnFichas6"]').attr('src', 'assets/Ficha1.png');
        $('#currentPlayer').text(player1Name);
    }
    if (buttonState == -1) {


        $('#currentPlayer').text(player2Name);
    }

}

function saveficha() {
    for (var i = tablero.length - 1; i >= 0; i--) {
        for (var j = intervaloResultante - 1; j < 7; j++) {

            if (tablero[i][j] == "") {
                tablero[i][j] = playerCode;
                reloadGameBoard();
                return;
            }
            i--;
            j--;
        }
    }
}



function evaluacolumns() {
    var contador, contador2;

    for (var i = 0; i <= 6; i++) {
        contador = 0;
        contador2 = 0;

        for (var j = tablero.length - 1; j >= 0; j--) {
            if (tablero[j][i] == 1) {
                contador++;
            } else {
                contador = 0;
            }
            if (contador == 4) {
                alert("Jugador 1 ha ganado [COLUMN]");
                return;
            }
            if (tablero[j][i] == 2) {
                contador2 = contador2 + 2;
            } else {
                contador2 = 0;
            }
            if (contador2 == 8) {
                alert("Jugador 2 ha ganado [COLUMN]");
                return;
            }
        }
    }
}

function evaluaFilas() {
    var contador = 0;
    var contador2 = 0;

    for (var i = 5; i >= 0; i--) {
        for (var j = 0; j <= 6; j++) {
            //tablero[i][j] = 8;

            if (tablero[i][j] == 1) {
                contador++;
                console.log("[CONTADOR:]" + contador);
            } else {
                contador = 0;
            }
            if (contador == 4) {
                alert("Jugador 1 ha ganado [FILA]");
                return;
            }
            if (tablero[i][j] == 2) {
                contador2 = contador2 + 2;
                console.log("[CONTADOR2:]" + contador2);
            } else {
                contador2 = 0;
            }
            if (contador2 == 8) {
                alert("Jugador 2 ha ganado [FILA]");
                return;
            }
        }
    }
}

function diagonalIzq() {
    for (var i = 5; i >= 3; i--) {
        for (var j = 0; j <= 3; j++) {
            //tablero[i][j] = 8;
            if (tablero[i][j] == 1 && tablero[i - 1][j + 1] == 1 && tablero[i - 2][j + 2] == 1 && tablero[i - 3][j + 3] == 1) {
                alert("Jugador 1 ha ganado [DIAGIZQ]");
                return;
            }
            if (tablero[i][j] == 2 && tablero[i - 1][j + 1] == 2 && tablero[i - 2][j + 2] == 2 && tablero[i - 3][j + 3] == 2) {
                alert("Jugador 2 ha ganado [DIAGIZQ]");
                return;
            }
        }

    }
    return;
}

function diagonalDer() {
    for (var i = 5; i >= 3; i--) {
        for (var j = 3; j <= 6; j++) {
            //tablero[i][j] = 8;
            if (tablero[i][j] == 1 && tablero[i - 1][j - 1] == 1 && tablero[i - 2][j - 2] == 1 && tablero[i - 3][j - 3] == 1) {
                alert("Jugador 1 ha ganado [DIAGDER]");
                return;
            }
            if (tablero[i][j] == 2 && tablero[i - 1][j - 1] == 2 && tablero[i - 2][j - 2] == 2 && tablero[i - 3][j - 3] == 2) {
                alert("Jugador 2 ha ganado [DIAGDER]");
                return;
            }
        }

    }
    return;
}

//Inicializador Timer
timer.addEventListener('secondsUpdated', function (e) {
    $('#currentTime').html(timer.getTimeValues().toString());
});