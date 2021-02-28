import React, {useState} from 'react';
import './App.css';

const App = () => (
    <div className="App">
        <AppWrapper/>

    </div>
);

function Button(buttonProps: IButtonProps) {
    const handleClick = () => buttonProps.onClickFunction(buttonProps.incrementValue);
    return (<button onClick={handleClick}>+{buttonProps.incrementValue}</button>);
}

interface IDisplayProps {
    message: number;
}

interface IButtonProps {
    onClickFunction: any;
    incrementValue: number;
}

function Display(displayProps: IDisplayProps) {
    return (<div>{displayProps.message}</div>);
}

function AppWrapper() {
    const [counter, setCounter] = useState(0);
    let incrementCounter = (increment: number) => setCounter((counter + increment));
    return (
        <>
            <Button onClickFunction={incrementCounter} incrementValue={1}/>
            <Button onClickFunction={incrementCounter} incrementValue={5}/>
            <Button onClickFunction={incrementCounter} incrementValue={10}/>
            <Button onClickFunction={incrementCounter} incrementValue={50}/>
            <Button onClickFunction={incrementCounter} incrementValue={100}/>
            <Display message={counter}/>
        </>
    );
};
export default App;
