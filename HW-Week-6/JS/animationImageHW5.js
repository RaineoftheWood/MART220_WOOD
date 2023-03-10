class animationImageHW5
{

    constructor(fileNames, x, y, w, h)
    {
        this.fileNames = fileNames;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.imageObjects = [];
        this.loadAnimation();
        this.i = 0;
        this.currentFrameCount = 0;
        this.direction  = "";
        
    }

    getX()
    {
        return this.x;
    }

    setX(x)
    {
        this.x = x;
    }

    setCurrentFrameCount(currentFrameCount)
    {

        this.currentFrameCount = currentFrameCount;
    }

    loadAnimation()
    {
        for(var i = 0; i < this.fileNames.length; i++)
        {
            this.imageObjects[i] = loadImage(this.fileNames[i]);
        }
         
    }


    drawAnimation()
    {  
        this.incrementIndex();
        if(this.direction == "reverse")
        {
            translate(this.w,0);
            scale(-1.0,1.0);
            image(this.imageObjects[this.i], -this.x, this.y, this.w, this.h);
        }
        else
        {
            image(this.imageObjects[this.i], this.x, this.y, this.w, this.h);
        }
        
           
        
    }

    incrementIndex() {
       
        if(this.currentFrameCount % 5 == 0)
        {
            this.i++;
        }
       
        if (this.i >= this.fileNames.length) {
            this.i = 0;
        }
    }

    updatePosition(direction)
    {
        this.direction = direction;
        if(direction == "forward")
        {
            this.x += 1;
        }
        else if(direction == "reverse")
        {   
            this.x -= 1;
            
        }
    }
    isRectanglesColliding( rec2){
        var topEdge1 = this.y + this.h;
        var rightEdge1 = this.x + this.w; 
        var leftEdge1 = this.x;
        var bottomEdge1 = this.y;
        var topEdge2 = rec2.getY() + rec2.getH();
        var rightEdge2 = rec2.getX() + rec2.getW(); 
        var leftEdge2 = rec2.getX();
        var bottomEdge2 = rec2.getY();   
        
        if( leftEdge1 < rightEdge2 && rightEdge1 > leftEdge2 && bottomEdge1 < topEdge2 && topEdge1 > bottomEdge2){
            return true; 
       }
       return false;
    }
    Grosssound(mySound2){
        this.mySound = mySound2;
        this.mySound.loop = true;
    }
}