
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Feature from "./Feature";
import Startingpage from "./Startingpage";

function App(){
  
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Startingpage />}/>
          {/* <Route path="/on" element={<Onpage />}/> */}
          <Route path="/:id" element={<Feature />} />
        </Routes>
      </div>
    </Router> 
  );
}


export default App;

