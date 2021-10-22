class Head{
    constructor(positionx, positiony){
        this.positionx =  positionx;
        this.positiony = positiony;
    }

    get posX(){
        return this.positionx;
    }

    get posY(){
        return this.positiony;
    }

    versLeHaut(){
        this.positiony -= 35;
    }
    versLeBas(){
        this.positiony += 35;
    }
    versGauche(){
        this.positionx -= 35;
    }
    versDroite(){
        this.positionx += 35;
    }

}