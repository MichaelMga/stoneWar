var titan = { index: 0, name:'titan'};
var knight = { index: 3, name:'knight'};
var soldier = { index: 2, name:'soldier'};
var berseker = { index: 1, name:'berseker'};
var druid  = { index: 4, name:'druid'};

var charactersArray = [titan, knight , soldier, berseker , druid];



function Player(name){
    this.name = name;
    this.castle = new Castle();
    this.army = [ [] , [] , [] , [] , [] , []];
    this.druidKillers = [];
    this.buildingQueue = [];
    this.charactersCount = [ 0 , 0 , 0 , 0 , 0 , 0 ];
    this.stones = [ 100, 100 , 100];
  
}


function Character(player, characterType){
 
    this.player = player;
    this.type = characterType;
    this.attacked = false;
    this.buildingType = intuitive;

    if(characterType == druid){

        this.prey = none;
        this.predator = none;
        this.lifePoints = 100;
        this.recipe = none;
        this.buildingTime = 10000;

    } else if(characterType == soldier){

        this.prey = berseker;
        this.predator = knight;
        this.lifePoints = 100;
        this.recipe = [{element: redStone , number: 5} , {element: blueStone, number: 5 }];
        this.buildingTime = 10000;



    }  else if(characterType == knight){

        this.prey = soldier;
        this.predator = berseker;
        this.lifePoints = 100;
        this.recipe = [{element: redStone , number: 5} , {element: blueStone, number: 5 }];
        this.buildingTime = 10000;


    } else if (characterType == berseker){

        this.prey = knight;
        this.predator = soldier;
        this.lifePoints = 100;
        this.recipe = [{element: redStone , number: 5} , {element: blueStone, number: 10 }];
        this.buildingTime = 10000;

        
    } else if(characterType == titan){

        this.prey = none;
        this.predator = none;
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



