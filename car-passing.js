const carPassing = (cars, speed) => {
  let obj = { time: Date.now(), speed: speed
}
//pushes new object into the end of existing cars array
  cars.push(obj);
//returns newer cars array 
  return cars;
} 
const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38
carPassing(cars, speed);
console.log(cars)