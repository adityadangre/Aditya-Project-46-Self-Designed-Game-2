class carSelection {
    constructor(){
    }

    selectCar(){
        startpoint.visible=false;
        camera.y=canvas.height/2;
        textSize(80);
        fill(202, 146, 16);
        stroke(216, 43, 4);
        strokeWeight(10);
        text("Crazy Car Racing Game", (displayWidth-1185)/2-145, (displayHeight-650)/2);
        textSize(60);
        fill("white");
        stroke(216, 43, 4);
        //strokeWeight(10);
        text("Choose Your Favourite Car", (displayWidth-1185)/2-200 + 130, (displayHeight-650)/2 + 200);
        this.btcarvisibletrue();
        
        // Red Car button
        if(mousePressedOver(btredc)){
            this.btcarvisiblefalse();
            gameState=2;
            plr_car=1;
        } 
        if(mouseIsOver(btredc))
            btredc.addImage(btredc2_img);        
        else
        btredc.addImage(btredc1_img);

        //White Cat Button
        if(mousePressedOver(btwhitec)){
            this.btcarvisiblefalse();
            gameState=2;
            plr_car=2;
        }  
        if(mouseIsOver(btwhitec))
            btwhitec.addImage(btwhitec2_img);        
        else
        btwhitec.addImage(btwhitec1_img);

        //Yellow Cat Button
        if(mousePressedOver(btyellowc)){
            this.btcarvisiblefalse();
            gameState=2;
            plr_car=3;
        }            
        if(mouseIsOver(btyellowc))
            btyellowc.addImage(btyellowc2_img);        
        else
        btyellowc.addImage(btyellowc1_img);

        //Black Cat Button
        if(mousePressedOver(btblackc)){
            this.btcarvisiblefalse();
            gameState=2;
            plr_car=4;
        }            
        if(mouseIsOver(btblackc))
            btblackc.addImage(btblackc2_img);        
        else
        btblackc.addImage(btblackc1_img);

        //Blue Cat Button
        if(mousePressedOver(btbluec)){
            this.btcarvisiblefalse();
            gameState=2;
            plr_car=5;
        }            
        if(mouseIsOver(btbluec))
            btbluec.addImage(btbluec2_img);        
        else
        btbluec.addImage(btbluec1_img);

        //Green Cat Button
        if(mousePressedOver(btgreenc)){
            this.btcarvisiblefalse();
            gameState=2;
            plr_car=6;
        }  
        if(mouseIsOver(btgreenc))
            btgreenc.addImage(btgreenc2_img);
        else
        btgreenc.addImage(btgreenc1_img);
    }    

    btcarvisiblefalse(){
        btyellowc.visible=false;
        btredc.visible=false;
        btwhitec.visible=false;
        btblackc.visible=false;
        btbluec.visible=false;
        btgreenc.visible=false;  
    }
    btcarvisibletrue(){
        btredc.visible=true;
        btwhitec.visible=true;
        btyellowc.visible=true;
        btblackc.visible=true;
        btbluec.visible=true;
        btgreenc.visible=true;
    }
        
}

