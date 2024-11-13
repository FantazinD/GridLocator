import { useEffect, useState } from "react";
import "./GridTable.css";
import { Box, Grid2, Typography } from "@mui/material";
import { North, South, East, West } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";

type Props = {
    positionAndDirection: string;
};

interface ILocation {
    x: number;
    y: number;
    direction: string;
}

const GridTable = ({ positionAndDirection }: Props) => {
    const [location, setLocation] = useState<ILocation | null>(null);

    useEffect(() => {
        const match = positionAndDirection.match(/^(\d),(\d)\s(NORTH|SOUTH|EAST|WEST)$/);
        if (match) {
            const x = parseInt(match[1], 10);
            const y = parseInt(match[2], 10);
            const direction = match[3];
            if (x >= 0 && x < 5 && y >= 0 && y < 5) {
                setLocation({ x, y, direction });
            } else {
                console.log("Invalid");
            }
        } else {
            console.log("Invalid");
        }
    }, [positionAndDirection]);

    useEffect(() => {
        console.log(location);
    }, [location]);

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
        for (let y = 4; y >= 0; y--) {
            const row = [];
            for (let x = 0; x < 5; x++) {
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
            {location && (
                <Typography>{`x: ${location.x}, y: ${location.y}, direction: ${location.direction}`}</Typography>
            )}
        </>
    );
};

export default GridTable;
