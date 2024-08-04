import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AppContextProvider from "./context/AppContextProvider";
function App() {
    return (
        <AppContextProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AppContextProvider>
    );
}

export default App;
