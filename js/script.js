const car = {
  prop1: 'BMW',
  prop2: 'M5',
  prop3: 'F90'
};

function getProp1() {
  console.log(car.prop1);
  return car.prop1;
}

function getProp2() {
  console.log(car.prop2);
  return car.prop2;
}

function getProp3() {
  console.log(car.prop3);
  return car.prop3;
}

getProp1();
getProp2();
getProp3();

function setNewProp1() {
  car.prop1 = 'Mercedes';
  console.log(car.prop1);
  return car.prop1;
}

function setNewProp2() {
  car.prop2 = 'E63 AMG';
  console.log(car.prop2);
  return car.prop2;
}

function setNewProp3() {
  car.prop3 = 'W213';
  console.log(car.prop3);
  return car.prop3;
}

setNewProp1();
setNewProp2();
setNewProp3();

timeoutId = setTimeout(() => {
  console.log('Hi!');
}, 5000);

timeoutIdClear = clearTimeout(timeoutId);

intervalId = setInterval(() => {
  console.log('Hi');
  console.log('Bye');
}, 1000);

intervalIdClear = clearInterval(intervalId);

try {
  console.log('Hi!');
  hi;
  throw new SyntaxError('Syntax error occured');
} catch (error) {
  if (SyntaxError) {
    console.log('Smth occurred')
  }
  console.log('Error occurred');
} finally {
  console.log('Finally')
}


