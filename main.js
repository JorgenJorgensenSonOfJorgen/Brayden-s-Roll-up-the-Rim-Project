//Roll up the Rim Project

//Global Variables
let province = 0
let albertaBtn = document.getElementById("Alberta-button");
let britishColumbiaBtn = document.getElementById("British-Columbia-button");
let saskatchewanBtn = document.getElementById("Saskatchewan-button");
let randNumber;
let prize = document.getElementById('prize')
let numCoffees = 0
let numDonuts = 0
let numGrands = 0
let numAgains = 0
let numCoffeesDis = document.getElementById('num-coffees')
let numDonutsDis = document.getElementById('num-donuts')
let numGrandsDis = document.getElementById('num-grands')
let numAgainsDis = document.getElementById('num-agains')
let n;
//Province Chooser
albertaBtn.addEventListener('click', chooseAlberta)
britishColumbiaBtn.addEventListener('click', chooseBritishColumbia)
saskatchewanBtn.addEventListener('click', chooseSaskatchewan)

//Province Functions
function chooseAlberta () {
    province = "alberta"
    //Button Highlihgt
    albertaBtn.classList.add('Selection')
    saskatchewanBtn.classList.remove('Selection')
    britishColumbiaBtn.classList.remove('Selection')
}
function chooseSaskatchewan () {
    province = 'saskatchewan'
    //Button Highlight
    albertaBtn.classList.remove('Selection')
    saskatchewanBtn.classList.add('Selection')
    britishColumbiaBtn.classList.remove('Selection')
}
function chooseBritishColumbia () {
    province = "british-columbia"
    //Button Highlight
    albertaBtn.classList.remove('Selection')
    saskatchewanBtn.classList.remove('Selection')
    britishColumbiaBtn.classList.add('Selection')
}

//Roll
document.getElementById('roll-once').addEventListener('click', rollOnce)
document.getElementById('roll-five').addEventListener('click', rollFive)
document.getElementById('roll-until-grand').addEventListener('click', rollGrand)
document.getElementById('roll-until-500').addEventListener('click', roll500)

//Roll Functions
function rollOnce () {
    //random number generator
    randNumber = Math.random()
    //saskatchewan prize generation
    if (province == 'saskatchewan'){
        //please play again
        if (randNumber < 0.7){
            //output
            prize.innerHTML = "Please Play Again"
            numAgains ++
            numAgainsDis.innerHTML = numAgains
        //free coffee
        } else if (randNumber < 0.71) {
            //output
            prize.innerHTML = "Free Coffee"
            numCoffees ++
            numCoffeesDis.innerHTML = numCoffees
        //free donuts
        } else if (randNumber < 0.72) {
            //output
            prize.innerHTML = "Free Donuts"
            numDonuts ++
            numDonutsDis.innerHTML = numDonuts
        // Grand prize
        } else if (randNumber < 1) {
            //output
            prize.innerHTML = "Grand Prize"
            numGrands ++
            numGrandsDis.innerHTML = numGrands
        } 
    //alberta prize generation
    } else if (province == 'alberta'){
        //please play again
        if (randNumber < 0.15){
            //output
            prize.innerHTML = "Please Play Again"
            numAgains ++
            numAgainsDis.innerHTML = numAgains
        //free coffee
        } else if (randNumber < 0.55) {
            //output
            prize.innerHTML = "Free Coffee"
            numCoffees ++
            numCoffeesDis.innerHTML = numCoffees
        //free donuts
        } else if (randNumber < 0.95) {
            //output
            prize.innerHTML = "Free Donuts"
            numDonuts ++
            numDonutsDis.innerHTML = numDonuts
        // Grand prize
        } else if (randNumber < 1) {
            //output
            prize.innerHTML = "Grand Prize"
            numGrands ++
            numGrandsDis.innerHTML = numGrands
        }
    //British Columbia prize generation
    } else if (province == 'british-columbia') {
        //please play again
        if (randNumber < 0.7){
            //output
            prize.innerHTML = "Please Play Again"
            numAgains ++
            numAgainsDis.innerHTML = numAgains
        //free coffee
        } else if (randNumber < 0.8) {
            //output
            prize.innerHTML = "Free Coffee"
            numCoffees ++
            numCoffeesDis.innerHTML = numCoffees
        //free donuts
        } else if (randNumber < 0.9) {
            //output
            prize.innerHTML = "Free Donuts"
            numDonuts ++
            numDonutsDis.innerHTML = numDonuts
        // Grand prize
        } else if (randNumber < 1) {
            //output
            prize.innerHTML = "Grand Prize"
            numGrands ++
            numGrandsDis.innerHTML = numGrands
        } 
    } else {
        prize.innerHTML = "Please Choose a Province"
    }
}
function rollFive(){
    for (n = 0; n < 5; n++) {
    rollOnce ()
    }
}
function rollGrand () {
    if (province == 0) {
        prize.innerHTML = "Please Choose a Province"
    }  else {
        n = numGrands
        while (n == numGrands){
        rollOnce()
        }
    }
}
function roll500 () {
    if (province == 0) {
        prize.innerHTML = "Please Choose a Province"
    } else {
        n = numDonuts
        while (n > numDonuts -500){
        rollOnce()
        }
    }
}