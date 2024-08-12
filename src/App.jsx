import Home from './Home';
import Input from './Input';
import Show from './Show';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {is,reducer} from './Reducer';
import { useReducer,createContext } from 'react';
export const MyContext=createContext();
const App=()=>{    
    const[state,dispatch]=useReducer(reducer,is);
    return(
        <BrowserRouter>
            <h1>React App</h1>
            <hr />
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/input">Input</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/show">Show</Link>            
            <hr />      


            <MyContext.Provider value={{state,dispatch}}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/input" element={<Input />} />
                    <Route path="/show" element={<Show />} />
                </Routes> 
            </MyContext.Provider>
        </BrowserRouter>
    );    
}
export default App;