import React, {useState} from 'react';
import {MultiButton} from "./MultiButton";
import s from "./CounterButton.module.css"


export const Counter = () => {
    const [counter, setCounter] = useState<number>(0)

    const counterStyle = {
        color: counter >= 5 ? "red" : ""
    }



    const disableInc = () => counter >= 5
    const disableReset = () => counter <= 0

    const IncButton = () => {
        if (counter < 5) {
            setCounter(prev => prev + 1)
        }
    }
    const ResetButton = () => {
        setCounter(0)
    }

    return (
        <div className={s.counter}>
            <div style={counterStyle} className={s.counterStyle }>{counter}</div>
            <div className={s.buttonWrapper}>
                <MultiButton styleButton={s.incButton} disable={disableInc()} name="Inc" callback={IncButton}/>
                <MultiButton styleButton={s.resetButton} disable={disableReset()} name="Reset" callback={ResetButton}/>
            </div>
        </div>
    );
};
