import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AppContextProvider from "./context/AppContextProvider";
import ErrorFallback from "./components/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";

function IsLoggedIn({ children }) {
    if (localStorage.getItem("token")) {
        return children;
    }
    return <Navigate to={"/"} />;
}

function IsNotLoggedIn({ children }) {
    if (localStorage.getItem("token")) {
        return <Navigate to={"/dashboard"} />;
    }
    return children;
}
function App() {
    return (
        <AppContextProvider>
            <Navbar />
            <ErrorBoundary FallbackComponent={<ErrorFallback />}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <IsNotLoggedIn>
                                <Home />
                            </IsNotLoggedIn>
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <IsLoggedIn>
                                <Dashboard />
                            </IsLoggedIn>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <IsNotLoggedIn>
                                <SignUp />
                            </IsNotLoggedIn>
                        }
                    />
                    <Route
                        path="/signin"
                        element={
                            <IsNotLoggedIn>
                                <SignIn />
                            </IsNotLoggedIn>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ErrorBoundary>
        </AppContextProvider>
    );
}

export default App;
