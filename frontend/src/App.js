import React from 'react';
import './App.css';
import Calculate from "./Calculate";
import Item from "./Item";

function App() {
  return (
    <div className="App">
        <Item name="Bananas" price="4.00"/>
        <Item name="Apples" price="7.00"/>
        <Item name="Oranges" price="6.00"/>
        <Item name="Pears" price="5.00"/>
        <Calculate />
    </div>
  );
}

export default App;
