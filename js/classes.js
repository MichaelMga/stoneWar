var titan = { index: 0, name:'titan'};
var berseker = { index: 2, name:'berseker'};
var warrior = { index: 3, name:'warrior'};
var archer = { index: 4, name:'archer'};
var druid  = { index: 5, name:'druid'};
var charactersArray = [titan, berseker, warrior, archer, druid];




function Player(name){
    this.name = name;
    this.castle = new Castle();
    this.army = [ [] , [] , [] , [] , [] , []];
    this.druidsKillers = [];
    this.buildingQueue = [];
    this.charactersCount = [ 0 , 0 , 0 , 0 , 0 , 0 ];
    this.stones = [];
  
}




function Character(player, characterType){
 
    this.player = player;
    this.type = characterType;

    if(characterType == druid){

        this.prey = none;
        this.lifePoints = 100;
        this.recipe = none;
        this.buildingTime = 10000;

    }else if(characterType == archer){

        this.prey = warrior;
        this.lifePoints = 100;
        this.recipe = [{element: redStone , number: 5} , {element: blueStone, number: 5 }];
        this.buildingTime = 10000;



    } else if (characterType == warrior){    
        
        this.prey = berseker;
        this.lifePoints = 100;
        this.recipe = [{element: redStone , number: 5} , {element: blueStone, number: 5 }];
        this.buildingTime = 10000;


    } else if (characterType == berseker){

        this.prey = archer;
        this.lifePoints = 100;
        this.recipe = [{element: redStone , number: 5} , {element: blueStone, number: 10 }];
        this.buildingTime = 10000;

        
    } else if(characterType == titan){

        this.prey = none;
        this.longRangeDamage = none;
        this.recipe = [{element: redStone , number: 50} , {element: blueStone, number: 50 } , {element: darkStone, number: 5}];
        this.buildingTime = 90000;

  
    }

     //NOW THAT WE HAVE THE TYPE , WE INCREMENT THE COUNT OF THE ASSOCIATED PLAYER , AND SET UP THE NEW VALUE AS A PROPERTY


        this.player.charactersCount[this.type.index] +=1;
        this.id = this.player.charactersCount[this.type.index];
    

}




function Castle(){

    this.shieldPoint = 1000;


}











var human = new Player('human');
var AI = new Player('AI');
