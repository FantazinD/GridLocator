import config from "../config.json";

export const isValidCoordinate = (x: number, y: number): boolean => {
    return x >= 0 && x < config.GRID_SIZE && y >= 0 && y < config.GRID_SIZE;
};
