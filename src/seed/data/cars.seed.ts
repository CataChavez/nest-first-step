import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuidv4 } from "uuid";

export const CARS_SEED: Car[] = [
    {
        id: uuidv4(),
        brand: 'Toyota',
        model: 'Corolla',
    },
    {
        id: uuidv4(),
        brand: 'Ford',
        model: 'Mustang',
    },
    {
        id: uuidv4(),
        brand: 'Honda',
        model: 'Civic',
    },
    {
        id: uuidv4(),
        brand: 'Nissan',
        model: 'Versa',
    },
    {
        id: uuidv4(),
        brand: 'Chevrolet',
        model: 'Camaro',
    },
    {
        id: uuidv4(),
        brand: 'BMW',
        model: 'X5',
    },
    {
        id: uuidv4(),
        brand: 'Mercedes',
        model: 'C class',
    }
]