import "./App.css";
import Container from "./components/Container/Container";
import { DataProvider } from "./Context/DataContext";

import {ThemeContextProvider } from "./Context/ThemeContext";
function App() {
  // const {color, changeColor} = ThemeColorContext;

  return (
    <ThemeContextProvider>
      <DataProvider>
        <Container />
      </DataProvider>
    </ThemeContextProvider>
  );
}

export default App;
