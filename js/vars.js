
var none = 'none';

var AIRedStone =  document.getElementById("AIRedStone");
var AIBlueStone =  document.getElementById("AIBlueStone");

var AIDruidDOM = document.getElementById("AI_druid");

var humanDruidDOM = document.getElementById("human_druid");



var blueStone = 'blue stone';

var redStone = 'red stone';

var darkStone;

var newHumanCreationLaunched = false;

var stones = [redStone, blueStone, darkStone];


//those two vars are filled onload (main.js => buildInitialArmies())

var AIDruid;

var humanDruid;


//army built based on the other opponents army

var destructionArmy = [ [ ] , [ ] , [ ] , [ ] , [ ] ];

//army not built based on the other opponents army

var intuitiveArmy = [ [ ] , [ ] , [ ] , [ ] , [ ] ];


var AIDruidHarvesting = false;


var intuitive = 'intuitive';

var parallel = 'parallel';

var collectIterationIndex = 10;


//queue used to put the players when they couldn't be built because of resources shortage

var inactiveOpponentsAtWar = [ [], [] , [] , [] , []];


//creations types (different priorities)


var parallel;

var intuitive;

var druidKillersComing = false;
