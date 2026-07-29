import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Demo from "./pages/Demo";
import SuccessPage from "./pages/SuccessPage";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/demo"
                    element={<Demo />}
                />
                <Route
                    path="/success"
                    element={<SuccessPage />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;