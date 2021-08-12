import Topbar from './components/topbar/Topbar';
import SideBar from "./components/sideBar/SideBar";
import './app.css'
import Home from "./pages/home/Home";

function App() {
  return (
    <div >
      <Topbar />
      <div className="container">
        <SideBar />
         <Home />
      </div>


    </div>
  );
}

export default App;
