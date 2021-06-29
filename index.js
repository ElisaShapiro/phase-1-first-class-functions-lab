const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
const returnLastTwoDrivers = (drivers) => drivers.slice(drivers.length - 2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (int) => (fare) => int * fare;
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers);
}