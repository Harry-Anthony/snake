// boolean pour les deplacement

// Deplacement
var depl = new Deplacement({
    "left": 140,
    "top": 140
}, "right")

var terrain = document.getElementsByClassName("terrain")

var k = 0
var listDepl = [];
//---TILE---//
var tile1 = new Tile(105, 140, "right", 0)
var tile2 = new Tile(70, 140, "right", 0)
var tile3 = new Tile(35, 140, "right", 0)
var tile4 = new Tile(0, 140, "right", 0)
var tiless = [tile1, tile2, tile3, tile4]
var getterLastTile = null;
//------//
var versDroite = true, versBas = false, versHaut = false, versGauche = false
var checkRight = true, checkLeft = false, checkTop = false, checkDown = false

var head = new Head(140, 140)

// relie tiles and head with dom
var ht_head = document.getElementsByClassName("head")
var tiles = document.getElementsByClassName("tile")

var depla = new Deplacement()

// food of python

var kaly = document.getElementsByClassName("food")

var food = new Food(210, 210)
document.addEventListener("keydown", logKey)

function logKey(e) {
    console.log(e.which)
    switch (e.code) {
        case "ArrowUp": {
            console.log("top");
            if (!versBas && !versHaut) {
                console.log("top");
                console.log(listDepl)
                checkTop = true;
            }
        }
            break;
        case "ArrowDown": {

            if (!versHaut && !versBas) {
                console.log("bas");
                checkDown = true;
            }
        }
            break;
        case "ArrowRight": {
            if (!versGauche && !versDroite) {
                checkRight = true;
                console.log("right");
            }
        }
            break;
        case "ArrowLeft": {
            if (!versDroite && !versGauche) {
                checkLeft = true;
                console.log("left");
                console.log(listDepl)

            }
        }
            break;

    }
}

var intervalId = setInterval(function () {

    if (head.posX == food.px && head.posY == food.py) {
        // var newDiv = document.createElement("div")
        // newDiv.className = "tile";
        // terrain[0].append(newDiv)
        // tiles = document.getElementsByClassName("tile")
        // console.log(tiles)
        var newTile = new Tile(0,0, "", 0)
        console.log(tiless[tiless.length - 1])
        getterLastTile = tiless[tiless.length - 1]
        console.log(getterLastTile)
        if (getterLastTile.depl == "right") {
            newTile.positionY = getterLastTile.posY
            newTile.positionX = getterLastTile.posX-35
            newTile.depl = getterLastTile.depl
            newTile.phase = getterLastTile.phase
            tiless.push(newTile)
        } else if (getterLastTile.depl == "left") {
            newTile.positionY = getterLastTile.posY
            newTile.positionX = getterLastTile.posX+35
            newTile.depl = getterLastTile.depl
            newTile.phase = getterLastTile.phase
            tiless.push(newTile)
        } else if (getterLastTile.depl == "top") {
            newTile.positionY = getterLastTile.posY+35
            newTile.positionX = getterLastTile.posX
            newTile.depl = getterLastTile.depl
            newTile.phase = getterLastTile.phase
            tiless.push(newTile)
        } else if (getterLastTile.depl == "down") {
            newTile.positionY = getterLastTile.posY-35
            newTile.positionX = getterLastTile.posX
            newTile.depl = getterLastTile.depl
            newTile.phase = getterLastTile.phase
            tiless.push(newTile)
        }
        //new tile in html
        var newDiv = document.createElement("div")
        newDiv.className = "tile";
        newDiv.style.top = newTile.posY + "px"
        newDiv.style.left = newTile.posX + "px"
        terrain[0].append(newDiv)
        tiles = document.getElementsByClassName("tile")

        // new tile in js
        food.determineZoneLibre(tiless, head)
        console.log("food", food.px, food.py)
        kaly[0].style.top = food.py + "px"
        kaly[0].style.left = food.px + "px"
    }

    if (checkRight) {
        listDepl.push(new Deplacement({
            "top": head.posY,
            "left": head.posX
        }, "right"))
        console.log(listDepl)
        versDroite = true
        versHaut = false
        versGauche = false
        versBas = false
        checkRight = false
    } else if (checkLeft) {
        listDepl.push(new Deplacement({
            "top": head.posY,
            "left": head.posX
        }, "left"))
        versHaut = false
        versBas = false
        versDroite = false
        versGauche = true
        checkLeft = false
    } else if (checkDown) {
        listDepl.push(new Deplacement({
            "top": head.posY,
            "left": head.posX
        }, "down"))
        console.log(listDepl)
        versHaut = false
        versDroite = false
        versGauche = false
        versBas = true
        checkDown = false;
    } else if (checkTop) {
        listDepl.push(new Deplacement({
            "top": head.posY,
            "left": head.posX
        }, "top"))
        versDroite = false
        versGauche = false
        versBas = false
        versHaut = true
        checkTop = false;
    }

    if (versDroite) {
        head.versDroite();
        if (head.posX == 700) {
            clearInterval(intervalId)
            return
        }
    }
    else if (versGauche) {
        head.versGauche();
        if (head.posX == -35) {
            clearInterval(intervalId)
            return
        }
    }
    else if (versHaut) {
        head.versLeHaut();
        if (head.posY == -35) {
            clearInterval(intervalId)
            return
        }
    }
    else if (versBas) {
        head.versLeBas();
        if (head.posY == 700) {
            clearInterval(intervalId)
            return
        }
    }
    // check if head touch tile
    for (i = 0; i < tiles.length; i++) {
        if (head.posX == tiless[i].posX && head.posY == tiless[i].posY) {
            clearInterval(intervalId)
            return
        }
    }
    if (versDroite && head.posX < 700) {
        ht_head[0].style.left = head.posX + "px";
    } else if (versGauche && head.posX > -35) {
        ht_head[0].style.left = head.posX + "px";
    } else if (versHaut && head.posY > -35) {
        ht_head[0].style.top = head.posY + "px";
    } else if (versBas && head.posY < 700) {
        ht_head[0].style.top = head.posY + "px";
    }
    for (j = 0; j < tiless.length; j++) {
        k = tiless[j].phase
        if (listDepl[k]) {
            if (tiless[j].posX == listDepl[k].coord["left"] && tiless[j].posY == listDepl[k].coord["top"]) {
                tiless[j].setDeplacement(listDepl[k].direct);
                tiless[j].setPhase(k + 1)
                if (j == tiless.length - 1) {
                    listDepl.shift()
                    for (e = 0; e < tiless.length; e++) {
                        tiless[e].setPhase(tiless[e].phase - 1);
                    }
                }
            }
        }
    }
    for (i = 0; i < tiless.length; i++) {
        if (tiless[i].depl == "right") {
            tiless[i].versDroite()
            tiles[i].style.left = tiless[i].posX + "px"
        }
        else if (tiless[i].depl == "left") {
            tiless[i].versGauche()
            tiles[i].style.left = tiless[i].posX + "px"
        }
        else if (tiless[i].depl == "top") {
            tiless[i].versLeHaut()
            tiles[i].style.top = tiless[i].posY + "px"
        }
        else if (tiless[i].depl == "down") {
            tiless[i].versLeBas()
            tiles[i].style.top = tiless[i].posY + "px"
        }
    }

}, 100)