import React, { useState } from 'react';
import './App.css';
import Addbox from './components/Addbox';
import Displaybox from './components/Displaybox';

    
    
function App() {
    const [currentboxColor, setCurrentColor] = useState({colors:[]});
const AddNewColor = ( newColor ) => {
        setCurrentColor({colors : [...currentboxColor.colors, newColor]} );
    }
    return (
        <>
            <Addbox AddNewColor={ AddNewColor } />
            <Displaybox currentboxColor={ currentboxColor.colors} />
        </>
    );
}
    
export default App;