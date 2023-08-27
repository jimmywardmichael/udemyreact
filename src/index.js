import React from "react";
import ReactDom from "react-dom";
import "../src/styles/home.css"
// const name = "Jack";
// const currentDate = new Date();
// const year = currentDate.getFullYear();

ReactDom.render(
    <div>
            <h1 className="heading">My favorite foods</h1>
            <li contentEditable="true" spellCheck="false">Pizza</li>
            <li contentEditable="true" spellCheck="false">Hamburger</li>
            <li contentEditable="true" spellCheck="false">Hot Dogs</li>
    </div>,
    document.getElementById("root")
);