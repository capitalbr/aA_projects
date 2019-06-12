import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/game"


document.addEventListener("DOMContentLoaded", () => {
    let root = document.getElementById("main");
    ReactDOM.render(<Game />, root);
});