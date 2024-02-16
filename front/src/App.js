import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import PrisonRegister from './pages/PrisonRegister';
import Query2 from './pages/QueryResult2';
import Query1 from './pages/QueryResult1';
import Query3 from './pages/QueryResult3';
import Query4 from './pages/QueryResult4';
import Query5 from './pages/QueryResult5';
function App() {
  return (
    
    <>
      <BrowserRouter>
      <Routes>
          <Route path ='/' element = {<HomePage/>}/>
          <Route path ='/login' element = {<Login/>}/>
          <Route path ='/register' element = {<Register/>}/>
          <Route path ='/prisonregister' element = {<PrisonRegister/>}/>
          <Route path ='/queryresult2' element = {<Query2/>}/>
          <Route path='/queryresult1' element= {<Query1/>}/>
          <Route path ='/queryresult3' element = {<Query3/>}/>
          <Route path='/queryresult4' element= {<Query4/>}/>
          <Route path ='/queryresult5' element = {<Query5/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
