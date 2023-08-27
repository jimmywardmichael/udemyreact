import React from "react";
import ReactDom from "react-dom";

const name = "Jack";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDom.render(
    <div>
        <p>Created by {name}</p>
        <p>Copyright {year}</p>
    </div>,
    document.getElementById("root")
);