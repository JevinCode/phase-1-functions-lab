// Code your solution in this file!

const feetPerBlock = 264;
function distanceFromHqInBlocks(street) {
    return Math.abs(42 - street);
}

function distanceFromHqInFeet(street) {
    return feetPerBlock * distanceFromHqInBlocks(street);
}

function distanceTravelledInFeet(src, dest) {
    return feetPerBlock * Math.abs(dest - src);
}

function calculatesFarePrice(start, destination) {
    const feetTravelled = distanceTravelledInFeet(start, destination);
    switch(true)
    {
        case feetTravelled <= 400:
            return 0;
        case feetTravelled <= 2000:
            return 0.02 * (feetTravelled - 400);
        case feetTravelled <= 2500:
            return 25;
        default:
            return 'cannot travel that far';
    }
}