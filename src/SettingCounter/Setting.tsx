import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import {MultiButton} from "../Counter/MultiButton";
import s from "./Setting.module.css"


type SettingsType = {
    maxValue: number
    minValue: number
    setMaxValue: Dispatch<SetStateAction<number>>
    setMinValue: Dispatch<SetStateAction<number>>
    saveState: <T>(key: string, state: T) => void
}

export const Setting = (props:SettingsType) => {
    const [error, setError] = useState<string>("")

    const maxOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      props.setMaxValue(+e.currentTarget.value)
    }
    const minOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(+e.currentTarget.value)}


    return (
        <div className={s.setting}>
            <div className={s.wrapper}>
                <div className={s.textSetting}>
                    <p className={s.pText}>max value:</p>
                    <input
                        value={props.maxValue}
                        onChange={maxOnChange}
                        className={s.input}
                        type="number"
                    />
                </div>
                <div className={s.textSetting}>
                    <p className={s.pText}>start value:</p>
                    <input
                        value={props.minValue}
                        onChange={minOnChange}
                        className={s.input}
                        type="number"
                    />
                </div>
            </div>
            <div className={s.buttonWrapper}>
                <MultiButton styleButton={s.setButton} name={"set"} callback={() => props.saveState("test", {maxValue: props.maxValue, minValue: props.minValue})}/>
            </div>
        </div>
    );
};
