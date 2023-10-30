import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyPost from "./pages/MyPost";
import Addpost from "./pages/Addpost";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<HomePage />} path="/" />
          <Route element={<MyPost />} path="/MyPost" />
          <Route element={<Addpost />} path="/Post" />
          <Route element={<LoginPage />} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
