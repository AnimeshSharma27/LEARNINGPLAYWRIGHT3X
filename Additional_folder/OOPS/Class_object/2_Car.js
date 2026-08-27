class Car {
       //Atribute
       //Constructor
       constructor(assigned_name){
        this.name = assigned_name;
       }
       drive(){
        console.log("Driving the car " + this.name);
       }
       printDetailsCar(){
        console.log("Details on the car " + this.name);
       }

}

let hyudai_car = new Car("i10");
hyudai_car.drive();
hyudai_car.printDetailsCar();