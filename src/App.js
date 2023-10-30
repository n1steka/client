import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyPost from "./pages/MyPost";
import Addpost from "./pages/Addpost";
function App() {
  return (
    <div> 
      <Router>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<HomePage />} path="/" />
          <Route element={<MyPost />} path="/MyPost" />
          <Route element={<Addpost />} path="/Post" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
