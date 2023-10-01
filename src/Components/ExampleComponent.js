import React, { useState, useEffect } from 'react';

function ExampleComponent() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log({count});

        if (count > 10) {
            document.getElementById('back').classList.add('visible')
        }
        else {
            document.getElementById('back').classList.remove('visible')
        }
    }, [count]);

    return (
        <div>
            <p id='count-line'> Your Current Count is : {count}</p>
            <p id="red" >Error : Cannot Go Below 0</p>
            <button id='inc' onClick={() => {
                setCount(count + 1)
                document.getElementById('red').classList.remove('vis')
            }}>Increament</button>
            <button id='dic' onClick={() => {
                if (count <= 0) {
                    document.getElementById('red').classList.add('vis')
                }
                else { setCount(count - 1) }
            }}>Decreament</button>
            <button id="back" onClick={() => {
                setCount(0)
            }}>
                Go Back To 0 </button>
        </div>
    );
}
export default ExampleComponent;
