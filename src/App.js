import React from 'react';
import ReactDOM from 'react-dom';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import Prerequisites from './routes/Prerequisites';
import Concepts from './routes/Concepts';
import References from './routes/References';


function App() {
    return(
        <>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/prerequisites' element={<Prerequisites />} />
            <Route path='/concepts' element={<Concepts />} />
            <Route path='/references' element={<References />} />
         </Routes>
        </>
    );
}

export default App;