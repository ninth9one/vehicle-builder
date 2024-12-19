// Importing Vehicle and Wheel classes
import Car from './Car.js';
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Declare properties of Motorbike class
class Motorbike extends Vehicle{
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  //currentRpm: number;
// Constructor for the Motorbike class
constructor (
  vin: string,
  color: string,
  make: string,
  model: string,
  year: number,
  weight: number,
  topSpeed: number,
  wheels: Wheel[],
  //currentRpm: number,
) {
  //intialize properties in the Motorbike
  super();
  this.vin = vin;
  this.color = color;
  this.make = make;
  this.model = model;
  this.year = year;
  this.weight = weight;
  this.topSpeed =topSpeed;
  //this.currentRpm = currentRpm
  if (wheels.length !== 2) {
    this.wheels = [new Wheel(), new Wheel()];
  } else {
    this.wheels = wheels;
  }
}

  // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    wheelie(): void {
      //if (this.currentRpm >= 3500) {
        console.log(`Motorbike ${this.make} ${this.model} is popping a wheelie!`);
      }
  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // TODO: The method should call the printDetails method of the parent class
    super.printDetails();
    // TODO: The method should log the details of the Motorbike
    console.log('VIN: ${this.vin}');
    console.log('Color: ${this.color}');
    console.log('Make: ${this.make}');
    console.log('Model: ${this.model}');
    console.log('Year: ${this.year}');
    console.log('Weight: ${this.weight} lbs');
    console.log('Top Speed: ${this.topSpeed} mph');
  

//print details of the wheels
console.log(
`Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
console.log(
`Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
);
  }
}
// Export the Motorbike class as the default export
export default Motorbike;
