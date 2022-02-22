// Code your solution in this file!
function distanceFromHqInBlocks(st) {
    const blocks = 42 - st;
    if (blocks < 0) {
        return blocks * -1;
    } else return blocks
}

function distanceFromHqInFeet(st) {
    return distanceFromHqInBlocks(st) * 264;
}

function distanceTravelledInFeet(from, to) {
    const blocks = Math.abs(from - to);
    return blocks * 264;
}

function calculatesFarePrice(from, to) {
    if (distanceTravelledInFeet(from, to) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(from, to) > 400 && distanceTravelledInFeet(from, to) < 2000) {
        return (distanceTravelledInFeet(from, to) - 400) * 0.02;
    } else if (distanceTravelledInFeet(from, to) > 2000 && distanceTravelledInFeet(from, to) < 2500) {
        return 25;
    } else return "cannot travel that far"
}