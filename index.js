// Code your solution in this file!
function distanceFromHqInBlocks(Location) {
    //returns the number of blocks given a value
    let scuberHeadQuarters = 42;
    if(Location>scuberHeadQuarters){
        return Location-scuberHeadQuarters;
    }else if (Location<scuberHeadQuarters){
        return scuberHeadQuarters-Location;
    }
  }
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));
function distanceFromHqInFeet(Home) {
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    distanceFromHqInBlocks(Home);
    let By = distanceFromHqInBlocks(Home);

    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    let feet = By*264
    return feet;
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
console.log(distanceFromHqInFeet(43))
console.log(distanceFromHqInFeet(50))
console.log(distanceFromHqInFeet(34))
function DistanceInFeet(feet){
    let distance = feet*264;
    return distance;
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if(destination>start){
        let Travelled = destination - start;
        return DistanceInFeet(Travelled);
    }else if (destination<start){
        let Travelled = start - destination;
        return DistanceInFeet(Travelled);
    }
    }
console.log(distanceTravelledInFeet(43,48))
console.log(distanceTravelledInFeet(50,60))
console.log(distanceTravelledInFeet(34,28))

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance = distanceTravelledInFeet(start,destination)
    if (distance<400){
        let nofare = 0;
        return nofare;
    }else if(distance>400&&distance<2000){
        let fare = (distance-400)*0.02;
        return fare;
    }else if (distance>2000 && distance<2500){
        let constant = 25;
        return constant
    }else if(distance>2500){
        return'cannot travel that far'
    }
  }
  console.log(calculatesFarePrice(43 ,44))
  console.log(calculatesFarePrice(34 , 32))
  console.log(calculatesFarePrice(50, 58))
  console.log(calculatesFarePrice(34, 24))

