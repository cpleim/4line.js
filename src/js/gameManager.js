var tablero = [
    [],
    [],
    [],
    [],
    [],
    [],
];

var player1Name, player2Name, currentGameID, currentLocalStorageContent;
//var numeroPos = 0;
var selectedButton, intervaloResultante, playerCode;
var countButtonPlayer1 = 0;
var countButtonPlayer2 = 0;
var buttonState = 0;
var availabeButtons = ['btnFichas0', 'btnFichas1', 'btnFichas2', 'btnFichas3', 'btnFichas4', 'btnFichas5', 'btnFichas6'];

var turno = 0;
var idButton;
var clickCantBtn0 = 0;
var clickCantBtn1 = 0;
var clickCantBtn2 = 0;
var clickCantBtn3 = 0;
var clickCantBtn4 = 0;
var clickCantBtn5 = 0;
var clickCantBtn6 = 0;
var victoryTimes = 0;

/*AUDIO*/
var placePlayer1 = document.createElement('audio');
var placePlayer2 = document.createElement('audio');
var fullColumn = document.createElement('audio');
var playerVictory = document.createElement('audio');
var playerTimeoutWarning = document.createElement('audio');
var loopCounter = 0;
var loopLimit = 0;

placePlayer1.setAttribute('src', 'assets/sounds/player1.wav');
placePlayer2.setAttribute('src', 'assets/sounds/player2.wav');
fullColumn.setAttribute('src', 'assets/sounds/fullcolumn.wav');
playerVictory.setAttribute('src', 'assets/sounds/win.wav');
playerTimeoutWarning.setAttribute('src', 'assets/sounds/timeout.wav');

placePlayer1.addEventListener('ended', function() {
    if (loopCounter < loopLimit) {
        this.currentTime = 0;
        this.play();
        loopCounter++;
    }
}, false);

placePlayer2.addEventListener('ended', function() {
    if (loopCounter < loopLimit) {
        this.currentTime = 0;
        this.play();
        loopCounter++;
    }
}, false);

fullColumn.addEventListener('ended', function() {
    if (loopCounter < loopLimit) {
        this.currentTime = 0;
        this.play();
        loopCounter++;
    }
}, false);

playerVictory.addEventListener('ended', function() {
    if (loopCounter < loopLimit) {
        this.currentTime = 0;
        this.play();
        loopCounter++;
    }
}, false);
playerTimeoutWarning.addEventListener('ended', function() {
    if (loopCounter < loopLimit) {
        this.currentTime = 0;
        this.play();
        loopCounter++;
    }
}, false);
/**/

/*TIMER*/
var timer = new Timer();

timer.start({
    countdown: true,
    startValues: {
        seconds: 15
    }
});
/**/

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

    //GET de la currentGameID desde el sessionStorage
    currentGameID = sessionStorage["4line_current_session_ID"];
    //Crea un string con la key para pasarsela al localStorafe
    var buildedLocalStorageKey = "4line_games_sessions_ID:" + currentGameID;

    //SET del contenido del localStorage y lo guarda en un array
    currentLocalStorageContent = JSON.parse(localStorage[buildedLocalStorageKey]);

    //GET de los nombres de jugador
    player1Name = currentLocalStorageContent[0].currentGameSession.setupData.player1Name;
    player2Name = currentLocalStorageContent[0].currentGameSession.setupData.player2Name;

    //Sync del tablero actual y el tablero en el localStorage, de esta manera cuando se coloque una ficha, ambos tableros estarán sincronizados.
    tablero = currentLocalStorageContent[0].currentGameSession.setupData.currentGameBoard;

    //SET del contenido del localStorage
    $('#currentSessionID').text(currentGameID);
    $('#jugador1').text(player1Name);
    $('#jugador2').text(player2Name);

    //SET de colores de los nombres de los jugadores
    $('#jugador1').css('color', 'lightgreen');
    $('#jugador2').css('color', 'red');

    //Default turno del jugador1 al empezar la partida
    $('#currentPlayer').text(player1Name);

    /*COMIENZO DEL CONSTRUCTOR DE LOS BOTONES DE JUEGO*/
    $('#buttonFichas0').click(function() {
        selectedButton = "btn0-player1";
        idButton = "btnFichas0";
        clickCantBtn0++;
        timer.reset();
        if (turno == 0) {
            placePlayer1.play();
            buttonState = 1;
            playerCode = 1;
            countButtonPlayer1 = countButtonPlayer1 + 1;
            timer.reset();
            calculateInterval();
            reloadButtonImage();
            turno = 1;
            if (clickCantBtn0 >= 6) {
                $('img[alt=btnFichas0]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                fullColumn.play();
                $('#buttonFichas0').prop("disabled", true);
                removeAvailableButton();
                checkForMatch();
                //throw new Error("Columna llena!");
            }
            return;
        }

        if (turno == 1) {
            placePlayer2.play();
            selectedButton = "btn0-player2";
            buttonState = 0;
            playerCode = 2;
            countButtonPlayer2 = countButtonPlayer2 + 1;
            timer.reset();
            calculateInterval();
            reloadButtonImage();
            turno = 0;
            if (clickCantBtn0 >= 6) {
                $('img[alt=btnFichas0]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                fullColumn.play();
                $('#buttonFichas0').prop("disabled", true);
                removeAvailableButton();
                checkForMatch();
                //throw new Error("Columna llena!");
            }
            return;
        }
    });

    $('#buttonFichas1').click(function() {
        selectedButton = "btn1-player1";
        idButton = "btnFichas1";
        clickCantBtn1++;
        timer.reset();
        if (turno == 0) {
            placePlayer1.play();
            buttonState = 1;
            playerCode = 1;
            countButtonPlayer1 = countButtonPlayer1 + 1;
            timer.reset();
            calculateInterval();
            reloadButtonImage();
            turno = 1;
            if (clickCantBtn1 >= 6) {
                $('img[alt=btnFichas1]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                fullColumn.play();
                $('#buttonFichas1').prop("disabled", true);
                removeAvailableButton();
                checkForMatch();
                //throw new Error("Columna llena!");
            }
            return;
        }

        if (turno == 1) {
            placePlayer2.play();
            selectedButton = "btn1-player2";
            buttonState = 0;
            playerCode = 2;
            countButtonPlayer2 = countButtonPlayer2 + 1;
            timer.reset();
            calculateInterval();
            reloadButtonImage();
            turno = 0;
            if (clickCantBtn1 >= 6) {
                $('img[alt=btnFichas1]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                fullColumn.play();
                $('#buttonFichas1').prop("disabled", true);
                removeAvailableButton();
                checkForMatch();
                //throw new Error("Columna llena!");
            }
            return;
        }
    });

    $('#buttonFichas2').click(function() {
        selectedButton = "btn2-player1";
        idButton = "btnFichas2";
        clickCantBtn2++;
        timer.reset();
        if (turno == 0) {
            placePlayer1.play();
            buttonState = 1;
            playerCode = 1;
            countButtonPlayer1 = countButtonPlayer1 + 1;
            timer.reset();
            calculateInterval();
            reloadButtonImage();
            turno = 1;
            if (clickCantBtn2 >= 6) {
                $('img[alt=btnFichas2]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                fullColumn.play();
                $('#buttonFichas2').prop("disabled", true);
                removeAvailableButton();
                checkForMatch();
                //throw new Error("Columna llena!");
            }
            return;
        }

        if (turno == 1) {
            placePlayer2.play();
            selectedButton = "btn2-player2";
            buttonState = 0;
            playerCode = 2;
            countButtonPlayer2 = countButtonPlayer2 + 1;
            timer.reset();
            calculateInterval();
            reloadButtonImage();
            turno = 0;
            if (clickCantBtn1 >= 6) {
                $('img[alt=btnFichas2]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                fullColumn.play();
                $('#buttonFichas2').prop("disabled", true);
                removeAvailableButton();
                checkForMatch();
                //throw new Error("Columna llena!");
            }
            return;
        }
    });

    $('#buttonFichas3').click(function() {
        selectedButton = "btn3-player1";
        idButton = "btnFichas3";
        clickCantBtn3++;
        timer.reset();
        if (turno == 0) {
            placePlayer1.play();
            buttonState = 1;
            playerCode = 1;
            countButtonPlayer1 = countButtonPlayer1 + 1;
            timer.reset();
            calculateInterval();
            reloadButtonImage();
            turno = 1;
            if (clickCantBtn3 >= 6) {
                $('img[alt=btnFichas3]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                fullColumn.play();
                $('#buttonFichas3').prop("disabled", true);
                removeAvailableButton();
                checkForMatch();
                //throw new Error("Columna llena!");
            }
            return;
        }

        if (turno == 1) {
            placePlayer2.play();
            selectedButton = "btn3-player2";
            buttonState = 0;
            playerCode = 2;
            countButtonPlayer2 = countButtonPlayer2 + 1;
            timer.reset();
            calculateInterval();
            reloadButtonImage();
            turno = 0;
            if (clickCantBtn3 >= 6) {
                $('img[alt=btnFichas3]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                fullColumn.play();
                $('#buttonFichas3').prop("disabled", true);
                removeAvailableButton();
                checkForMatch();
                //throw new Error("Columna llena!");
            }
            return;
        }
    });

    $('#buttonFichas4').click(function() {
        selectedButton = "btn4-player1";
        idButton = "btnFichas4";
        clickCantBtn4++;
        timer.reset();
        if (turno == 0) {
            placePlayer1.play();
            buttonState = 1;
            playerCode = 1;
            countButtonPlayer1 = countButtonPlayer1 + 1;
            timer.reset();
            calculateInterval();
            reloadButtonImage();
            turno = 1;
            if (clickCantBtn4 >= 6) {
                $('img[alt=btnFichas4]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                fullColumn.play();
                $('#buttonFichas4').prop("disabled", true);
                removeAvailableButton();
                checkForMatch();
                //throw new Error("Columna llena!");
            }
            return;
        }

        if (turno == 1) {
            placePlayer2.play();
            selectedButton = "btn4-player2";
            buttonState = 0;
            playerCode = 2;
            countButtonPlayer2 = countButtonPlayer2 + 1;
            timer.reset();
            calculateInterval();
            reloadButtonImage();
            turno = 0;
            if (clickCantBtn4 >= 6) {
                $('img[alt=btnFichas4]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                fullColumn.play();
                $('#buttonFichas4').prop("disabled", true);
                removeAvailableButton();
                checkForMatch();
                //throw new Error("Columna llena!");
            }
            return;
        }
    });

    $('#buttonFichas5').click(function() {
        selectedButton = "btn5-player1";
        idButton = "btnFichas5";
        clickCantBtn5++;
        timer.reset();
        if (turno == 0) {
            placePlayer1.play();
            buttonState = 1;
            playerCode = 1;
            countButtonPlayer1 = countButtonPlayer1 + 1;
            timer.reset();
            calculateInterval();
            reloadButtonImage();
            turno = 1;
            if (clickCantBtn5 >= 6) {
                $('img[alt=btnFichas5]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                fullColumn.play();
                $('#buttonFichas5').prop("disabled", true);
                removeAvailableButton();
                checkForMatch();
                //throw new Error("Columna llena!");
            }
            return;
        }

        if (turno == 1) {
            placePlayer2.play();
            selectedButton = "btn5-player2";
            buttonState = 0;
            playerCode = 2;
            countButtonPlayer2 = countButtonPlayer2 + 1;
            timer.reset();
            calculateInterval();
            reloadButtonImage();
            turno = 0;
            if (clickCantBtn5 >= 6) {
                $('img[alt=btnFichas5]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                fullColumn.play();
                $('#buttonFichas5').prop("disabled", true);
                removeAvailableButton();
                checkForMatch();
                //throw new Error("Columna llena!");
            }
            return;
        }
    });

    $('#buttonFichas6').click(function() {
        selectedButton = "btn6-player1";
        idButton = "btnFichas6";
        clickCantBtn6++;
        timer.reset();
        if (turno == 0) {
            placePlayer1.play();
            buttonState = 1;
            playerCode = 1;
            countButtonPlayer1 = countButtonPlayer1 + 1;
            timer.reset();
            calculateInterval();
            reloadButtonImage();
            turno = 1;
            if (clickCantBtn6 >= 6) {
                $('img[alt=btnFichas6]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                fullColumn.play();
                $('#buttonFichas6').prop("disabled", true);
                removeAvailableButton();
                checkForMatch();
                //throw new Error("Columna llena!");
            }
            return;
        }

        if (turno == 1) {
            placePlayer2.play();
            selectedButton = "btn6-player2";
            buttonState = 0;
            playerCode = 2;
            countButtonPlayer2 = countButtonPlayer2 + 1;
            timer.reset();
            calculateInterval();
            reloadButtonImage();
            turno = 0;
            if (clickCantBtn6 >= 6) {
                $('img[alt=btnFichas6]').attr('src', 'assets/FichaDisabled.png');
                // alert("Culumna llena!");
                buttonState = -1;
                fullColumn.play();
                $('#buttonFichas6').prop("disabled", true);
                removeAvailableButton();
                checkForMatch();
                //throw new Error("Columna llena!");
            }
            return;
        }
    });

    /*COMIENZO DEL CONSTRUCTOR DE LOS BOTONES DE JUEGO*/
});

function removeAvailableButton() {
    for (var i = 0; i < availabeButtons.length; i++) {
        if (availabeButtons[i] == idButton) {
            availabeButtons.splice(i, 1);
            return;
        }
    }
}

function checkForMatch() {
    if (availabeButtons.length == 0) {
        alert("EMPATE!");
        return;
    }
}

function overWriteGameBoard() {
    //Guarda el tablero actual en el localStorage
    currentLocalStorageContent[0].currentGameSession.setupData.currentGameBoard = tablero;
    //Reescribe los datos actuales guardados en el localStorage
    localStorage["4line_games_sessions_ID:" + currentGameID] = JSON.stringify(currentLocalStorageContent);
}

function playerTimeOut() {
    playerTimeoutWarning.play();
    var num = Math.floor(Math.random() * 7) + 0;
    //console.log("[TIMEOUT]" + num);
    var btnStr = "buttonFichas" + num;
    //console.log(btnStr);
    document.getElementById(btnStr).click();
}

/*DEPRECATED*/
/*
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
*/
/*DEPRECATED*/

function calculateInterval() {
    if (selectedButton == "btn0-player1" || selectedButton == "btn0-player2") {
        intervaloResultante = 1;
        saveficha();
        evaluacolumns();
        evaluaFilas();
        diagonalIzq();
        diagonalDer();
        overWriteGameBoard();
        return;
    }
    if (selectedButton == "btn1-player1" || selectedButton == "btn1-player2") {
        intervaloResultante = 2;
        saveficha();
        evaluacolumns();
        evaluaFilas();
        diagonalIzq();
        diagonalDer();
        overWriteGameBoard();
        return;
    }
    if (selectedButton == "btn2-player1" || selectedButton == "btn2-player2") {
        intervaloResultante = 3;
        saveficha();
        evaluacolumns();
        evaluaFilas();
        diagonalIzq();
        diagonalDer();
        overWriteGameBoard();
        return;
    }
    if (selectedButton == "btn3-player1" || selectedButton == "btn3-player2") {
        intervaloResultante = 4;
        saveficha();
        evaluacolumns();
        evaluaFilas();
        diagonalIzq();
        diagonalDer();
        overWriteGameBoard();
        return;
    }
    if (selectedButton == "btn4-player1" || selectedButton == "btn4-player2") {
        intervaloResultante = 5;
        saveficha();
        evaluacolumns();
        evaluaFilas();
        diagonalIzq();
        diagonalDer();
        overWriteGameBoard();
        return;
    }
    if (selectedButton == "btn5-player1" || selectedButton == "btn5-player2") {
        intervaloResultante = 6;
        saveficha();
        evaluacolumns();
        evaluaFilas();
        diagonalIzq();
        diagonalDer();
        overWriteGameBoard();
        return;
    }
    if (selectedButton == "btn6-player1" || selectedButton == "btn6-player2") {
        intervaloResultante = 7;
        saveficha();
        evaluacolumns();
        evaluaFilas();
        diagonalIzq();
        diagonalDer();
        overWriteGameBoard();
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

function storeWinner() {
    var currentWinner = $('#currentPlayer').text();
    sessionStorage.setItem("4line_current_Winner", currentWinner);
    currentLocalStorageContent[0].currentGameSession.setupData.victoryTimes = currentLocalStorageContent[0].currentGameSession.setupData.victoryTimes + 1;
    localStorage["4line_games_sessions_ID:" + currentGameID] = JSON.stringify(currentLocalStorageContent); 
    var gameURL = "Winner.html";
    document.location.href = gameURL;
}

function reloadButtonImage() {
    if (buttonState == 1) {
        for (var i = 0; i < availabeButtons.length; i++) {
            $('img[alt="' + availabeButtons[i] + '"]').attr('src', 'assets/Ficha2.png');
        }
        /*
        $('img[alt="btnFichas0"]').attr('src', 'assets/Ficha2.png');
        */
        $('#currentPlayer').text(player2Name);
        return;
    }

    if (buttonState == 0) {
        for (var i = 0; i < availabeButtons.length; i++) {
            $('img[alt="' + availabeButtons[i] + '"]').attr('src', 'assets/Ficha1.png');
        }
        /*
        $('img[alt="btnFichas0"]').attr('src', 'assets/Ficha2.png');
        */
        $('#currentPlayer').text(player1Name);
        return;
    }
    if (buttonState == -1) {
        $('#currentPlayer').text(player2Name);
    }

}

function saveficha() {
    var gameBoard = document.getElementById("boardBody");
    var fichita1 = '<img src="assets/Ficha1.png"></>';
    var fichita2 = '<img src="assets/Ficha2.png"></>';
    for (var i = tablero.length - 1; i >= 0; i--) {
        for (var j = intervaloResultante - 1; j < 7; j++) {
            if (tablero[i][j] == "") {
                tablero[i][j] = playerCode;
                if (turno == 0) {
                    gameBoard.rows[i].cells[j].innerHTML = fichita1;
                    return;
                }
                if (turno == 1) {
                    gameBoard.rows[i].cells[j].innerHTML = fichita2;
                    return;
                }
                //reloadGameBoard();
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
                playerVictory.play();
                alert("Jugador 1 ha ganado [COLUMNA]");
                //$('#fichasJugadores').fadeOut();
                timer.stop();
                storeWinner();
                return;
            }
            if (tablero[j][i] == 2) {
                contador2 = contador2 + 2;
            } else {
                contador2 = 0;
            }
            if (contador2 == 8) {
                playerVictory.play();
                alert("Jugador 2 ha ganado [COLUMNA]");
                //$('#fichasJugadores').fadeOut();
                timer.stop();
                storeWinner();
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
            if (tablero[i][j] == 1) {
                contador++;
            } else {
                contador = 0;
            }
            if (contador == 4) {
                playerVictory.play();
                alert("Jugador 1 ha ganado [FILA]");
                //$('#fichasJugadores').fadeOut();
                timer.stop();
                storeWinner();
                return;
            }
            if (tablero[i][j] == 2) {
                contador2 = contador2 + 2;
            } else {
                contador2 = 0;
            }
            if (contador2 == 8) {
                playerVictory.play();
                alert("Jugador 2 ha ganado [FILA]");
                // $('#fichasJugadores').fadeOut();
                timer.stop();
                storeWinner();
                return;
            }
        }
    }
}

function diagonalIzq() {
    for (var i = 5; i >= 3; i--) {
        for (var j = 0; j <= 3; j++) {
            if (tablero[i][j] == 1 && tablero[i - 1][j + 1] == 1 && tablero[i - 2][j + 2] == 1 && tablero[i - 3][j + 3] == 1) {
                playerVictory.play();
                alert("Jugador 1 ha ganado [DIAGIZQ]");
                // $('#fichasJugadores').fadeOut();
                timer.stop();
                storeWinner();
                return;
            }
            if (tablero[i][j] == 2 && tablero[i - 1][j + 1] == 2 && tablero[i - 2][j + 2] == 2 && tablero[i - 3][j + 3] == 2) {
                playerVictory.play();
                alert("Jugador 2 ha ganado [DIAGIZQ]");
                // $('#fichasJugadores').fadeOut();
                timer.stop();
                storeWinner();
                return;
            }
        }

    }
    return;
}

function diagonalDer() {
    for (var i = 5; i >= 3; i--) {
        for (var j = 3; j <= 6; j++) {
            if (tablero[i][j] == 1 && tablero[i - 1][j - 1] == 1 && tablero[i - 2][j - 2] == 1 && tablero[i - 3][j - 3] == 1) {
                playerVictory.play();
                alert("Jugador 1 ha ganado [DIAGDER]");
                // $('#fichasJugadores').fadeOut();
                timer.stop();
                storeWinner();
                return;
            }
            if (tablero[i][j] == 2 && tablero[i - 1][j - 1] == 2 && tablero[i - 2][j - 2] == 2 && tablero[i - 3][j - 3] == 2) {
                playerVictory.play();
                alert("Jugador 2 ha ganado [DIAGDER]");
                // $('#fichasJugadores').fadeOut();
                timer.stop();
                storeWinner();
                return;
            }
        }
    }
    return;
}

/*INICIALIZADOR TIMER*/
$('#currentTime .values').html(timer.getTimeValues().toString());
timer.addEventListener('secondsUpdated', function(e) {
    $('#currentTime .values').html(timer.getTimeValues().toString(['seconds']));
});
timer.addEventListener('targetAchieved', function(e) {
    $('#currentTime .values').html('TIEMPO FUERA!');
    playerTimeOut();
    timer.reset();
});