import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { NumofpeopleProvider } from './NumofpeopleContext';
import Home from './pages/Home'
import Pages from './pages/Pages';
function App() {
  
  return (
    
    <div className="App">
      <Router> 
       <Pages  />
      </Router>
    </div>
  );
}

export default App;
