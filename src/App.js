import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
     <Home/>
     {/* <BrowserRouter>
      <Routes>
        <Route path="/list" element={<List/>}/>
      </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
