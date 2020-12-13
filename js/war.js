//Every 30 seconds : can I attack? Meaning, do I have at least 50 characters, and do I have a striking force beating its current force, plus 25 more other characters?

//anytime an opponent attacks our castle, we go out there to defeat it.

//anytime a druid is out there, we send 3 armies (of any character (enough to beat it)) -> balanced army

//when intuitive building, the druid checks : if there are no opponents. If so, go there.

//send druidkillers

 


  function launchDruidAssault(){

    let character;

    let humanDruid = document.getElementById('human_druid');
    

    for(dkIndex = 0; dkIndex < 1; dkIndex++){
       
      character = getCharacterDomElement(AI, AI.druidKillers[dkIndex]);
      
      let characterLeft = character.offsetLeft;

      //the character right value needs to go down until it's close to this value : then, it disappears
      let moveInterval;
   
      if( characterLeft > humanDruid.offsetLeft ){
   
        alert('go!!');
         moveInterval = setInterval(function(){ 
         console.log('movement...');
         characterLeft -= 3;
         character.style.left = characterLeft + 'px';
         console.log(characterLeft);
   
      if( (character.offsetLeft - humanDruid.offsetLeft) < 50){   


        alert('the druid killers are attacking the druid!!!');

   
          clearInterval(moveInterval);
   
     }
   
    } , 20 );
   

   
   
   
   } else {
   
   
   moveInterval = setInterval(
   
   
   function(){ 
   
   console.log('movement...');

  
    characterLeft += 3;
   
    character.style.left = characterLeft + 'px';
   
   
    console.log(characterLeft);
   
   
    if( (character.offsetLeft - humanDruid.offsetLeft) > 50){
            
          character.style.opacity = 0;
       
         setTimeout(function(){
   
           alert('the harvester collected 3 stones');
   
           stoneCollected();
   
            character.style.opacity = 1;
   
   
            }, 2000);
   
           clearInterval(moveInterval);
   
        }
   
   
      } , 20 );
   
   
     }
   
   
   
    //end of druid killers loop   

    }


}


