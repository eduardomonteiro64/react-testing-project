import React, { useState } from "react";

const App = () => {
    const [heading, setHeading] = useState("CodeSweetly Test");

    const handleClick = () => {
        setHeading("A CodeSweetly Project");
    };

    return (
        <>
            <h1>{heading}</h1>
            <button type="button" onClick={handleClick}>
                Update Heading
            </button>
        </>
    );
};

export default App;