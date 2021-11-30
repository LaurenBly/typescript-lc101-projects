import {Payload} from './Payload';
import {Cargo} from './Cargo';
import {Astronaut} from './Astronaut';
export class Rocket{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name:string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
       
       }

    sumMass( items: Payload[] ): number  {
        let totalMass: number = 0;  
            for (let item of items) {
                totalMass += item.massKg;  

        }
        return totalMass;
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg()+ item.massKg <= this.totalCapacityKg) {
            return true
        } else {
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd((cargo: Cargo): boolean)) {
           cargoItems[].push(this.cargo);
           return true;
        } else {
            return false;
        }

    }

}

        // If true, adds cargo to this.cargoItems and returns true.
        // If false, returns false.


        // addAstronaut(astronaut: Astronaut): boolean
        // Uses this.canAdd() to see if another astronaut can be added.
        // If true, adds astronaut to this.astronauts and returns true.
        // If false, returns false