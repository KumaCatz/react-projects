import { textColor } from '../App';
import { useContext } from 'react';

import '../App.css'

function HomePage() {
    const { color, setColor } = useContext(textColor)
    function randomizeColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        console.log(color)
    }

    return (
        <>
        <input type='button' value='random color!' onClick={ randomizeColor } />
        <div>
            a miscelania of different react projects
        </div>
        </>
    )
}

export default HomePage