import type { HouseCapacity } from "src/utils/houses";

export function randomizeHouses(houses: HouseCapacity[]) {
    // const capacities = [2, 2, 2, 2];
    // const taken = [0, 0, 0, 0];
    const capacities = houses.map(h => h.capacity);
    const taken = houses.map(h => h.count);
    return randomize(taken, capacities);
}

export function randomize(taken: number[], capacities: number[]): number {
    const free = capacities.map((cap, i) => Math.max(cap - taken[i], 0));
    const freeIntervals = free.reduce((acc, x) => {
        const previous = (acc[acc.length - 1] ?? { bottom: 0, top: 0 });
        acc.push(
            {
                bottom: previous.top,
                top: previous.top + x,
            }
        );
        return acc;
    }, [] as Bracket[]);
    const totalFree = free.reduce((acc, x) => acc + x, 0);
    let result;
    if (totalFree == 0) {
        result = randomRange(0, taken.length);
    } else {
        const rnd = randomRange(0, totalFree);
        result = freeIntervals.findIndex(interval => rnd >= interval.bottom && rnd < interval.top);
    }
    return result;
}

function randomRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}

type Bracket = {
    bottom: number,
    top: number,
}