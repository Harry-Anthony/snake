class Tile{
    constructor(positionX, positionY, depl, phase){
        this.positionX = positionX;
        this.positionY = positionY
        this.depl = depl
        this.phase = phase
    }

    get posX(){
        return this.positionX;
    }

    get posY(){
        return this.positionY;
    }
    
    versLeHaut(){
        this.positionY -= 35;
    }
    versLeBas(){
        this.positionY += 35;
    }
    versGauche(){
        this.positionX -= 35;
    }
    versDroite(){
        this.positionX += 35;
    }
    setDeplacement(newDepl){
         this.depl = newDepl
    }

    setPhase(newPhase){
        this.phase = newPhase
    }
}