import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"; //import the New Header component

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); //State for theme mode

  function onDarkModeClick() {
    //Toggle dark mode between true/false
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    //set class based on iSDarkMode Sate
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      {/* use the header component and pass down props */}
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      {/* pass item data to shopping list */}
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
