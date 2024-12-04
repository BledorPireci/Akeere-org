import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SummerSchool from "./pages/SummerSchool";
import BlogPage from "./components/BlogPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/summer-school" element={<SummerSchool />} />
                <Route path="/blog/:id" element={<BlogPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
