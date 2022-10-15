export type House = {
    id: number,
    name: string,
}

export type HouseCapacity = {
    house: House,
    count: number,
    capacity: number,
}

export const houses: House[] = [
    {id: 0, name: 'Gryffindor'},
    {id: 1, name: 'Slytherin'},
    {id: 2, name: 'Ravenclaw'},
    {id: 3, name: 'Hufflepuff'},
]