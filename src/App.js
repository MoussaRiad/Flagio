import "./App.css";
import { DataProvider } from "./Context/DataContext";

import {ThemeContextProvider } from "./Context/ThemeContext";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from "./pages/Main";
function App() {
  // const {color, changeColor} = ThemeColorContext;

  return (
    <ThemeContextProvider>
      <DataProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            {/* <Route exact path="/country/:id" element={<Container />}></Route> */}
          </Routes>
        </Router>
      </DataProvider>
    </ThemeContextProvider>
  );
}

export default App;
