class Deplacement{
    constructor(coord, direct){
        this.coord = coord
        this.direct = direct
    }

    get coordenne(){
        return this.coord;
    }

    get direction(){
        return this.direct;
    }

    setDirection(newDirect){
        this.direct = newDirect;
    }

    setCoord(newCoord){
        this.coord = newCoord
    }
}