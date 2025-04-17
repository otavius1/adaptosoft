import "./App.css";
import RoutesApp from "./routesApp";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
