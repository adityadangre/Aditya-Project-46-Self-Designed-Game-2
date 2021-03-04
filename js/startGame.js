class startGame {
    constructor(){
    }

    gameStart(){
        camera.y=canvas.height/2;
        textSize(80);
        fill(202, 146, 16);
        stroke(216, 43, 4);
        strokeWeight(10);
        text("Crazy Car Racing Game", (displayWidth-1185)/2-145, (displayHeight-650)/2);

        if(gameState===4){
            textSize(60);
            fill("white");
            stroke(216, 43, 4);
            text("Your Distance Travelled :- " + Math.round(distance/100)+ "KM", (displayWidth-1185)/2-280 + 130, (displayHeight-650)/2 + 100);
            btrestart.visible=true;
            if(oxygen>0){
            btcontinue.visible=true;            
            btoption.visible=true;
            }
            
            if(mousePressedOver(btcontinue)){
                btcontinue.visible=false;
                btrestart.visible=false;
                btoption.visible=false;
                distance=distance;
                fuel=fuel;
                gameState=3;                
            }        
            if(mouseIsOver(btcontinue))
                btcontinue.addImage(btcontinue2_img);            
            else
            btcontinue.addImage(btcontinue1_img);

            if(mousePressedOver(btrestart)){
                btcontinue.visible=false;
                btrestart.visible=false;
                btoption.visible=false;
                gameState=1;
                distance=0;
                oxygen=3;
                fuel=20;               
            }        
            if(mouseIsOver(btrestart))
                btrestart.addImage(btrestart2_img);            
            else
            btrestart.addImage(btrestart1_img);

            if(mousePressedOver(btoption)){
                btcontinue.visible=false;
                btrestart.visible=false;
                btoption.visible=false;
                gameState=1;
                distance=distance;
                oxygen=oxygen;
                fuel=10;                  
            }
        
            if(mouseIsOver(btoption)){
                btoption.addImage(btoption2_img);
            }
            else
            btoption.addImage(btoption1_img);
        }       
        if(gameState===0){
            start.visible=true;
            startpoint.visible=false;
            if(mousePressedOver(start)){
                start.visible=false;
                gameState=1;
            }    
            if(mouseIsOver(start)){
                start.addImage(startover_img);
            }
            else
            start.addImage(start_img);       
        }
    }
}