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

export const housesStore = writable(housesInitial);