import React from "react";
import { Navbar } from "../components/Navbar";

export default function NotFound() {
    return (
        <>
            <Navbar />
            <div
                style={{
                    display: "flex",
                    flexGrow: "1",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgb(87, 85, 85) ",
                    color: "white",
                    fontSize: "1.5rem",
                    letterSpacing: "2px",
                }}
            >
                <h1>Page not found - 404</h1>
            </div>
        </>
    );
}
