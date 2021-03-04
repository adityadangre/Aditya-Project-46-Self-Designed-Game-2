class streetSelection {
    constructor(){
    }

    selectStreet(){
        startpoint.visible=false;
        camera.y=canvas.height/2;
        textSize(80);
        fill(202, 146, 16);
        stroke(216, 43, 4);
        strokeWeight(10);
        text("Crazy Car Racing Game", (displayWidth-1185)/2-145, (displayHeight-650)/2);

        textSize(50);
        fill("white");
        stroke(216, 43, 4);
        strokeWeight(10);
        text("Choose Your Favourite Street and Click", (displayWidth-1185)/2 - 150, (displayHeight-650)/2 + 450);

        textSize(25);
        fill("white");
        stroke(216, 43, 4);
        strokeWeight(4);
        text("Canyon            City              Desert           Grass            Snowy             Water", (displayWidth-1185)/2 - 130, (displayHeight-650)/2 + 335);
        
        //add image for street/track selection
        st1.addImage(canyon_img);
        st2.addImage(city_img);
        st3.addImage(desert_img);
        st4.addImage(grass_img);
        st5.addImage(snow_img);
        st6.addImage(water_img);

        this.stvisibletrue();

        // Canyon Street Button
        if(mousePressedOver(st1)){
            this.stvisiblefalse();
            gameState=3;
            plr_bg=1;
        }  
        if(mouseIsOver(st1))
            st1.scale = 0.2 - 0.02;
        else
        st1.scale = 0.15;
        
        // City Street Button
        if(mousePressedOver(st2)){
            this.stvisiblefalse();
            gameState=3;
            plr_bg=2;
        }
        if(mouseIsOver(st2))
            st2.scale = 0.2 - 0.02;        
        else
        st2.scale = 0.15;

        // Desert Street Button
        if(mousePressedOver(st3)){
            this.stvisiblefalse();
            gameState=3;
            plr_bg=3;
        }
        if(mouseIsOver(st3))
            st3.scale = 0.2 - 0.02;
        else
        st3.scale = 0.15;

        // Grass Street Button
        if(mousePressedOver(st4)){
            this.stvisiblefalse();
            gameState=3;
            plr_bg=4;
        }
        if(mouseIsOver(st4))
            st4.scale = 0.2 - 0.02;
        else
        st4.scale = 0.15;

        // Snow Street Button
        if(mousePressedOver(st5)){
            this.stvisiblefalse();
            gameState=3;
            plr_bg=5;
        }
        if(mouseIsOver(st5))
            st5.scale = 0.2 - 0.02;        
        else
        st5.scale = 0.15;

        // Water Street Button
        if(mousePressedOver(st6)){
            this.stvisiblefalse();
            gameState=3;
            plr_bg=6;
        }
        if(mouseIsOver(st6))
            st6.scale = 0.2 - 0.02;        
        else
        st6.scale = 0.15;
    }   
    
    stvisibletrue(){
        st1.visible=true;     
        st2.visible=true;        
        st3.visible=true;        
        st4.visible=true;        
        st5.visible=true;        
        st6.visible=true;
    }
    
    stvisiblefalse(){
        st1.visible=false;
        st2.visible=false;
        st3.visible=false;
        st4.visible=false;
        st5.visible=false;
        st6.visible=false; 
    }
        
}