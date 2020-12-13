
var none = 'none';

var redStone = { AILeft: $("AIRedStone").offsetLeft , humanLeft: $("humanRedStone").offsetLeft};

var blueStone = { AILeft: $("AIBlueStone").offsetLeft , humanLeft: $("humanBlueStone").offsetLeft};

var darkStone;

var newHumanCreationLaunched = false;

var stones = [redStone, blueStone, darkStone];

var AIdruidHarvesting = false;


//queue used to put the players when they couldn't be built because of resources shortage

var todoQueue = [];


//creations types (different priorities)


var parallel;

var intuitive;

