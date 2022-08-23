import React from 'react';
import {MultiButton} from "../Counter/MultiButton";
import s from "./Setting.module.css"

export const Setting = () => {
    return (
        <div className={s.setting}>
            <div className={s.wrapper}>
                <div className={s.textSetting}>
                    <p className={s.pText}>max value:</p>
                    <input
                        className={s.input}
                        type="number"
                    />
                </div>
                <div className={s.textSetting}>
                    <p className={s.pText}>start value:</p>
                    <input
                        className={s.input}
                        type="number"
                    />
                </div>
            </div>
            <div className={s.buttonWrapper}>
                <MultiButton styleButton={s.setButton} name={"set"} callback={() => {}}/>
            </div>
        </div>
    );
};
