import "./App.css";

import { Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import PrivateRoutes from "./components/PrivateRoutes";
import Login from "./components/Login";
import ProtectedPage from "./components/ProtectedPage";
import { useState } from "react";
import LandingPage from "./components/LandingPage";
import Function12 from "./components/Function12";
import Responsive from "./components/Responsive";
import HookUpEvents from "./components/HookUpEvents";
import SSRSSG from "./components/SSRSSG";

function App() {
  const [token,setToken] = useState(false)
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes setauth={setToken} auth={token} />}>
          <Route
            element={<ProtectedPage setauth={setToken} auth={token} />}
            path="/protectedpage"
            exact
          />
        </Route>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
        <Route path="/function1_2" exact element={<Function12 />} />
        <Route path="/responsive" exact element={<Responsive />} />
        <Route path="/hookupevents" exact element={<HookUpEvents />} />
        <Route path="/ssrssg" exact element={<SSRSSG />} />
        <Route path="/login" exact element={<Login auth={token} setauth={setToken} />} />
      </Routes>
    </div>
  );
}

export default App;
