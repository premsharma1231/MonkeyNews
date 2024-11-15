import { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import NewsCMP from "./Components/NewsCMP";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import About from "./Components/About";





const NewsCMPWithParams = ({ mode, setprogress }) => {
  const { country, category, language } = useParams();
  return (
    <NewsCMP
      country={country || "us"}
      category={category || "general"}
      language={language || "en"}
      mode={mode}
      setprogress={setprogress}
    />
  );
};

export class App extends Component {
  
  // NewsCMPWithParams = () => {
  //   const { country, category, language } = useParams();
  //   // const isCountryFirst = country && country.length === 2;
  //   return (
  //     <NewsCMP
  //     country={country || "us"}
  //     category={category || "general"}
  //     language={language || "en"}
  //     mode = {this.state.mode}
  //     setprogress = {this.setprogress}
  //     />
  //   );
  // }
  
  setprogress = (progress) =>{
    this.setState({progress : progress});
  }

  constructor() {
    super();
    this.state = {
      category: 'general',
      country: 'us',
      language: 'en',
      mode: 'light',
      progress:0,
    };
  }
  

  updateCategory = (category) => {
    this.setState({ category });
  };

  updateCountry = (country) => {
    this.setState({ country });
  };

  updateLanguage = (language) => {
    this.setState({ language });
  };

  ModeChanging = () => {
    if(this.state.mode === 'light'){
      this.setState({mode : "dark"})
    }
    else{
      this.setState({mode : "light"})
    }
  };

  render() {
    return (
      <>
        <Router>
          <NavBar updateCategory={this.updateCategory} ModeChanging={this.ModeChanging} mode={this.state.mode} updateCountry={this.updateCountry} updateLanguage={this.updateLanguage} />
          <LoadingBar
            color={this.state.mode === 'light' ? '#3f3f3f' : '#eeeeee'}
            progress={this.state.progress}
            height={8}
          />
          <Routes>
            <Route path="/country/us" element={<NewsCMP country={this.state.country} setprogress={this.setprogress} mode={this.state.mode} category={this.state.category} />} />
            <Route path="/about" element={<About mode={this.state.mode} setprogress={this.setprogress}/>} />
            <Route path="/:country"   element={<NewsCMPWithParams mode={this.state.mode} setprogress={this.setprogress}/>} />
            <Route path="/country/:country/:category"  element={<NewsCMPWithParams mode={this.state.mode} setprogress={this.setprogress}/>} />
            <Route path="/:country/:category"   element={<NewsCMPWithParams mode={this.state.mode} setprogress={this.setprogress}/>} />
            <Route path="/:category/:country"    element={<NewsCMPWithParams mode={this.state.mode} setprogress={this.setprogress}/>} />
          </Routes>
        </Router>
      </>
    );
  };
}
export default App;