import React, {Dispatch, SetStateAction} from 'react';
import {MultiButton} from "./MultiButton";
import s from "./CounterButton.module.css"


type CounterType = {
    counter: number
    setCounter: Dispatch<SetStateAction<number>>
    maxValue: number
    minValue: number
    error: string
}


export const Counter = (props: CounterType) => {

    const counterStyle = {
       color: props.minValue >= props.maxValue ? 'red' : "",
       // fontSize: props.counter >= props.maxValue ? '15px' : ""
    }

    const disableInc = props.counter >= props.maxValue
    const disableReset = props.counter <= props.minValue

    const IncButton = () => {
        props.setCounter(+props.counter + 1)
    }
    const ResetButton = () => {
        props.setCounter(props.minValue)
    }

    return (
        <div className={s.counter}>
           <div style={counterStyle} className={s.counterStyle}>{props.error || props.counter }</div>
            <div className={s.buttonWrapper}>
                <MultiButton
                    styleButton={disableInc ? s.incButtonDesabled : s.incButton}
                    disable={disableInc}
                    name="Inc"
                    callback={IncButton}
                />
                <MultiButton
                    styleButton={disableReset ? s.resetButtonDesabled : s.resetButton}
                    disable={disableReset}
                    name="Reset"
                    callback={ResetButton}
                />
            </div>
        </div>
    );
};
