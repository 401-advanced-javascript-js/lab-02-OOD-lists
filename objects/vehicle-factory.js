
'use strict';

const Vehicle = () => ({
  drive: () => {
    return 'Moving Forward';
  },
  stop: () => {
    return 'Stopping';
  },
});

function CarFactory(name) {
  let car = Object.assign(
    {},
    {name},
    {wheels: 4},
    Vehicle()
  );

  return Object.freeze(car);
}

function MotorcycleFactory(name) {
  let motorcycle = Object.assign(
    {},
    {name},
    {wheels: 2},
    {wheelie: () => 'Wheee!'},
    Vehicle()
  );

  return Object.freeze(motorcycle);
}

module.exports = {CarFactory, MotorcycleFactory};