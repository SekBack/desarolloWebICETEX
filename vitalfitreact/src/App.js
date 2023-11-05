import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Routes/home";
import Index from "./Routes/index";
import Logup from "./Routes/Logup";
import Login from "./Routes/login";
import Admin from "./Routes/admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" Component={Home}></Route>
        <Route path="" Component={Index}></Route>
        <Route path="logup" Component={Logup}></Route>
        <Route path="login" Component={Login}></Route>
        <Route path="admin" Component={Admin}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
