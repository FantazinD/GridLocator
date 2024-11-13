import { ILocation } from "../interfaces/ILocation";

export const parseLocation = (inputString: string): ILocation | null => {
    const match = inputString.match(/^(\d),(\d)\s(NORTH|SOUTH|EAST|WEST)$/);

    if (!match) return null;

    return {
        x: Number(match[1]),
        y: Number(match[2]),
        direction: match[3],
    };
};
