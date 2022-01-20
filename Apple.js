class Apple{
    constructor(weight) {
        this.weight=weight;
    }
    decrease(){
        return this.weight--;
    }
    isEmpty(){
        if(this.weight<=0){
            return true;
        } else {return false};
    }
    getWeight(gram){
        this.weight= gram;
    }
}
let fujiApple= new Apple(10);
let galaApple= new Apple(11);