import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SummerSchool from "./pages/SummerSchool";
import BlogPage from "./components/BlogPage";
import InformationBlog from "./components/InformationBlog";
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./components/ScrollToTop";
import ProjectsPage from "./pages/ProjectsPage";
function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/summer-school" element={<SummerSchool />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog/:id" element={<BlogPage />} />
                <Route path="/information-blog/:id" element={<InformationBlog />} />
                <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
