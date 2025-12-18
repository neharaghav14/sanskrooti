// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ExploreCategory from "./pages/ExploreCategory";
import FactsPage from "./pages/FactsPage";
import QuizPage from "./pages/QuizPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Stories from "./pages/Stories";
import StoryDetail from "./pages/StoryDetail";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/explore" element={<ExploreCategory />} />
            <Route path="/explore/:category" element={<ExploreCategory />} />

            <Route path="/facts/:category" element={<FactsPage />} />
            <Route path="/quiz/:category" element={<QuizPage />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:id" element={<StoryDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
