import React, { useState } from 'react';
import RomanNumerals from './helper/RomanNumerals';
import './App.scss';

function App() {
    const [inputToRoman, setToRoman] = useState<string | number>('');
    const [inputFromRoman, setFromRoman] = useState<string | number>('');

    const roman = new RomanNumerals();

    const handleInputToRoman = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 4) return;
        setToRoman(e.target.value);
        setFromRoman(roman.toRoman(e.target.value));
    };

    const handleInputfromRoman = (e: { target: { value: string } }) => {
        setFromRoman(e.target.value);
        setToRoman(roman.fromRoman(e.target.value));
    };

    return (
        <div className="App">
            <h2>Roman numeral Convertor</h2>
            <input
                type="text"
                value={inputToRoman}
                onChange={(e) => handleInputToRoman(e)}
                placeholder="Example 1000"
            />
            <input
                type="text"
                value={inputFromRoman}
                onChange={(e) => handleInputfromRoman(e)}
                placeholder="Example MCMXC"
            />
        </div>
    );
}

export default App;
