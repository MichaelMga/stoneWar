


function buildInitialArmies(){


    let players = [AI, human];


    for(playerIndex = 0; playerIndex < players.length; playerIndex++){  



      let player = players[playerIndex];

      //looper sur les deux dernieres sections
      
      for(i=3; i < 5;i++){

        for(n=0; n < 5; n++){

          let sectionType = charactersArray[i];
 
          let newCharacter = new Character(player, sectionType);
  
          player.army[i].push(newCharacter);
  
          addCharacterOnGui(player , newCharacter);

       }

     }

        //Créer le druide de chaque joueur

        let newDruid = new Character(player,druid);
        player.army[5].push(newDruid);
        addCharacterOnGui(player, newDruid);






          if(player == AI){

            let warriors = AI.army[warrior.index];

            let archers = AI.army[archer.index];

            //select the last element created in the array, and declare it as a druid killer

            let warriorDruidKiller = warriors[warriors.length - 1]
            
             AI.druidsKillers.push(warriorDruidKiller);

             //after that, remove it from the initial array

             AI.army[warrior.index].pop();

             
            let archerDruidKiller = archers[archers.length - 1];

            AI.druidsKillers.push(archerDruidKiller);

            AI.army[archer.index].pop();


          //take one archer, and one warrior and insert it into the array.

        }



        
        
   }

}



