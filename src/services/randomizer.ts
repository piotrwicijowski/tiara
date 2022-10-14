export function randomize(): number {
    const capacities = [50, 50, 50, 50];
    const taken = [0, 0, 0, 0];
    const free = capacities.map((cap, i) => cap - taken[i]);
    const freeIntervals = free.reduce((acc, x) => {
        const previous = (acc[acc.length - 1] ?? {bottom: 0, top: 0});
        acc.push(
            {
                bottom: previous.top,
                top: previous.top + x,
            }
            );
        return acc;
    }, [] as Bracket[]);
    const totalFree = free.reduce((acc, x) => acc + x, 0);
    const rnd = randomRange(0, totalFree);
    const result = freeIntervals.findIndex(interval => rnd >= interval.bottom && rnd < interval.top);
    return result;
}

function randomRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + 1 + min;
}

type Bracket = {
    bottom: number,
    top: number,
}