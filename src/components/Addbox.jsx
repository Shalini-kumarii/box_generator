import react, { useState } from 'react';


const Addbox = (props) => {
    const [boxcolor, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        
        props.AddNewColor(boxcolor);
    };

    const Addcolor= (e) =>{
        setColor(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Box Color</h1>
            <div className='justify-content-around'>
                <label>Color: </label> 
                <input type="text" onChange={ Addcolor } value={boxcolor}/>
            

            <input type="submit" value="Add color" />
            </div>
        </form>
    );
};


export default Addbox;