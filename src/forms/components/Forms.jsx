import { useState } from "react"; 
function Forms() {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [sum, setSum] = useState(0);
    const [select, setSelect] = useState('');

    function handleSum(e) {
        e.preventDefault();
        const result = parseInt(number1) + parseInt(number2);
        setSum(result);
        
        if(result > 10) {
            setColor('red')
        } else {
            setColor('black')
        }
    }

    function handleSelect(e) {
        setSelect(e.target.value);
    }

    return (
        <div>
            <form>
                <h1>Greeter</h1>
                <p>Hello <span style={{color: color}}>{ name }</span></p>
                <input type="text" onChange={ (e) => setName(e.target.value) } />
            </form>
            <form>
                <h1>Sum Calculator</h1>
                <input type="number" value={ number1 } onChange={ (e) => setNumber1(e.target.value) } />
                <input type="number" value={ number2 } onChange={ (e) => setNumber2(e.target.value) } />
                <button onClick={ handleSum }>SUM</button>
                <span>{ sum }</span>
            </form>
            <form>
                <h1>Select Controlled Component</h1>
                <select onChange={ handleSelect }>
                    <option value=""></option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                </select>
                <span>{ select }</span>
                <div></div>
                <input type="checkbox" />true
            </form>
        </div>
    )
}

export default Forms