var titan = { index: 0, name:'titan'};
var hippogriff = { index: 1, name:'hippogriff'};
var knight = { index: 2, name:'knight'};
var warrior = { index: 3, name:'warrior'};
var archer = { index: 4, name:'archer'};
var druid  = { index: 5, name:'druid'};
var charactersArray = [titan, hippogriff, knight, warrior, archer, druid];




function Player(name){
    this.name = name;
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
        this.shortRangeDamage = 0;
        this.longRangeDamage = 0;
        this.buildingTime = none;
        this.recipe = none;

    }else if(characterType == archer){

        this.prey = hippogriff;
        this.lifePoints = 20;
        this.shortRangeDamage = 5;
        this.longRangeDamage = 20;
        this.buildingTime = 10000;
        this.recipe = [{element: redStone , number: 5} , {element: blueStone, number: 5 }];


    } else if (characterType == warrior){    
        
        this.prey = archer;
        this.lifePoints = 50;
        this.shortRangeDamage = 20;
        this.longRangeDamage = none;
        this.buildingTime = 10000;
        this.recipe = [{element: redStone , number: 5} , {element: blueStone, number: 5 }];

    } else if (characterType == knight){

        this.prey = warrior;
        this.lifePoints = 100;
        this.shortRangeDamage = 50;
        this.longRangeDamage = none;
        this.prey = 
        this.recipe = [{element: redStone , number: 5} , {element: blueStone, number: 10 }];
         
        
    } else if (characterType == hippogriff){
        this.prey = knight;
        this.lifePoints = 800;
        this.shortRangeDamage = 200;
        this.longRangeDamage = 500;
        this.recipe = [{element: redStone , number: 8} , {element: blueStone, number: 12 }];

    } else if(characterType == titan){

        this.prey = none;
        this.lifePoints = 2000;
        this.shortRangeDamage = 1000;
        this.longRangeDamage = none;
        this.recipe = [{element: redStone , number: 50} , {element: blueStone, number: 50 } , {element: darkStone, number: 5}];


    }

     //NOW THAT WE HAVE THE TYPE , WE INCREMENT THE COUNT OF THE ASSOCIATED PLAYER , AND SET UP THE NEW VALUE AS A PROPERTY


        this.player.charactersCount[this.type.index] +=1;
        this.id = this.player.charactersCount[this.type.index];
    

}




var human = new Player('human');
var AI = new Player('AI');
