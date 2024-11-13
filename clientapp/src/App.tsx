import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import GridTable from "./components/GridTable/GridTable";
import { ChangeEvent, useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import config from "./config.json";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { parseLocation } from "./helpers/Parser";
import { isValidCoordinate } from "./helpers/Validator";

function App() {
    const [value, setValue] = useState("");
    const [helperText, setHelperText] = useState<string>(config.LOCATION_INPUT_INFO);
    const [isInputError, setIsInputError] = useState<boolean>(false);
    const [positionAndDirection, setPositionAndDirection] = useState<string>("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleClick = () => {
        processInput(value);
    };

    const processInput = (inputString: string) => {
        const parsedLocation = parseLocation(inputString);

        if (parsedLocation) {
            const { x, y } = parsedLocation;

            if (isValidCoordinate(x, y)) {
                setIsInputError(false);
                setHelperText(config.LOCATION_INPUT_INFO);
            } else {
                setIsInputError(true);
                setHelperText(
                    config.ERROR_MESSAGE_INPUT_COORDINATES.replace("%GRID_SIZE%", (config.GRID_SIZE - 1).toString())
                );
            }
        } else {
            setIsInputError(true);
            setHelperText(config.ERROR_MESSAGE_INPUT_INVALID);
        }

        setPositionAndDirection(value);
    };

    return (
        <div className="App" style={{ backgroundColor: "#F5F5F5" }}>
            <Container maxWidth="sm">
                <Box
                    sx={{
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Container sx={{ width: "75%", marginBottom: "2rem" }}>
                        <TextField
                            error={isInputError}
                            value={value}
                            sx={{ marginTop: "4rem", width: "80%" }}
                            id="outlined-helperText"
                            label={isInputError ? "Error" : "Location"}
                            helperText={helperText}
                            onChange={handleInputChange}
                        />
                        <Button
                            variant="contained"
                            endIcon={<GpsFixedIcon />}
                            sx={{ marginTop: "10px" }}
                            onClick={handleClick}
                        >
                            GO
                        </Button>
                    </Container>
                    <GridTable positionAndDirection={positionAndDirection} />
                </Box>
            </Container>
        </div>
    );
}

export default App;
