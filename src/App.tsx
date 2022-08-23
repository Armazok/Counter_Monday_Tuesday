import React from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Setting} from "./SettingCounter/Setting";

function App() {
    return (
        <div className="App">
            <Setting/>
            <Counter/>
        </div>
    );
}

export default App;
