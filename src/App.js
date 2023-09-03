
import { useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';

function App() {
	const [alert, setAlert] = useState(false);

  const handleOpenAlert = (id) => {
		setAlert(true);
	};
  return (
    <div className={` ${alert ? 'body' : ''}`}>
     <Home handleOpenAlert={handleOpenAlert} alert={alert} setAlert={setAlert}/>
    </div>
  );
}

export default App;
