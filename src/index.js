import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
    SignUpModal
} from "./components/Modal";
import { GlobalStyle , darkTheme, defaultTheme } from "./utils";
import { ThemeProvider } from "styled-components";

const App = () => {
    const [useDarkTheme, setUseDarkTheme] = useState(false);
    const [showModal, setShowModal] = useState(false);
    return(
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
            <button
            style={{
            margin: "0 16px 24px",
            padding: "8px",
            background: "none",
            cursor: "pointer",
            border: "2px solid #000",
            marginTop: "60px"
            }}
            onClick={() => setUseDarkTheme(true)}
        >
            Dark theme
        </button>
        <button
            style={{
            margin: "0 16px 24px",
            padding: "8px",
            background: "none",
            cursor: "pointer",
            border: "2px solid #000",
            marginTop: "60px"
            }}
            onClick={() => setUseDarkTheme(false)}
        >
            Default theme
        </button>
        <button
            style={{
            margin: "0 16px 24px",
            padding: "8px",
            background: "none",
            cursor: "pointer",
            border: "2px solid #000",
            marginTop: "60px"
            }}
            onClick={() => setShowModal(!showModal)}
        >
           Toggle Modal
        </button>
        <br /><br />
        <div
        style={{
            background: useDarkTheme
                ? defaultTheme.primaryColor
                : darkTheme.primaryColor,
            padding: "20px",
            display: "flex",
            "justify-content": "center"
        }}
        >
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />
        </div>
        <GlobalStyle />
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));