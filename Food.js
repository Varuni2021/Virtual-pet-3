class Food {
    constructor(){
    var foodStock
    var lastFed
    this.image = loadImage("Milk.png");
}

getFoodStock(){
        
}

updateFoodStock(){

}

deductFood(){

}

garden(){
    background(garden)
}

bedroom(){
    background(bedroom)

}

washroom(){
    background(washroom)

}


display(){
    var x=80, y=100;

    imageMode(CENTER);
    image(this.image, 720,22,70,70);

    if(this.foodStock!=0){
        for(var i=0; 1<this.foodStock; i++){
            if(i%10==0){
                x=80;
                y=y+50;
            }
            image(this.image,x,y,50,50);
            x=x+30;
        }
    }
}



}