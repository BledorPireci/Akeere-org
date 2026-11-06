import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import posthog from 'posthog-js';
import MainPage from "./pages/MainPage";
import SummerSchool from "./pages/SummerSchool";
import SummerSchool2026 from "./pages/SummerSchool2026";
import BlogPage from "./components/BlogPage";
import InformationBlog from "./components/InformationBlog";
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./components/ScrollToTop";
import ProjectsPage from "./pages/ProjectsPage";

// Create a new component to track page views
function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    posthog.capture('$pageview')
  }, [location]);

  return null;
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <PageViewTracker />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/summer-school" element={<SummerSchool />} />
                <Route path="/summer-school/2026" element={<SummerSchool2026 />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog/:id" element={<BlogPage />} />
                <Route path="/information-blog/:id" element={<InformationBlog />} />
                <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
