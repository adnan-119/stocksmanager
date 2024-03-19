import './App.css';
import NavBar from './NavBar';
// import NavBarAdmin from './NavBarAdmin';

import { BrowserRouter as Browser } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Browser>
        <NavBar/>
        {/* <NavBarAdmin/> */}
      </Browser>
    </div>
  );
}

export default App;