class Human{
    constructor(name,gender,weight) {
        this.name=name;
        this.gender=gender;
        this.weight=weight;
    }
    isMale(){
        return this.gender=true;
    }
    setGender(){
        this.gender= this.isMale();
    }
    checkApple(Apple){
        if(Apple.isEmpty()){
            alert("No more Apple")
        }
    }
    eat(Apple){
        Apple.decrease();
        return this.weight++;
    }
    say(word){
        this.word=word;
        alert(word)};
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(weight){
        this.weight=weight;
    }
}
let firstHuman= new Human("Adam",true,70)
let firstWoman= new Human("Eva",false,50)
firstHuman.say("Hello Eva,Let's eat an apple")
firstWoman.say("I don't like apple")
firstHuman.eat(fujiApple);