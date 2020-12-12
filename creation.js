
function build(player, character){


    //First, check if you have the available resources to build this character 

    let availableResources = true;


     for(i=0; i < character.recipe.length; i++){

        if( player.stones[i].length < character.recipe[i].length){

            availableResources = false;

            break;
        }
    }


    if(availableResources == false){

       alert('vous n avez pas assez de resources pour construire ce personnage!');


    } else {

        player.buildingQueue.push(character);
    

        if(player.buildingQueue.length == 0){
    
            processNextElementInBuildQueue(player);
    
        }
    
        
        if(player == human){

            
            launchParallelBuilding();
           
    
    
        }


        

    }
    
    //if you have enough resources, launch build

    
        //else : 'you don't have enough resources to build!'
}

//stop to build if we have more than 5 x the opponents army



function processNextElementInBuildQueue(player){


     if(processElementInBuildingQueue.length == 0){

        //nothing to build => stop the recursive process
         
        break;


     } else {

        let buildingTime = player.buildingQueue[0].buildingTime;

   
        setTimeout(function(){

            //remove the first element of the queue
           
           //launch the process of the next element

            processNextElementInBuildingQueue(player);


        }, buildingTime);
   
     }

}




function launchParallelBuilding(){

    
}


