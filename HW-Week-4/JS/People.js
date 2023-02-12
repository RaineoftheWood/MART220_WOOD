class People { 
    constructor(name, height, weight, tone, sex){
        this.name = name;
        this.height = height; 
        this.weight = weight;
        this.tone = tone; 
        this.sex = sex; 
    }
    walk(){ 
        text(this.name + " Is Walking.", 200, 200);
    }
    Look(){
        text(this.name + " Is Looking.", 100, 100);
    }
}