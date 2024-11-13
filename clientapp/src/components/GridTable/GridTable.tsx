import { useEffect, useState } from "react";
import "./GridTable.css";
import { Box, Grid2, Typography } from "@mui/material";
import { North, South, East, West } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
import { ILocation } from "../../interfaces/ILocation";
import { parseLocation } from "../../helpers/Parser";
import config from "../../config.json";

type Props = {
    positionAndDirection: string;
};

const GridTable = ({ positionAndDirection }: Props) => {
    const [location, setLocation] = useState<ILocation | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>("");

    useEffect(() => {
        processPositionAndDirection(positionAndDirection);
    }, [positionAndDirection]);

    const processPositionAndDirection = (inputString: string) => {
        const parsedLocation = parseLocation(inputString);

        if (parsedLocation) {
            const { x, y, direction } = parsedLocation;

            if (isValidCoordinate(x, y)) {
                setErrorMessage("");
                setLocation({ x, y, direction });
            } else {
                setErrorMessage(`You can only input from range 0-${config.GRID_SIZE - 1}.`);
                setLocation(null);
            }
        } else {
            setErrorMessage("Invalid input format. Use 'x,y DIRECTION' (e.g., '1,1 NORTH')");
            setLocation(null);
        }
    };

    const isValidCoordinate = (x: number, y: number): boolean => {
        return x >= 0 && x < config.GRID_SIZE && y >= 0 && y < config.GRID_SIZE;
    };

    const renderIcon = (direction: string) => {
        switch (direction) {
            case "NORTH":
                return <North />;
            case "SOUTH":
                return <South />;
            case "EAST":
                return <East />;
            case "WEST":
                return <West />;
            default:
                return null;
        }
    };

    const renderGrid = () => {
        const grid = [];
        for (let y = config.GRID_SIZE - 1; y >= 0; y--) {
            const row = [];
            for (let x = 0; x < config.GRID_SIZE; x++) {
                row.push(
                    <Grid2
                        key={uuidv4()}
                        size={2.4}
                        sx={{
                            height: 60,
                            border: "1px solid #fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "#00008b",
                            color: "#fff",
                        }}
                    >
                        {location && location.x === x && location.y === y && renderIcon(location.direction)}
                    </Grid2>
                );
            }
            grid.push(
                <Grid2 key={uuidv4()} container>
                    {row}
                </Grid2>
            );
        }

        return grid;
    };

    return (
        <>
            <Box sx={{ bgcolor: "blue", mt: "32px", display: "inline-block", height: 300, width: 300 }}>
                {renderGrid()}
            </Box>
            <Typography
                sx={{
                    color: errorMessage ? "#DC3545" : "#000000",
                }}
            >
                {location ? `x: ${location.x}, y: ${location.y}, direction: ${location.direction}` : errorMessage}
            </Typography>
        </>
    );
};

export default GridTable;
