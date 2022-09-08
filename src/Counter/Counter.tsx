import React, {Dispatch, SetStateAction} from 'react';
import {MultiButton} from "./MultiButton";
import s from "./CounterButton.module.css"


type CounterType = {
    counter: number | boolean
    setCounter: Dispatch<SetStateAction<number>>
    state: { maxValue: number; minValue: number; }
}


export const Counter = (props: CounterType) => {


    const counterStyle = {
        color: props.counter >= props.state.maxValue ? "red" : ""
    }

    const disableInc = () => props.counter >= props.state.maxValue
    const disableReset = () => props.counter <= props.state.minValue

    const IncButton = () => {
        if (props.counter < props.state.maxValue) {
            props.setCounter(prev => prev + 1)
        }
    }
    const ResetButton = () => {
        props.setCounter(props.state.minValue)
    }

    return (
        <div className={s.counter}>
            <div style={counterStyle} className={s.counterStyle }>{props.counter}</div>
            <div className={s.buttonWrapper}>
                <MultiButton styleButton={s.incButton} disable={disableInc()} name="Inc" callback={IncButton}/>
                <MultiButton styleButton={s.resetButton} disable={disableReset()} name="Reset" callback={ResetButton}/>
            </div>
        </div>
    );
};
