import React from 'react';
import './App.css';
import Calculate from "./Calculate";
import Item from "./Item";
import Multiplier from "./Multiplier";

function App() {
  return (
    <div className="App">
      <h1 className="title">Add items to your cart, and calculate your total at the end!</h1>
      <div className="itemsList row">
        <div className="col-lg-3 col-md-6">
          <Item name="Bananas" price="4.00" imgSource="images/bananas.jpg"/>
        </div>
        <div className="col-lg-3 col-md-6">
          <Item name="Apples" price="7.00" imgSource="images/apples.jpg"/>
        </div>
        <div className="col-lg-3 col-md-6">
          <Item name="Oranges" price="6.00" imgSource="images/oranges.jpg"/>
        </div>
        <div className="col-lg-3 col-md-6">
          <Item name="Pears" price="5.00" imgSource="images/pears.jpg"/>
        </div>
        <div className="col-lg-3 col-md-6">
          <Item name="Cherries" price="3.00" imgSource="images/cherries.jpg"/>
        </div>
        <div className="col-lg-3 col-md-6">
          <Item name="Coconuts" price="8.00" imgSource="images/coconuts.jpg"/>
        </div>
        <div className="col-lg-3 col-md-6">
          <Item name="Lemons" price="3.00" imgSource="images/lemons.jpg"/>
        </div>
        <div className="col-lg-3 col-md-6">
          <Item name="Mangoes" price="9.00" imgSource="images/mangoes.jpg"/>
        </div>

      </div>
      <div className="multipliers row">
        <div className="col-lg-6">
          <Multiplier name="Tax" multiplier="1.13"/>
        </div>
        <div className="col-lg-6">
          <Multiplier name="80% Discount" multiplier="0.8"/>
        </div>
      </div>
      <Calculate />
    </div>
  );
}

export default App;
