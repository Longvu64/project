import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import CountryInfo from "./components/CountryInfo/CountryInfo";

function App() {
  document.title = "Search for countries"
  const [isLight, setIsLight] = useState(false)
  const handleLight = (() => {
    setIsLight(!isLight)
  })

  if(!isLight) {
    document.body.style.backgroundColor = 'hsl(207, 26%, 17%)'
  }else{
    document.body.style.backgroundColor = 'hsl(0, 0%, 85%)'

  }
  return (
    <div className="App">
      {/* <Header/>
      <Content/> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <Header onClick={handleLight} isLight={isLight}/>
                <Content isLight={isLight} />
              </Fragment>
            }
          />
          <Route path="/info" element={<CountryInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
