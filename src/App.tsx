import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Setting} from "./SettingCounter/Setting";

function App() {
    const [maxValue, setMaxValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)

    useEffect(() => {
        if (localStorage.getItem('test')) {
            setMaxValue(JSON.parse(localStorage.getItem('test')!).maxValue)
            setMinValue(JSON.parse(localStorage.getItem('test')!).minValue)
        }
    },[])



    const state = restoreState('test', {maxValue: 0, minValue: 0})
    const [currentValue, setCurrentValue] = useState<number>(state.minValue)


    // вот вам функция для сохранения объектов в память браузера
    // (данные в этом хранилище сохраняться даже при перезагрузке компа):
    function saveState<T>(key: string, state: T) {
        const stateAsString = JSON.stringify(state)
        localStorage.setItem(key, stateAsString)
        setCurrentValue(minValue)
    }


    // и вот вам функция для получения сохранённого объекта в памяти браузера:
    function restoreState<T>(key: string, defaultState: T) {
        let state = defaultState
        const stateAsString = localStorage.getItem(key)
        if (stateAsString !== null) state = JSON.parse(stateAsString) as T
        return state
    }



    return (
        <div className="App">
            <Setting
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                minValue={minValue}
                setMinValue={setMinValue}
                saveState={saveState}
            />
            <Counter
                counter={currentValue}
                setCounter={setCurrentValue}
                state={state}
            />
        </div>
    );
}

export default App;
