import { houses, type HouseCapacity } from "../utils/houses";
import { writable } from "svelte/store";

const maxCapacity = 50;

export const housesInitial: HouseCapacity[] = [
    {
        house: houses[0],
        count: 0,
        capacity: maxCapacity,
    },
    {
        house: houses[1],
        count: 0,
        capacity: maxCapacity,
    },
    {
        house: houses[2],
        count: 0,
        capacity: maxCapacity,
    },
    {
        house: houses[3],
        count: 0,
        capacity: maxCapacity,
    }
]

let housesArray = JSON.parse(localStorage.getItem('houses')) || housesInitial;

export const housesStore = writable(housesArray);

housesStore.subscribe((value) =>
    localStorage.setItem('houses', JSON.stringify(value))
);
