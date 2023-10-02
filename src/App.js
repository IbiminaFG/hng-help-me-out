import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecordReady from "./pages/RecordReady";
import Dashboard from "./pages/Dashboard";
import VideoDetail from "./pages/VideoDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ready-record/:id" element={<RecordReady />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/video-detail/:id" element={<VideoDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
