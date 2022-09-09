import s from "./Setting.module.css";
import React, {ChangeEvent} from "react";

type EditInputType = {
    title: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    className: string
}


export function EditInput(props: EditInputType) {


    return (
            <div className={s.textSetting}>
                <p className={s.pText}>{props.title}</p>
                <input
                    value={props.value}
                    onChange={props.onChange}
                    className={props.className}
                    type="number"
                    min={0}
                />

            </div>
    )
}