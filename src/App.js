import { Card } from './components/Card';
import './input.css' ; 
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom' ; 
import { Settings } from './components/Settings';

function App() {
  return (
    <div className="App h-fit w-full flex items-center justify-center flex-col gap-3"> 
     <Router >
       <Routes>
         <Route path='/' element={<Card/>}></Route>
         <Route path='/settings' element={<Settings />} ></Route>
       </Routes>
     </Router>
     
    </div>
  );
}

export default App;
