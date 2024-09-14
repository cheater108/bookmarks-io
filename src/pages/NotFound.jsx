export default function NotFound() {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexGrow: "1",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "black",
                    fontSize: "1.5rem",
                    letterSpacing: "2px",
                }}
            >
                <h1 style={{ color: "#2f27ce" }}>
                    &#9888; Page not found - 404
                </h1>
            </div>
        </>
    );
}
