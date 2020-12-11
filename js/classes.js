

function Player(name){
    this.name = name;
    this.army =  [ [] , [] , [] , [] , [] ];
    this.buildingQueue = [];
}




function Character(CharacterType){

    if(CharacterType == archer){

        this.type = archer;
        this.prey = hipogriff;
        this.lifePoints = 20;
        this.shortRangeDamage = 5;
        this.longRangeDamage = 20;
        this.creationTime = 10000;
        this.recipe = [{element: redStone , number: 5} , {element: blueStone, number: 5 }];


    } else if (CharacterType == warrior){    
        
        
        this.type = warrior;
        this.prey = archer;
        this.lifePoints = 50;
        this.shortRangeDamage = 20;
        this.longRangeDamage = none;
        this.creationTime = 10000;
        this.recipe = [{element: redStone , number: 5} , {element: blueStone, number: 5 }];

    } else if (CharacterType == knight){


        this.type = knight;
        this.prey = warrior;
        this.lifePoints = 100;
        this.shortRangeDamage = 50;
        this.longRangeDamage = none;
        this.prey = 
        this.recipe = [{element: redStone , number: 5} , {element: blueStone, number: 10 }];
         
        
    } else if (CharacterType == hipogriff){

        this.type = hipogriff;
        this.prey = knight;
        this.lifePoints = 800;
        this.shortRangeDamage = 200;
        this.longRangeDamage = 500;
        this.recipe = [{element: redStone , number: 8} , {element: blueStone, number: 12 }];

    } else if(CharacterType == titan){


        this.type = titan;
        this.prey = none;
        this.lifePoints = 2000;
        this.shortRangeDamage = 1000;
        this.longRangeDamage = none;
        this.recipe = [{element: redStone , number: 50} , {element: blueStone, number: 50 } , {element: blackMatterPiece, number: 5}];


    }



}





