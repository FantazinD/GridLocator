import React from "react";
import logo from "./logo.svg";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import GridTable from "./components/GridTable/GridTable";

function App() {
    return (
        <div className="App">
            <GridTable positionAndDirection="1,2 SOUTH" />
        </div>
    );
}

export default App;
