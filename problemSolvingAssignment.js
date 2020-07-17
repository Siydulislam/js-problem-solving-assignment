// Feet to Mile

function feetToMile(feet){
    if(feet < 0){
        return "Distance cannot be Negative";
    }
    var mile = feet / 5280;
    mile = mile.toFixed(5);
    return mile;
}
var result = feetToMile(-543);
console.log(result);



// Wood Calculator

function woodCalculator(chair, table, bed){
    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForBed = bed * 5;
    var totalWood = woodForChair + woodForTable + woodForBed;
    return totalWood;
}

var totalWoodCount = woodCalculator();
console.log(totalWoodCount);



// Brick Calculator

function brickCalculator(floorNumber){
    var firstTenFloor = 10;
    var secondTenFloor = 10;
    var bricksNumber;
    if(floorNumber > 0 && floorNumber <= 10){
        bricksNumber = (floorNumber * 15 * 1000);    
    }
    else if(floorNumber > 10 && floorNumber <= 20){
        bricksNumber = (firstTenFloor * 15 * 1000) + (secondTenFloor * 12 * 1000);
    }
    else if(floorNumber > 20){
        bricksNumber = (firstTenFloor * 15 * 1000) + (secondTenFloor * 12 * 1000) + ((floorNumber - 20) * 10 * 1000);
    }
    else {
        bricksNumber = "Please enter a valid number";
    }
    return bricksNumber;
}
var totalBricks = brickCalculator();
console.log(totalBricks);



// Tiny Friend


function tinyFriend(friendNames){
    var shortestName = friendNames[0];
    for (var i = 0; i < friendNames.length; i++){
        var currentName = friendNames[i];
        if (currentName.length < shortestName.length){
            shortestName = currentName;
        }
    }
    return shortestName;
}
var output = tinyFriend([]);
console.log('Your tiny friend is' + ' ' + output);