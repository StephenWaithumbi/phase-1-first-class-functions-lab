const returnFirstTwoDrivers = function (firstTwoDrivers) {
    return firstTwoDrivers.slice(0, 2); 
};

console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const returnLastTwoDrivers = function(lastTwoDrivers){
    return lastTwoDrivers.slice(2,4);
}
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log(selectingDrivers[0](drivers));
console.log(selectingDrivers[1](drivers)); 

function createFareMultiplier(multiplier){
    return (fare) => {
        return fare * multiplier;
    };
}
const fareQuadPlier = createFareMultiplier(4);
console.log(fareQuadPlier(100));

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(100));

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(100));

function selectDifferentDrivers(arrayOfDrivers, aFunction) {
    return aFunction(arrayOfDrivers);
};