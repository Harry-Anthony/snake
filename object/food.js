class Food{

    constructor(px, py){
        this.px = px;
        this.py = py;
    }
    determineZoneLibre(tiless,head){
        console.log(tiless.length)
        var test = true;
        do{
            this.changeZone();
            if(this.px != head.posX && this.py != head.posY){
                for(var i=0;i<tiless.length;i++){
                    if(this.px!=tiless[i].posX && this.py != tiless[i].posY){
                        test = false;
                    } else {
                        test = true;
                        i = tiless.length;
                    }
                }
            }
        }while(test)
    }
    changeZone(){
        this.px = Math.floor(Math.random()*20)*35
        this.py = Math.floor(Math.random()*20)*35
    }
}