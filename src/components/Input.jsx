import React, {useState} from 'react';

const Input = () => {
    const [value, setValue] = useState('Текст');

    function changeText() {
        setValue(value+' изменен')
    };

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={changeText}>Изменить</button>
            
        </div>
    );
};

export default Input;