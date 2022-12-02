import {Login} from "./pages/login"
import {SignUp} from "./pages/signup";
import {Navbar} from "./pages/navbar";
import {AllRoutes} from "./routes/allRoutes";
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes/>
    </div>
  );
}

export default App;
