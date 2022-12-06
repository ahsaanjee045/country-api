// import {  } from "react";
import { createContext, useState, useEffect } from "react";
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { getCountries } from "./actions/countryActions";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import Details from "./views/Details/Details";

export const mainContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(null)
  // const mode = localStorage.setItem('darkMode' , darkMode)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <mainContext.Provider value={{ darkMode, setDarkMode, currentCountry, setCurrentCountry }}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:name" element={<Details />} />
          </Routes>
        </div>
      </Router>
    </mainContext.Provider>
  );
}

export default App;
