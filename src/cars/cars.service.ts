import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid'
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        // {
        //     id: uuidv4(),
        //     brand: 'Toyota',
        //     model: 'Corolla'
        // },

    ]

    public findAll() { 
        return this.cars;
    }

    public findOneByID(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) {
            throw new NotFoundException(`Car with ID ${id} not found`);
        }
        return car;
    }

    create(createCarDto: CreateCarDto){
        const car: Car = {
            id: uuidv4(),
            ...createCarDto
        }
        this.cars.push(car);
        return car
    }

    update(id: string, updateCarDto: UpdateCarDto) { 
        let carDB = this.findOneByID(id);
        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id
                }
                return carDB;
            }
            return car;
        })
        return carDB;
    }

    delete(id: string) { 
        const car = this.findOneByID(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }

    fillCarsWithSeedData(cars: Car[]) {
        return this.cars = cars;

    }
    
}
