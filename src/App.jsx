import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route
            path="*"
            element={
              <section>
                <h1 className="page-title">Page not found</h1>
                <p className="intro">
                  That address does not exist. <Link to="/">Go to the home page</Link>
                </p>
              </section>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
