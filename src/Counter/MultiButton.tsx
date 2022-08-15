import React from 'react';

type MultiButtonType = {
    name: string
    callback: () => void
    disable?: boolean
    styleButton?: string
}

   /* ? styleButton : ""*/

export const MultiButton:React.FC<MultiButtonType> = ({name, callback, disable, styleButton}) => {
    const callBackFunction = () => callback()
    return (
        <div>
            <button className={styleButton} disabled={disable} onClick={callBackFunction}>{name}</button>
        </div>
    );
};
