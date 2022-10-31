import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import "../src/components/Login/Login.css";
import Homescreen from "./components/homescreen/Homescreen";
import NavBar from "./components/UI/NavBar";
import Dashboard from "./components/homescreen/Dashboard";
import Calendar from "./components/homescreen/Calendar";
import Profile from "./components/homescreen/Profile";
import Signup from "./components/Login/Signup";
import Navigator from "./components/UI/Navigator";
import Faculty from "./components/page/faculty/Faculty";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Courses from "./components/Sidebar/Courses";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="direction">
          <Navigator />
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
