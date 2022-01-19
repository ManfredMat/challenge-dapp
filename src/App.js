import InputStore from './components/inputStore'
import { useSelector } from "react-redux";
import AllStore from './components/allStore';
import { Route, Routes } from 'react-router';
import NavBar from './components/navBar';
import './index.css';

function App() {

  let displayState = useSelector((state) => state.displayState)



  return (

    <div className='theDiv'>
      
      <NavBar/>

      <div className='divApp'>

        {!displayState && <h2 className='h2Home'>Welcome to my dapp</h2>}

        <Routes>
            
          <Route exact path='/home'  element={  displayState && <InputStore /> } />      

          <Route exact path='/store'  element={displayState && <AllStore/>} />

        </Routes>

      </div>
      

    </div>


  );
}

export default App;
